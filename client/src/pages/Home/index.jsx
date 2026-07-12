import { useEffect } from 'react';
import Hero from '@/components/home/Hero';
import FinancialHealthScore from '@/components/home/FinancialHealthScore';
import SmartBorrowingCapacity from '@/components/home/SmartBorrowingCapacity';
import Counter from '@/components/home/Counter';
import PartnerSlider from '@/components/home/PartnerSlider';
import PromoSlider from '@/components/home/PromoSlider';
import LoanCard from '@/components/home/LoanCard';
import WhyChooseCard from '@/components/home/WhyChooseCard';
import CalculatorCard from '@/components/home/CalculatorCard';
import Timeline from '@/components/home/Timeline';
import CityCard from '@/components/home/CityCard';
import ReviewCarousel from '@/components/home/ReviewCarousel';
import BlogCard from '@/components/home/BlogCard';
import CTASection from '@/components/home/CTASection';
import SectionTitle from '@/components/home/SectionTitle';
import { BankCard } from '@/components/platform';
import hdfcLogo from '@/assets/banks/HDFC Bank Logo.svg';
import iciciLogo from '@/assets/banks/ICICI Bank Logo.svg';
import sbiLogo from '@/assets/banks/SBI-logo.svg';
import axisLogo from '@/assets/banks/Axis Bank logo.svg';
import pnbLogo from '@/assets/banks/Punjab National Bank new logo.svg';
import canaraLogo from '@/assets/banks/Canara Bank Logo.svg';
import unionLogo from '@/assets/banks/Union Bank of India Logo.svg';
import idfcLogo from '@/assets/banks/Logo of IDFC First Bank.svg';
import bobLogo from '@/assets/banks/Bank of Baroda Logo since Dec 19.png';
import mahindraLogo from '@/assets/banks/Mahindra Finance SVG Logo.svg';
import stats from '@/data/stats.json';
import partners from '@/data/partners.json';
import loanProducts from '@/data/loanProducts.json';
import promoSlides from '@/data/promoSlides.json';
import whyChoose from '@/data/whyChoose.json';
import cities from '@/data/cities.json';
import reviews from '@/data/reviews.json';
import blogs from '@/data/blogs.json';
import timeline from '@/data/timeline.json';

const calculatorCards = [
  {
    title: 'EMI Preview',
    description: 'Explore how tenure, interest rate, and loan size can shape your monthly outflow.',
    valueLabel: 'Monthly EMI',
    value: '₹12,480',
    toneClass: 'from-sky-500 to-cyan-400'
  },
  {
    title: 'Savings View',
    description: 'Compare alternative rates and see how smart refinancing can improve your planning.',
    valueLabel: 'Potential Savings',
    value: '₹1.8L',
    toneClass: 'from-violet-500 to-fuchsia-400'
  }
];

const bankPartners = [
  {
    name: 'HDFC Bank',
    logo: hdfcLogo,
    logoAlt: 'HDFC Bank logo',
    rating: '4.9',
    benefit: 'Premium lending and account-linked offers',
    products: ['Personal Loan', 'Home Loan', 'Credit Card']
  },
  {
    name: 'ICICI Bank',
    logo: iciciLogo,
    logoAlt: 'ICICI Bank logo',
    rating: '4.8',
    benefit: 'Fast digital borrowing journeys',
    products: ['Personal Loan', 'Car Loan', 'Credit Card']
  },
  {
    name: 'State Bank of India',
    logo: sbiLogo,
    logoAlt: 'State Bank of India logo',
    rating: '4.7',
    benefit: 'Wide branch network and trusted lending',
    products: ['Home Loan', 'Education Loan', 'Gold Loan']
  },
  {
    name: 'Axis Bank',
    logo: axisLogo,
    logoAlt: 'Axis Bank logo',
    rating: '4.7',
    benefit: 'Convenient retail and business loans',
    products: ['Personal Loan', 'Business Loan', 'Credit Card']
  },
  {
    name: 'Punjab National Bank',
    logo: pnbLogo,
    logoAlt: 'Punjab National Bank logo',
    rating: '4.6',
    benefit: 'Public sector lending with broad reach',
    products: ['Home Loan', 'Car Loan', 'Education Loan']
  },
  {
    name: 'Canara Bank',
    logo: canaraLogo,
    logoAlt: 'Canara Bank logo',
    rating: '4.6',
    benefit: 'Stable banking support for multiple needs',
    products: ['Home Loan', 'Gold Loan', 'Personal Loan']
  },
  {
    name: 'Union Bank of India',
    logo: unionLogo,
    logoAlt: 'Union Bank of India logo',
    rating: '4.5',
    benefit: 'Balanced lending across loan categories',
    products: ['Home Loan', 'Business Loan', 'Car Loan']
  },
  {
    name: 'IDFC FIRST Bank',
    logo: idfcLogo,
    logoAlt: 'IDFC FIRST Bank logo',
    rating: '4.8',
    benefit: 'Digital-first lending and premium service',
    products: ['Personal Loan', 'Credit Card', 'Business Loan']
  },
  {
    name: 'Mahindra Finance',
    logo: mahindraLogo,
    logoAlt: 'Mahindra Finance logo',
    rating: '4.6',
    benefit: 'NBFC financing built for retail needs',
    products: ['Two Wheeler Loan', 'Business Loan', 'Personal Loan']
  },
  {
    name: 'Bank of Baroda',
    logo: bobLogo,
    logoAlt: 'Bank of Baroda logo',
    rating: '4.5',
    benefit: 'Public sector lender with wide retail coverage',
    products: ['Home Loan', 'Car Loan', 'Personal Loan']
  }
];

