import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import advl from "../../assets/images/miLogo.png";
import DarkMode from "../DarkMode/darkMode";
import styles from "../Buttons/buttons.module.css";
import { UseTheme } from "../../theme/ThemeContext";

const pages = ["Inicio", "Sobre Mi", "Proyectos", "Contacto"];

function ResponsiveAppBar() {
  const { darkMode, setDarkMode } = UseTheme();
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const toggleDarkMode = () => {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <AppBar
      position="fixed"
      style={{
        backgroundColor: isScrolled
          ? darkMode
            ? "#2b2b2bf4"
            : "#837777f4"
          : darkMode
          ? "#9e241ccf"
          : "rgb(243, 184, 180)",
        transition: "background-color 0.3s",
        color: darkMode ? "#0a0a0a" : "#fffff",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <a href="/" data-aos="zoom-in-up">
            <Avatar
              alt="Logo Avatar"
              className="animate-jump animate-ease-linear"
              src={advl}
              style={{ width: "75px", height: "auto", marginRight: "12px" }}
            />
          </a>
          <a href="/" style={{ textDecoration: "none", color: "inherit" }}>
            <Typography
              variant="h6"
              noWrap
              component="a"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                letterSpacing: ".3rem",
                color: "white",
                textDecoration: "none",
              }}
              data-aos="fade-up-right"
            >
              ANGEL DAVID VILLA
            </Typography>
          </a>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
              style={{ color: "white" }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <Typography
                variant="h5"
                noWrap
                component="a"
                sx={{
                  mr: 2,
                  ml: 2,
                  display: { xs: "flex", md: "none" },
                  flexGrow: 1,
                  fontFamily: "fantasy",
                  letterSpacing: ".2rem",
                  color: "white",
                  textDecoration: "none",
                }}
              >
                ANGEL DAVID VILLA
              </Typography>
              {pages.map((page) => (
                <Link
                  key={page}
                  to={page.toLowerCase()}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  <MenuItem
                    key={page}
                    onClick={handleCloseNavMenu}
                    sx={{
                      flexGrow: 1,
                      display: "flex",
                      justifyContent: "center",
                    }}
                    data-aos="zoom-in-down"
                  >
                    <Button
                      key={page}
                      onClick={handleCloseNavMenu}
                      sx={{
                        my: 2,
                        color: "white",
                        display: "flex",
                        justifyContent: "center",
                        backgroundColor: "gray",
                      }}
                      className={styles.viewMore}
                    >
                      {page}
                    </Button>
                  </MenuItem>
                </Link>
              ))}
              <MenuItem
                onClick={() => {
                  toggleDarkMode();
                  handleCloseNavMenu();
                }}
                sx={{ justifyContent: "center" }}
              >
                <DarkMode />
              </MenuItem>
            </Menu>
          </Box>
          {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}
          {/*   <Typography
            variant="h5"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            ANGEL DAVID VILLA
          </Typography> */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "end",
            }}
            data-aos="zoom-in-down"
          >
            {pages.map((page) => (
              <Link
                key={page}
                to={page.toLowerCase()}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "flex", fontSize: 16 }}
                  className={styles.buttonsNav}
                >
                  {page}
                </Button>
              </Link>
            ))}
          </Box>

          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              ml: 2,
            }}
            onClick={toggleDarkMode}
            data-aos="zoom-in-down"
          >
            <DarkMode />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
