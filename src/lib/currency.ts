export type Region = 'US' | 'IN';

export const formatPrice = (price: number, region: Region): string => {
  if (region === 'US') {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(price);
  }
  
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(price);
};

export const detectRegion = (): Region => {
  // Check browser language/locale
  const language = navigator.language || navigator.languages?.[0] || 'en-US';
  
  // Check timezone
  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  
  // Indian locales and timezones
  if (
    language.includes('IN') || 
    language === 'hi' || 
    language === 'hi-IN' ||
    timezone === 'Asia/Kolkata' ||
    timezone === 'Asia/Calcutta'
  ) {
    return 'IN';
  }
  
  // Default to US
  return 'US';
};

export const getRegionInfo = (region: Region) => {
  return {
    US: {
      name: 'United States',
      code: 'US',
      flag: '🇺🇸',
      currency: 'USD',
      currencySymbol: '$',
    },
    IN: {
      name: 'India',
      code: 'IN',
      flag: '🇮🇳',
      currency: 'INR',
      currencySymbol: '₹',
    },
  }[region];
};
