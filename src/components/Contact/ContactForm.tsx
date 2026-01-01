import React, { useState } from 'react';
import { Button } from '../UI/Button';
import type { ContactFormData } from '../../types';
import { useFormValidation } from '../../hooks/useFormValidation';
import { Send, CheckCircle } from 'lucide-react';

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    phone: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const { errors, validateForm, validateField, clearError } = useFormValidation();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm(formData)) return;

    setIsSubmitting(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log('Contact form submitted:', formData);
      
      setSubmitSuccess(true);
      setFormData({ fullName: '', phone: '', email: '', message: '' });
      
      setTimeout(() => setSubmitSuccess(false), 5000);
    } catch (error) {
      console.error('Submission failed:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    clearError(name as keyof ContactFormData);
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const error = validateField(name as keyof ContactFormData, value);
    if (error) {
      validateForm(formData);
    }
  };

  const inputBase = "w-full px-4 sm:px-5 py-3 sm:py-4 border bg-white/10 backdrop-blur-sm text-white placeholder-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all text-sm sm:text-base";

  return (
    <div className="relative bg-black rounded-2xl shadow-2xl p-5 sm:p-6 md:p-10 max-w-xl mx-auto">
      <div className="absolute -top-14 -right-14 w-32 h-32 hidden xl:block">
        <img
          src="/badge.png"
          alt="Ottawa's Best 2024"
          className="w-full h-full object-contain"
          style={{ animation: 'spin 20s linear infinite' }}
        />
      </div>

      <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-white mb-5 sm:mb-8 text-center italic">
        Get A <span className="text-primary-500">Free Quote</span>
      </h2>

      {submitSuccess && (
        <div className="mb-5 p-3 sm:p-4 bg-green-500/20 border border-green-500 rounded-lg text-green-400 text-sm flex items-center gap-2">
          <CheckCircle className="w-4 h-4 flex-shrink-0" />
          Thank you! We'll contact you within 24 hours.
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
        <div>
          <input
            type="text"
            name="fullName"
            placeholder="Full Name*"
            value={formData.fullName}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`${inputBase} ${errors.fullName ? 'border-red-500' : 'border-gray-600'}`}
          />
          {errors.fullName && (
            <p className="text-red-400 text-xs mt-1">{errors.fullName}</p>
          )}
        </div>

        <div>
          <input
            type="tel"
            name="phone"
            placeholder="Phone*"
            value={formData.phone}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`${inputBase} ${errors.phone ? 'border-red-500' : 'border-gray-600'}`}
          />
          {errors.phone && (
            <p className="text-red-400 text-xs mt-1">{errors.phone}</p>
          )}
        </div>

        <div>
          <input
            type="email"
            name="email"
            placeholder="Email*"
            value={formData.email}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`${inputBase} ${errors.email ? 'border-red-500' : 'border-gray-600'}`}
          />
          {errors.email && (
            <p className="text-red-400 text-xs mt-1">{errors.email}</p>
          )}
        </div>

        <div>
          <textarea
            name="message"
            placeholder="Message*"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`${inputBase} resize-none ${errors.message ? 'border-red-500' : 'border-gray-600'}`}
          />
          {errors.message && (
            <p className="text-red-400 text-xs mt-1">{errors.message}</p>
          )}
        </div>

        <Button
          type="submit"
          variant="primary"
          size="lg"
          className="w-full uppercase tracking-wide flex items-center justify-center gap-2"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <span className="animate-spin rounded-full h-5 w-5 border-2 border-dark-900 border-t-transparent" />
              Sending...
            </>
          ) : (
            <>
              <Send className="w-5 h-5" />
              Get My Free Quote
            </>
          )}
        </Button>
      </form>
    </div>
  );
};
