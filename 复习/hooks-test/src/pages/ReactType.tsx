import FcType from "@/components/typePractice/FcType";
import HooksType from "@/components/typePractice/HooksType";
import JsxType from "@/components/typePractice/JsxType";

const ReactType = () => {
  return (
    <div className="p-4 w-full h-full flex flex-wrap gap-4">
      <JsxType />
      <FcType />
      <HooksType />
    </div>
  );
};

export default ReactType;
