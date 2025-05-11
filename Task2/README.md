# Coding Conference UI Library

A beautiful, reusable component library for building conference registration flows with a cosmic design aesthetic.

## Features

- Modular, self-contained components
- TypeScript support with strong typing
- CSS class-based styling (no inline styles)
- DRY (Don't Repeat Yourself) principles
- Cosmic-themed visuals with animations

## Getting Started

### Installation

```bash
npm install
```

### Running the Demo

```bash
npm run dev
```

Visit the URL shown in your terminal to see the demo application.

## Component Library

The component library is organized in the `/src/lib` directory:

```
/src/lib
  /components
    /Avatar
    /Badge
    /Button
    /Card
    /Container
    /Form
    /Input
    /Logo
    /Typography
```

### Usage Example

```tsx
import React from 'react';
import { 
  Button, 
  Card, 
  Input, 
  Title 
} from './lib/components';

function MyComponent() {
  return (
    <Card withGlow>
      <Title>Hello World</Title>
      <Input 
        label="Name" 
        placeholder="Enter your name" 
      />
      <Button variant="accent">
        Submit
      </Button>
    </Card>
  );
}
```

## Design System

The UI library implements a cosmic-themed design system with the following characteristics:

- Deep purple background with cosmic accents
- Glowing UI elements with subtle animations
- High contrast text for readability
- Responsive design that works on all screen sizes
- Consistent spacing and typography

