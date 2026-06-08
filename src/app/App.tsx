import { Hero } from "./components/Hero";
import { PainPoints } from "./components/PainPoints";
import { QualityTrust } from "./components/QualityTrust";
import { OfflineStore } from "./components/OfflineStore";
import { StickyCTA } from "./components/StickyCTA";
import { ImageWithFallback } from "./components/figma/ImageWithFallback";
import logoImg from "../imports/image.png";

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans pb-32 selection:bg-[#E6007E] selection:text-white">
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ImageWithFallback src={logoImg} alt="LG U+ 로고" className="h-6 w-auto object-contain" />
            <span className="font-bold text-gray-900 text-lg tracking-tight">공식인증 중고폰</span>
          </div>
          <div className="text-sm font-semibold text-gray-500 hidden sm:block">
            대구 통신골목 직영점
          </div>
        </div>
      </header>

      <main>
        <Hero />
        <PainPoints />
        <QualityTrust />
        <OfflineStore />
      </main>

      <StickyCTA />
    </div>
  );
}
