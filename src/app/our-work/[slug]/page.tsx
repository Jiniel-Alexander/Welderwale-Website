import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  MapPin,
  Calendar,
  Layers,
  User,
  CheckCircle2,
  ArrowRight,
  ChevronRight,
  Phone,
  MessageCircle,
  Wrench
} from 'lucide-react';
import { getProjects, getProjectBySlug, getCompanySettings, getServiceBySlug } from '@/lib/db';
import { BeforeAfterSlider } from '@/components/public/BeforeAfterSlider';

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const projects = await getProjects();
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);
  if (!project) return { title: 'Project Not Found' };

  return {
    title: project.seoTitle || `${project.title} | Welderwale Portfolio`,
    description: project.seoDescription || project.description,
    alternates: {
      canonical: `/our-work/${project.slug}`,
    },
    openGraph: {
      title: project.title,
      description: project.description,
      images: [{ url: project.featuredImage }],
    },
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);
  if (!project) notFound();

  const company = await getCompanySettings();
  const relatedService = await getServiceBySlug(project.serviceSlug);

  return (
    <div className="bg-slate-950 text-white min-h-screen">
      {/* Breadcrumbs */}
      <div className="bg-slate-900 border-b border-slate-800 py-3 text-xs text-slate-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center space-x-2">
          <Link href="/" className="hover:text-brand-400">Home</Link>
          <ChevronRight className="w-3 h-3 text-slate-600" />
          <Link href="/our-work" className="hover:text-brand-400">Our Work</Link>
          <ChevronRight className="w-3 h-3 text-slate-600" />
          <span className="text-brand-400 font-semibold truncate">{project.title}</span>
        </div>
      </div>

      {/* Project Header */}
      <section className="bg-slate-900 border-b border-slate-800 py-10 md:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl space-y-4">
            <div className="flex flex-wrap items-center gap-2 text-xs font-semibold">
              <span className="px-3 py-1 rounded-full bg-brand-500/20 text-brand-400 border border-brand-500/30 uppercase">
                {project.category}
              </span>
              <span className="flex items-center space-x-1 text-slate-400">
                <MapPin className="w-3.5 h-3.5 text-brand-500" />
                <span>{project.location}</span>
              </span>
              {project.completionDate && (
                <span className="flex items-center space-x-1 text-slate-400">
                  <Calendar className="w-3.5 h-3.5 text-brand-500" />
                  <span>{project.completionDate}</span>
                </span>
              )}
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-tight">
              {project.title}
            </h1>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              {project.description}
            </p>
          </div>
        </div>
      </section>

      {/* Project Body */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Main Visuals & Scope */}
          <div className="lg:col-span-8 space-y-10">
            
            {/* Interactive Before / After or Main Visual */}
            <div>
              {project.beforeImage && project.afterImage ? (
                <div className="space-y-2">
                  <BeforeAfterSlider
                    beforeImage={project.beforeImage}
                    afterImage={project.afterImage}
                    title={project.title}
                  />
                  <div className="text-center text-xs text-slate-500 italic">
                    Drag the slider to compare before vs completed installation
                  </div>
                </div>
              ) : (
                <div className="relative aspect-[16/10] rounded-card overflow-hidden border border-slate-800 shadow-2xl bg-slate-900">
                  <Image
                    src={project.featuredImage}
                    alt={project.title}
                    fill
                    priority
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 800px"
                  />
                </div>
              )}
            </div>

            {/* Scope of Work */}
            <section className="space-y-4">
              <h2 className="text-2xl font-black text-white tracking-tight border-b border-slate-800 pb-3">
                Project Scope & Execution
              </h2>
              <div className="space-y-2.5">
                {project.scope.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-btn bg-slate-900 border border-slate-800 flex items-start space-x-3"
                  >
                    <CheckCircle2 className="w-4 h-4 text-brand-500 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-slate-200">{item}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Project Gallery if available */}
            {project.gallery && project.gallery.length > 1 && (
              <section className="space-y-4">
                <h2 className="text-2xl font-black text-white tracking-tight border-b border-slate-800 pb-3">
                  Project Gallery
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {project.gallery.map((img, idx) => (
                    <div
                      key={idx}
                      className="relative aspect-[4/3] rounded-card overflow-hidden border border-slate-800 bg-slate-900"
                    >
                      <Image
                        src={img}
                        alt={`${project.title} gallery photo ${idx + 1}`}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  ))}
                </div>
              </section>
            )}

          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Project Metadata Card */}
            <div className="bg-slate-900 border border-slate-800 rounded-card p-6 space-y-4">
              <h3 className="text-base font-black text-white border-b border-slate-800 pb-2">
                Project Information
              </h3>
              
              <div className="space-y-3 text-xs">
                {project.client && (
                  <div>
                    <span className="text-slate-500 block">Client:</span>
                    <span className="text-white font-bold">{project.client}</span>
                  </div>
                )}
                <div>
                  <span className="text-slate-500 block">Location:</span>
                  <span className="text-white font-bold">{project.location}</span>
                </div>
                <div>
                  <span className="text-slate-500 block">Category:</span>
                  <span className="text-white font-bold">{project.category}</span>
                </div>
                {project.completionDate && (
                  <div>
                    <span className="text-slate-500 block">Completion Date:</span>
                    <span className="text-white font-bold">{project.completionDate}</span>
                  </div>
                )}
              </div>

              {relatedService && (
                <div className="pt-3 border-t border-slate-800">
                  <span className="text-slate-500 text-xs block mb-1">Related Service:</span>
                  <Link
                    href={`/services/${relatedService.slug}`}
                    className="inline-flex items-center space-x-1.5 text-xs font-bold text-brand-400 hover:text-brand-300"
                  >
                    <span>{relatedService.name}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              )}
            </div>

            {/* Direct CTA */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-950 border border-brand-500/30 rounded-card p-6 space-y-4">
              <h3 className="text-base font-black text-white">
                Planning a Similar Project?
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Contact our engineering team to get preliminary structural advice, design options, and itemized quotations.
              </p>
              <div className="space-y-2.5 pt-2">
                <a
                  href={`tel:${company.phone}`}
                  className="w-full py-3 px-4 rounded-btn bg-brand-500 text-slate-950 font-bold text-xs flex items-center justify-center space-x-2 shadow-md hover:brightness-110"
                >
                  <Phone className="w-4 h-4 fill-current" />
                  <span>Call {company.phoneDisplay}</span>
                </a>
                <a
                  href={`https://wa.me/${company.whatsapp}?text=${encodeURIComponent(
                    `Hi Welderwale, I saw your ${project.title} case study and want a quotation for a similar project.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-btn bg-emerald-600 text-white font-semibold text-xs flex items-center justify-center space-x-2 hover:bg-emerald-500"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp Enquiry</span>
                </a>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
