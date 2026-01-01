import React, { useState } from 'react';
import { Button } from '../UI/Button';
import type { FormData } from '../../types';
import { useFormValidation } from '../../hooks/useFormValidation';
import { Send, CheckCircle } from 'lucide-react';

export const QuoteForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
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
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log('Form submitted:', formData);
      
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
    setFormData(prev => ({ ...prev, [name]: value }));
    clearError(name as keyof FormData);
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const error = validateField(name as keyof FormData, value);
    if (error) {
      validateForm(formData);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-2xl p-5 sm:p-6 md:p-8 relative max-w-md w-full">
      <div className="absolute -top-10 -right-10 w-24 h-24 md:w-28 md:h-28 hidden sm:block">
        <img 
          src="/badge.png" 
          alt="Ottawa's Best 2024" 
          className="w-full h-full object-contain"
          style={{ animation: 'spin 20s linear infinite' }}
        />
      </div>

      <h2 className="text-xl sm:text-2xl md:text-3xl font-heading font-bold text-dark-900 mb-4 sm:mb-6 text-center">
        Get A <span className="italic">Free Quote</span>
      </h2>

      {submitSuccess && (
        <div className="mb-4 p-3 sm:p-4 bg-green-50 border border-green-200 rounded-md text-green-800 text-sm flex items-center gap-2">
          <CheckCircle className="w-4 h-4 flex-shrink-0" />
          Thanks! We'll contact you within 24 hours.
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
        <div>
          <input
            type="text"
            name="fullName"
            placeholder="Full Name*"
            value={formData.fullName}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm sm:text-base ${
              errors.fullName ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.fullName && (
            <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>
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
            className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm sm:text-base ${
              errors.phone ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.phone && (
            <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
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
            className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm sm:text-base ${
              errors.email ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">{errors.email}</p>
          )}
        </div>

        <div>
          <textarea
            name="message"
            placeholder="Message*"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 resize-none text-sm sm:text-base ${
              errors.message ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.message && (
            <p className="text-red-500 text-xs mt-1">{errors.message}</p>
          )}
        </div>

        <Button
          type="submit"
          variant="primary"
          size="lg"
          className="w-full flex items-center justify-center gap-2"
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

        <p className="text-xs text-gray-500 text-center">
          By submitting, you agree to receive communications from Ken White Construction.
          We respect your privacy and never share your information.
        </p>
      </form>
    </div>
  );
};
