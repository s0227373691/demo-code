import "./App.css";
import Layout from "./components/Layout";
import CardPerformanceTracker from "./components/CardPerformanceTracker";
import CardScoreDistribution from "./components/CardScoreDistribution";

function App() {
  return (
    <Layout>
      <Layout.Left>
        <section className="d-flex flex-wrap">
          <CardPerformanceTracker />
          <CardScoreDistribution />
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
