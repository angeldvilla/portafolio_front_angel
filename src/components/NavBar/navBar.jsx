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
import {
  ButtonGitHub,
  ButtonInstagram,
  ButtonLinkedIn,
} from "../Buttons/buttons";
import styles from "../Buttons/buttons.module.css";

const pages = ["Sobre Mi", "Habilidades", "Proyectos", "Contacto"];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
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
        backgroundColor: isScrolled ? "#2b2b2bf4" : "#b50c00",
        transition: "background-color 0.3s",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <a href="/">
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
              /* href="#app-bar-with-responsive-menu" */
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
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
              {pages.map((page) => (
                <Link
                  key={page}
                  to={page.toLowerCase()}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Button
                      key={page}
                      onClick={handleCloseNavMenu}
                      sx={{
                        my: 2,
                        color: "white",
                        display: "block",
                        gap: "10px",
                        backgroundColor: "gray",
                      }}
                      className={styles.buttonsNav}
                    >
                      {page}
                    </Button>
                  </MenuItem>
                </Link>
              ))}
            </Menu>
          </Box>
          {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}
          <Typography
            variant="h5"
            noWrap
            component="a"
            /* href="#app-bar-with-responsive-menu" */
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
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
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
                  sx={{ my: 2, color: "white", display: "block" }}
                  className={styles.buttonsNav}
                >
                  {page}
                </Button>
              </Link>
            ))}
          </Box>

          <ButtonGitHub />
          <ButtonLinkedIn />
          <ButtonInstagram />
          <Box sx={{ flexGrow: 0, marginLeft: "10px" }}>
            <DarkMode />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
