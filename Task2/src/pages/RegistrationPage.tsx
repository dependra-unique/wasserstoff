import React, { useState } from 'react';
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  Button,
  Logo,
  Container,
  Form,
  FormField,
  Input,
  Title,
  Text,
  Avatar,
} from '../lib/components';
import { validateEmail, validatePhone } from '../lib/utils';
import { useNavigate } from 'react-router-dom';

interface RegistrationFormValues {
  fullName: string;
  email: string;
  phone: string;
  companyRole: string;
  dietaryRestrictions: string;
}

export const RegistrationPage: React.FC = () => {
  const navigate = useNavigate();
  const [avatarPreview, setAvatarPreview] = useState<string | null>(null);

  const initialValues: RegistrationFormValues = {
    fullName: '',
    email: '',
    phone: '',
    companyRole: '',
    dietaryRestrictions: '',
  };

  const validateForm = (values: RegistrationFormValues) => {
    const errors: Partial<Record<keyof RegistrationFormValues, string>> = {};

    if (!values.fullName) {
      errors.fullName = 'Name is required';
    }

    if (!values.email) {
      errors.email = 'Email is required';
    } else if (!validateEmail(values.email)) {
      errors.email = 'Invalid email format';
    }

    if (values.phone && !validatePhone(values.phone)) {
      errors.phone = 'Invalid phone number';
    }
    
    return errors;
  };

  const handleAvatarChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatarPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (values: RegistrationFormValues) => {
    // In a real app, you'd send this to a backend API
    console.log('Form values:', values);
    
    // For demo purposes, we'll just navigate to the confirmation page
    // with the form data
    navigate('/confirmation', { 
      state: { 
        userData: { ...values, avatar: avatarPreview },
        ticketId: `CONF-${Math.floor(Math.random() * 10000).toString().padStart(4, '0')}` 
      } 
    });
  };

  return (
    <div className="min-h-screen bg-cosmic relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-28 h-28 rounded-full bg-primary/10 opacity-40 orbit-animation"></div>
      <div className="absolute bottom-40 right-20 w-40 h-40 rounded-full bg-secondary/10 opacity-40 orbit-animation-reverse"></div>
      <div className="absolute top-1/2 left-1/4 w-60 h-60 rounded-full bg-accent/5 opacity-30 blur-3xl"></div>
      
      <Container className="py-10 relative z-10">
        <div className="flex justify-center mb-6">
          <Logo size="lg" />
        </div>
        
        <Card withGlow className="max-w-md mx-auto">
          <CardHeader>
            <Title className="text-center mb-2">
              Your Journey to Coding Conf 2025 Starts Here!
            </Title>
            <Text className="text-center">
              Secure your spot at next year's biggest coding conference.
            </Text>
          </CardHeader>
          
          <CardContent>
            {/* Avatar Upload Section */}
            <div className="flex flex-col items-center mb-6">
              <div className="relative group cursor-pointer mb-2">
                <Avatar
                  size="lg"
                  src={avatarPreview || undefined}
                  alt="Profile"
                  className="w-24 h-24"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                  <Text className="text-xs text-white">Change Photo</Text>
                </div>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleAvatarChange}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                />
              </div>
              <Text className="text-sm text-text-secondary">
                Upload your profile picture
              </Text>
            </div>

            <Form
              initialValues={initialValues}
              validate={validateForm}
              onSubmit={handleSubmit}
            >
              <FormField name="fullName">
                {({ value, error, onChange, onBlur }) => (
                  <Input
                    label="Your Full Name"
                    placeholder="John Doe"
                    value={value}
                    onChange={onChange}
                    onBlur={onBlur}
                    error={error}
                    required
                  />
                )}
              </FormField>
              
              <FormField name="email">
                {({ value, error, onChange, onBlur }) => (
                  <Input
                    label="Email Address"
                    type="email"
                    placeholder="you@example.com"
                    value={value}
                    onChange={onChange}
                    onBlur={onBlur}
                    error={error}
                    required
                  />
                )}
              </FormField>
              
              <FormField name="phone">
                {({ value, error, onChange, onBlur }) => (
                  <Input
                    label="Phone Number"
                    type="tel"
                    placeholder="+1 (555) 123-4567"
                    value={value}
                    onChange={onChange}
                    onBlur={onBlur}
                    error={error}
                  />
                )}
              </FormField>
              
              <FormField name="companyRole">
                {({ value, onChange, onBlur }) => (
                  <Input
                    label="Company / Role"
                    placeholder="Acme Inc. / Developer"
                    value={value}
                    onChange={onChange}
                    onBlur={onBlur}
                  />
                )}
              </FormField>
              
              <FormField name="dietaryRestrictions">
                {({ value, onChange, onBlur }) => (
                  <Input
                    label="Dietary Restrictions"
                    placeholder="Vegetarian, allergies, etc."
                    value={value}
                    onChange={onChange}
                    onBlur={onBlur}
                  />
                )}
              </FormField>
              
              <CardFooter className="flex justify-center">
                <Button type="submit" variant="accent" size="lg" fullWidth>
                  Register for Ticket
                </Button>
              </CardFooter>
            </Form>
          </CardContent>
        </Card>
      </Container>
    </div>
  );
};