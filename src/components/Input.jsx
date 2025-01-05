import React from "react";

const Input = React.forwardRef(({ intxt = "enter", label, type = "text", classname = "", ...props }, ref) => {
  let id = React.useId();
  return (
    <div>
      {label && (
        <label htmlFor={id} className="border-l-indigo-700">
          {label}
        </label>
      )}
      <input id={id} type={type} placeholder={intxt} className={`border-2 border-indigo-500 ${classname}`} {...props} ref={ref} />
    </div>
  );
});

Input.displayName = "Input";

export default Input;
