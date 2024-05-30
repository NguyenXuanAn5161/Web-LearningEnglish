import React from "preact/compat";

type textTransform = "uppercase" | "lowercase" | "capitalize" | "none";

interface ButtonProps {
  title: string;
  backgroundColor?: string;
  color?: string;
  border?: string;
  borderRadius?: string;
  padding?: string;
  paddingVertical?: string;
  paddingHorizontal?: string;
  margin?: string;
  marginVertical?: string;
  marginHorizontal?: string;
  fontSize?: string;
  fontWeight?: string;
  width?: string;
  height?: string;
  textTransform?: textTransform;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = (ButtonProps) => {
  const {
    backgroundColor,
    color,
    border,
    borderRadius,
    padding,
    paddingVertical,
    paddingHorizontal,
    margin,
    marginVertical,
    marginHorizontal,
    fontSize,
    fontWeight,
    width,
    height,
    textTransform,
  } = ButtonProps;

  const buttonStyle = `
    background-color: ${backgroundColor ?? "#3498db"};
    border: ${border ?? "none"};
    color: ${color ?? "#ffffff"};
    cursor: pointer;
    font-size: ${fontSize ?? "1rem"};
    padding: ${padding ?? "0.5rem 1rem"};
    padding-vertical: ${paddingVertical ?? "0"};
    padding-horizontal: ${paddingHorizontal ?? "0"};
    text-transform: ${textTransform ?? "capitalize"};
    border-radius: ${borderRadius ?? "5px"};
    margin: ${margin ?? "0"};
    margin-vertical: ${marginVertical ?? "0"};
    margin-horizontal: ${marginHorizontal ?? "0"};
    font-weight: ${fontWeight ?? "normal"};
    width: ${width ?? "10%"};
    height: ${height ?? "auto"};
  `;

  const hoverOverStyle = (e: any) => {
    e.currentTarget.style.backgroundColor = "#2980b9";
  };

  const hoverOutStyle = (e: any) => {
    e.currentTarget.style.backgroundColor = backgroundColor;
  };

  const handleClick = () => {
    if (ButtonProps.onClick) {
      ButtonProps.onClick();
    }
  };

  const handlePress = (e: any) => {
    if (e.key === "Enter") {
      handleClick();
    }
  };

  return (
    <button
      style={{ cssText: buttonStyle }}
      {...ButtonProps}
      onMouseOver={(e) => hoverOverStyle(e)}
      onMouseOut={(e) => hoverOutStyle(e)}
      onFocus={(e) => hoverOverStyle(e)} // onFocus dùng cho việc focus vào button bằng tab
      onBlur={(e) => hoverOutStyle(e)} // onBlur dùng cho việc focus ra khỏi button bằng tab
      onClick={() => handleClick()}
      onKeyUp={(e) => handlePress(e)}
    >
      {ButtonProps.title}
    </button>
  );
};

export default Button;
