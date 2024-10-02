import "./App.css";
import Layout from "./components/Layout";
import PerformanceTracker from "./components/PerformanceTracker";
import BasicArea from "./components/BasicArea";

function App() {
  return (
    <Layout>
      <Layout.left>
        <PerformanceTracker />
        <BasicArea />
      </Layout.left>
      <Layout.right>
        <div className="empty-div col-4"></div>
      </Layout.right>
    </Layout>
  );
}

export default App;
