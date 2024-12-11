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
        text: "Сотрудничаем с&nbsp;РусДев уже более трех лет, совместно было выпущено в&nbsp;производство уже несколько " +
            "проектов, которые продолжают свое развитие и&nbsp;по&nbsp;сей день. РусДев&nbsp;&mdash; команда " +
            "профессионалов на&nbsp;которых действительно можно положиться. Качество поставок, соблюдение " +
            "сроков&nbsp;&mdash; все на&nbsp;высоте.",
        author: {
            src: "/img/reviews/isaev.jpg",
            srcSet: "/img/reviews/isaev@2x.jpg 2x",
            name: "Исаев Андрей",
            // position: "CEO"
        }
    },
    {
        text: "Хорошая оценка и&nbsp;реализация проекта. " +
            "Разработанное приложение и&nbsp;его интеграция с&nbsp;приложением АЗС ГПН на&nbsp;высочайшем уровне.",
        author: {
            src: "/img/reviews/kuimov.jpg",
            srcSet: "/img/reviews/kuimov@2x.jpg 2x",
            name: "Алексей Куимов",
            position: "COO"
        }
    },
    {
        text: "Сайт получился очень удобным и&nbsp;информативным, а&nbsp;благодаря использованию блокчейн-технологии " +
            "можно быть уверенным в&nbsp;безопасности своих данных. Подрядчик выполнил работу качественно " +
            "и&nbsp;в&nbsp;срок.",
        author: {
            src: "/img/reviews/dergaev.jpg",
            srcSet: "/img/reviews/dergaev@2x.jpg 2x",
            name: "Андрей Дергаев",
            position: "co-founder"
        }
    },
];
