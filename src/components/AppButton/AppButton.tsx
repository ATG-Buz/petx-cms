import AppSvgIcon from "@/components/AppSvgIcon"
import { ElementType, useState } from "react";
import useStyles from "./AppButton.styles";
import { Typography } from "@mui/material";

export type IconLabelProps = {
  title?: string;
  icon?: ElementType;
  onClick?: () => void;
  active?: boolean;
  styleSvgIcon?: string;
  styleIcon?: React.CSSProperties;
  styleLabel?: React.CSSProperties;
  fontSizeIcon?: "small" | "inherit" | "large" | "medium" | undefined;
  stroke?: string;
}

const AppButton = (props: IconLabelProps) => {
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
  const { classes, cx } = useStyles();
  const handleContainerClick = () => {
    if (onClick) {
      onClick(); // Gọi hàm onClick nếu nó được truyền vào
    }
  };
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
      <div className={cx(classes.container, styleSvgIcon)} onClick={handleContainerClick}>
        <div className={classes.content1} style={styleIcon}>
          {title && (
            <div className={classes.content2} >
              <span className={classes.titleH3} style={styleLabel}>{title}</span>
            </div>
          )}
          <AppSvgIcon
            component={icon}
            strokeColor
            color="inherit"
            fontSize={fontSizeIcon || "large"}
            className={isSmall}
            style={{ stroke: stroke || 'inherit' }}
          />
        </div>
      </div>
    </>
  )
}
export default AppButton;