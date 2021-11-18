import {
  Burger,
  Button,
  Col,
  Grid,
  Group,
  Header,
  MediaQuery,
} from "@mantine/core";
import { Brand } from "components/common";
import React from "react";
import { RiHome3Line, RiUserLine } from "react-icons/ri";
import { Link } from "react-router-dom";
interface MainNavProps {
  navbarOpened: boolean;
  toggleNavbar(): void;
}

function MainNav({ navbarOpened, toggleNavbar }: MainNavProps) {
  return (
    <Header height={60} padding="md">
      <Grid align="flex-start" grow>
        <Col span={4}>
          <Group>
            <MediaQuery smallerThan="sm" styles={{ display: "none" }}>
              <Burger opened={navbarOpened} onClick={toggleNavbar} size="sm" />
            </MediaQuery>
            <Brand />
          </Group>
        </Col>
        <Col span={8}>
          <Group position="right">
            <Button
              leftIcon={<RiHome3Line />}
              variant="link"
              component={Link}
              to="/"
            >
              Home
            </Button>
            <Button
              leftIcon={<RiUserLine />}
              variant="link"
              component={Link}
              to="/about"
            >
              About
            </Button>
          </Group>
        </Col>
      </Grid>
    </Header>
  );
}

export default MainNav;
