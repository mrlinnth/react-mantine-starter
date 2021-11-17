import { AppShell } from "@mantine/core";
import { MainNav } from "components/header";
import React from "react";

interface MainTemplateProps {
  children: React.ReactNode;
}

const MainTemplate = ({ children }: MainTemplateProps) => {
  return (
    <AppShell navbarOffsetBreakpoint="sm" fixed header={<MainNav />}>
      {children}
    </AppShell>
  );
};

export default MainTemplate;
