export type TechnologyCategory = "Web" | "Mobile";

export type Technology = {
    title?: string;
    logo?: string;
};

export type Technologies = Record<TechnologyCategory, Technology[]>;

export const TECHNOLOGIES: Technologies = {
    Web: [
        {
            title: "Flask",
            logo: "/img/technologies/flask.svg"
        },
        {
            title: "Ruby",
            logo: "/img/technologies/ruby.svg"
        },
        {
            title: "Koa.js2",
            logo: "/img/technologies/koa.svg"
        },
        {
            title: "Socket.io",
            logo: "/img/technologies/socket.svg"
        },
        {
            title: "Frontend"
        },
        {
            title: "CSS, SASS,<br />SCSS, LESS"
        },
        {
            title: "PHP",
            logo: "/img/technologies/php.svg"
        },
        {
            title: "Golang",
            logo: "/img/technologies/golang.svg"
        },
        {
            title: "Redux + Redux Saga",
            logo: "/img/technologies/redux.svg"
        },
        {
            title: "JS",
            logo: "/img/technologies/javascript.svg"
        },
        {
            title: "Python",
            logo: "/img/technologies/python.svg"
        },
        {
            title: "Magento 2+",
            logo: "/img/technologies/magento.svg"
        },
        {
            title: "HTML5",
            logo: "/img/technologies/html5.svg"
        },
        {
            title: "Backend"
        },
        {
            title: "Express",
            logo: "/img/technologies/express.svg"
        },
        {
            title: "React",
            logo: "/img/technologies/react.svg"
        },
        {
            title: "Laravel 5+",
            logo: "/img/technologies/laravel.svg"
        },
        {
            title: "D3.js",
            logo: "/img/technologies/d3.svg"
        },
        {
            title: "Angular 2+",
            logo: "/img/technologies/angular.svg"
        },
        {
            title: "Vue.js + Vuex",
            logo: "/img/technologies/vue.svg"
        }
    ],
    Mobile: [
        {},
        {},
        {},
        {},
        {
            title: "Swift",
            logo: "/img/technologies/swift.svg",
        },
        {
            title: "Mobile Games"
        },
        {},
        {
            title: "React Native",
            logo: "/img/technologies/reactNative.svg",
        },
        {
            title: "Web Site Mobile",
        },
        {
            title: "Native Applications"
        },
        {
            title: "Applications SmartTV"
        },
        {
            title: "Cross-platform Application"
        },
        {
            title: "Kotlin",
            logo: "/img/technologies/kotlin.svg",
        },
        {},
        {},
        {
            title: "Web Progressive Application"
        },
        {},
    ]
};
