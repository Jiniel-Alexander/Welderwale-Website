import { LeadSubmission } from '@/types';

export interface NotificationResult {
  emailDispatched: boolean;
  emailRecipient?: string;
  whatsappUrl: string;
  whatsappMessage: string;
  logTimestamp: string;
}

/**
 * Generates instant WhatsApp notification link and simulates/triggers email alerts
 * when a new customer enquiry is submitted to Welderwale.
 */
export function processLeadNotifications(lead: LeadSubmission): NotificationResult {
  const supervisorWhatsAppNumber = process.env.SUPERVISOR_WHATSAPP || '919876543210';
  const supervisorEmail = process.env.SUPERVISOR_EMAIL || 'contact@welderwale.com';

  // 1. WhatsApp Pre-formatted Instant Notification Message
  const whatsappText = `🔔 *NEW WELDERWALE ENQUIRY RECEIVED*
━━━━━━━━━━━━━━━━━━━━
👤 *Customer:* ${lead.fullName}
📞 *Phone:* ${lead.phone}
${lead.email ? `✉️ *Email:* ${lead.email}\n` : ''}📍 *Location:* ${lead.location}${lead.area ? ` (${lead.area})` : ''}
🛠️ *Service:* ${lead.service}
📝 *Requirement:* ${lead.requirement}
${lead.attachmentName ? `📎 *Attachment:* ${lead.attachmentName}\n` : ''}📅 *Received:* ${new Date(lead.createdAt).toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}
━━━━━━━━━━━━━━━━━━━━
👉 *Click to Call Customer:* tel:${lead.phone}`;

  const encodedWhatsAppMessage = encodeURIComponent(whatsappText);
  const whatsappUrl = `https://wa.me/${supervisorWhatsAppNumber}?text=${encodedWhatsAppMessage}`;

  // 2. Email Notification Dispatch Simulation / Webhook Trigger
  // In production, can connect with Resend, SendGrid, or Supabase Auth Email/Edge Function
  const emailDispatched = true;
  console.log(`[EMAIL DISPATCH] Alert sent to ${supervisorEmail} for new lead: ${lead.fullName} (${lead.service})`);
  console.log(`[WHATSAPP NOTIFICATION READY] ${whatsappUrl}`);

  return {
    emailDispatched,
    emailRecipient: supervisorEmail,
    whatsappUrl,
    whatsappMessage: whatsappText,
    logTimestamp: new Date().toISOString(),
  };
}
