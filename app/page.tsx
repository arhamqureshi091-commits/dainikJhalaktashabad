import Image from "next/image";
import Link from "next/link";

const navigationItems = [
  { href: "#", label: "होम", active: true },
  { href: "#mp", label: "म.प्र." },
  { href: "#national", label: "देश-दुनिया" },
  { href: "#business", label: "कारोबार" },
  { href: "#sports", label: "खेल" },
  { href: "#tech", label: "टेक्नोलॉजी" },
  { href: "#entertainment", label: "मनोरंजन" },
  { href: "#photos", label: "तस्वीरें" },
  { href: "#rashifal", label: "राशिफल" },
];

const stories = [
  {
    image: "https://picsum.photos/seed/city-traffic/600/400",
    alt: "शहर की सड़क पर यातायात",
    category: "देश",
    title: "जलवायु सम्मेलन में नई वित्तीय प्रतिबद्धताएँ घोषित",
    time: "3 घंटे पहले",
  },
  {
    image: "https://picsum.photos/seed/cricket-stadium/600/400",
    alt: "क्रिकेट स्टेडियम में मैच",
    category: "खेल",
    title: "आख़िरी ओवर के नाटक में टीम इंडिया ने सीरीज़ जीती",
    time: "4 घंटे पहले",
  },
];

const popularStories = [
  "हाईकोर्ट में नगर निगम सफाई मामले का फैसला सुरक्षित",
  "सेंसेक्स 80,000 के पार, तेजी जारी",
  "विधानसभा में डिजिटल अर्थव्यवस्था विधेयक पारित",
  "किशोर बैडमिंटन सितारे ने विश्व नं. 2 को हराया",
];

