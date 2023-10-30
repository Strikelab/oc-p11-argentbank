// validationService.js

// Function to check if a given input value is not empty
export const isNotEmpty = (value) => {
  return value.trim() !== "";
};

// Function to check if a given input value is a valid email address
export const isValidEmail = (value) => {
  // You can use a regular expression to validate email addresses
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(value);
};
