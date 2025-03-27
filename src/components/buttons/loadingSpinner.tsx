import React from "react";

const LoadingSpinner = ({
  size = 24,
  color = "white",
  borderWidth = 2,
}: {
  size?: number;
  color?: string;
  borderWidth?: number;
}) => {
  return (
    <div
      className={`animate-spin rounded-full border-t-${borderWidth} border-${color} border-opacity-70`}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        borderTopWidth: `${borderWidth}px`,
        borderColor: color,
        borderStyle: "solid",
        borderLeftColor: "transparent",
        borderRightColor: "transparent",
        borderBottomColor: "transparent",
      }}
    />
  );
};

export default LoadingSpinner;
