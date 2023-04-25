import React from "react";

const InputBox = (props) => {
  return (
    <div>
      <input
        type="text"
        name={props.name}
        value={props.value}
        onChange={(e) => props.onChange(e)}
      />
    </div>
  );
};

export default InputBox;
