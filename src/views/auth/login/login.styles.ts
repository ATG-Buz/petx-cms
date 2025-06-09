import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles({
  name: "login",
})(theme => {
  return {
    container: {
      zIndex: 1,
      // position: 'fixed',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: 'auto',
      width: "90%",
      backgroundColor: "white",
      flexDirection: "row",
      boxShadow: "4px 4px 20px 0px rgba(0, 0, 0, 0.3)",
    },
    contentForm: {
      backgroundColor: "white",
      height: "670px",
      width: "30%",
      justifyContent: "center",
      alignItems: "center",
      display: 'flex',
      flexDirection: 'row',
      // boxShadow: "4px 4px 20px 0px rgba(0, 0, 0, 0.3)",
      [theme.breakpoints.down('md')]: {
        width: '100%',
        height: '100%'
      },
      [theme.breakpoints.between(1920, 1921)]: {
        height: 670,
      }
    },
    contentFormRight: {
      backgroundColor: "white",
      height: "100%",
      width: "65%",
      justifyContent: "center",
      alignItems: "center",
      display: 'flex',
      flexDirection: 'column',
      // boxShadow: "4px 4px 20px 0px rgba(0, 0, 0, 0.3)",
      [theme.breakpoints.between(900, 1020)]: {
        width: "35%",
      },
      [theme.breakpoints.down('md')]: {
        width: '100%',
        paddingTop: 69,
        paddingBottom: 69
      },
      [theme.breakpoints.between(1920, 1921)]: {
        // width: 494,
        height: 670,
      }
    },
    imgSlider: {
      width: "100%", height: 670,
      [theme.breakpoints.between(1920, 1921)]: {
        height: 670,
      }
    },
    imgLogo: {
      width: "170px",
      height: "170px",
      [theme.breakpoints.down('md')]: {
        width: "120px",
        height: "120px",
      },
    },
    titleTextField: {

      fontSize: '18px',
      fontWeight: '700',
      lineHeight: '24px',
      width: "70%",
      textAlign: 'left',
      textTransform: 'uppercase',
      height: 10
    },
    content2: {
      width: "70%",
      justifyContent: "space-between",
      alignItems: "center",
      display: 'flex',
      flexDirection: 'row'
    },
    buttonSignIn: {
      fontSize: '20px',
      fontWeight: '700',
      lineHeight: '24px',
      width: "70%",
      backgroundColor: theme.palette.common.orange,
      borderRadius: 57,
      textTransform: 'uppercase',
      [theme.breakpoints.up(1200)]: {
        marginTop: 24,
      },
    },
    content3: {
      width: "70%",
      justifyContent: "center",
      alignItems: "center",
      display: 'flex',
      flexDirection: 'column',
      [theme.breakpoints.down(410)]: {
        flexDirection: 'column',
      },
      [theme.breakpoints.up(1200)]: {
        marginTop: 24,
      },
    },
    content4: {
      position: 'absolute',
      zIndex: 0,
      height: "100%",
      bottom: "0%"
    },
    Notification: {
      width: '100%',
      backgroundColor: theme.palette.common.white,
      zIndex: 999,
      top: 0,
      position: 'absolute',
      boxShadow: '0px 10px 10px 0px rgba(0, 0, 0, 0.25)',
      justifyContent: 'center',
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'row',
    },
    containerSlider: {
      width: "70%",
      [theme.breakpoints.down("md")]: {
        display: 'none',
        width: '0%',
      },
    },
    textForgot: {
      fontFamily: 'Open Sans',
      fontSize: '12px',
      fontWeight: '400',
      lineHeight: '16px',
      color: theme.palette.common.orange,
      paddingTop: 12,
      textDecoration: 'none',
      paddingBottom: 12,
      [theme.breakpoints.down("md")]: {
        fontFamily: 'Open Sans',
        fontSize: '12px',
        fontWeight: '400',
        lineHeight: '16px',
        color: theme.palette.common.orange,
      },
    },
    textCheckBox: {
      fontFamily: 'Open Sans !important',
      fontSize: '12px !important',
      fontWeight: '400 !important',
      lineHeight: '16px !important',
    },
    text: {
      fontFamily: 'Open Sans',
      fontSize: '12px',
      fontWeight: '400',
      lineHeight: '16px',
      color: theme.palette.common.black,
    },
    textContact: {
      fontSize: '24px',
      fontWeight: '700',
      lineHeight: '24px',
      color: theme.palette.common.orange,
      marginLeft: 5,
      cursor: 'pointer'
    },
    titleH1: {
      fontSize: '40px',
      fontWeight: '700',
      lineHeight: '48px',
      color: theme.palette.common.orange,
    },
    textError: {
      fontSize: '12px',
      fontWeight: '400',
      lineHeight: '16px',
      color: 'red',
      paddingTop: 5,
      textAlign: 'left',
      width: '70%',
    }
  };
});

export default useStyles;