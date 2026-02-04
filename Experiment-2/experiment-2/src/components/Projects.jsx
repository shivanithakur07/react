import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
} from "@mui/material";

const projects = [
  {
    title: "Portfolio Website",
    desc: "Personal portfolio built using React and MUI.",
  },
  {
    title: "Product Landing Page",
    desc: "Responsive landing page with modern UI design.",
  },
  {
    title: "Dashboard UI",
    desc: "Admin dashboard interface using Material UI.",
  },
];

const Projects = () => {
  return (
    <Container sx={{ py: 6 }}>
      <Typography variant="h4" align="center" gutterBottom>
        My Projects
      </Typography>

      <Grid container spacing={4}>
        {projects.map((project, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Card elevation={4}>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {project.title}
                </Typography>
                <Typography color="text.secondary">
                  {project.desc}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Projects;
