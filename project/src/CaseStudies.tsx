import React from 'react';
import { Linkedin } from 'lucide-react';

const caseStudies = [
  {
    id: 1,
    title: 'Welcome Email Redesign for Revibed Drinks',
    summary:
      "A full redesign of the brand’s existing welcome email to improve clarity, retention, and conversions. The new structure introduces the brand’s mission, highlights what makes their drinks unique, and uses bold visuals to make the message more energetic and refreshing — matching their beverage branding. The CTA and product features were reorganized to improve flow and make the email more beginner-friendly for new subscribers.",
    image: '/cases/case-1.png',
  },
  {
    id: 2,
    title: 'Campaign Email for Pooch & Mutt',
    summary: 'A promotional email created for a pet-care brand to boost engagement and drive sales during an ongoing campaign. The content is playful and friendly, matching their pet-centric tone. The email showcases their top-selling dog treats, includes a limited-time offer, and uses strong visual hierarchy to guide users straight to the “Shop Now” action. The goal was to increase click-through rates while keeping the brand’s fun personality intact.',
    image: '/cases/case-2.png',
  },
  {
    id: 3,
    title: 'Welcome Email Design for Sync Beauty',
    summary: 'A clean, feminine, product-focused welcome email designed to introduce new customers to the Sync Beauty brand. The design highlights their core skincare products, communicates the brand story in a friendly tone, and includes a clear call-to-action that encourages users to explore the shop. The layout is built to feel warm, modern, and trustworthy — matching the visual style of a beauty and self-care brand.',
    image: '/cases/case-3.png',
  },
];

export default function CaseStudies() {
  return (
    <div className="min-h-screen bg-black text-white p-6 md:p-8 lg:p-10">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-4xl font-semibold">Case studies</h1>
          <div className="flex items-center gap-4">
            <button
              onClick={() => (window.location.href = '/')}
              className="text-gray-400 hover:text-white"
            >
              Back
            </button>
          </div>
        </div>

        <div className="space-y-12">
          {caseStudies.map((c, i) => (
            <section
              key={c.id}
              className={`flex flex-col md:flex-row items-start gap-8 ${i % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
            >
              <div className="md:w-1/2 w-full">
                <div className="bg-[#0f1724] rounded-2xl p-6">
                  <div className="h-64 md:h-80 bg-[#111827] rounded-lg overflow-hidden">
                    <img src={c.image || '/image.png'} alt={c.title} className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>

              <div className="md:w-1/2 w-full flex flex-col justify-center">
                <h2 className="text-2xl font-semibold mb-3">{c.title}</h2>
                <p className="text-gray-300 mb-4">{c.summary} Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
