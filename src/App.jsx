import "./App.css";
import Layout from "./components/Layout";
import PerformanceTracker from "./components/PerformanceTracker";
import ScoreDistribution from "./components/ScoreDistribution";
import Wrapped from "./components/Wrapped";

function App() {
  return (
    <Layout>
      <Layout.Left>
        <section className="d-flex flex-wrap">
          <Wrapped>
            <PerformanceTracker />
          </Wrapped>
          <Wrapped>
            <ScoreDistribution />
          </Wrapped>
        </section>
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
