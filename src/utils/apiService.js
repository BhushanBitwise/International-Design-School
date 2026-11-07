// API Service Layer for International Design School (IDS)
// Handles form submissions with configurable backend URL and transparent demo mode

export const API_CONFIG = {
  // Replace with production backend API when deployed (e.g., https://api.ids-edu.com/v1/enquiries)
  endpoint: null,
  isDemoMode: true
};

/**
 * Submit an enquiry or application
 * @param {Object} formData
 * @returns {Promise<{success: boolean, message: string, data?: any, isDemo: boolean}>}
 */
export async function submitEnquiry(formData) {
  // Simulate network latency for realistic feel
  await new Promise((resolve) => setTimeout(resolve, 800));

  if (!API_CONFIG.endpoint) {
    // Return explicit Demo / Client Preview state as required by instructions
    return {
      success: true,
      isDemo: true,
      message: 'Demo Submission Logged: Frontend validation succeeded. Since no external backend endpoint is connected yet, your data has been verified and logged in client preview mode.',
      submittedData: formData
    };
  }

  try {
    const response = await fetch(API_CONFIG.endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });

    if (!response.ok) {
      throw new Error(`Server returned HTTP ${response.status}`);
    }

    const data = await response.json();
    return {
      success: true,
      isDemo: false,
      message: 'Your enquiry has been successfully transmitted to the IDS Admissions Office.',
      data
    };
  } catch (error) {
    return {
      success: false,
      isDemo: false,
      message: `Submission error: ${error.message || 'Unable to connect to server'}. Please try again or contact admissions directly.`
    };
  }
}
