import { NextResponse } from 'next/server';
import { getTheme, saveTheme } from '@/lib/db';

export async function GET() {
  try {
    const theme = await getTheme();
    return NextResponse.json({ success: true, theme });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Failed to fetch theme' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const theme = await saveTheme(body);
    return NextResponse.json({ success: true, theme });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Failed to save theme' }, { status: 500 });
  }
}
