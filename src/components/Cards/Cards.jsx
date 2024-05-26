import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import WorkIcon from "@mui/icons-material/Work";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import defaultImage from "../../assets/images/defaultImage.jpg";
import { UseTheme } from "../../theme/ThemeContext";
import cardStyle from "./cards.module.css";

export default function Cards(projects) {
  const { darkMode } = UseTheme();
  const handleView = () => {
    window.open(projects.projects.repositorio);
  };

  const handleLink = () => {
    window.open(projects.projects.enlace);
  };

  return (
    <Card
      sx={{
        boxShadow: "none",
        backgroundColor: "transparent",
        color: darkMode ? "#ffffff" : "#000000",
        height: "100%",
      }}
    >
      <CardMedia
        component="img"
        height="295"
        image={!projects.projects.image ? defaultImage : projects.projects.image}
        title={projects.projects.title}
      />
      <CardContent style={{ flexGrow: 1 }}>
        <Typography
          component="div"
          style={{
            fontFamily: "fantasy",
            fontSize: "25px",
            marginBottom: "15px",
          }}
        >
          {projects.projects.title}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          style={{
            fontFamily: "cursive",
            fontSize: "14px",
            overflow: "hidden",
            textOverflow: "ellipsis",
            maxHeight: "100px",
            color: darkMode ? "#ffffffb7" : "#000000",
          }}
        >
          {projects.projects.description}
        </Typography>
      </CardContent>
      <CardActions
        style={{
          justifyContent: "center",
          marginTop: "2px",
          marginBottom: "2px",
        }}
      >
        <button
          size="small"
          style={{ ...buttonStyle, backgroundColor: "#00366d" }}
          onClick={handleLink}
          className={cardStyle.buttonHover}
        >
          Ver Proyecto <PlayCircleIcon sx={{ marginLeft: "5px" }} />
        </button>
        <button
          size="small"
          style={{ ...buttonStyle, backgroundColor: "#920101" }}
          onClick={handleView}
          className={cardStyle.buttonHover}
        >
          Ver Repositorio <WorkIcon sx={{ marginLeft: "5px" }} />
        </button>
      </CardActions>
    </Card>
  );
}

const buttonStyle = {
  fontFamily: "Kanit",
  fontSize: "14px",
  border: "none",
  color: "white",
  borderRadius: "8px",
  padding: "5px 10px",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
};
