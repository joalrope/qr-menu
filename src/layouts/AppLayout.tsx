import { ReactNode } from "react";
import { Layout } from "antd";
import { FooterContent } from "./FooterContent";
import { HeaderContent } from "./HeaderContent";

import "./app-layout.css";

const { Header, Footer, Content } = Layout;

export interface INav {
  key: string;
  keyPath: string[];
}

export const AppLayout = ({ children }: { children: ReactNode }) => {
  return (
    <Layout>
      <Layout>
        <Header>
          <HeaderContent />
        </Header>
        <Content>{children}</Content>
        <Footer>
          <FooterContent />
        </Footer>
      </Layout>
    </Layout>
  );
};
