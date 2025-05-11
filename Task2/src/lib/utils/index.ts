export const validateEmail = (email: string): boolean => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

export const validatePhone = (phone: string): boolean => {
  // Simple phone validation, can be enhanced as needed
  const re = /^\+?\d{10,15}$/;
  return re.test(String(phone).replace(/\s+/g, ''));
};

export const generateTicketId = (): string => {
  return `CONF-${Math.floor(Math.random() * 10000)
    .toString()
    .padStart(4, '0')}`;
};