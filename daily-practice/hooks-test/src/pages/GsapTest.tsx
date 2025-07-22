import Attribute from "@/components/gsap/Attribute";
import Easing from "@/components/gsap/Easing";
import MultipleTarget from "@/components/gsap/MultipleTarget";
import Staggers from "@/components/gsap/Staggers";
import Timelines from "@/components/gsap/Timelines";
import To from "@/components/gsap/To";

const GsapTest = () => {
  return (
    <div className="w-full h-full p-10 flex flex-col gap-10">
      <To />
      <MultipleTarget />
      <Attribute />
      <Easing />
      <Staggers />
      <Timelines />
    </div>
  );
};

export default GsapTest;
