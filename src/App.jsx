import "./App.css";
import Layout from "./components/Layout";
import PerformanceTracker from "./components/PerformanceTracker";
import BasicArea from "./components/BasicArea";

function App() {
  return (
    <Layout>
      <Layout.Left>
        <PerformanceTracker />
        <BasicArea />
      </Layout.Left>
      <Layout.Right>
        <div className="empty-div position-relative border border-1 border-light rounded">
          <Layout.RightExpandButton />
        </div>
      </Layout.Right>
    </Layout>
  );
}

export default App;
