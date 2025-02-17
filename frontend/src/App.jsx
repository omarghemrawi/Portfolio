import LeftSide from "./components/LeftSide";
import RightSide from "./components/RightSide";
function App() {
  return (
    <>
      <div className="bg-[radial-gradient(closest-side,#20c997,#0a58ca)] lg:py-20 lg:px-40 px-10 py-5 ">
        <div className="flex sm:justify-between md:flex-row flex-col">
          <LeftSide />
          <RightSide />
        </div>
      </div>
    </>
  );
}

export default App;
