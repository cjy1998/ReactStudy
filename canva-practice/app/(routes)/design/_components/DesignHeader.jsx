import { Input } from "@/components/ui/input";
import { UserButton } from "@stackframe/stack";
import ChangeProject from "./ChangeProject";
import { ChevronDown } from "lucide-react";
const DesignHeader = () => {
  return (
    <div className="w-full px-4 py-3 flex justify-between items-center shadow-sm">
      <div className="flex gap-1">
        <Input placeholder="项目名称" className="border-0 shadow-none " />
        <ChangeProject>
          <ChevronDown className="w-6 h-6 text-gray-500 cursor-pointer hover:text-gray-700" />
        </ChangeProject>
      </div>

      <UserButton />
    </div>
  );
};

export default DesignHeader;
