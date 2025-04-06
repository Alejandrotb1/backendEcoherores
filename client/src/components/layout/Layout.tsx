import Footer from "../footer/Footer";
import Header from "../Header";

interface Props {
  children: React.ReactNode;
  title?: string;
}

export default function Layout({ children, title }: Props) {
  return (
    <div className="flex flex-col min-h-screen items-center">
      <Header />
      <section className="mx-4 py-2 w-[90%]">
        <h1>{title}</h1>
        {children}
      </section>
      <Footer />
    </div>
  );
}
