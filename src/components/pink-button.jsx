import * as React from "react";
import Button from "@mui/material/Button";
import { useState } from "react";

export function PinkButton() {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Button
        variant='contained'
        style={{
          width: "200px",
          textTransform: "none",
          color: "white",
          backgroundColor: isHovered ? "#ce0f6840" : "#CE0F69",
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        Siguiente
      </Button>
    </div>
  );
}
