import React from "react";

function Button({
  children,
  variant = "default",
  size = "default",
  className = "",
  ...props
}) {
  const baseStyle =
    "inline-flex items-center justify-center rounded-md font-medium";

  const variants = {
    default: "bg-blue-500 text-white hover:bg-blue-600",
    destructive: "bg-red-500 text-white hover:bg-red-600",
    outline: "border border-gray-300 bg-white hover:bg-gray-100",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
    ghost: "hover:bg-gray-100",
    link: "text-blue-500 hover:underline",
  };

  const sizes = {
    default: "px-4 py-2 text-sm",
    sm: "px-3 py-1 text-xs",
    lg: "px-6 py-3 text-base",
    icon: "p-2",
  };

  const buttonClass = `${baseStyle} ${variants[variant]} ${sizes[size]} ${className}`;

  return (
    <button className={buttonClass} {...props}>
      {children}
    </button>
  );
}

export default Button;
