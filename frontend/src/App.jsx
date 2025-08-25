import LeftSide from "./components/LeftSide";
import RightSide from "./components/RightSide";
function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-600/20 via-transparent to-transparent">
        <div className="container mx-auto px-6 py-12 lg:px-16 lg:py-20">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
            <LeftSide />
            <RightSide />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
