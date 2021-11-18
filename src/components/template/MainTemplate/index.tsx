import { AppShell, Container } from "@mantine/core";
import { MainNav } from "components/header";
import { LeftSidebar } from "components/sidebar";
import React, { useState } from "react";

interface MainTemplateProps {
  children: React.ReactNode;
}

const MainTemplate = ({ children }: MainTemplateProps) => {
  const [navbarOpened, setNavbarOpened] = useState(false);

  return (
    <AppShell
      navbarOffsetBreakpoint="sm"
      fixed
      navbar={<LeftSidebar opened={navbarOpened} />}
      header={
        <MainNav
          navbarOpened={navbarOpened}
          toggleNavbar={() => setNavbarOpened((open) => !open)}
        />
      }
    >
      <Container>{children}</Container>
    </AppShell>
  );
};

export default MainTemplate;
