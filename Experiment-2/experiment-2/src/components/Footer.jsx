import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        py: 3,
        backgroundColor: "#1976d2",
        color: "white",
        textAlign: "center",
      }}
    >
      <Typography variant="body2">
        © 2026 MyPortfolio | Built with React & Material UI
      </Typography>
    </Box>
  );
};

export default Footer;
