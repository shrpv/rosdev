import "../styles/app.scss";
import { Header } from "../components/Utils/Header/Header";
import { Main } from "../components/Utils/Main/Main";
import { Footer } from "../components/Utils/Footer/Footer";

export default function RootLayout({ children }) {
    return (
        <html
            className="page"
            lang="ru"
        >
            <body className="page__body">
                <Header className="page__header" />

                <Main className="page__main">{children}</Main>

                <Footer className="page__footer" />
            </body>
        </html>
    );
}
