// Centralized Official Contact & WhatsApp Configuration for International Design School (IDS)

export const CONTACT_INFO = {
  // Brand details
  schoolName: 'International Design School (IDS)',
  tagline: 'Design Your Perspective. Shape The Future.',

  // Official Contact Phone Numbers (Distinct list as per requirements)
  phones: [
    {
      display: '+91 80876 01850',
      raw: '+918087601850',
      label: 'Admissions & Studio Counselling',
      primary: true
    },
    {
      display: '+91 8080152238',
      raw: '+918080152238',
      label: 'Official WhatsApp & Primary Hotline',
      isWhatsApp: true
    },
    {
      display: '+91 9850941120',
      raw: '+919850941120',
      label: 'Academic Desk & Campus Visits'
    }
  ],

  // Official Primary WhatsApp
  whatsapp: {
    display: '+91 8080152238',
    internationalNumber: '918080152238',
    baseUrl: 'https://wa.me/918080152238'
  },

  // Emails
  emails: {
    admissions: 'admissions@ids-edu.com',
    general: 'info@ids-edu.com',
    international: 'global.hubs@ids-edu.com'
  },

  // Primary Campus Address
  campus: {
    city: 'Pune',
    state: 'Maharashtra',
    country: 'India',
    address: 'Koregaon Park Annex / Viman Nagar Creative Corridor, Pune, Maharashtra 411014, India',
    hours: 'Monday – Saturday: 9:00 AM – 6:30 PM IST'
  }
};

/**
 * Generate a safe, encoded WhatsApp URL with contextual pre-filled message
 * @param {string} message
 * @returns {string}
 */
export function getWhatsAppUrl(message) {
  const base = CONTACT_INFO.whatsapp.baseUrl;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}

/**
 * Contextual WhatsApp message generators
 */
export const WHATSAPP_MESSAGES = {
  homepage: 'Hello International Design School, I would like to know more about your design programs and admissions.',
  admissions: 'Hello IDS Admissions Team, I would like assistance with the admission process.',
  contact: 'Hello International Design School, I would like to connect with your team.',

  // Discipline specific messages
  fashion: 'Hello IDS, I am interested in Fashion Design. Please share the program details, eligibility and admission process.',
  interior: 'Hello IDS, I would like to know more about your Interior Design program.',
  uiux: 'Hello IDS, I am interested in your UI/UX Design program. Please share more information.',

  // Dynamic program generator
  program: (programName) =>
    `Hello IDS Admissions Team, I am interested in your ${programName} program. Please share the course details.`,

  // Dynamic campus generator
  campus: (campusName) =>
    `Hello International Design School, I would like to know more about your ${campusName} location.`,

  // Form structured message generator
  fromForm: (data) => {
    const parts = [
      'Hello International Design School Team,',
      '',
      'I would like to enquire about your programs.',
      '',
      `Name: ${data.fullName || 'Not provided'}`,
      `Phone: ${data.phone || 'Not provided'}`,
      `Email: ${data.email || 'Not provided'}`,
      `Interested Program: ${data.programInterest || 'General Enquiry'}`,
      `Preferred Location: ${data.preferredCampus || 'Pune Flagship Campus'}`,
      data.visitDate ? `Preferred Visit Date: ${data.visitDate}` : null,
      data.message ? `Message: ${data.message}` : null,
      '',
      'Please share more details about the admission process.',
      '',
      'Thank you.'
    ].filter(Boolean);

    return parts.join('\n');
  }
};
