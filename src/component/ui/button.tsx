import type { ReactNode } from "react";

type Props = {
  text: string;
  icon?: ReactNode | string;
  variant: "primary" | "secondary" | "tertiary" | "danger" | "success";
  className?: string;
  isloading?: boolean;
  type?: "submit" | "reset";
  onHandleClick?: (value: any) => void;
};
const Button = ({
  text,
  icon,
  variant,
  className,
  isloading,
  type,
  onHandleClick,
}: Props) => {
  const variants = {
    primary: "bg-orange-500 text-white hover:bg-orange-600 rounded-2xl",
    secondary: "bg-orange-200 text-black hover:bg-orange-300",
    tertiary: "bg-transparent text-blue-500 hover:bg-blue-100",
    danger: "bg-red-500 text-white hover:bg-red-600",
    success: "bg-green-500 text-white hover:bg-green-600",
    link: "bg-transparent text-blue-500 hover:underline hover:bg-gray-200 rounded-2xl",
  };
  return (
    <>
      <button
        type={type}
        onClick={onHandleClick}
        className={`${variants[variant]} flex flex-row gap-2 px-4  py-2 rounded   justify-center ${className}`}
      >
        {isloading ? "Loading..." : null}
        {icon && typeof icon === "string" ? (
          <img className="w-5 h-5 mr-2" src={icon} alt="icon" />
        ) : (
          icon
        )}
        {text}
      </button>
    </>
  );
};

export default Button;
