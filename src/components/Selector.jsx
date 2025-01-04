import React from "react";

const Selector = ({ labtxt, option = [], className = "", ...props }, ref) => {
  let id = React.useId();
  return (
    <div>
      {labtxt && (
        <label htmlFor={id} className="border-l-indigo-700">
          {labtxt}
        </label>
      )}
      <select name="cars" id={id} className={`{className}`} {...props} ref={ref}>
        {option.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};

export default React.forwardRef(Selector);
