import { NextRequest, NextResponse } from 'next/server';
import { getLeads, updateLeadStatus } from '@/lib/db';
import { LeadStatus } from '@/types';

export async function GET() {
  try {
    const leads = await getLeads();
    return NextResponse.json({ success: true, leads });
  } catch {
    return NextResponse.json({ success: false, error: 'Failed to fetch leads' }, { status: 500 });
  }
}

export async function PATCH(req: NextRequest) {
  try {
    const { id, status, notes } = (await req.json()) as {
      id: string;
      status: LeadStatus;
      notes?: string;
    };
    const updated = await updateLeadStatus(id, status, notes);
    if (!updated) {
      return NextResponse.json({ success: false, error: 'Lead not found' }, { status: 404 });
    }
    return NextResponse.json({ success: true, lead: updated });
  } catch {
    return NextResponse.json({ success: false, error: 'Failed to update lead' }, { status: 500 });
  }
}
