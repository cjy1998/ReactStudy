import { useContext } from "react";
import { CanvasEditorContext } from "@/context/CanvasEditor";
export default function useCanvasEditor() {
  const context = useContext(CanvasEditorContext);
  if (!context) {
    throw new Error(
      "useCanvasEditor must be used within a CanvasEditorContext"
    );
  }
  return context;
}
