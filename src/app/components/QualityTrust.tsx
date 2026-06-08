import { ShieldCheck, BatteryFull, CheckCircle2 } from "lucide-react";

export function QualityTrust() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Image/Video Side */}
          <div className="flex-1 w-full flex justify-center">
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl w-full max-w-sm aspect-[9/16] bg-black ring-8 ring-gray-100">
              <iframe 
                src="https://www.youtube.com/embed/0SOt41kDMdI?autoplay=1&mute=1&loop=1&playlist=0SOt41kDMdI&controls=0&showinfo=0&rel=0" 
                title="LG U+ 중고폰 품질 검수"
                className="absolute inset-0 w-full h-full object-cover pointer-events-auto"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#0B1E59]/90 to-transparent pointer-events-none"></div>
              
              <div className="absolute bottom-6 left-6 right-6 pointer-events-none">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-5 text-white">
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle2 className="w-5 h-5 text-[#E6007E]" />
                    <span className="font-bold">엄격한 64개 항목 품질 검수</span>
                  </div>
                  <p className="text-white/80 text-sm break-keep">공식 인증 전문가의 꼼꼼한 테스트를 거쳐 최상의 품질을 보장합니다.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="flex-1 break-keep">
            <div className="mb-10">
              <span className="text-[#E6007E] font-bold tracking-wider text-sm mb-3 block">LG U+ 품질 보증</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B1E59] leading-tight mb-6">
                믿을 수 있는 프리미엄 퀄리티
              </h2>
              <p className="text-lg text-gray-600">
                중고폰 구매의 불안함을 없앴습니다. 새 폰에 버금가는 성능 보장과 안심 보증을 제공합니다.
              </p>
            </div>

            <div className="space-y-6">
              {/* Feature 1 */}
              <div className="flex gap-5 bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:border-[#E6007E]/30 transition-colors">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center text-[#0B1E59]">
                    <ShieldCheck className="w-7 h-7" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">90일 안심 보증</h3>
                  <p className="text-gray-600">
                    구매 후 90일 이내 치명적 기기 결함 발생 시 동일 기종으로 무료 교환해 드립니다. 안심하고 구매하세요.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex gap-5 bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:border-[#E6007E]/30 transition-colors">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center text-[#E6007E]">
                    <BatteryFull className="w-7 h-7" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">철저한 성능 검수</h3>
                  <p className="text-gray-600">
                    전문가 검수 후 배터리 효율 80% 이상을 보장합니다. 눈에 보이지 않는 성능까지 완벽하게 확인합니다.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
