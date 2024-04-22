import React from "react";

const NoDataFound = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1 className="text-xl">No se encontraron datos</h1>
    </div>
  );
};

export default NoDataFound;
