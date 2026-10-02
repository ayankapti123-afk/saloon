import React, { useState, useEffect } from 'react';
import { SALON_DATA, ServiceItem } from '../data/salonData';
import { bookingService, AppointmentRequest } from '../services/bookingService';
import {
  Calendar,
  Clock,
  User,
  Phone,
  Mail,
  Scissors,
  MessageSquare,
  CheckCircle2,
  AlertCircle,
  MessageCircle,
  History,
  Sparkles,
} from 'lucide-react';

interface BookingSectionProps {
  selectedService: ServiceItem | null;
  onClearSelectedService: () => void;
}

export const BookingSection: React.FC<BookingSectionProps> = ({
  selectedService,
  onClearSelectedService,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    serviceId: '',
    serviceName: '',
    preferredDate: '',
    preferredTime: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successData, setSuccessData] = useState<AppointmentRequest | null>(null);
  const [activeTab, setActiveTab] = useState<'form' | 'recent'>('form');
  const [recentRequests, setRecentRequests] = useState<AppointmentRequest[]>([]);

  // Minimum date is today's local date
  const todayDateString = new Date().toISOString().split('T')[0];

  // If a service was pre-selected from the Services section, populate the form
  useEffect(() => {
    if (selectedService) {
      setFormData((prev) => ({
        ...prev,
        serviceId: selectedService.id,
        serviceName: `${selectedService.name} (${selectedService.priceStartingAt})`,
      }));
      setSuccessData(null);
      setErrorMessage(null);
    }
  }, [selectedService]);

  // Load stored requests on mount
  useEffect(() => {
    setRecentRequests(bookingService.getStoredRequests());
  }, [successData]);

  const timeSlots = [
    '10:30 AM – 11:30 AM',
    '11:30 AM – 12:30 PM',
    '12:30 PM – 01:30 PM',
    '02:00 PM – 03:00 PM',
    '03:00 PM – 04:00 PM',
    '04:00 PM – 05:00 PM',
    '05:00 PM – 06:00 PM',
    '06:00 PM – 07:00 PM',
    '07:00 PM – 08:00 PM',
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);
    setLoading(true);

    const result = await bookingService.submitRequest({
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      serviceId: formData.serviceId || 'general',
      serviceName: formData.serviceName || 'General Hair Consultation',
      preferredDate: formData.preferredDate,
      preferredTime: formData.preferredTime,
      message: formData.message,
    });

    setLoading(false);

    if (!result.success) {
      setErrorMessage(result.error || 'Failed to submit request. Please try again.');
    } else if (result.data) {
      setSuccessData(result.data);
      // Reset form
      setFormData({
        name: '',
        phone: '',
        email: '',
        serviceId: '',
        serviceName: '',
        preferredDate: '',
        preferredTime: '',
        message: '',
      });
      onClearSelectedService();
    }
  };

  return (
    <section id="book" className="py-20 sm:py-28 bg-[#11141C] relative border-t border-[#1F2432]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.25em] uppercase text-[#D4AF37]">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Salon Appointments</span>
          </div>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-white tracking-tight">
            Request an Appointment
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#9E9B95] font-light max-w-xl mx-auto leading-relaxed">
            Reserve your preferred styling or treatment slot. Our front desk reviews your request and sends a prompt confirmation call or WhatsApp message within salon hours.
          </p>
        </div>

        {/* Tab Switcher: Form vs Past Requests */}
        <div className="mt-8 flex justify-center">
          <div className="p-1 bg-[#0D0F14] border border-[#232834] rounded-sm flex items-center gap-1">
            <button
              type="button"
              onClick={() => setActiveTab('form')}
              className={`px-4 py-2 text-xs font-medium rounded-sm transition-all cursor-pointer ${
                activeTab === 'form'
                  ? 'bg-[#1E2433] text-white shadow-sm border border-[#D4AF37]/40'
                  : 'text-[#9E9B95] hover:text-white'
              }`}
            >
              Appointment Request Form
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('recent')}
              className={`px-4 py-2 text-xs font-medium rounded-sm transition-all cursor-pointer flex items-center gap-1.5 ${
                activeTab === 'recent'
                  ? 'bg-[#1E2433] text-white shadow-sm border border-[#D4AF37]/40'
                  : 'text-[#9E9B95] hover:text-white'
              }`}
            >
              <History className="w-3.5 h-3.5" />
              <span>My Requests ({recentRequests.length})</span>
            </button>
          </div>
        </div>

        {/* Main Content Box */}
        <div className="mt-8 bg-[#0D0F14] border border-[#232834] rounded-sm shadow-2xl p-6 sm:p-10">
          {activeTab === 'recent' ? (
            /* Recent Requests Tab */
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-[#232834] mb-6">
                <div>
                  <h3 className="text-base font-semibold text-white">Your Recent Requests</h3>
                  <p className="text-xs text-[#8C8880]">Saved locally on this device</p>
                </div>
                <button
                  type="button"
                  onClick={() => setActiveTab('form')}
                  className="text-xs text-[#D4AF37] hover:underline"
                >
                  + New Request
                </button>
              </div>

              {recentRequests.length === 0 ? (
                <div className="py-12 text-center text-[#8C8880]">
                  <Calendar className="w-8 h-8 mx-auto text-[#2D3546] mb-3" />
                  <p className="text-sm">You haven't submitted any appointment requests yet.</p>
                  <button
                    type="button"
                    onClick={() => setActiveTab('form')}
                    className="mt-4 px-4 py-2 text-xs font-semibold text-[#0D0F14] bg-[#D4AF37] rounded-sm uppercase tracking-wider"
                  >
                    Submit a Request
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                  {recentRequests.map((req) => (
                    <div
                      key={req.id}
                      className="p-4 bg-[#12151D] border border-[#232834] rounded-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                    >
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="text-sm font-semibold text-white">{req.serviceName}</h4>
                          <span className="text-[10px] uppercase px-2 py-0.5 rounded-sm bg-[#232834] text-[#D4AF37] font-mono">
                            Pending Review
                          </span>
                        </div>
                        <p className="text-xs text-[#9E9B95] mt-1">
                          Date: <span className="text-white font-medium">{req.preferredDate}</span> · Time:{' '}
                          <span className="text-white font-medium">{req.preferredTime}</span>
                        </p>
                        <p className="text-[11px] text-[#7C7973] mt-0.5">
                          Contact: {req.name} ({req.phone})
                        </p>
                      </div>

                      <a
                        href={bookingService.generateWhatsAppUrl(req)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-semibold text-white bg-[#1A2E22] hover:bg-[#233F2E] border border-[#25D366]/40 rounded-sm shrink-0 transition-colors"
                      >
                        <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                        <span>Confirm via WhatsApp</span>
                      </a>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ) : successData ? (
            /* Success State */
            <div className="py-6 text-center space-y-5 animate-in fade-in duration-300">
              <div className="w-14 h-14 mx-auto rounded-full bg-[#182B21] border border-[#25D366]/40 flex items-center justify-center">
                <CheckCircle2 className="w-7 h-7 text-[#25D366]" />
              </div>

              <div className="max-w-md mx-auto">
                <h3 className="font-display text-2xl font-bold text-white">
                  Appointment Request Received!
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-[#BDBAA7] leading-relaxed">
                  Thank you, <strong className="text-white">{successData.name}</strong>. We have logged your request for{' '}
                  <strong className="text-white">{successData.serviceName}</strong> on{' '}
                  <strong className="text-white">{successData.preferredDate}</strong> ({successData.preferredTime}).
                </p>
                <div className="mt-4 p-3 bg-[#12151D] border border-[#232834] rounded-sm text-xs text-[#9E9B95] text-left space-y-1">
                  <p>• Our front desk will confirm your appointment via phone/WhatsApp.</p>
                  <p>• You may also send your request directly to our salon WhatsApp for expedited priority response.</p>
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={bookingService.generateWhatsAppUrl(successData)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-xs uppercase tracking-wider font-semibold text-white bg-[#1F3D28] hover:bg-[#255034] border border-[#25D366] rounded-sm transition-all shadow-md"
                >
                  <MessageCircle className="w-4 h-4 text-[#25D366]" />
                  <span>Send Request to WhatsApp Now</span>
                </a>

                <button
                  type="button"
                  onClick={() => setSuccessData(null)}
                  className="w-full sm:w-auto px-5 py-3 text-xs uppercase tracking-wider font-semibold text-[#C8C5BF] hover:text-white bg-[#1A1F2B] border border-[#2F374A] rounded-sm transition-colors cursor-pointer"
                >
                  Submit Another Request
                </button>
              </div>
            </div>
          ) : (
            /* Request Form */
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Preselected Service Notification Banner */}
              {selectedService && (
                <div className="p-3 bg-[#181D28] border border-[#D4AF37]/50 rounded-sm flex items-center justify-between gap-3 text-xs">
                  <div className="flex items-center gap-2">
                    <Scissors className="w-4 h-4 text-[#D4AF37]" />
                    <span>
                      Selected Service: <strong className="text-white">{selectedService.name}</strong> ({selectedService.priceStartingAt})
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={onClearSelectedService}
                    className="text-[#9E9B95] hover:text-white underline cursor-pointer"
                  >
                    Change
                  </button>
                </div>
              )}

              {/* Error Banner */}
              {errorMessage && (
                <div className="p-3.5 bg-[#2B1717] border border-[#E55353]/50 rounded-sm flex items-center gap-2.5 text-xs text-[#FFC1C1]">
                  <AlertCircle className="w-4 h-4 shrink-0 text-[#FF6B6B]" />
                  <span>{errorMessage}</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Full Name */}
                <div>
                  <label htmlFor="client-name" className="block text-xs font-semibold text-white uppercase tracking-wider mb-2">
                    Full Name <span className="text-[#D4AF37]">*</span>
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-[#7C7973] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      id="client-name"
                      type="text"
                      required
                      placeholder="e.g. Suman Sen"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-[#12151D] border border-[#232834] focus:border-[#D4AF37] text-white text-sm pl-10 pr-4 py-2.5 rounded-sm outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* Mobile Phone */}
                <div>
                  <label htmlFor="client-phone" className="block text-xs font-semibold text-white uppercase tracking-wider mb-2">
                    Phone Number <span className="text-[#D4AF37]">*</span>
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-[#7C7973] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      id="client-phone"
                      type="tel"
                      required
                      placeholder="e.g. 98300 12345"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-[#12151D] border border-[#232834] focus:border-[#D4AF37] text-white text-sm pl-10 pr-4 py-2.5 rounded-sm outline-none transition-colors"
                    />
                  </div>
                  <span className="text-[10px] text-[#7C7973] mt-1 block">
                    We will call or message to confirm your slot
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Service Selection */}
                <div>
                  <label htmlFor="client-service" className="block text-xs font-semibold text-white uppercase tracking-wider mb-2">
                    Service Required <span className="text-[#D4AF37]">*</span>
                  </label>
                  <div className="relative">
                    <Scissors className="w-4 h-4 text-[#7C7973] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <select
                      id="client-service"
                      required
                      value={formData.serviceName}
                      onChange={(e) => {
                        const val = e.target.value;
                        const match = SALON_DATA.services.find((s) => s.name === val);
                        setFormData({
                          ...formData,
                          serviceId: match ? match.id : 'custom',
                          serviceName: val,
                        });
                      }}
                      className="w-full bg-[#12151D] border border-[#232834] focus:border-[#D4AF37] text-white text-sm pl-10 pr-4 py-2.5 rounded-sm outline-none transition-colors appearance-none cursor-pointer"
                    >
                      <option value="">Select a Service</option>
                      {SALON_DATA.services.map((svc) => (
                        <option key={svc.id} value={svc.name}>
                          {svc.name} (from {svc.priceStartingAt})
                        </option>
                      ))}
                      <option value="Consultation / Other Treatment">
                        Other Consultation / Treatment
                      </option>
                    </select>
                  </div>
                </div>

                {/* Email (Optional) */}
                <div>
                  <label htmlFor="client-email" className="block text-xs font-semibold text-white uppercase tracking-wider mb-2">
                    Email Address <span className="text-[#7C7973] font-normal">(Optional)</span>
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-[#7C7973] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      id="client-email"
                      type="email"
                      placeholder="e.g. suman@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#12151D] border border-[#232834] focus:border-[#D4AF37] text-white text-sm pl-10 pr-4 py-2.5 rounded-sm outline-none transition-colors"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Preferred Date */}
                <div>
                  <label htmlFor="client-date" className="block text-xs font-semibold text-white uppercase tracking-wider mb-2">
                    Preferred Date <span className="text-[#D4AF37]">*</span>
                  </label>
                  <div className="relative">
                    <Calendar className="w-4 h-4 text-[#7C7973] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      id="client-date"
                      type="date"
                      required
                      min={todayDateString}
                      value={formData.preferredDate}
                      onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                      className="w-full bg-[#12151D] border border-[#232834] focus:border-[#D4AF37] text-white text-sm pl-10 pr-4 py-2.5 rounded-sm outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* Preferred Time Slot */}
                <div>
                  <label htmlFor="client-time" className="block text-xs font-semibold text-white uppercase tracking-wider mb-2">
                    Preferred Time Slot <span className="text-[#D4AF37]">*</span>
                  </label>
                  <div className="relative">
                    <Clock className="w-4 h-4 text-[#7C7973] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <select
                      id="client-time"
                      required
                      value={formData.preferredTime}
                      onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                      className="w-full bg-[#12151D] border border-[#232834] focus:border-[#D4AF37] text-white text-sm pl-10 pr-4 py-2.5 rounded-sm outline-none transition-colors appearance-none cursor-pointer"
                    >
                      <option value="">Choose a Time Window</option>
                      {timeSlots.map((slot) => (
                        <option key={slot} value={slot}>
                          {slot}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Message / Special Notes */}
              <div>
                <label htmlFor="client-notes" className="block text-xs font-semibold text-white uppercase tracking-wider mb-2">
                  Special Notes or Hair Details <span className="text-[#7C7973] font-normal">(Optional)</span>
                </label>
                <div className="relative">
                  <MessageSquare className="w-4 h-4 text-[#7C7973] absolute left-3.5 top-3 pointer-events-none" />
                  <textarea
                    id="client-notes"
                    rows={3}
                    placeholder="Mention any previous chemical treatments, hair length, or specific stylist preference..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-[#12151D] border border-[#232834] focus:border-[#D4AF37] text-white text-sm pl-10 pr-4 py-2.5 rounded-sm outline-none transition-colors resize-none"
                  />
                </div>
              </div>

              {/* Peak Hours & Wait Time Graceful Handling */}
              <div className="p-3 bg-[#12151D] border border-[#232834] rounded-sm text-xs text-[#8C8880] space-y-1">
                <p>
                  <strong className="text-white font-medium">Salon Notice:</strong> Weekends and weekday evenings (5 PM – 8 PM) experience elevated traffic. While we make every effort to seat you precisely at your reserved slot, a brief 5–10 minute sanitation prep may occur.
                </p>
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 text-xs sm:text-sm uppercase tracking-wider font-semibold text-[#0D0F14] bg-gradient-to-r from-[#E6CA85] via-[#D4AF37] to-[#C5A059] hover:from-[#F0D695] hover:to-[#D4AF37] transition-all rounded-sm shadow-lg active:scale-95 disabled:opacity-60 cursor-pointer"
                >
                  <Calendar className="w-4 h-4" />
                  <span>{loading ? 'Submitting Request...' : 'Request Appointment'}</span>
                </button>
                <p className="mt-2 text-center text-[11px] text-[#7C7973]">
                  * Requesting an appointment does not incur any upfront charge. Confirmation is finalized by our salon front desk.
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
