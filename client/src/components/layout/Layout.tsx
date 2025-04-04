import Footer from "../footer/Footer";
import Header from "../Header";

interface Props {
    children: any
}

export default function Layout({ children }: Props) {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
}