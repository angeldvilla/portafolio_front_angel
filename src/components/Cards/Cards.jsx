import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import advl from "../../assets/images/miLogo.png";

export default function Cards(projects) {
  const handleView = () => {
    window.open(projects.projects.repositorio);
  };
  return (
    <Card sx={{ maxWidth: 545, margin: "auto" }}>
      <CardMedia
        sx={{ height: "465px" }}
        image={!projects.projects.image ? advl : projects.projects.image}
        title="Project Image"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {projects.projects.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {projects.projects.description}
        </Typography>
      </CardContent>
      <CardActions
        sx={{
          marginBottom: "2.4em",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Button size="small">Ver Proyecto</Button>
        <Button size="small" onClick={handleView}>
          Ver Repositorio
        </Button>
      </CardActions>
    </Card>
  );
}
