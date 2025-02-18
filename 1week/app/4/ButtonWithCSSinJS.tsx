import React from "react";
import { button } from "./ButtonWithCSSinJS.css";

type ButtonVariants = Parameters<typeof button>[0];

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  ButtonVariants & {
    children: React.ReactNode;
  };

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, variant, size, className, ...props }, ref) => {
    return (
      <button ref={ref} className={button({ variant, size })} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
