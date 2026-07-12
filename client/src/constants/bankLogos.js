import hdfcLogo from '@/assets/banks/HDFC Bank Logo.svg';
import iciciLogo from '@/assets/banks/ICICI Bank Logo.svg';
import sbiLogo from '@/assets/banks/SBI-logo.svg';
import axisLogo from '@/assets/banks/Axis Bank logo.svg';
import pnbLogo from '@/assets/banks/Punjab National Bank new logo.svg';
import canaraLogo from '@/assets/banks/Canara Bank Logo.svg';
import unionLogo from '@/assets/banks/Union Bank of India Logo.svg';
import idfcLogo from '@/assets/banks/Logo of IDFC First Bank.svg';
import mahindraLogo from '@/assets/banks/Mahindra Finance SVG Logo.svg';
import bobLogo from '@/assets/banks/Bank of Baroda Logo since Dec 19.png';
import federalLogo from '@/assets/banks/Federal bank India.svg';
import equitasLogo from '@/assets/banks/Equitas-logo.png';
import ujjivanLogo from "@/assets/banks/Ujjivan's new logo.jpg";
import southIndianLogo from '@/assets/banks/South indian bank logo.png';

const bankLogos = {
  'HDFC Bank': { src: hdfcLogo, alt: 'HDFC Bank logo' },
  'ICICI Bank': { src: iciciLogo, alt: 'ICICI Bank logo' },
  'State Bank of India': { src: sbiLogo, alt: 'State Bank of India logo' },
  'Axis Bank': { src: axisLogo, alt: 'Axis Bank logo' },
  'Punjab National Bank': { src: pnbLogo, alt: 'Punjab National Bank logo' },
  'Canara Bank': { src: canaraLogo, alt: 'Canara Bank logo' },
  'Union Bank of India': { src: unionLogo, alt: 'Union Bank of India logo' },
  'IDFC FIRST Bank': { src: idfcLogo, alt: 'IDFC FIRST Bank logo' },
  'Mahindra Finance': { src: mahindraLogo, alt: 'Mahindra Finance logo' },
  'Bank of Baroda': { src: bobLogo, alt: 'Bank of Baroda logo' },
  'Federal Bank': { src: federalLogo, alt: 'Federal Bank logo' },
  'Equitas Small Finance Bank': { src: equitasLogo, alt: 'Equitas Small Finance Bank logo' },
  'Ujjivan Small Finance Bank': { src: ujjivanLogo, alt: 'Ujjivan Small Finance Bank logo' },
  'South Indian Bank': { src: southIndianLogo, alt: 'South Indian Bank logo' }
};

export const getBankLogo = (name) => bankLogos[name] || null;

export const bankLogoEntries = Object.entries(bankLogos).map(([name, logo]) => ({ name, ...logo }));

export default bankLogos;
