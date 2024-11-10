export type Review = {
    text: string;
    author: {
        src: string;
        srcSet: string;
        name: string;
        position?: string;
    };
};

export const REVIEWS: Review[] = [
    {
        text: "Высокий уровень обслуживания и экспертизы. Решили все наши задачи по разработке и поддержке. Очень довольны результатом!",
        author: {
            src: "/img/reviews/maslov.jpg",
            srcSet: "/img/reviews/maslov@2x.jpg 2x",
            name: "Маслов Владимир",
            position: "CEO"
        }
    },
    {
        text: "Работаем с ними уже не первый проект — всегда стабильно хороший результат и внимательное отношение к деталям.",
        author: {
            src: "/img/reviews/maslov.jpg",
            srcSet: "/img/reviews/maslov@2x.jpg 2x",
            name: "Маслов Владимир",
            position: "CEO"
        }
    },
    {
        text: "Понравился индивидуальный подход и гибкость. Решения адаптированы под наши потребности, что даёт ощутимые результаты.",
        author: {
            src: "/img/reviews/maslov.jpg",
            srcSet: "/img/reviews/maslov@2x.jpg 2x",
            name: "Маслов Владимир",
            position: "CEO"
        }
    },
    {
        text: "Команда обладает глубокими техническими знаниями, и это чувствуется в каждом этапе работы. Очень довольны качеством и сроками.",
        author: {
            src: "/img/reviews/maslov.jpg",
            srcSet: "/img/reviews/maslov@2x.jpg 2x",
            name: "Маслов Владимир",
            position: "CEO"
        }
    },
    {
        text: "Команда обладает глубокими техническими знаниями, и это чувствуется в каждом этапе работы. Очень довольны качеством и сроками.2",
        author: {
            src: "/img/reviews/maslov.jpg",
            srcSet: "/img/reviews/maslov@2x.jpg 2x",
            name: "Маслов Владимир",
            position: "CEO"
        }
    },
    {
        text: "Команда обладает глубокими техническими знаниями, и это чувствуется в каждом этапе работы. Очень довольны качеством и сроками.3",
        author: {
            src: "/img/reviews/maslov.jpg",
            srcSet: "/img/reviews/maslov@2x.jpg 2x",
            name: "Маслов Владимир",
            position: "CEO"
        }
    }
];
