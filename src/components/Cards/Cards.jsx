import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import WorkIcon from "@mui/icons-material/Work";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import advl from "../../assets/images/miLogo.png";

export default function Cards(projects) {
  const handleView = () => {
    window.open(projects.projects.repositorio);
  };

  const handleLink = () => {
    window.open(projects.projects.enlace);
  };

  return (
    <Card sx={{ boxShadow: "none" }}>
      <CardMedia
        style={{ height: "295px", width: "100%", objectFit: "cover" }}
        image={!projects.projects.image ? advl : projects.projects.image}
        title={projects.projects.title}
      />
      <CardContent>
        <Typography
          component="div"
          sx={{
            fontFamily: "Bowlby One SC",
            fontSize: 25,
            marginBottom: 3,
          }}
        >
          {projects.projects.title}
        </Typography>
        <Typography
          color="text.secondary"
          sx={{
            fontFamily: "Libre Franklin",
            fontSize: 14,
            maxHeight: "200px",
            overflow: "hidden",
          }}
        >
          {projects.projects.description}
        </Typography>
      </CardContent>
      <CardActions
        sx={{
          marginTop: 2,
          marginBottom: "2.5em",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <button
          size="small"
          style={{
            fontFamily: "Kanit",
            fontSize: 14,
            backgroundColor: "#0b00a1",
            border: "none",
            color: "white",
            borderRadius: "8px",
            padding: "5px 10px",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            textAlign: "center",
          }}
          onClick={handleLink}
        >
          Ver Proyecto <PlayCircleIcon sx={{ marginLeft: "10px" }} />
        </button>
        <button
          size="small"
          style={{
            fontFamily: "Kanit",
            fontSize: 14,
            backgroundColor: "#791c00",
            border: "none",
            color: "white",
            borderRadius: "8px",
            padding: "5px 10px",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            textAlign: "center",
          }}
          onClick={handleView}
        >
          Ver Repositorio <WorkIcon sx={{ marginLeft: "10px" }} />
        </button>
      </CardActions>
    </Card>
  );
}
