import "../styles/app.scss";
import { ORGANIZER } from "/src/consts/Organizer.js";
import { Favicon } from "@/components/Utils/Favicon/Favicon";
import SmoothScrollLayout from "../components/SmoothScroll/ui/SmoothScrollLayout";
import Main from "../components/Utils/Main";

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
                <SmoothScrollLayout>
                    <Main className="page__main">
                        {children}
                    </Main>
                </SmoothScrollLayout>
            </body>
        </html>
    );
}