const Home = () => {
  useEffect(() => {
    document.title = 'MGFINA | Premium Loan Marketplace';

    const description = document.querySelector('meta[name="description"]');
    if (description) {
      description.setAttribute(
        'content',
        'MGFINA is a premium finance homepage for comparing loans, calculating EMIs, and exploring trusted banking partners.'
      );
    }
  }, []);

  return (
    <main className="bg-slate-50 text-slate-900">
      <Hero stats={stats} />
      <FinancialHealthScore />
      <SmartBorrowingCapacity />
      <PartnerSlider partners={partners} />

      <section className="bg-white">
        <div className="page-shell py-16">
          <SectionTitle
            eyebrow="our impact"
            title="Measured results and a growing partner network."
            description="A simple, premium borrowing experience starts with trust, clarity, and a strong network behind it."
          />
          <Counter stats={stats} />
        </div>
      </section>

      <PromoSlider slides={promoSlides} />

      <section id="loan-products" className="bg-slate-50">
        <div className="page-shell py-16">
          <SectionTitle
            eyebrow="loan products"
            title="A focused product range for different financial goals."
            description="Each product is presented with clear features and a clean path to action."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {loanProducts.map((loan, index) => (
              <LoanCard key={loan.title} loan={loan} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section id="why" className="bg-white">
        <div className="page-shell py-16">
          <SectionTitle
            eyebrow="why choose mgfina"
            title="Built to feel clear, premium, and easy to trust."
            description="The entire flow is structured to reduce friction and keep the experience calm and modern."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {whyChoose.map((item) => (
              <WhyChooseCard key={item.title} item={item} />
            ))}
          </div>
        </div>
      </section>

      <section id="calculators" className="bg-slate-50">
        <div className="page-shell py-16">
          <SectionTitle
            eyebrow="emi calculator preview"
            title="Quick planning cards for smarter borrowing."
            description="Use the preview area to understand how the numbers can be framed before the full calculator arrives."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {calculatorCards.map((card) => (
              <CalculatorCard key={card.title} {...card} />
            ))}
          </div>
        </div>
      </section>

      <section id="bank-partners" className="bg-white">
        <div className="page-shell py-16">
          <SectionTitle
            eyebrow="bank partners"
            title="A responsive lender grid with premium hover motion."
            description="A refined partner showcase that keeps the lender ecosystem visible and easy to scan."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {bankPartners.map((partner) => (
              <BankCard key={partner.name} bank={partner} />
            ))}
          </div>
        </div>
      </section>

      <section id="how-it-works" className="bg-slate-50">
        <div className="page-shell py-16">
          <SectionTitle
            eyebrow="how it works"
            title="A simple 4-step journey from interest to application."
            description="Borrowers stay informed at every step, from first detail sharing to application tracking."
          />
          <div className="mt-10">
            <Timeline steps={timeline} />
          </div>
        </div>
      </section>

      <section id="cities" className="bg-white">
        <div className="page-shell py-16">
          <SectionTitle
            eyebrow="cities"
            title="Serving major cities with a modern digital-first approach."
            description="A city view gives a quick feel for coverage without adding complexity."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {cities.map((city) => (
              <CityCard key={city.name} city={city} />
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="bg-slate-50">
        <div className="page-shell py-16">
          <SectionTitle
            eyebrow="customer reviews"
            title="Warm feedback from people who value clarity."
            description="A carousel keeps the reviews compact while still letting each voice feel distinct."
          />
          <div className="mt-10">
            <ReviewCarousel reviews={reviews} />
          </div>
        </div>
      </section>

      <section id="blogs" className="bg-white">
        <div className="page-shell py-16">
          <SectionTitle
            eyebrow="latest blogs"
            title="Fresh finance insights, editorial and easy to scan."
            description="Short reads help build trust while making the content area feel active and current."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {blogs.map((blog) => (
              <BlogCard key={blog.title} blog={blog} />
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </main>
  );
};

export default Home;
