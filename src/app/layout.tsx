import "@/styles/app.scss";
import { FC, ReactNode } from "react";
import { ORGANIZER } from "@/consts/Organizer";
import { Favicon } from "@/components/Utils/Favicon/Favicon";
import { Header } from "@/components/Utils/Header/Header";
import { Main } from "@/components/Utils/Main/Main";
import { Footer } from "@/components/Utils/Footer/Footer";

interface LayoutProps {
    children?: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
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

                <Footer />
            </body>
        </html>
    );
};

export default Layout;
