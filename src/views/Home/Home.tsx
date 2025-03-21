/* eslint-disable @next/next/no-img-element */
import { Box, Grid } from "@mui/material"
import useStyles from "./Home.styles"
import React, { useState } from "react"
import { observer } from "mobx-react"
import IconLabelMenu from "@/components/IconLabelMenu"
import { i18n, useTranslation } from 'next-i18next';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

type MenuLeftType = {
  childrenChild?: React.ReactNode
}
export const dataMenu = [
  {
    key: 0,
    // icon: RentIcon,
    // iconWhite: RentIconWhite,
    title: "Thông tin - điều trị",
    path: "/Rooms",
  },
  {
    key: 1,
    // icon: AccountIcon,
    // iconWhite: AccountIconWhite,
    title: "Cài đặt - Quản lý",
    path: "/MemberProfile",
  },
  {
    key: 2,
    // icon: WalletIcon,
    // iconWhite: WalletIconWhite,
    title: "Bán hàng - PetShop",
    path: "/TokenStatus",
  },
  {
    key: 3,
    // icon: TimeBookingIcon,
    // iconWhite: TimeBookingIconWhite,
    title: "Xuất sang chi nhánh",
    path: "/MyBookings",
  },
  {
    key: 4,
    // icon: NotificationIcon,
    // iconWhite: NotificationIconWhite,
    title: "Nhập thuốc - Hàng Hoá",
    path: "/AccountActivities",
  },
  {
    key: 5,
    // icon: SupportIcon,
    // iconWhite: SupportIconWhite,
    title: "Kiểm kê kho hàng",
    path: "/SupportCenter",
  },
  {
    key: 6,
    // icon: IcResetPassword,
    // iconWhite: IcResetPassword,
    title: "Quản Lý công nợ",
    path: "/Resetpassword",
  },
  {
    key: 7,
    // icon: IcResetPassword,
    // iconWhite: IcResetPassword,
    title: "Thống kê - doanh số",
    path: "/Resetpassword",
  },
  {
    key: 8,
    // icon: IcResetPassword,
    // iconWhite: IcResetPassword,
    title: "Tiện ích & Thông báo",
    path: "/Resetpassword",
  },
  {
    key: 9,
    // icon: IcResetPassword,
    // iconWhite: IcResetPassword,
    title: "Kết toán - Thu chi",
    path: "/Resetpassword",
  },
  {
    key: 10,
    // icon: IcResetPassword,
    // iconWhite: IcResetPassword,
    title: "Trợ giúp & sử dụng",
    path: "/Resetpassword",
  },
]

const Home = (props: MenuLeftType) => {
  const { t } = useTranslation();
  const { childrenChild, ...rest } = props
  const { classes, cx } = useStyles()
  const [isShowMenuLeft, setIsShowMenuLeft] = useState(true)
  const [activeMenu, setActiveMenu] = useState<{ [key: number]: boolean }>({ 0: true });

  const handleContainerClick = (key: number, path: string) => {
    const newActiveMenu = { ...activeMenu };
    for (const iconKey in newActiveMenu) {
      newActiveMenu[iconKey] = false;
    }
    newActiveMenu[key] = true;
    setActiveMenu(newActiveMenu);

  };

  return (
    <Grid container className={cx(classes.root)}>
      <Grid container rowSpacing={0} className={classes.content4} style={{ overflow: 'hidden' }}>
              <Grid item xs={isShowMenuLeft ? 2.5 : 0.3} className={classes.containerGird}>
                <div className={classes.content_icon}>
                  {isShowMenuLeft && <ArrowBackIcon className={classes.icon_hidden} onClick={() => setIsShowMenuLeft(false)} />}
                  {!isShowMenuLeft && <ArrowForwardIcon className={classes.icon_hidden} onClick={() => setIsShowMenuLeft(true)} />}
                </div>
                <div className={classes.content1} style={{display: isShowMenuLeft? 'flex': 'none'}}>
                  {dataMenu.map((item) => (
                    <IconLabelMenu
                      key={item.key}
                      title={`${t(item.title)}`}
                      // icon={numberComponent === item.key ? item.iconWhite : item.icon}
                      onClick={() => handleContainerClick(item.key, item.path)}
                      active={activeMenu[item.key]}
                      styleSvgIcon={{ paddingLeft: 20, paddingRight: 20 }}
                      fontSizeIcon={'large'}
                      stroke={item.key === dataMenu.length - 1 ? 'black' : 'inherit'}
                    />
                  ))}
                </div>
              </Grid>
              <Grid item xs={isShowMenuLeft ? 9.5 : 12} className={classes.containerChild} >
                {childrenChild}
              </Grid>
            </Grid>
    </Grid>
  )
}

export default observer(Home)
