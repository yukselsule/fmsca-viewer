import React from "react";
import { Box, Typography, Link, IconButton } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

function Footer() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: { xs: "flex-start", sm: "flex-start", md: "center" },
        backgroundColor: "#15396c",
        color: "white",
        padding: 7,
        borderTop: "1px solid #ddd",
        flexDirection: { xs: "column", sm: "column", md: "row" },
        gap: { xs: 2, sm: 2, md: 0 },
        textAlign: { xs: "left", sm: "left", md: "left" },
      }}
    >
      <Box sx={{ flex: 1, mb: { xs: 2, sm: 2, md: 0 } }}>
        <Typography variant="body1" align="left" sx={{ mb: 1 }}>
          U.S. DEPARTMENT OF TRANSPORTATION
        </Typography>
        <Typography
          variant="body1"
          align="left"
          sx={{ mb: 1, fontWeight: 600 }}
        >
          Federal Motor Carrier Safety Administration
        </Typography>
        <Link
          href="https://www.google.com/maps/search/?api=1&query=1200+NEW+JERSEY+AVENUE,+SE+WASHINGTON,+DC+20590"
          target="_blank"
          rel="noopener noreferrer"
          variant="body1"
          sx={{
            display: "block",
            mb: 1,
            color: "white",
            textDecoration: "none",
            "&:hover": { textDecoration: "underline" },
          }}
        >
          1200 NEW JERSEY AVENUE, SE
          <br />
          WASHINGTON, DC 20590
        </Link>

        <Link
          href="tel:1-800-832-5660"
          variant="body1"
          sx={{
            display: "block",
            color: "white",
            textDecoration: "none",
            "&:hover": { textDecoration: "underline" },
          }}
        >
          1-800-832-5660
        </Link>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1,
          justifyContent: {
            xs: "flex-start",
            sm: "flex-start",
            md: "flex-start",
          },
        }}
      >
        <Typography variant="body1" sx={{ mr: 1 }}>
          Follow us on:
        </Typography>
        <IconButton
          component={Link}
          href="https://www.facebook.com/FMCSA/"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ color: "white" }}
        >
          <FacebookIcon />
        </IconButton>
        <IconButton
          component={Link}
          href="https://twitter.com/FMCSA"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ color: "white" }}
        >
          <TwitterIcon />
        </IconButton>
        <IconButton
          component={Link}
          href="https://www.instagram.com/dot_fmcsa/"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ color: "white" }}
        >
          <InstagramIcon />
        </IconButton>
        <IconButton
          component={Link}
          href="https://www.youtube.com/user/usdotgov"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ color: "white" }}
        >
          <YouTubeIcon />
        </IconButton>
      </Box>
    </Box>
  );
}

export default Footer;
