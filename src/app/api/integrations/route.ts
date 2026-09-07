import { NextResponse } from 'next/server';
import { getIntegrations, saveIntegrations } from '@/lib/db';

export async function GET() {
  try {
    const integrations = await getIntegrations();
    return NextResponse.json({ success: true, integrations });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Failed to fetch integrations' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const updated = await saveIntegrations(body);
    return NextResponse.json({ success: true, integrations: updated });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Failed to save integrations' }, { status: 500 });
  }
}
