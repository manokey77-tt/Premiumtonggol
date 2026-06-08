import { MessageCircle } from "lucide-react";

export function Hero() {
  return (
    <section className="relative bg-white pt-16 pb-20 lg:pt-24 lg:pb-28 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white"></div>
        {/* Abstract background blobs or shapes to make it premium */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-[#E6007E]/5 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-[#0B1E59]/5 blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12">
        <div className="flex-1 text-center lg:text-left break-keep">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#E6007E]/10 text-[#E6007E] font-semibold text-sm mb-6">
            <span className="flex h-2 w-2 rounded-full bg-[#E6007E]"></span>
            오프라인 매장 최초 오픈!
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
            LG U+ 공식 인증 특S급 <br className="hidden md:block" />
            <span className="text-[#E6007E]">프리미엄 중고폰</span>
            <br className="hidden md:block" /> 최초 오프라인 매장
          </h1>
          
          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium">
            대구 통신골목 직영점 단독 론칭. 더 이상 불안한 온라인 거래는 그만. LG U+의 믿을 수 있는 보증과 함께 직접 눈으로 확인하고 구매하세요.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <button className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#FEE500] hover:bg-[#FDD800] text-[#191919] font-bold text-lg transition-transform active:scale-95 shadow-lg shadow-[#FEE500]/20">
              <MessageCircle className="w-6 h-6 fill-current" />
              카카오톡으로 문의하기
            </button>
          </div>
        </div>

        <div className="flex-1 w-full max-w-lg lg:max-w-none relative">
          <div className="relative aspect-[4/3] sm:aspect-[3/2] lg:aspect-square w-full rounded-3xl overflow-hidden shadow-2xl ring-1 ring-gray-900/5">
            <img 
              src="https://images.unsplash.com/photo-1695973056909-67189edc1c9e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVtaXVtJTIwc21hcnRwaG9uZXMlMjBtb2NrdXB8ZW58MXx8fHwxNzgwODgwNjYzfDA&ixlib=rb-4.1.0&q=80&w=1080" 
              alt="프리미엄 스마트폰 목업 이미지"
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Badge Overlay */}
            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg border border-gray-200 flex items-center gap-2">
              <span className="w-3 h-3 bg-[#E6007E] rounded-full"></span>
              <span className="font-bold text-sm text-[#0B1E59]">LGU+ 공식 인증</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
