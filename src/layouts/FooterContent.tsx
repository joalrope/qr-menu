import { Avatar, Col, Image, Row, theme } from "antd";
import {
  InstagramFilled,
  TwitterCircleFilled,
  FacebookFilled,
  CopyrightOutlined,
} from "@ant-design/icons";

const { useToken } = theme;

export const FooterContent = () => {
  const { token } = useToken();

  return (
    <Row className="--layout__footer">
      <Col className="copyitem" xs={0} sm={0} md={0} lg={5}>
        <Image width={200} src="../../public/footer-logo.png" />
      </Col>
      <Col className="copyitem">
        Copyright <CopyrightOutlined /> {new Date().getFullYear()} - QR MENU PR
      </Col>
      <Col className="copyitem">
        <a
          className="--footer__avatar"
          href="https://ant.design"
          target="_blank"
        >
          <Avatar style={{ backgroundColor: token.colorPrimary }}>
            <FacebookFilled />
          </Avatar>
        </a>
        <a
          className="--footer__avatar"
          href="https://ant.design"
          target="_blank"
        >
          <Avatar style={{ backgroundColor: token.colorPrimary }}>
            <TwitterCircleFilled />
          </Avatar>
        </a>
        <a
          className="--footer__avatar"
          href="https://ant.design"
          target="_blank"
        >
          <Avatar style={{ backgroundColor: token.colorPrimary }}>
            <InstagramFilled />
          </Avatar>
        </a>
      </Col>
    </Row>
  );
};
