import React from "react";
import { AppShell } from "@mantine/core";
import MainNav from "components/header/MainNav";

interface MainTemplateProps {
  children: React.ReactNode
}

const MainTemplate = ({ children }: MainTemplateProps) => {
  return (
    <AppShell navbarOffsetBreakpoint="sm" fixed header={<MainNav />}>
      {children}
    </AppShell>
  );
};

export default MainTemplate;
