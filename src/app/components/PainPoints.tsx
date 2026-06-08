import { Baby, Heart, Clock, Wallet } from "lucide-react";

const painPoints = [
  {
    icon: Baby,
    title: "키즈폰을 거부하는 우리 아이",
    solution: "합리적인 가격에 프리미엄 스마트폰을 선물하세요.",
    color: "bg-blue-50 text-blue-600",
  },
  {
    icon: Heart,
    title: "효도폰을 싫어하시는 부모님",
    solution: "잔기스 하나 없는 깔끔하고 성능 좋은 프리미엄폰.",
    color: "bg-rose-50 text-rose-600",
  },
  {
    icon: Clock,
    title: "갑작스러운 분실이나 파손?",
    solution: "오늘 바로 방문해서 기기 확인 후 즉시 개통하세요.",
    color: "bg-amber-50 text-amber-600",
  },
  {
    icon: Wallet,
    title: "실속을 챙기는 스마트한 MZ세대",
    solution: "프리미엄 품질은 그대로, 단말기 할부금 부담은 확 줄이세요.",
    color: "bg-emerald-50 text-emerald-600",
  }
];

export function PainPoints() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 break-keep">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B1E59] mb-4">
            당신에게 딱 맞는 스마트한 선택
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            공식 인증된 프리미엄 단말기를 합리적인 가격으로 만나보세요. 
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto break-keep">
          {painPoints.map((point, index) => {
            const Icon = point.icon;
            return (
              <div 
                key={index}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex flex-col items-start gap-4"
              >
                <div className={`p-4 rounded-xl ${point.color}`}>
                  <Icon className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {point.title}
                  </h3>
                  <div className="flex items-center gap-3">
                    <div className="w-6 border-t-2 border-[#E6007E]"></div>
                    <p className="text-gray-600 font-medium leading-relaxed">
                      {point.solution}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
