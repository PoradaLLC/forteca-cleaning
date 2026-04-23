import { Resend } from "resend";

const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

const FROM = process.env.RESEND_FROM_EMAIL ?? "noreply@fortecacleaning.com";
const ADMIN_EMAIL = "fortecaestate@gmail.com";

export interface ContactData {
  name: string;
  email: string;
  phone?: string;
  service: string;
  message: string;
}

function adminNotificationHtml(d: ContactData): string {
  return `
    <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;color:#0E1622">
      <div style="background:#0E1622;padding:28px 32px">
        <h1 style="color:#C9A35B;margin:0;font-size:20px;letter-spacing:0.04em">Forteca Cleaning</h1>
        <p style="color:rgba(243,236,223,0.5);margin:6px 0 0;font-size:12px">New contact form submission</p>
      </div>
      <div style="padding:36px 32px;background:#FAF6EE;border:1px solid #e8e0d0">
        <table style="width:100%;border-collapse:collapse;font-size:14px">
          <tr>
            <td style="padding:10px 0;color:#6B7482;border-bottom:1px solid #e8e0d0;width:120px">Name</td>
            <td style="padding:10px 0;font-weight:600;border-bottom:1px solid #e8e0d0">${d.name}</td>
          </tr>
          <tr>
            <td style="padding:10px 0;color:#6B7482;border-bottom:1px solid #e8e0d0">Email</td>
            <td style="padding:10px 0;border-bottom:1px solid #e8e0d0"><a href="mailto:${d.email}" style="color:#A9854A">${d.email}</a></td>
          </tr>
          <tr>
            <td style="padding:10px 0;color:#6B7482;border-bottom:1px solid #e8e0d0">Phone</td>
            <td style="padding:10px 0;border-bottom:1px solid #e8e0d0">${d.phone ?? "—"}</td>
          </tr>
          <tr>
            <td style="padding:10px 0;color:#6B7482;border-bottom:1px solid #e8e0d0">Service</td>
            <td style="padding:10px 0;font-weight:600;border-bottom:1px solid #e8e0d0;color:#A9854A">${d.service}</td>
          </tr>
        </table>
        <div style="margin-top:24px">
          <p style="font-size:12px;letter-spacing:0.1em;text-transform:uppercase;color:#6B7482;margin:0 0 10px">Message</p>
          <p style="margin:0;line-height:1.7;font-size:14px">${d.message.replace(/\n/g, "<br>")}</p>
        </div>
      </div>
      <div style="background:#0E1622;padding:20px 32px;text-align:center">
        <p style="color:rgba(243,236,223,0.35);font-size:12px;margin:0">Forteca Cleaning · Pocono Region, PA</p>
      </div>
    </div>
  `;
}

function userConfirmationHtml(d: ContactData): string {
  return `
    <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;color:#0E1622">
      <div style="background:#0E1622;padding:28px 32px">
        <h1 style="color:#C9A35B;margin:0;font-size:20px;letter-spacing:0.04em">Forteca Cleaning</h1>
        <p style="color:rgba(243,236,223,0.5);margin:6px 0 0;font-size:12px">Pocono Region, PA</p>
      </div>
      <div style="padding:40px 32px;background:#FAF6EE;border:1px solid #e8e0d0">
        <h2 style="font-size:20px;margin:0 0 8px;color:#0E1622">We received your request</h2>
        <p style="color:#6B7482;margin:0 0 28px;font-size:14px;line-height:1.6">
          Hi ${d.name}, thanks for reaching out. Our team will review your request and follow up within 24 hours.
        </p>
        <div style="background:#fff;border:1px solid #e8e0d0;padding:20px 24px;margin-bottom:28px">
          <p style="margin:0 0 6px;font-size:12px;letter-spacing:0.1em;text-transform:uppercase;color:#6B7482">Service Requested</p>
          <p style="margin:0;font-size:16px;font-weight:600;color:#A9854A">${d.service}</p>
        </div>
        <p style="font-size:13px;color:#6B7482;line-height:1.6;margin:0">
          In the meantime, you can reach us directly at
          <a href="tel:+13475560089" style="color:#A9854A;font-weight:600">(347) 556-0089</a>
          or reply to this email.
        </p>
      </div>
      <div style="background:#0E1622;padding:20px 32px;text-align:center">
        <p style="color:rgba(243,236,223,0.35);font-size:12px;margin:0">&copy; ${new Date().getFullYear()} Forteca Cleaning. A Forteca Estate company.</p>
      </div>
    </div>
  `;
}

export async function sendContactNotification(data: ContactData) {
  if (!resend) {
    console.log("[DEV EMAIL] Contact notification →", ADMIN_EMAIL, data);
    return;
  }
  await resend.emails.send({
    from: `Forteca Cleaning <${FROM}>`,
    to: ADMIN_EMAIL,
    replyTo: data.email,
    subject: `New Request: ${data.service} — ${data.name}`,
    html: adminNotificationHtml(data),
  });
}

export async function sendContactConfirmation(data: ContactData) {
  if (!resend) {
    console.log("[DEV EMAIL] Contact confirmation →", data.email, data);
    return;
  }
  await resend.emails.send({
    from: `Forteca Cleaning <${FROM}>`,
    to: data.email,
    subject: "We received your cleaning request — Forteca Cleaning",
    html: userConfirmationHtml(data),
  });
}
