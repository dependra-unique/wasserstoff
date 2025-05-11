import React, { createContext, useContext, useState, useCallback } from 'react';

interface FormContextType {
  values: Record<string, any>;
  errors: Record<string, string>;
  touched: Record<string, boolean>;
  setFieldValue: (name: string, value: any) => void;
  setFieldError: (name: string, error: string) => void;
  setFieldTouched: (name: string, isTouched: boolean) => void;
  setValues: (values: Record<string, any>) => void;
  setErrors: (errors: Record<string, string>) => void;
  resetForm: () => void;
  submitForm: () => void;
  isSubmitting: boolean;
}

const FormContext = createContext<FormContextType>({
  values: {},
  errors: {},
  touched: {},
  setFieldValue: () => {},
  setFieldError: () => {},
  setFieldTouched: () => {},
  setValues: () => {},
  setErrors: () => {},
  resetForm: () => {},
  submitForm: () => {},
  isSubmitting: false,
});

export interface FormProps {
  initialValues: Record<string, any>;
  onSubmit: (values: Record<string, any>) => void | Promise<void>;
  validate?: (values: Record<string, any>) => Record<string, string>;
  children: React.ReactNode;
  className?: string;
}

export const Form: React.FC<FormProps> = ({
  initialValues,
  onSubmit,
  validate,
  children,
  className = '',
}) => {
  const [values, setValues] = useState<Record<string, any>>(initialValues);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const setFieldValue = useCallback((name: string, value: any) => {
    setValues(prev => ({ ...prev, [name]: value }));
  }, []);

  const setFieldError = useCallback((name: string, error: string) => {
    setErrors(prev => ({ ...prev, [name]: error }));
  }, []);

  const setFieldTouched = useCallback((name: string, isTouched: boolean) => {
    setTouched(prev => ({ ...prev, [name]: isTouched }));
  }, []);

  const resetForm = useCallback(() => {
    setValues(initialValues);
    setErrors({});
    setTouched({});
  }, [initialValues]);

  const validateForm = useCallback(() => {
    if (validate) {
      const validationErrors = validate(values);
      setErrors(validationErrors);
      return Object.keys(validationErrors).length === 0;
    }
    return true;
  }, [validate, values]);

  const submitForm = useCallback(async () => {
    setTouched(
      Object.keys(values).reduce((touched, key) => {
        touched[key] = true;
        return touched;
      }, {} as Record<string, boolean>)
    );

    const isValid = validateForm();
    
    if (isValid) {
      setIsSubmitting(true);
      try {
        await onSubmit(values);
      } catch (error) {
        console.error('Form submission error:', error);
      } finally {
        setIsSubmitting(false);
      }
    }
  }, [validateForm, values, onSubmit]);

  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    submitForm();
  }, [submitForm]);

  return (
    <FormContext.Provider
      value={{
        values,
        errors,
        touched,
        setFieldValue,
        setFieldError,
        setFieldTouched,
        setValues,
        setErrors,
        resetForm,
        submitForm,
        isSubmitting,
      }}
    >
      <form className={className} onSubmit={handleSubmit} noValidate>
        {children}
      </form>
    </FormContext.Provider>
  );
};

export const useForm = () => useContext(FormContext);

export interface FormFieldProps {
  name: string;
  children: (fieldProps: {
    value: any;
    error?: string;
    touched: boolean;
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
    onBlur: () => void;
  }) => React.ReactNode;
}

export const FormField: React.FC<FormFieldProps> = ({ name, children }) => {
  const { values, errors, touched, setFieldValue, setFieldTouched } = useForm();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const target = e.target;
    const value = target.type === 'checkbox' ? (target as HTMLInputElement).checked : target.value;
    setFieldValue(name, value);
  };

  const handleBlur = () => {
    setFieldTouched(name, true);
  };

  return (
    <>
      {children({
        value: values[name],
        error: touched[name] ? errors[name] : undefined,
        touched: touched[name] || false,
        onChange: handleChange,
        onBlur: handleBlur,
      })}
    </>
  );
};