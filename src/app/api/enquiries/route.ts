import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { createLead } from '@/lib/db';

const enquirySchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  phone: z.string().min(8, 'Phone number must be valid'),
  email: z.string().email().optional().or(z.literal('')),
  service: z.string().min(1, 'Service is required'),
  location: z.string().min(1, 'Location is required'),
  area: z.string().min(1, 'Area is required'),
  requirement: z.string().min(3, 'Requirement description is required'),
  preferredContact: z.enum(['Call', 'WhatsApp', 'Email']).optional(),
  fileName: z.string().nullable().optional(),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const validated = enquirySchema.parse(body);

    const lead = await createLead({
      name: validated.name,
      phone: validated.phone,
      email: validated.email || undefined,
      service: validated.service,
      location: validated.location,
      area: validated.area,
      requirement: validated.requirement,
      source: 'Website 3-Step Funnel',
      preferredContact: validated.preferredContact || 'Call',
      attachments: validated.fileName ? [validated.fileName] : [],
    });

    return NextResponse.json({ success: true, leadId: lead.id });
  } catch (err: unknown) {
    if (err instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, error: err.errors[0]?.message || 'Validation error' },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { success: false, error: 'Internal server error processing enquiry' },
      { status: 500 }
    );
  }
}
