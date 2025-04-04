import Footer from "../footer/Footer";

interface Props {
    children: React.Component
}

export default function Layout({children}:Props) {
    return(
        //<Header/>
        {children}
        <Footer/>
    )
}