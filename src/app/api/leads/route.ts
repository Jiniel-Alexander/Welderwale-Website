import { NextResponse } from 'next/server';
import { updateLeadStatus } from '@/lib/db';
import { z } from 'zod';

const UpdateSchema = z.object({
  id: z.string(),
  status: z.enum(['New', 'Contacted', 'Site Visit', 'Quotation', 'Won', 'Lost', 'Closed']),
  note: z.string().optional(),
});

export async function PATCH(request: Request) {
  try {
    const body = await request.json();
    const validated = UpdateSchema.parse(body);

    const success = await updateLeadStatus(validated.id, validated.status, validated.note);
    if (!success) {
      return NextResponse.json({ success: false, error: 'Lead not found' }, { status: 404 });
    }

    return NextResponse.json({ success: true });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 400 });
  }
}
