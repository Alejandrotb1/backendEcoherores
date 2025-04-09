import { Outlet } from "react-router-dom";
import Layout from "./components/layout/Layout";

type AppProps = {
  title?: string;
};

function App({ title }: AppProps) {
  return (
    <div className="w-full min-w-full overflow-x-hidden">
      <Layout title={title}>
        <main className="w-full min-w-full">
          <Outlet />
        </main>
      </Layout>
    </div>
  );
}

export default App;
