import Link from "next/link";

type ButtonVariant = "primary" | "secondary" | "white" | "outline-white";

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: "md" | "lg";
  target?: string;
  rel?: string;
  className?: string;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary: "bg-brand-red text-white hover:bg-brand-dark",
  secondary: "border-2 border-brand-red text-brand-red hover:bg-brand-red hover:text-white",
  white: "bg-white text-brand-red hover:bg-gray-100",
  "outline-white": "border-2 border-white text-white hover:bg-white hover:text-brand-red",
};

const sizeClasses = {
  md: "px-8 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

export default function Button({
  href,
  children,
  variant = "primary",
  size = "lg",
  target,
  rel,
  className = "",
}: ButtonProps) {
  const classes = `inline-block rounded-md transition-colors font-medium ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  const isExternal = href.startsWith("http") || href.startsWith("mailto:");

  if (isExternal) {
    return (
      <a href={href} target={target} rel={rel} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
