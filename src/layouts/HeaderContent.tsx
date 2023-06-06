import { useAppSelector } from "../store/hooks";
import { selecti18n } from "../store/reducers/i18n";
import { Link } from "react-router-dom";
import { Menu } from "antd";
import type { MenuProps } from "antd";
import "./app-layout.css";

import { Route, routes } from "../router/routes";
import { INav } from "./AppLayout";

export const HeaderContent = () => {
  const i18n = useAppSelector(selecti18n);
  console.log(i18n);
  // const dispatch = useAppDispatch();

  // const isLoggedIn = false;

  const mode = "";

  const items: MenuProps["items"] = routes
    .filter(
      (route: Route) =>
        route.Pos === "header" &&
        (route.type === "public" ||
          (route.type === "auth" && route.mode === mode))
    )
    .map((route: Route) => ({
      label: <Link to={route.path}>{route.name}</Link>,
      path: route.path,
      key: route.key,
    }));

  let locationPath;

  /*   const setLng = () => {
    if (i18n === "enUS") dispatch(useES);
    if (i18n === "enES") dispatch(useUS);
    console.log(i18n);
  }; */

  const handleClick = ({ key }: INav) => {
    locationPath = key;

    if (key === "logout") {
      // dispatch(startLogout());
      // clearStore(dispatch);
      //history.push("/home");
      // dispatch(setCurrentPath("/home"));
    }
  };

  return (
    <>
      <div className="--layout-header__logo">
        <div className="--app__logo" />
      </div>

      <Menu
        theme="light"
        mode="horizontal"
        selectedKeys={locationPath}
        defaultSelectedKeys={["/"]}
        onClick={handleClick}
        items={items}
      />
      {/*  <Tooltip placement="top" title={"English/Español"}>
        <TranslationOutlined onClick={setLng} style={{ paddingLeft: "25px" }} />
      </Tooltip> */}
    </>
  );
};
