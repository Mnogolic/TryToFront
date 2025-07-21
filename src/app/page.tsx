import { SecondCard } from "../components/second-card";

interface Card {
  id: number;
  imageSrc: string;
  isNew: boolean;
  category: string;
  title: string;
  sections: number;
  dateRange: string;
}

export default function Home() {
  const cards: Card[] = [
    {
      id: 1,
      imageSrc: "/images/webLearningGirl.png",
      isNew: true,
      category: "Астрономия",
      title:
        "Астрономия для старших школьников. Космические объекты (планеты, кольца, спутники, звезды)",
      sections: 4,
      dateRange: "6 мая 2022 – 6 мая 2025",
    },
    {
      id: 2,
      imageSrc: "/images/webLearningGirl.png",
      isNew: false,
      category: "Математика",
      title:
        "Астрономия для старших школьников. Космические объекты (планеты, кольца, спутники, звезды)",
      sections: 8,
      dateRange: "10 июня 2023 – 10 июня 2026",
    },
    {
      id: 3,
      imageSrc: "/images/webLearningGirl.png",
      isNew: true,
      category: "Программирование",
      title: "Основы веб-разработки на React и Next.js",
      sections: 6,
      dateRange: "1 сентября 2023 – 1 сентября 2024",
    },
    {
      id: 4,
      imageSrc: "/images/webLearningGirl.png",
      isNew: false,
      category: "Физика",
      title: "Физика для школьников. Механика и термодинамика",
      sections: 5,
      dateRange: "15 сентября 2023 – 15 декабря 2024",
    },
    {
      id: 5,
      imageSrc: "/images/webLearningGirl.png",
      isNew: true,
      category: "Биология",
      title: "Биология. Основы генетики и экосистем",
      sections: 7,
      dateRange: "1 октября 2023 – 1 апреля 2024",
    },
    {
      id: 6,
      imageSrc: "/images/webLearningGirl.png",
      isNew: true,
      category: "Химия",
      title: "Химия для школьников. Основы неорганической химии",
      sections: 6,
      dateRange: "15 октября 2023 – 15 марта 2024",
    },
    {
      id: 7,
      imageSrc: "/images/webLearningGirl.png",
      isNew: false,
      category: "История",
      title: "История Древнего мира",
      sections: 5,
      dateRange: "5 ноября 2023 – 5 февраля 2024",
    },
    {
      id: 8,
      imageSrc: "/images/webLearningGirl.png",
      isNew: true,
      category: "Литература",
      title: "Русская литература XIX века",
      sections: 9,
      dateRange: "20 ноября 2023 – 20 апреля 2024",
    },
    {
      id: 9,
      imageSrc: "/images/webLearningGirl.png",
      isNew: false,
      category: "География",
      title: "География. Природа и население Земли",
      sections: 4,
      dateRange: "1 декабря 2023 – 1 июня 2024",
    },
    {
      id: 10,
      imageSrc: "/images/webLearningGirl.png",
      isNew: true,
      category: "Информатика",
      title: "Информатика. Основы программирования на Python",
      sections: 10,
      dateRange: "10 января 2024 – 10 июля 2024",
    },
    {
      id: 11,
      imageSrc: "/images/webLearningGirl.png",
      isNew: true,
      category: "Английский язык",
      title: "Английский для начинающих",
      sections: 8,
      dateRange: "15 января 2024 – 15 июня 2024",
    },
    {
      id: 12,
      imageSrc: "/images/webLearningGirl.png",
      isNew: false,
      category: "Экономика",
      title: "Основы экономики для школьников",
      sections: 6,
      dateRange: "1 февраля 2024 – 1 мая 2025",
    },
    // Можно добавить больше карточек
  ];

  return (
    <div className="min-h-screen bg-[#D4D4D8] py-10 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-semibold mb-8 text-left">Похожие курсы</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-8">
          {cards.map((card) => (
            <div key={card.id} className="flex justify-left">
              <SecondCard
                imageSrc={card.imageSrc}
                category={card.category}
                title={card.title}
                sections={card.sections}
                dateRange={card.dateRange}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}