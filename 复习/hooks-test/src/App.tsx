import ShowCard from "@/components/ShowCard";
import UseState from "@/components/reacthooks/UseState";
import UseEffect from "@/components/reacthooks/UseEffect";
import UseLayoutEffect from "@/components/reacthooks/UseLayoutEffect";
import UseReducer from "./components/reacthooks/UseReducer";
import UseMemo from "./components/reacthooks/UseMemo";
import UseCallback from "./components/reacthooks/UseCallback";
import UseRef from "./components/reacthooks/UseRef";
import ImperativeHandle from "./components/reacthooks/ImperativeHandle";
function App() {
  return (
    <div className="w-screen h-screen flex flex-wrap gap-6 p-4">
      <ShowCard title="useState">
        <UseState />
      </ShowCard>

      <ShowCard title="useEffect">
        <UseEffect />
      </ShowCard>

      <ShowCard title="useLayoutEffect">
        <UseLayoutEffect />
      </ShowCard>

      <ShowCard title="useReducer">
        <UseReducer />
      </ShowCard>

      <ShowCard title="useMemo">
        <UseMemo />
      </ShowCard>

      <ShowCard title="useCallback">
        <UseCallback />
      </ShowCard>

      <ShowCard title="useRef">
        <UseRef />
      </ShowCard>

      <ShowCard title="useImperativeHandle">
        <ImperativeHandle />
      </ShowCard>
    </div>
  );
}

export default App;
