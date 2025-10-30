import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../utils/css";

const buttonVariants = cva("btn btn-lg", {
  variants: {
    variant: {
      primary: "btn-primary",
      "primary-outline": "btn-primary-outline",
      "primary-tinted": "btn-primary-tinted",
      "primary-plain": "btn-primary-plain",
      danger: "btn-danger",
      "danger-outline": "btn-danger-outline",
      "danger-tinted": "btn-danger-tinted",
      "danger-plain": "btn-danger-plain",
      secondary: "btn-secondary",
      "secondary-outline": "btn-secondary-outline",
      "secondary-tinted": "btn-secondary-tinted",
      "secondary-plain": "btn-secondary-plain",
    },
    size: {
      lg: "btn-lg",
      md: "btn-md",
      sm: "btn-sm",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "lg",
  },
});

export const Button = ({
  size,
  className,
  variant,
  children,
   ...props
}: React.ComponentProps<"button"> & VariantProps<typeof buttonVariants>) => {
  return (
    <button className={cn(buttonVariants({ variant, size, className }))} { ...props}>
      {children}
    </button>
  );
};
