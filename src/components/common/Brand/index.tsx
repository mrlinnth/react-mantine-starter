import React from "react";
import { Link } from "react-router-dom";
import { createStyles, getFocusStyles } from "@mantine/core";
import { Logo } from "../Logo";

const useStyles = createStyles((theme) => ({
  logo: {
    ...getFocusStyles(theme),
    textDecoration: "none",
    userSelect: "none",
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
  },

  image: {
    height: 30,
  },
}));

function Brand() {
  const { classes } = useStyles();

  return (
    <Link to="/" className={classes.logo} aria-label="Mantine">
      <Logo className={classes.image} />
    </Link>
  );
}
export default Brand;
