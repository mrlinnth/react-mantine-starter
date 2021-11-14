import React from "react";
import { Button, Col, Grid, Group, Header } from "@mantine/core";
import Brand from "components/common/Brand";
import { Link } from "react-router-dom";
import { RiHome3Line, RiUserLine } from "react-icons/ri";

function MainNav() {
  return (
    <Header height={60} padding="xs">
      <Grid grow>
        <Col span={6}>
          <Brand />
        </Col>
        <Col span={6}>
          <Group position="right">
            <Button leftIcon={<RiHome3Line />} variant="link" component={Link} to="/">
              Home
            </Button>
            <Button leftIcon={<RiUserLine />} variant="link" component={Link} to="/about">
              About
            </Button>
          </Group>
        </Col>
      </Grid>
    </Header>
  );
}

export default MainNav;
