import ShowCard from "@/components/ShowCard";
import UseState from "@/components/reacthooks/UseState";
import UseEffect from "@/components/reacthooks/UseEffect";
import UseLayoutEffect from "@/components/reacthooks/UseLayoutEffect";
import UseReducer from "@/components/reacthooks/UseReducer";
import UseMemo from "@/components/reacthooks/UseMemo";
import UseCallback from "@/components/reacthooks/UseCallback";
import UseRef from "@/components/reacthooks/UseRef";
import ImperativeHandle from "@/components/reacthooks/ImperativeHandle";
import UseContext from "@/components/reacthooks/UseContext";
function HooksTest() {
  return (
    <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
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

      <ShowCard title="useContext">
        <UseContext />
      </ShowCard>
    </div>
  );
}

export default HooksTest;
