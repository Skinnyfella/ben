import React from 'react';
import { Linkedin } from 'lucide-react';

const caseStudies = [
  {
    id: 1,
    title: 'Brand Refresh for ACME',
    summary:
      "Revamped ACME's brand identity and boosted engagement by 48%. Short case summary highlighting the outcome.",
    image: '/cases/case-1.png',
  },
  {
    id: 2,
    title: 'SEO Growth for BetaCo',
    summary: 'Implemented SEO strategy leading to 3x organic traffic in 6 months.',
    image: '/cases/case-2.png',
  },
  {
    id: 3,
    title: 'Paid Ads Optimization',
    summary: 'Reduced CPA by 32% while increasing conversion volume for a key campaign.',
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
                <div className="text-sm text-gray-400">Read more →</div>
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
