import { OfferCardBlue } from "../components/offerCardBlue";
import { OfferCard } from "../components/offerCard";
import { OfferDetails } from "../components/offerDetails";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";

export function PagesOffers() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        marginLeft: "30px",
        marginRight: "30px",
      }}
    >
      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          marginLeft: "30px",
          padding: "20px",
          gap: "20px",
        }}
      >
        <OfferCardBlue />
        <Typography sx={{ fontSize: "16px", fontWeight: 500 }}>
          Otros puestos similares
        </Typography>
        <OfferCard />
        <OfferCard />
        <OfferCard />
      </Box>
      <Box>
        <OfferDetails />
      </Box>
    </Box>
  );
}
