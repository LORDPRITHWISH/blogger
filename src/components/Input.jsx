import React from "react";

const Input = React.forwardRef(({ intxt = "enter", label, type = "text", className = "", ...props }, ref) => {
  let id = React.useId();
  return (
    <div>
      {label && (
        <label htmlFor={id} className="border-l-indigo-700 text-xl font-bold ml-7">
          {label}
        </label>
      )}
      <input id={id} type={type} placeholder={intxt} className={` ml-4 p-4 border-2 border-indigo-500 ${className}`} {...props} ref={ref} />
    </div>
  );
});

Input.displayName = "Input";

export default Input;
