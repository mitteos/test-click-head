export const validatePositiveNumber = (value: string): string => {
  const sanitizedValue = value.replace(/[^\d.]/g, "");

  const numberValue = Number(sanitizedValue);

  if (isNaN(numberValue) || numberValue < 0) {
    return "";
  }

  const [whole, decimal] = sanitizedValue.split(".");
  if (decimal) {
    return `${whole}.${decimal.slice(0, 2)}`;
  }

  return sanitizedValue;
};
