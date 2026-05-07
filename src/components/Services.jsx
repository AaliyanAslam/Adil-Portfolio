import React from "react";

// 1. Data-driven approach for maintainability
const SERVICES = [
  {
    id: "01",
    title: "Custom Web Application Development",
    description: "Develop scalable and secure web applications using Laravel and modern JavaScript frameworks like React or Vue.",
    icon: (
      <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253" />
      </svg>
    ),
  },
  {
    id: "02",
    title: "API Development & Integration",
    description: "Design, develop, and integrate RESTful and GraphQL APIs to facilitate seamless communication between services.",
    icon: (
      <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
      </svg>
    ),
  },
  {
    id: "03",
    title: "Performance Optimization",
    description: "Refactor existing Laravel applications to improve code quality, performance, and security following best practices.",
    icon: (
      <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
  {
    id: "04",
    title: "Stripe Payment Integration",
    description: "Implement secure payment processing with Stripe, including subscriptions, one-time payments, and webhooks.",
    icon: (
      <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a2.25 2.25 0 0 0-2.25-2.25H15a3 3 0 1 1-6 0H5.25A2.25 2.25 0 0 0 3 12m18 0v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 9m18 0V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v3" />
      </svg>
    ),
  },
  {
    id: "05",
    title: "Database Optimization",
    description: "Design efficient database schemas and optimize queries for MySQL, PostgreSQL, or MongoDB for high performance.",
    icon: (
      <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75" />
      </svg>
    ),
  },
];

// 2. Extracted sub-component for cleaner main render
const ServiceCard = ({ service }) => (
  <div className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-[#111827]/50 p-8 transition-all duration-300 hover:border-purple-500/50 hover:bg-[#111827]">
    {/* Subtle Background Glow on Hover */}
    <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-purple-600/10 blur-3xl transition-opacity opacity-0 group-hover:opacity-100" />
    
    <div>
      <div className="mb-6 flex items-center justify-between">
        <div className="rounded-lg bg-blue-500/10 p-3 text-blue-400 ring-1 ring-blue-500/20 transition-colors group-hover:bg-blue-500 group-hover:text-white">
          {service.icon}
        </div>
        <span className="text-xs font-mono text-gray-500">{service.id}</span>
      </div>
      
      <h3 className="mb-3 text-xl font-semibold tracking-tight text-white group-hover:text-blue-400 transition-colors">
        {service.title}
      </h3>
      <p className="text-sm leading-relaxed text-gray-400">
        {service.description}
      </p>
    </div>

    <div className="mt-8 flex items-center text-xs font-bold uppercase tracking-wider text-blue-400 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-1">
      Learn More 
      <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
      </svg>
    </div>
  </div>
);

export const Services = () => {
  return (
    <section className="relative w-full bg-[#030712] py-24 px-6 sm:px-12">
      {/* 3. Modern Ambient Background (No tacky gradients) */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-[10%] -left-[10%] h-[40%] w-[40%] rounded-full bg-blue-900/20 blur-[120px]" />
        <div className="absolute -bottom-[10%] -right-[10%] h-[40%] w-[40%] rounded-full bg-purple-900/20 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Header Section: Minimalist & Pro */}
        <div className="mb-20 max-w-2xl">
          <h2 className="mb-4 inline-block rounded-full bg-blue-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-blue-400 ring-1 ring-inset ring-blue-500/20">
            Expertise
          </h2>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            My <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">Services</span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-400">
            I build high-performance, enterprise-grade web applications with a focus on 
            scalability and developer experience.
          </p>
        </div>

        {/* 4. Asymmetrical Bento Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-6 lg:grid-cols-12">
          {/* Item 1 - Wide */}
          <div className="md:col-span-3 lg:col-span-4">
            <ServiceCard service={SERVICES[0]} />
          </div>
          {/* Item 2 - Normal */}
          <div className="md:col-span-3 lg:col-span-4">
            <ServiceCard service={SERVICES[1]} />
          </div>
          {/* Item 3 - Small / Tall */}
          <div className="md:col-span-6 lg:col-span-4 lg:row-span-1">
            <ServiceCard service={SERVICES[2]} />
          </div>
          {/* Item 4 - Wide Bottom */}
          <div className="md:col-span-3 lg:col-span-7">
            <ServiceCard service={SERVICES[3]} />
          </div>
          {/* Item 5 - The Rest */}
          <div className="md:col-span-3 lg:col-span-5">
            <ServiceCard service={SERVICES[4]} />
          </div>
        </div>
      </div>
    </section>
  );
};