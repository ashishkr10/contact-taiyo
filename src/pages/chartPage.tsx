//compoents import
import Map from "../components/Map";
import Graph from "../components/Graph";

const ChartPage = () => {
  return (
    <div>
      <div className="grid grid-cols-2 gap-4 mt-4">
        <div>
          <Graph />
        </div>
        <div>
          <Map />
        </div>
      </div>
    </div>
  );
};

export default ChartPage;
