import { useState } from 'react';
import type { FormData, FormErrors } from '../types';

export const useFormValidation = () => {
  const [errors, setErrors] = useState<FormErrors>({});

  const validateField = (name: keyof FormData, value: string): string | undefined => {
    switch (name) {
      case 'fullName':
        if (!value.trim()) return 'Name is required';
        if (value.trim().length < 2) return 'Name must be at least 2 characters';
        if (!/^[a-zA-Z\s'-]+$/.test(value)) return 'Name contains invalid characters';
        if (value.trim().split(' ').length < 2) return 'Please enter your full name';
        return undefined;

      case 'phone':
        if (!value.trim()) return 'Phone number is required';
        const cleaned = value.replace(/\D/g, '');
        if (cleaned.length < 10) return 'Phone number must be at least 10 digits';
        if (cleaned.length > 15) return 'Phone number is too long';
        if (!/^[\d\s\-\(\)\+]+$/.test(value)) return 'Invalid phone format';
        return undefined;

      case 'email':
        if (!value.trim()) return 'Email is required';
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return 'Invalid email format';
        if (value.length > 254) return 'Email is too long';
        return undefined;

      case 'message':
        if (!value.trim()) return 'Message is required';
        if (value.trim().length < 10) return 'Message must be at least 10 characters';
        return undefined;

      default:
        return undefined;
    }
  };

  const validateForm = (data: FormData): boolean => {
    const newErrors: FormErrors = {};
    
    Object.keys(data).forEach((key) => {
      const error = validateField(key as keyof FormData, data[key as keyof FormData]);
      if (error) newErrors[key as keyof FormErrors] = error;
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const clearError = (field: keyof FormErrors) => {
    setErrors(prev => {
      const updated = { ...prev };
      delete updated[field];
      return updated;
    });
  };

  return { errors, validateForm, validateField, clearError, setErrors };
};
