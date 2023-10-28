import Container from "@mui/material/Container";
import { styled } from "@mui/system";

const CustomContainer = styled(Container)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  width: "800px",
  height: "354px",
  padding: "35px",
  backgroundColor: "#fff",
  borderRadius: "5px",
  marginTop: "20px",
}));

const Row = styled("div")({
  display: "flex",
  flexDirection: "row",
  gap: "40px",
});

export function SimpleContainer({ children }) {
  return (
    <CustomContainer fixed>
      <Row>{children}</Row>
    </CustomContainer>
  );
}
