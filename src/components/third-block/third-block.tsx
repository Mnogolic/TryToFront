import { RelatedCourse } from "./related-course";

interface Card {
  id: number;
  imageSrc: string;
  category: string;
  title: string;
  teacherFirstName: string;
  teacherSecondName: string;
  view: number;
}

// imageSrc = "/images/webLearningGirl.png",
//   category = "Биология",
//   title = "Физиология человека и животных",
//   teacherFirstName = "Дубынич",
//   teacherSecondName = "Вячеславр Альбертович",

export function ThirdBlock(){
  const cards: Card[] = [
  {
    id: 1,
    imageSrc: "/images/related-courses/related-course-1.svg",
    category: "Биология",
    title: "Физиология человека и животных",
    teacherFirstName: "Каменский",
    teacherSecondName: "Андрей Александрович",
    view: 16,
    imageSrcTeacher: "/images/related-courses/teacher1.svg",
  },
  {
    id: 2,
    imageSrc: "/images/related-courses/related-course-2.svg",
    category: "Математика",
    title: "Математический анализ. Семинары. Часть 1",
    teacherFirstName: "Шишкин",
    teacherSecondName: "Александр Александрович",
    view: 13,
    imageSrcTeacher: "/images/related-courses/teacher2.svg",
  },
  {
    id: 3,
    imageSrc: "/images/related-courses/related-course-3.svg",
    category: "Биология",
    title: "Микробиология. Часть1.",
    teacherFirstName: "Нетрусов",
    teacherSecondName: "Алесанд Ивиноивч",
    view: 15,
    imageSrcTeacher: "/images/related-courses/teacher3.svg",
  },

  ]; 

  return (
    <div className="row-auto ">
      <h3 className="mb-8 text-2xl leading-8 font-semibold"> 
        Связанные курсы
      </h3>
      {/* <div className="grid grid-cols-6 gap-6">
          <div className="col-span-2">
            <RelatedCourse />
          </div>
      </div>   */}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-8 mb-12">
        {cards.map((card) => (
          <div key={card.id}>
            <RelatedCourse
              imageSrc={card.imageSrc}
              category={card.category}
              title={card.title}
              teacherFirstName={card.teacherFirstName}
              teacherSecondName={card.teacherSecondName}
              view={card.view}
              imageSrcTeacher={card.imageSrcTeacher}
            />
          </div>
        ))}
      </div>
    </div>  
  );
}
