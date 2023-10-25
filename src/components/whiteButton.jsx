import * as React from "react";
import Button from "@mui/material/Button";
import { useState } from "react";

export function WhiteButton() {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div /*style={{ display: "flex", justifyContent: "center" }} comentado para agregar más adelante*/
    >
      <Button
        variant='contained'
        style={{
          width: "200px",
          textTransform: "none",
          color: "#212B36",
          backgroundColor: isHovered ? "#ECECEC" : "white",
          border: "solid 1px #919EAB52",
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        Atrás
      </Button>
    </div>
  );
}
