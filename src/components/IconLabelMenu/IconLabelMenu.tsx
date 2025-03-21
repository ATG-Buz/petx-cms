import AppSvgIcon from "@/components/AppSvgIcon"
import { ElementType, useState } from "react";
import useStyles from "./iconLabelMenu.styles";
import { Typography } from "@mui/material";

export type IconLabelProps = {
  title?: string;
  icon?: ElementType;
  onClick?: () => void;
  active?: boolean;
  styleSvgIcon?: React.CSSProperties;
  styleIcon?: React.CSSProperties;
  styleLabel?: React.CSSProperties;
  fontSizeIcon?: "small" | "inherit" | "large" | "medium" | undefined;
  stroke?: string;
}

const IconLabelMenu = (props: IconLabelProps) => {
  const {
    title,
    icon,
    onClick,
    active,
    styleSvgIcon,
    fontSizeIcon,
    styleIcon,
    styleLabel,
    stroke,
    ...rest
  } = props
  const { classes } = useStyles();
  const handleContainerClick = () => {
    if (onClick) {
      onClick(); // Gọi hàm onClick nếu nó được truyền vào
    }
  };
  const containerClass = active ? classes.activeContainer : classes.container;
  const content1Class = active ? classes.activeContent1 : classes.content1;
  const titleH3Class = active ? classes.activeTitleH3 : classes.titleH3;
  const isMedium = fontSizeIcon === "medium" ? classes.IconMenuMedium : classes.IconMenu
  const isSmall = fontSizeIcon === "small" ? classes.IconMenuSmall : isMedium;

  return (
    <>
      <style>{
        `
        .MuiGrid-root {
          padding: 0;
          margin-top: 0px;
        }
        .mui-hhor9n-MuiGrid2-root {
          padding-top: 0;
          padding-bottom: 0;
        }
        .app-b6gluf-iconLabelMenu-content1 {
          text-align: center;
          display: flex;
          flex-direction: row;
          justify-content: center;
        }
        `
      }</style>
      <div className={containerClass} style={styleSvgIcon} onClick={handleContainerClick}>
        <div className={content1Class} style={styleIcon}>
          <AppSvgIcon
            component={icon}
            strokeColor
            color="inherit"
            fontSize={fontSizeIcon || "large"}
            className={isSmall}
            style={{ stroke: stroke || 'inherit' }}
          />
        </div>
        {title && (
          <div className={classes.content2} >
            <span className={titleH3Class} style={styleLabel}>{title}</span>
          </div>
        )}
      </div>
    </>
  )
}
export default IconLabelMenu;