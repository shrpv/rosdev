import "../styles/app.scss";
import { ORGANIZER } from "@/consts/Organizer";
import { SmoothScrollLayout } from "@/components/SmoothScrollLayout/SmoothScrollLayout";
import { Favicon } from "@/components/Utils/Favicon/Favicon";

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
                <SmoothScrollLayout>{children}</SmoothScrollLayout>
            </body>
        </html>
    );
}
