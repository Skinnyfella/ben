import { useState, useEffect } from 'react';
import { Linkedin } from 'lucide-react';

function MapImage() {
  const [src, setSrc] = useState<string>('');
  const [status, setStatus] = useState<'checking' | 'ok' | 'fallback' | 'error'>('checking');

  // Try to fetch /map.png first to ensure it is served correctly.
  // If it's not available or not an image, fall back to /image.png, then final SVG.
  useEffect(() => {
    let mounted = true;

    fetch('/map.png', { method: 'GET', cache: 'no-cache' })
      .then((res) => {
        if (!mounted) return;
        if (res.ok) {
          const ct = res.headers.get('content-type') || '';
          if (ct.startsWith('image')) {
            setSrc('/map.png');
            setStatus('ok');
            return;
          }
        }
        // fallback to bundled image.png
        setSrc('/image.png');
        setStatus('fallback');
      })
      .catch(() => {
        if (!mounted) return;
        setSrc('/image.png');
        setStatus('error');
      });

    return () => {
      mounted = false;
    };
  }, []);

  useEffect(() => {
    // If both public images fail to render for some reason, ensure a final SVG is used.
    if (!src) return;
    const img = new Image();
    img.onload = () => {
      /* loaded */
    };
    img.onerror = () => {
      // if the chosen src fails to load, show a simple SVG placeholder
      setSrc(
        'data:image/svg+xml;utf8,' +
          encodeURIComponent(
            '<svg xmlns="http://www.w3.org/2000/svg" width="600" height="200"><rect width="100%" height="100%" fill="#4b5563" rx="12"/><text x="50%" y="50%" fill="#cbd5e1" font-size="20" font-family="Arial, Helvetica, sans-serif" text-anchor="middle" dominant-baseline="middle">Map unavailable</text></svg>'
          )
      );
      setStatus('error');
    };
    img.src = src;
  }, [src]);

  return (
    <div className="w-full h-full">
      {status === 'checking' && <div className="w-full h-full bg-gray-600/20" />}
      {src && <img src={src} alt="map" className="w-full h-full object-cover" />}
    </div>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-black text-white p-4 md:p-6 lg:p-8">
      <div className="max-w-[1400px] mx-auto space-y-4 md:space-y-6">

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-4 md:gap-6 items-stretch">
          <div className="space-y-4 md:space-y-6 flex flex-col">
            <div className="bg-[#1a1a1a] rounded-3xl p-8 md:p-10 lg:p-12">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight mb-6 md:mb-8">
                Helping Businesses Grow Through Digital Marketing
              </h1>
              <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full text-lg font-medium transition-colors">
                Hire me
              </button>
            </div>

            <div className="grid grid-cols-3 gap-4 md:gap-6">
              <div className="bg-[#22c55e] rounded-3xl p-6 md:p-8 text-center flex flex-col justify-center min-h-[160px]">
                <div className="text-4xl md:text-5xl font-bold mb-2">2+</div>
                <div className="text-base md:text-lg font-light">Years experience</div>
              </div>

              <div className="bg-[#fbbf24] rounded-3xl p-6 md:p-8 text-center flex flex-col justify-center min-h-[160px]">
                <div className="text-4xl md:text-5xl font-bold mb-2">20+</div>
                <div className="text-base md:text-lg font-light">Handled Project</div>
              </div>

              <div className="bg-[#fb923c] rounded-3xl p-6 md:p-8 text-center flex flex-col justify-center min-h-[160px]">
                <div className="text-4xl md:text-5xl font-bold mb-2">7+</div>
                <div className="text-base md:text-lg font-light">Client</div>
              </div>
            </div>
          </div>

          <div className="space-y-4 md:space-y-6 flex flex-col h-full">
            <div className="bg-[#1a1a1a] rounded-3xl px-8 py-4 flex items-center justify-between">
              <span className="text-xl md:text-2xl font-light">
                Benjamin<span className="font-semibold">Graph</span>
              </span>
              <div className="flex flex-col gap-1">
                <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-[260px_1fr] gap-4 md:gap-6 h-full items-start">
              <div className="bg-[#d4d4e8] rounded-3xl overflow-hidden h-full">
                <img
                  src="/image.png"
                  alt="Benjamin Shotala"
                  className="w-full h-full object-cover block"
                />
              </div>

              <div className="flex flex-col gap-4 md:gap-6 h-full">
                <div className="bg-[#1a1a1a] rounded-3xl p-5 md:p-6">
                  <span className="text-gray-400 text-sm md:text-base">Name:</span>
                  <p className="text-xl md:text-2xl font-light mt-1">Benjamin Shotala</p>
                </div>

                <div className="bg-[#1a1a1a] rounded-3xl p-5 md:p-6">
                  <div>
                    <span className="text-gray-400 text-sm md:text-base">Based in:</span>
                    <p className="text-xl md:text-2xl font-light mt-1">Nigeria</p>
                  </div>
                  <div className="mt-4 bg-white/20 rounded-xl overflow-hidden h-28">
                    {/* Use stateful src so we can swap to a fallback if loading fails */}
                    <MapImage />
                  </div>
                </div>

                <div className="bg-[#1a1a1a] rounded-3xl p-5 md:p-6 mt-auto flex items-center justify-between">
                  <div className="bg-blue-600 rounded-full p-3 inline-flex">
                    <Linkedin className="w-6 h-6" />
                  </div>
                  <div className="text-sm text-green-400">available</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
          <div className="bg-[#1a1a1a] rounded-3xl p-8 md:p-10">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl md:text-4xl font-semibold">Case studies</h2>
              <button className="text-gray-400 hover:text-white text-lg transition-colors">See All</button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-[#e5e5e5] rounded-2xl aspect-square"></div>
              <div className="bg-[#e5e5e5] rounded-2xl aspect-square"></div>
              <div className="bg-[#e5e5e5] rounded-2xl aspect-square"></div>
            </div>
          </div>

          <div className="bg-[#1a1a1a] rounded-3xl p-8 md:p-10">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl md:text-4xl font-semibold">About me</h2>
              <button className="text-gray-400 hover:text-white text-lg transition-colors">Resume</button>
            </div>

            <p className="text-gray-300 leading-relaxed text-base md:text-lg">
              I am a digital marketing expert passionate about creating impactful marketing campaigns that drive results. With a strong understanding of SEO, content marketing, and CRM tools like HubSpot and Salesforce, I collaborate closely with brands to enhance their online presence and achieve measurable growth.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
