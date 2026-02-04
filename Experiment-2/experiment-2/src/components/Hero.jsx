import { Box, Typography, Button, Container } from "@mui/material";

const Hero = () => {
  return (
    <Box sx={{ py: 8, backgroundColor: "#f4f6f8" }}>
      <Container maxWidth="md" align="center">
        <Typography variant="h3" gutterBottom>
          Hi, I'm a React Developer
        </Typography>
        <Typography variant="h6" color="text.secondary" paragraph>
          I create modern, responsive websites using React and Material UI.
        </Typography>
        <Button variant="contained" size="large">
          View Projects
        </Button>
      </Container>
    </Box>
  );
};

export default Hero;
