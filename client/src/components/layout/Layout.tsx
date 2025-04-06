import Footer from "../Footer/Footer";
import Header from "../Header";

interface Props {
  children: React.ReactNode;
  title?: string;
}

export default function Layout({ children, title }: Props) {
  return (
    <div className="app">
      <Header />
      <main>
        <div className="container py-8">
          {title && (
            <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
              {title}
            </h1>
          )}
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
}
