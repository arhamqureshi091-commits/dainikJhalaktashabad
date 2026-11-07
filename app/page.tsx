import Image from "next/image";
import Link from "next/link";
import { Menu, Search, Moon } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 font-sans">
      {/* ============ TOP UTILITY BAR ============ */}
      <div className="bg-gray-900 text-white text-xs py-1">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div className="flex gap-2 items-center">
            <span className="font-semibold">शुक्रवार, 6 नवंबर 2026</span>
            <span className="text-gray-500">|</span>
            <span className="text-gray-300">भोपाल • इंदौर • ग्वालियर • जबलपुर</span>
          </div>
          <div className="flex gap-4 items-center">
            <Link href="#" className="hover:text-orange-400">FB</Link>
            <Link href="#" className="hover:text-orange-400">X</Link>
            <Link href="#" className="hover:text-orange-400">YT</Link>
            <button title="डार्क मोड बदलें" className="hover:text-orange-400">
              <Moon size={14} />
            </button>
          </div>
        </div>
      </div>

      {/* ============ MASTHEAD ============ */}
      <header className="bg-white py-4 border-b">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div className="flex flex-col">
            <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded font-bold w-max">ई-पेपर</span>
            <span className="text-gray-500 text-xs mt-1">ताज़ा खबरें @ 09:41</span>
          </div>
          <Link href="/" className="text-4xl font-black text-gray-900 tracking-tighter">
            दैनिक <span className="text-orange-600">झलकते शब्द</span>
          </Link>
          <div>
            <button className="bg-orange-600 text-white px-4 py-2 text-sm font-bold rounded hover:bg-orange-700 transition">
              सदस्यता लें
            </button>
          </div>
        </div>
      </header>

      {/* ============ NAVBAR ============ */}
      <nav className="bg-gray-800 text-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-12">
          <button className="lg:hidden p-2">
            <Menu size={20} />
          </button>
          <ul className="hidden lg:flex gap-6 text-sm font-semibold">
            <li><Link href="#" className="text-orange-400">होम</Link></li>
            <li><Link href="#mp" className="hover:text-orange-400">म.प्र.</Link></li>
            <li><Link href="#national" className="hover:text-orange-400">देश-दुनिया</Link></li>
            <li><Link href="#business" className="hover:text-orange-400">कारोबार</Link></li>
            <li><Link href="#sports" className="hover:text-orange-400">खेल</Link></li>
            <li><Link href="#tech" className="hover:text-orange-400">टेक्नोलॉजी</Link></li>
            <li><Link href="#entertainment" className="hover:text-orange-400">मनोरंजन</Link></li>
            <li><Link href="#photos" className="hover:text-orange-400">तस्वीरें</Link></li>
            <li><Link href="#rashifal" className="hover:text-orange-400">राशिफल</Link></li>
          </ul>
          <button className="p-2 hover:text-orange-400">
            <Search size={18} />
          </button>
        </div>
      </nav>

      {/* ============ HERO SECTION ============ */}
      <section className="max-w-7xl mx-auto px-4 py-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Main Hero Story */}
        <article className="lg:col-span-2 bg-white rounded shadow overflow-hidden group">
          <Link href="#">
            <div className="relative h-[400px] w-full overflow-hidden">
              <Image 
                src="https://picsum.photos/seed/parliament-session/900/560" 
                alt="प्रमुख खबर" 
                fill
                className="object-cover group-hover:scale-105 transition duration-300"
              />
              <span className="absolute top-4 left-4 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded animate-pulse">
                लाइव
              </span>
            </div>
          </Link>
          <div className="p-6">
            <span className="text-red-600 font-bold text-sm">प्रमुख खबर</span>
            <h1 className="text-3xl font-bold mt-2 mb-3 leading-tight hover:text-orange-600 transition">
              <Link href="#">विधानसभा में 'डिजिटल अर्थव्यवस्था विधेयक' पारित — सियासी संग्राम जारी</Link>
            </h1>
            <p className="text-gray-600 text-sm mb-4">
              रात 2 बजे तक चली बहस के बाद विधेयक पारित हुआ। इसमें ऑनलाइन पेमेंट, डेटा सुरक्षा और 
              फ्रीलांसरों के पंजीकरण का ढांचा रखा गया है। प्रशासनिक सूत्रों ने इसे दशक का सबसे 
              बड़ा आर्थिक सुधार बताया।
            </p>
            <div className="text-xs text-gray-400 font-medium">
              <span>2 घंटे पहले</span> • <span>राजनीति</span>
            </div>
          </div>
        </article>

        {/* Secondary Stories */}
        <div className="flex flex-col gap-6">
          <article className="bg-white rounded shadow overflow-hidden group">
            <Link href="#">
              <div className="relative h-[200px] w-full overflow-hidden">
                <Image 
                  src="https://picsum.photos/seed/market-screens/600/400" 
                  alt="शेयर बाज़ार" 
                  fill
                  className="object-cover group-hover:scale-105 transition duration-300"
                />
              </div>
            </Link>
            <div className="p-4">
              <span className="text-orange-600 font-bold text-xs">कारोबार</span>
              <h2 className="text-lg font-bold mt-1 leading-tight hover:text-orange-600 transition">
                <Link href="#">सेंसेक्स 80,000 के पार — तेजी जारी, निवेशकों में खुशी</Link>
              </h2>
            </div>
          </article>

          <article className="bg-white rounded shadow overflow-hidden group">
            <Link href="#">
              <div className="relative h-[200px] w-full overflow-hidden">
                <Image 
                  src="https://picsum.photos/seed/flood-relief/600/400" 
                  alt="मौसम" 
                  fill
                  className="object-cover group-hover:scale-105 transition duration-300"
                />
              </div>
            </Link>
            <div className="p-4">
              <span className="text-orange-600 font-bold text-xs">म.प्र.</span>
              <h2 className="text-lg font-bold mt-1 leading-tight hover:text-orange-600 transition">
                <Link href="#">शीतलहर चेतावनी — भोपाल-ग्वालियर समेत 15 शहरों के लिए अलर्ट</Link>
              </h2>
            </div>
          </article>
        </div>
      </section>

      {/* ============ MAIN CONTENT & SIDEBAR ============ */}
      <section className="max-w-7xl mx-auto px-4 py-6 grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* ===== LEFT CONTENT (NEWS FEED) ===== */}
        <div className="lg:col-span-2 flex flex-col gap-8">
          <div className="bg-white p-4 rounded shadow">
            <div className="flex justify-between items-center border-b pb-2 mb-4">
              <h2 className="text-xl font-bold text-gray-900 border-b-2 border-orange-600 inline-block">
                प्रमुख खबरें
              </h2>
              <Link href="#" className="text-sm text-blue-600 hover:underline">
                और देखें →
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <article className="group">
                <Link href="#">
                  <div className="relative h-48 w-full overflow-hidden rounded mb-2">
                    <Image 
                      src="https://picsum.photos/seed/city-traffic/600/400" 
                      alt="देश" 
                      fill 
                      className="object-cover group-hover:scale-105 transition duration-300" 
                    />
                  </div>
                </Link>
                <span className="text-orange-600 font-bold text-xs">देश</span>
                <h3 className="font-bold text-lg leading-tight mt-1 hover:text-orange-600 transition">
                  <Link href="#">जलवायु सम्मेलन में नई वित्तीय प्रतिबद्धताएँ घोषित</Link>
                </h3>
                <p className="text-xs text-gray-500 mt-2">3 घंटे पहले</p>
              </article>

              <article className="group">
                <Link href="#">
                  <div className="relative h-48 w-full overflow-hidden rounded mb-2">
                    <Image 
                      src="https://picsum.photos/seed/cricket-stadium/600/400" 
                      alt="खेल" 
                      fill 
                      className="object-cover group-hover:scale-105 transition duration-300" 
                    />
                  </div>
                </Link>
                <span className="text-orange-600 font-bold text-xs">खेल</span>
                <h3 className="font-bold text-lg leading-tight mt-1 hover:text-orange-600 transition">
                  <Link href="#">आख़िरी ओवर के नाटक में टीम इंडिया ने सीरीज़ जीती</Link>
                </h3>
                <p className="text-xs text-gray-500 mt-2">4 घंटे पहले</p>
              </article>
            </div>
          </div>
        </div>

        {/* ===== RIGHT SIDEBAR ===== */}
        <aside className="flex flex-col gap-6">
          <div className="bg-orange-50 border border-orange-200 p-6 rounded text-center">
            <h3 className="font-bold text-lg mb-2">सदस्य बनें, हमारा साथ दें</h3>
            <p className="text-sm text-gray-700 mb-4">
              सभी खबरें, ई-पेपर और न्यूज़लेटर — बिना विज्ञापन रुकावट के।
            </p>
            <button className="bg-orange-600 text-white w-full py-2 rounded font-bold hover:bg-orange-700 transition">
              सदस्यता लें
            </button>
          </div>

          <div className="bg-white p-5 rounded shadow">
            <h3 className="font-bold text-lg border-b pb-2 mb-4">सबसे ज़्यादा पढ़ी गई</h3>
            <ol className="list-decimal list-inside space-y-4 text-sm font-semibold text-gray-800">
              <li className="hover:text-orange-600 cursor-pointer border-b border-gray-100 pb-2 transition">
                हाईकोर्ट में नगर निगम सफाई मामले का फैसला सुरक्षित
              </li>
              <li className="hover:text-orange-600 cursor-pointer border-b border-gray-100 pb-2 transition">
                सेंसेक्स 80,000 के पार, तेजी जारी
              </li>
              <li className="hover:text-orange-600 cursor-pointer border-b border-gray-100 pb-2 transition">
                विधानसभा में डिजिटल अर्थव्यवस्था विधेयक पारित
              </li>
              <li className="hover:text-orange-600 cursor-pointer transition">
                किशोर बैडमिंटन सितारे ने विश्व नं. 2 को हराया
              </li>
            </ol>
          </div>

          <div className="bg-gray-200 h-[250px] w-full flex items-center justify-center text-gray-400 font-medium rounded border border-gray-300">
            विज्ञापन — 300 × 250
          </div>
        </aside>

      </section>
    </main>
  );
  
}