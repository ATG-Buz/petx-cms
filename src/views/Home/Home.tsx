/* eslint-disable @next/next/no-img-element */
import { Box, Grid } from "@mui/material";
import useStyles from "./Home.styles";
import React, { useState } from "react";
import { observer } from "mobx-react";
import IconLabelMenu from "@/components/IconLabelMenu";
import { i18n, useTranslation } from "next-i18next";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { dataMenu } from "./config";
import { gotoPage } from "@/utils/helpers/common";

type MenuLeftType = {
  childrenChild?: React.ReactNode;
};

const Home = (props: MenuLeftType) => {
  const { t } = useTranslation();
  const { childrenChild, ...rest } = props;
  const { classes, cx } = useStyles();
  const [isShowMenuLeft, setIsShowMenuLeft] = useState(true);
  const [activeMenu, setActiveMenu] = useState<{ [key: number]: boolean }>({
    0: true,
  });
  const [activeMenuChild, setActiveMenuChild] = useState<{
    [key: number]: boolean;
  }>({});

  const handleContainerClick = (key: number, path: string) => {
    const newActiveMenu = { ...activeMenu };
    for (const iconKey in newActiveMenu) {
      newActiveMenu[iconKey] = false;
    }
    newActiveMenu[key] = true;
    setActiveMenu(newActiveMenu);
    setActiveMenuChild({});
  };

  const handleContainerClickMenuChild = (key: number, path: string) => {
    const newActiveMenu = { ...activeMenuChild };
    for (const iconKey in newActiveMenu) {
      newActiveMenu[iconKey] = false;
    }
    newActiveMenu[key] = true;
    setActiveMenuChild(newActiveMenu);
    gotoPage(path);
  };

  return (
    <Grid container className={cx(classes.root)}>
      <Grid
        container
        rowSpacing={0}
        className={classes.content4}
        style={{ overflow: "visible" }}
      >
        <Grid
          item
          xs={isShowMenuLeft ? 2 : 0.3}
          className={classes.containerGird}
        >
          <div className={classes.content_icon}>
            {isShowMenuLeft && (
              <ArrowBackIcon
                className={classes.icon_hidden}
                onClick={() => setIsShowMenuLeft(false)}
              />
            )}
            {!isShowMenuLeft && (
              <ArrowForwardIcon
                className={classes.icon_hidden}
                onClick={() => setIsShowMenuLeft(true)}
              />
            )}
          </div>
          <div
            className={classes.content1}
            style={{ display: isShowMenuLeft ? "flex" : "none" }}
          >
            {dataMenu.map((item, index) => (
              <div key={item.key}>
                <IconLabelMenu
                  key={item.key}
                  title={`${t(item.title)}`}
                  // icon={numberComponent === item.key ? item.iconWhite : item.icon}
                  onClick={() => handleContainerClick(item.key, item.path)}
                  active={activeMenu[item.key]}
                  styleSvgIcon={{ paddingLeft: 20, paddingRight: 20 }}
                  fontSizeIcon={"small"}
                  stroke={
                    item.key === dataMenu.length - 1 ? "black" : "inherit"
                  }
                  styleLabel={{ fontSize: 12, fontWeight: "bold" }}
                />
                <div className={classes.contentMenuChild}>
                  {activeMenu[item.key] &&
                    item.dataMenuChild.map((itemChild) => (
                      <IconLabelMenu
                        key={itemChild.id}
                        title={`${t(itemChild.title)}`}
                        icon={itemChild.icon}
                        onClick={() =>
                          handleContainerClickMenuChild(
                            itemChild.id,
                            itemChild.path
                          )
                        }
                        active={activeMenuChild[itemChild.id]}
                        styleSvgIcon={{ width: "80%", paddingLeft: 10 }}
                        fontSizeIcon={"small"}
                        // stroke={itemChild.id === item.dataMenuChild?.length - 1 ? 'black' : 'inherit'}
                        stroke="black"
                        styleLabel={{ fontSize: 12 }}
                      />
                    ))}
                </div>
              </div>
            ))}
          </div>
        </Grid>
        <Grid
          item
          xs={isShowMenuLeft ? 10 : 11.7}
          className={classes.containerChild}
        >
          {childrenChild}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default observer(Home);
