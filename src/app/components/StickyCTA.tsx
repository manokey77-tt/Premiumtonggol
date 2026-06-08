import { MessageCircle } from "lucide-react";

export function StickyCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 bg-gradient-to-t from-white via-white/95 to-transparent pointer-events-none">
      <div className="max-w-3xl mx-auto flex justify-center pointer-events-auto shadow-[0_0_40px_rgba(0,0,0,0.1)] rounded-2xl bg-white border border-gray-100 p-2 md:p-3 overflow-hidden group">
        
        <div className="flex flex-col sm:flex-row items-center justify-between w-full gap-3 sm:gap-6 px-4">
          <p className="text-gray-700 font-bold text-sm sm:text-base text-center sm:text-left">
            어떤 폰을 골라야 할지 고민되시나요?
          </p>
          
          <button className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#FEE500] hover:bg-[#FDD800] text-[#191919] font-bold transition-all active:scale-95 whitespace-nowrap">
            <MessageCircle className="w-5 h-5 fill-current" />
            카카오톡 상담하기
          </button>
        </div>
      </div>
    </div>
  );
}
