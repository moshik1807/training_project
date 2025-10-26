import { Button } from "@mui/material"
export function BUTTON({onClick,children}){
    return(
        <>
        <Button
        sx={{
          px: 2,
          py: 1,
          mr: 1,
          backgroundColor: "#90ee90",
          borderRadius: "20px",
          fontWeight: "bold",
          "&:hover": { backgroundColor: "#76c776" },
        }}
        onClick={onClick}
      >
        {children}
      </Button>
        </>
    )
}