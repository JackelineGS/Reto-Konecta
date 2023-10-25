import IconButton from "@mui/material/IconButton";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";

export function BackButton() {
  const buttonStyles = {
    color: "#002855",
    textAlign: "center",
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "normal",
    marginLeft: "30px",
    marginBottom: "20px",
    gap: "12px",
  };

  return (
    <IconButton style={buttonStyles}>
      <ArrowBackIosNewOutlinedIcon fontSize='small' />
      Volver
    </IconButton>
  );
}
