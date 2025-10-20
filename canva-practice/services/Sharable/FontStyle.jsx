import React from "react";
import { Bold, Italic, Underline } from "lucide-react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import useCanvasEditor from "@/hooks/UseCanvasHook";

const FontStyle = () => {
  const { canvasEditor } = useCanvasEditor();
  const activeObject = canvasEditor.getActiveObject();
  const onFontStyleChange = (val) => {
    const activeObject = canvasEditor.getActiveObject();
    if (activeObject) {
      console.log(activeObject);
      switch (val) {
        case "bold":
          activeObject.set({
            fontWeight: activeObject.fontWeight === "bold" ? "normal" : "bold",
          });
          break;
        case "italic":
          activeObject.set({
            fontStyle:
              activeObject.fontStyle === "italic" ? "normal" : "italic",
          });
          break;
        case "underline":
          activeObject.set({
            underline: activeObject.underline === true ? false : true,
          });
          break;
      }
    }
    canvasEditor.renderAll();
  };
  return (
    <ToggleGroup variant="outline" type="multiple">
      <ToggleGroupItem
        value="bold"
        aria-label="Toggle bold"
        defaultPressed={activeObject?.fontWeight == "bold"}
        onClick={() => onFontStyleChange("bold")}
      >
        <Bold className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem
        value="italic"
        aria-label="Toggle italic"
        defaultPressed={activeObject?.fontStyle == "italic"}
        onClick={() => onFontStyleChange("italic")}
      >
        <Italic className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem
        value="strikethrough"
        aria-label="Toggle strikethrough"
        defaultPressed={activeObject?.underline}
        onClick={() => onFontStyleChange("underline")}
      >
        <Underline className="h-4 w-4" />
      </ToggleGroupItem>
    </ToggleGroup>
  );
};

export default FontStyle;
