import React from "react";
import PropTypes from "prop-types";

const shapes = {
  RoundedBorder2: "rounded-radius2",
  RoundedBorder5: "rounded-radius5",
  icbRoundedBorder4: "rounded-radius4",
};
const variants = {
  OutlineGray300:
    "bg-white_A700 border border-gray_300 border-solid text-gray_900",
  FillGray900: "bg-gray_900 text-white_A700",
  icbFillGray900: "bg-gray_900",
};
const sizes = { sm: "sm:p-[4px] md:p-[6px] p-[9px]", smIcn: "p-[3px]" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant,
  size,
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${shapes[shape] || ""} ${
        variants[variant] || ""
      } ${sizes[size] || ""} `}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf([
    "RoundedBorder2",
    "RoundedBorder5",
    "icbRoundedBorder4",
  ]),
  variant: PropTypes.oneOf(["OutlineGray300", "FillGray900", "icbFillGray900"]),
  size: PropTypes.oneOf(["sm", "smIcn"]),
};
Button.defaultProps = {
  className: "",
  shape: "RoundedBorder2",
  variant: "OutlineGray300",
  size: "sm",
};

export { Button };
