import BarChart from "./components/BarChart";
import RecentOrder from "./components/RecentOrder";
import TopCards from "./components/TopCards";

function App() {
  return (
    <>
      <TopCards />
      <div className="p-4 grid md:grid-cols-3 grid-cols-1 gap-4">
        <BarChart />
        <RecentOrder />
      </div>
    </>
  );
}

export default App;
