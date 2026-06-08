import { MapPin, Navigation, ExternalLink } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import storeImg1 from "../../imports/_______1.jpg";
import storeImg2 from "../../imports/_______2.jpg";
import mapImg from "../../imports/image-1.png";

export function OfflineStore() {
  return (
    <section className="py-20 bg-[#0B1E59] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16 break-keep">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            대구 통신골목 직영점 안내
          </h2>
          <p className="text-lg text-blue-100 font-medium">
            쾌적한 공식 직영점에서 기기 상태를 직접 눈으로 확인하고, 그 자리에서 안전하게 즉시 개통하세요.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] relative group">
            <ImageWithFallback
              src={storeImg1}
              alt="공식 직영점 전경" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
            <div className="absolute bottom-4 left-4 bg-[#0B1E59]/90 backdrop-blur px-4 py-2 rounded-lg text-sm font-semibold">
              공식 직영점 전경
            </div>
          </div>
          
          <div className="rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] relative group">
            <ImageWithFallback
              src={storeImg2}
              alt="쾌적한 매장 내부" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
            <div className="absolute bottom-4 left-4 bg-[#0B1E59]/90 backdrop-blur px-4 py-2 rounded-lg text-sm font-semibold">
              쾌적한 매장 내부
            </div>
          </div>
        </div>

        <div className="bg-white rounded-3xl p-8 md:p-10 text-gray-900 shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-start gap-4">
            <div className="bg-gray-100 p-3 rounded-full shrink-0">
              <MapPin className="w-8 h-8 text-[#E6007E]" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">LG U+ 대구 통신골목 직영점</h3>
              <p className="text-gray-600 mb-4 break-keep">
                대구광역시 중구 동성로1길 14
                <br />
                <span className="text-sm text-gray-500">(덕산동)</span>
              </p>
              <div className="flex flex-wrap gap-3">
                <a 
                  href="https://map.naver.com/p/search/%EB%8C%80%EA%B5%AC%EA%B4%91%EC%97%AD%EC%8B%9C%20%EC%A4%91%EA%B5%AC%20%EB%8F%99%EC%84%B1%EB%A1%9C1%EA%B8%B8%2014" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-bold text-[#0B1E59] hover:text-[#E6007E] transition-colors"
                >
                  <Navigation className="w-4 h-4" /> 길 찾기
                </a>
                <a 
                  href="https://place.uplus.co.kr/shop/U0840152?utm_source=uplushome&utm_medium=findstore" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-bold text-[#0B1E59] hover:text-[#E6007E] transition-colors"
                >
                  <ExternalLink className="w-4 h-4" /> 매장 홈페이지
                </a>
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-auto">
            <div className="w-full md:w-64 h-40 bg-gray-200 rounded-xl overflow-hidden relative border border-gray-300">
              <ImageWithFallback
                src={mapImg}
                alt="매장 위치 지도"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
