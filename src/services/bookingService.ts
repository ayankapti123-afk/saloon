/**
 * Booking Service Layer
 * Isolates appointment submission, local persistence, validation, and WhatsApp handoff.
 */

export interface AppointmentRequest {
  id: string;
  name: string;
  phone: string;
  email?: string;
  serviceId: string;
  serviceName: string;
  preferredDate: string;
  preferredTime: string;
  message?: string;
  status: 'pending_confirmation' | 'contacted' | 'confirmed';
  createdAt: string;
}

const STORAGE_KEY = 'hair_castle_appointment_requests';

export const bookingService = {
  getStoredRequests(): AppointmentRequest[] {
    try {
      const data = localStorage.getItem(STORAGE_KEY);
      return data ? JSON.parse(data) : [];
    } catch {
      return [];
    }
  },

  async submitRequest(input: Omit<AppointmentRequest, 'id' | 'status' | 'createdAt'>): Promise<{
    success: boolean;
    data?: AppointmentRequest;
    error?: string;
  }> {
    // Basic validation
    if (!input.name.trim()) {
      return { success: false, error: 'Please enter your full name.' };
    }
    
    // Indian phone number validation: allows 10 digits with optional +91 or leading 0
    const cleanPhone = input.phone.replace(/[\s\-()]/g, '');
    const phoneRegex = /^(\+91|91|0)?[6-9]\d{9}$/;
    if (!phoneRegex.test(cleanPhone)) {
      return {
        success: false,
        error: 'Please enter a valid 10-digit mobile number.',
      };
    }

    if (!input.serviceName) {
      return { success: false, error: 'Please select a salon service.' };
    }

    if (!input.preferredDate) {
      return { success: false, error: 'Please choose your preferred appointment date.' };
    }

    if (!input.preferredTime) {
      return { success: false, error: 'Please select a preferred time slot.' };
    }

    // Simulate network delay for real-world feel
    await new Promise((resolve) => setTimeout(resolve, 600));

    const newRequest: AppointmentRequest = {
      ...input,
      id: `hc-${Date.now().toString(36)}-${Math.random().toString(36).substring(2, 6)}`,
      status: 'pending_confirmation',
      createdAt: new Date().toISOString(),
    };

    try {
      const existing = this.getStoredRequests();
      const updated = [newRequest, ...existing.slice(0, 9)];
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    } catch (e) {
      console.warn('Could not persist to local storage:', e);
    }

    return {
      success: true,
      data: newRequest,
    };
  },

  generateWhatsAppUrl(request: {
    name: string;
    phone: string;
    serviceName: string;
    preferredDate: string;
    preferredTime: string;
    message?: string;
  }): string {
    const text = `Hi Hair Castle! ✂️\nI would like to request an appointment:\n• Name: ${request.name}\n• Phone: ${request.phone}\n• Service: ${request.serviceName}\n• Date: ${request.preferredDate}\n• Time: ${request.preferredTime}${
      request.message ? `\n• Note: ${request.message}` : ''
    }\nPlease let me know your availability.`;

    return `https://wa.me/917303390416?text=${encodeURIComponent(text)}`;
  },
};
