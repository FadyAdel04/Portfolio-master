import React from "react";

const CustomArrow = ({ className, style, onClick, direction }) => {
  return (
    <button
      className={className}
      style={{
        ...style,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "40px",
        height: "40px",
        border: "none",
        borderRadius: "15px",
        backgroundColor: '#801f95',
        color: "white",
        zIndex: 1,
        transition: "background-color 0.3s ease",
      }}
      onClick={onClick}
    >
      {direction === "prev" ? "❮" : "❯"}
    </button>
  );
};

export default CustomArrow;
