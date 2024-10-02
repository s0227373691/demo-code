import "./App.css";
import Layout from "./components/Layout";
import PerformanceTracker from "./components/PerformanceTracker";
import BasicArea from "./components/BasicArea";
import Wrapped from "./components/Wrapped";

function App() {
  return (
    <Layout>
      <Layout.Left>
        <Wrapped>
          <PerformanceTracker />
        </Wrapped>
        <Wrapped>
          <BasicArea />
        </Wrapped>
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
