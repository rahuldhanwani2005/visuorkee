// src/utils/integrations.ts

// WhatsApp Integration
export const sendWhatsAppMessage = (plan: string, service: string, price: string) => {
  const phoneNumber = import.meta.env.VITE_WHATSAPP_NUMBER || '917878539633';
  const message = `Hi! I'm interested in the ${plan} plan for ${service} (${price}). Please provide more details about this package.`;
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  // Open WhatsApp in a new tab
  window.open(whatsappUrl, '_blank');
};

// --- GOOGLE SHEETS INTEGRATIONS ---


export const submitContactToGoogleSheets = async (formData: {
  firstName: string;
  lastName: string;
  email: string;
  company?: string;
  service?: string;
  message: string;
}) => {
  const CONTACT_GOOGLE_SCRIPT_URL = import.meta.env.VITE_CONTACT_GOOGLE_SCRIPT_URL;
  if (!CONTACT_GOOGLE_SCRIPT_URL || CONTACT_GOOGLE_SCRIPT_URL === 'YOUR_CONTACT_GOOGLE_SCRIPT_URL') {
    return { success: false, error: 'Google Sheets not configured' };
  }

  try {
    await fetch(CONTACT_GOOGLE_SCRIPT_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...formData, timestamp: new Date().toISOString() }),
    });
    return { success: true };
  } catch (error) {
    console.error('Error submitting contact to Sheets:', error);
    return { success: false, error };
  }
};

// --- EMAIL INTEGRATIONS ---

// 1. Admin Notification (Contact Form)
export const sendContactEmail = async (formData: {
  firstName: string;
  lastName: string;
  email: string;
  company?: string;
  service?: string;
  message: string;
}) => {
  const WEB3FORMS_ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
  
  if (WEB3FORMS_ACCESS_KEY) {
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: 'New Contact Form Submission - Visuorke',
          from_name: 'Visuorke Contact Form',
          to_email: import.meta.env.VITE_ADMIN_EMAIL || 'rahul.dhanwani.2005@gmail.com',
          message: `
New Contact Form Submission:
Name: ${formData.firstName} ${formData.lastName}
Email: ${formData.email}
Company: ${formData.company || 'Not provided'}
Service: ${formData.service || 'Not specified'}
Message: ${formData.message}
Submitted on: ${new Date().toLocaleString()}
          `,
        }),
      });
      const result = await response.json();
      if (result.success) return { success: true };
    } catch (e) { console.error('Web3Forms Admin Error:', e); }
  }

  // Fallback to EmailJS
  const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
  if (EMAILJS_PUBLIC_KEY) {
    try {
      const emailjs = await import('@emailjs/browser');
      emailjs.init(EMAILJS_PUBLIC_KEY);
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          to_email: import.meta.env.VITE_ADMIN_EMAIL || 'rahul.dhanwani.2005@gmail.com',
          from_name: `${formData.firstName} ${formData.lastName}`,
          contact_email: formData.email,
          contact_message: formData.message,
        }
      );
      return { success: true };
    } catch (e) { console.error('EmailJS Admin Error:', e); }
  }

  return { success: false };
};

// 2. Customer Confirmation (Contact Form)
export const sendCustomerConfirmationEmail = async (formData: {
  firstName: string;
  lastName: string;
  email: string;
  company?: string;
  service?: string;
  message: string;
}) => {
  const WEB3FORMS_ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
  
  if (WEB3FORMS_ACCESS_KEY) {
    try {
      await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: 'Confirmation: Your message to Visuorke',
          from_name: 'Visuorke Team',
          to_email: formData.email,
          message: `Hi ${formData.firstName},\n\nThank you for reaching out to Visuorke. We have received your message and will get back to you shortly.\n\nBest regards,\nThe Visuorke Team`
        }),
      });
      return { success: true };
    } catch (e) { console.error('Web3Forms Customer Error:', e); }
  }

  return { success: false };
};


// --- COMBINED COMPLETION HANDLERS ---

export const submitContactComplete = async (formData: {
  firstName: string;
  lastName: string;
  email: string;
  company?: string;
  service?: string;
  message: string;
}) => {
  const sheetsResult = await submitContactToGoogleSheets(formData);
  const adminEmailResult = await sendContactEmail(formData);
  const customerEmailResult = await sendCustomerConfirmationEmail(formData);

  return {
    success: sheetsResult.success || adminEmailResult.success,
    message: adminEmailResult.success 
      ? 'Message sent successfully!' 
      : 'Submission received, but email notification failed. We will check our records.'
  };
};