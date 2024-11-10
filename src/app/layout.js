import "../styles/app.scss";
import { ORGANIZER } from "@/consts/Organizer";
import { Favicon } from "../components/Utils/Favicon/Favicon";
import { Header } from "../components/Utils/Header/Header";
import { Main } from "../components/Utils/Main/Main";
import { Footer } from "../components/Utils/Footer/Footer";

export default function Layout({ children }) {
    return (
        <html
            className="page"
            lang="ru"
        >
            <head>
                <title>{ORGANIZER}</title>

                <Favicon />
            </head>

            <body className="page__body">
                <Header className="page__header" />

                <Main className="page__main">{children}</Main>

                <Footer className="page__footer" />
            </body>
        </html>
    );
}
