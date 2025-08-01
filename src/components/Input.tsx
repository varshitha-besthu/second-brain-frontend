import React from "react";

type InputProps = {
  placeholder: string;
};

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ placeholder }, ref) => {
    return (
      <div>
        <input
          placeholder={placeholder}
          type="text"
          ref={ref}
          className="px-4 py-2 border rounded m-2"
        />
      </div>
    );
  }
);
