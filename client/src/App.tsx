import { Outlet } from "react-router-dom";
import Layout from "./components/layout/Layout";

type AppProps = {
  title?: string;
};

function App({ title }: AppProps) {
  return (
    <div className="app">
      <Layout title={title}>
        <main>
          <Outlet />
        </main>
      </Layout>
    </div>
  );
}

export default App;