function StoryImage({
  src,
  alt,
  height,
}: {
  src: string;
  alt: string;
  height: string;
}) {
  return (
    <div className={`relative w-full ${height} overflow-hidden`}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 66vw, 600px"
        className="object-cover transition duration-300 group-hover:scale-105"
      />
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 font-sans text-gray-900">
      <div className="bg-gray-900 py-1 text-xs text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <span className="font-semibold">शनिवार, 7 नवंबर 2026</span>
            <span className="text-gray-500" aria-hidden="true">
              |
            </span>
            <span className="text-gray-300">
              भोपाल • इंदौर • ग्वालियर • जबलपुर
            </span>
          </div>

          <div className="flex items-center gap-4">
            <Link href="#" className="hover:text-orange-400" aria-label="Facebook">
              FB
            </Link>
            <Link href="#" className="hover:text-orange-400" aria-label="X">
              X
            </Link>
            <Link href="#" className="hover:text-orange-400" aria-label="YouTube">
              YT
            </Link>
            <button
              type="button"
              title="डार्क मोड बदलें"
              aria-label="डार्क मोड बदलें"
              className="hover:text-orange-400"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <header className="border-b bg-white py-4">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4">
          <div className="flex flex-col">
            <span className="w-max rounded bg-blue-100 px-2 py-1 text-xs font-bold text-blue-800">
              ई-पेपर
            </span>
            <span className="mt-1 text-xs text-gray-500">
              ताज़ा खबरें @ 09:41
            </span>
          </div>

          <Link
            href="/"
            className="text-4xl font-black tracking-tighter text-gray-900"
          >
            दैनिक <span className="text-orange-600">झलकते शब्द</span>
          </Link>

          <button
            type="button"
            className="rounded bg-orange-600 px-4 py-2 text-sm font-bold text-white transition hover:bg-orange-700"
          >
            सदस्यता लें
          </button>
        </div>
      </header>

      <nav
        className="sticky top-0 z-50 bg-gray-800 text-white"
        aria-label="मुख्य नेविगेशन"
      >
        <div className="mx-auto flex h-12 max-w-7xl items-center justify-between px-4">
          <button
            type="button"
            className="p-2 lg:hidden"
            aria-label="मेन्यू खोलें"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </button>

          <ul className="hidden gap-6 text-sm font-semibold lg:flex">
            {navigationItems.map(({ href, label, active }) => (
              <li key={label}>
                <Link
                  href={href}
                  aria-current={active ? "page" : undefined}
                  className={
                    active ? "text-orange-400" : "hover:text-orange-400"
                  }
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          <button
            type="button"
            className="p-2 hover:text-orange-400"
            aria-label="खोजें"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>
          </button>
        </div>
      </nav>

      <section
        className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-4 py-6 lg:grid-cols-3"
        aria-label="मुख्य समाचार"
      >
        <article className="group overflow-hidden rounded bg-white shadow lg:col-span-2">
          <Link href="#" aria-label="प्रमुख खबर पढ़ें">
            <div className="relative h-[400px] w-full overflow-hidden">
              <Image
                src="https://picsum.photos/seed/parliament-session/900/560"
                alt="विधानसभा का सत्र"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 66vw"
                className="object-cover transition duration-300 group-hover:scale-105"
              />
              <span className="absolute left-4 top-4 animate-pulse rounded bg-red-600 px-2 py-1 text-xs font-bold text-white">
                लाइव
              </span>
            </div>
          </Link>

          <div className="p-6">
            <span className="text-sm font-bold text-red-600">प्रमुख खबर</span>
            <h1 className="mb-3 mt-2 text-3xl font-bold leading-tight text-gray-900 transition hover:text-orange-600">
              <Link href="#">
                विधानसभा में &apos;डिजिटल अर्थव्यवस्था विधेयक&apos; पारित — सियासी
                संग्राम जारी
              </Link>
            </h1>
            <p className="mb-4 text-sm text-gray-600">
              रात 2 बजे तक चली बहस के बाद विधेयक पारित हुआ। इसमें ऑनलाइन पेमेंट,
              डेटा सुरक्षा और फ्रीलांसरों के पंजीकरण का ढांचा रखा गया है।
              प्रशासनिक सूत्रों ने इसे दशक का सबसे बड़ा आर्थिक सुधार बताया।
            </p>
            <div className="text-xs font-medium text-gray-400">
              <span>2 घंटे पहले</span> • <span>राजनीति</span>
            </div>
          </div>
        </article>

        <div className="flex flex-col gap-6">
          <article className="group overflow-hidden rounded bg-white shadow">
            <Link href="#" aria-label="शेयर बाज़ार की खबर पढ़ें">
              <StoryImage
                src="https://picsum.photos/seed/market-screens/600/400"
                alt="शेयर बाज़ार के आँकड़े"
                height="h-[200px]"
              />
            </Link>
            <div className="p-4">
              <span className="text-xs font-bold text-orange-600">कारोबार</span>
              <h2 className="mt-1 text-lg font-bold leading-tight text-gray-900 transition hover:text-orange-600">
                <Link href="#">
                  सेंसेक्स 80,000 के पार — तेजी जारी, निवेशकों में खुशी
                </Link>
              </h2>
            </div>
          </article>

          <article className="group overflow-hidden rounded bg-white shadow">
            <Link href="#" aria-label="मौसम की खबर पढ़ें">
              <StoryImage
                src="https://picsum.photos/seed/flood-relief/600/400"
                alt="ठंड के मौसम में शहर का दृश्य"
                height="h-[200px]"
              />
            </Link>
            <div className="p-4">
              <span className="text-xs font-bold text-orange-600">म.प्र.</span>
              <h2 className="mt-1 text-lg font-bold leading-tight text-gray-900 transition hover:text-orange-600">
                <Link href="#">
                  शीतलहर चेतावनी — भोपाल-ग्वालियर समेत 15 शहरों के लिए अलर्ट
                </Link>
              </h2>
            </div>
          </article>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 py-6 lg:grid-cols-3">
        <div className="flex flex-col gap-8 lg:col-span-2">
          <section
            className="rounded bg-white p-4 shadow"
            aria-labelledby="featured-news-heading"
          >
            <div className="mb-4 flex items-center justify-between border-b pb-2">
              <h2
                id="featured-news-heading"
                className="inline-block border-b-2 border-orange-600 text-xl font-bold text-gray-900"
              >
                प्रमुख खबरें
              </h2>
              <Link
                href="#"
                className="text-sm text-blue-600 hover:underline"
              >
                और देखें →
              </Link>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {stories.map((story) => (
                <article className="group" key={story.title}>
                  <Link href="#" aria-label={`${story.title} पढ़ें`}>
                    <div className="mb-2 overflow-hidden rounded">
                      <StoryImage
                        src={story.image}
                        alt={story.alt}
                        height="h-48"
                      />
                    </div>
                  </Link>
                  <span className="text-xs font-bold text-orange-600">
                    {story.category}
                  </span>
                  <h3 className="mt-1 text-lg font-bold leading-tight text-gray-900 transition hover:text-orange-600">
                    <Link href="#">{story.title}</Link>
                  </h3>
                  <p className="mt-2 text-xs text-gray-500">{story.time}</p>
                </article>
              ))}
            </div>
          </section>
        </div>

        <aside className="flex flex-col gap-6" aria-label="अतिरिक्त जानकारी">
          <section className="rounded border border-orange-200 bg-orange-50 p-6 text-center">
            <h2 className="mb-2 text-lg font-bold text-gray-900">
              सदस्य बनें, हमारा साथ दें
            </h2>
            <p className="mb-4 text-sm text-gray-700">
              सभी खबरें, ई-पेपर और न्यूज़लेटर — बिना विज्ञापन रुकावट के।
            </p>
            <button
              type="button"
              className="w-full rounded bg-orange-600 py-2 font-bold text-white transition hover:bg-orange-700"
            >
              सदस्यता लें
            </button>
          </section>

          <section className="rounded bg-white p-5 shadow">
            <h2 className="mb-4 border-b pb-2 text-lg font-bold text-gray-900">
              सबसे ज़्यादा पढ़ी गई
            </h2>
            <ol className="list-inside list-decimal space-y-4 text-sm font-semibold text-gray-800">
              {popularStories.map((story) => (
                <li
                  key={story}
                  className="border-b border-gray-100 pb-2 transition last:border-none last:pb-0 hover:text-orange-600"
                >
                  <Link href="#" className="focus-visible:underline">
                    {story}
                  </Link>
                </li>
              ))}
            </ol>
          </section>

          <div
            className="flex h-[250px] w-full items-center justify-center rounded border border-gray-300 bg-gray-200 font-medium text-gray-500"
            role="complementary"
            aria-label="विज्ञापन"
          >
            विज्ञापन — 300 × 250
          </div>
        </aside>
      </section>
    </main>
  );
}