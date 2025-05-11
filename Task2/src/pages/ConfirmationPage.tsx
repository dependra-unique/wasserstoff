import React from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  Button,
  Logo,
  Container,
  Title,
  Text,
  Avatar,
  Badge,
  AccentText,
} from '../lib/components';

interface LocationState {
  userData: {
    fullName: string;
    email: string;
    companyRole: string;
    avatar?: string | null;
  };
  ticketId: string;
}

export const ConfirmationPage: React.FC = () => {
  const location = useLocation();
  const state = location.state as LocationState;

  // If no user data is available, redirect back to registration
  if (!state?.userData) {
    return <Navigate to="/" />;
  }

  const { userData, ticketId } = state;
  const nameParts = userData.fullName.split(' ');
  const firstName = nameParts[0];
  const lastName = nameParts.length > 1 ? nameParts.slice(1).join(' ') : '';

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
            <Title className="text-center mb-1">
              Congrats, <AccentText>{firstName} {lastName}</AccentText>!
            </Title>
            <Text className="text-center">
              Your ticket is ready.
            </Text>
          </CardHeader>
          
          <CardContent>
            <Text className="mb-6 text-center">
              We've emailed your ticket to <span className="text-white">{userData.email}</span>. You will receive additional details as the event approaches.
            </Text>
            
            <Card className="mb-6 hover:transform hover:scale-[1.01] transition-transform duration-300">
              <div className="flex items-center mb-4">
                <Logo size="sm" />
                <Badge variant="success" className="ml-auto">
                  CONFIRMED
                </Badge>
              </div>
              
              <div className="flex items-center gap-4 mb-3">
                <Avatar 
                  size="lg" 
                  src={userData.avatar || undefined}
                  alt={userData.fullName} 
                  withBorder 
                />
                <div>
                  <Text className="text-white font-medium">
                    {userData.fullName}
                  </Text>
                  {userData.companyRole && (
                    <Text className="text-xs">
                      {userData.companyRole}
                    </Text>
                  )}
                </div>
              </div>
              
              <div className="flex justify-between items-center pt-3 border-t border-primary/20">
                <div>
                  <Text className="text-xs">TICKET ID</Text>
                  <Text className="text-white font-mono">{ticketId}</Text>
                </div>
                <div>
                  <Text className="text-xs">DATE</Text>
                  <Text className="text-white">June 15-17, 2025</Text>
                </div>
              </div>
            </Card>
          </CardContent>
          
          <CardFooter className="flex flex-col gap-3">
            <Button variant="primary" fullWidth>
              Add to Calendar
            </Button>
            <Button variant="outline" fullWidth>
              Share Invitation
            </Button>
          </CardFooter>
        </Card>
      </Container>
    </div>
  );
};