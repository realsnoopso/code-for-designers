import { recipe } from "@vanilla-extract/recipes";
import { style } from "@vanilla-extract/css";

const base = style({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "6px",
  fontWeight: "500",
  cursor: "pointer",
  transition: "background-color 0.2s",
  ":disabled": {
    opacity: 0.5,
    cursor: "not-allowed",
  },
});

export const button = recipe({
  base,

  variants: {
    variant: {
      default: {
        backgroundColor: "#3b82f6",
        color: "white",
        ":hover": {
          backgroundColor: "#2563eb",
        },
      },
      destructive: {
        backgroundColor: "#ef4444",
        color: "white",
        ":hover": {
          backgroundColor: "#dc2626",
        },
      },
      outline: {
        backgroundColor: "white",
        border: "1px solid #e5e7eb",
        ":hover": {
          backgroundColor: "#f3f4f6",
        },
      },
      ghost: {
        backgroundColor: "transparent",
        ":hover": {
          backgroundColor: "#f3f4f6",
        },
      },
    },
    size: {
      sm: {
        fontSize: "0.875rem",
        height: "2rem",
        padding: "0 0.75rem",
      },
      default: {
        fontSize: "1rem",
        height: "2.5rem",
        padding: "0 1rem",
      },
      lg: {
        fontSize: "1.125rem",
        height: "3rem",
        padding: "0 1.5rem",
      },
    },
  },

  defaultVariants: {
    variant: "default",
    size: "default",
  },
});
