import { NextRequest, NextResponse } from 'next/server';
import { saveThemeSettings } from '@/lib/db';
import { ThemeSettings } from '@/types';

export async function POST(req: NextRequest) {
  try {
    const theme = (await req.json()) as ThemeSettings;
    const updated = await saveThemeSettings(theme);
    return NextResponse.json({ success: true, theme: updated });
  } catch {
    return NextResponse.json({ success: false, error: 'Failed to save theme' }, { status: 500 });
  }
}
