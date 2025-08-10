import React from "react";
import { ChromePicker, CirclePicker } from "react-color";
const ColorPickerEditor = ({ value, onColorChange, showCircle = true }) => {
  return (
    <div className="space-y-4">
      <ChromePicker
        color={value}
        onChange={(e) => onColorChange(e.hex)}
        className="border-r rounded-2xl mb-5"
      />
      {showCircle && (
        <CirclePicker color={value} onChange={(e) => onColorChange(e.hex)} />
      )}
    </div>
  );
};

export default ColorPickerEditor;
