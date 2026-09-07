import { NextResponse } from 'next/server';
import { getLeads, createLead } from '@/lib/db';
import { processLeadNotifications } from '@/lib/notifications';
import { z } from 'zod';

const EnquirySchema = z.object({
  service: z.string().min(1, 'Service is required'),
  location: z.string().min(1, 'Location is required'),
  area: z.string().optional().default(''),
  requirement: z.string().min(3, 'Requirement details must be at least 3 characters'),
  attachmentName: z.string().optional(),
  fullName: z.string().min(2, 'Full name is required'),
  phone: z.string().min(8, 'Valid phone number is required'),
  email: z.string().email().optional().or(z.literal('')),
});

export async function GET() {
  try {
    const leads = await getLeads();
    return NextResponse.json({ success: true, leads });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validated = EnquirySchema.parse(body);

    // 1. Save Lead to Database Layer
    const savedLead = await createLead({
      service: validated.service,
      location: validated.location,
      area: validated.area || '',
      requirement: validated.requirement,
      attachmentName: validated.attachmentName,
      fullName: validated.fullName,
      phone: validated.phone,
      email: validated.email || '',
    });

    // 2. Trigger Email & WhatsApp Notification Engine
    const notification = processLeadNotifications(savedLead);

    return NextResponse.json(
      {
        success: true,
        lead: savedLead,
        notification: {
          emailSent: notification.emailDispatched,
          recipient: notification.emailRecipient,
          whatsappUrl: notification.whatsappUrl,
          whatsappMessage: notification.whatsappMessage,
        },
      },
      { status: 201 }
    );
  } catch (error: any) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ success: false, errors: error.issues }, { status: 400 });
    }
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
