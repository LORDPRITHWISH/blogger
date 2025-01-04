import React from "react";

const Input = React.forwardRef(({ intxt = "enter", labtxt, type = "text", classes = "", ...props }, ref) => {
  let id = React.useId();
  return (
    <div>
      {labtxt && (
        <label htmlFor={id} className="border-l-indigo-700">
          {labtxt}
        </label>
      )}
      <input id={id} type={type} placeholder={intxt} className={`border-2 border-indigo-500 ${classes}`} {...props} ref={ref} />
    </div>
  );
});

Input.displayName = "Input";

export default Input;
