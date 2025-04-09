import Footer from "../footer/Footer";
import Header from "../Header";

interface Props {
  children: React.ReactNode;
  title?: string;
}

export default function Layout({ children, title }: Props) {
  return (
    <div className="w-full min-w-full">
      <Header />
      <main className="w-full min-w-full">
        {title && (
          <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
            {title}
          </h1>
        )}
        {children}
      </main>
      <Footer />
    </div>
  );
}
