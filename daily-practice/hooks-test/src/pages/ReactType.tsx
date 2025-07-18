import FcType from "@/components/typePractice/FcType";
import HooksType from "@/components/typePractice/HooksType";
import JsxType from "@/components/typePractice/JsxType";
import UseImperativeHandleType from "@/components/typePractice/useImperativeHandleType";

const ReactType = () => {
  return (
    <div className="p-4 w-full h-full flex flex-wrap gap-4">
      <JsxType />
      <FcType />
      <HooksType />
      <UseImperativeHandleType />
    </div>
  );
};

export default ReactType;
