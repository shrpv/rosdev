export type TechnologyCategory = "Web" | "Mobile";

export type Technology = {
    title: string;
    logo?: {
        src: string;
        srcSet: string;
    };
};

export type Technologies = Record<TechnologyCategory, Technology[]>;

export const TECHNOLOGIES: Technologies = {
    Web: [
        {
            title: "Flask"
        },
        {
            title: "Ruby"
        },
        {
            title: "Koa.js2"
        },
        {
            title: "Socket.io"
        },
        {
            title: "Frontend"
        },
        {
            title: "CSS, SASS, SCSS, LESS"
        },
        {
            title: "PHP"
        },
        {
            title: "Golang"
        },
        {
            title: "Redux + Redux Saga"
        },
        {
            title: "JS"
        },
        {
            title: "Python"
        },
        {
            title: "Magento 2+"
        },
        {
            title: "HTML5"
        },
        {
            title: "Backend"
        },
        {
            title: "Express"
        },
        {
            title: "React"
        },
        {
            title: "Laravel 5+"
        },
        {
            title: "D3.js"
        },
        {
            title: "Angular 2+"
        },
        {
            title: "Vue.js + Vuex"
        }
    ],
    Mobile: [
        {
            title: "Flask"
        },
        {
            title: "PHP"
        },
        {
            title: "Express"
        },
        {
            title: "Ruby"
        },
        {
            title: "Redux + Redux Saga"
        },
        {
            title: "PHP"
        },
        {
            title: "Express"
        },
        {
            title: "Ruby"
        },
        {
            title: "Redux + Redux Saga"
        },
        {
            title: "Redux + Redux Saga"
        },
        {
            title: "PHP"
        },
        {
            title: "Express"
        },
        {
            title: "Ruby"
        },
        {
            title: "Redux + Redux Saga"
        },
        {
            title: "Ruby"
        },
        {
            title: "Redux + Redux Saga"
        }
    ]
};
