import { Button } from "@mui/material";
export function BUTTON({ onClick, children }) {
  return (
    <>
      <Button
        sx={{
          px: 2,
          py: 1,
          mr: 1,
          backgroundColor: "rgba(179, 229, 252, 0.8)",
          borderRadius: "20px",
          fontWeight: "bold",
          "&:hover": { backgroundColor: "#123974ff" },
        }}
        onClick={onClick}
      >
        {children}
      </Button>
    </>
  );
}
