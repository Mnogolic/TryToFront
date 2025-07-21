import Image from "next/image";


export default function FirstCard() {
  return (
    <div className="w-[410px] h-[426px] bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
      <img
        src="/images/webLearningGirl.png" // Путь к изображению, смотри ниже 👇
        alt="Астрономия"
        className="w-[410px] h-[230px] object-cover"
      />

      <div className="p-4 flex flex-col justify-between h-full">
        <div className="mb-3 flex items-center space-x-2">
          <span className="text-xs text-orange-500 border border-orange-400 rounded-full px-2 py-0.5">
            Новый
          </span>
          <span className="text-xs text-gray-500 border border-gray-300 rounded-full px-2 py-0.5">
            Астрономия
          </span>
        </div>

        <h3 className="text-base font-semibold mb-3">
          Астрономия для старших школьников. Космические объекты (планеты,
          кольца, спутники, звезды)
        </h3>

        <div className="mt-auto text-sm text-gray-500 flex items-center justify-between">
          <div className="flex items-center space-x-1">
            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2"
              viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h7" />
            </svg>
            <span>4 раздела</span>
          </div>
          <div className="flex items-center space-x-1">
            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2"
              viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round"
                d="M8 7V3m8 4V3m-9 8h10m-11 9a2 2 0 002 2h6a2 2 0 002-2V7H5v13z" />
            </svg>
            <span>6 мая 2022 – 6 мая 2025</span>
          </div>
        </div>
      </div>
    </div>
  );
}


    {/* На img жалуется, так что сделал через Next.js */}
      {/* <div className="w-full h-[230px] bg-blue-50 flex items-center justify-center">
        <img 
          src="/images/webLearningGirl.png" 
          alt="Астрономия"
          className="w-full h-full object-cover"
        />
      </div> */}

      {/* <div className="w-full h-[230px] bg-blue-50 relative">
        <Image
          src="/images/webLearningGirl.png"
          alt="Астрономия"
          fill 
          className=
        />
      </div> */}