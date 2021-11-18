import { Anchor, Navbar } from "@mantine/core";
import React from "react";
import { Link } from "react-router-dom";
import useStyles from "./LeftSidebar.styles";

interface LeftSidebarProps {
  opened: boolean;
}

function LeftSidebar({ opened }: LeftSidebarProps) {
  const { classes, cx } = useStyles();

  return (
    <Navbar
      padding="md"
      hiddenBreakpoint="sm"
      hidden={!opened}
      width={{ base: 400, breakpoints: { sm: "100%", lg: 300 } }}
    >
      <Navbar.Section>
        <Anchor className={cx(classes.mainLink)} component={Link} to="/">
          Home
        </Anchor>
      </Navbar.Section>
      <Navbar.Section>
        <Anchor className={cx(classes.mainLink)} component={Link} to="/about">
          About
        </Anchor>
      </Navbar.Section>
    </Navbar>
  );
}

export default LeftSidebar;
