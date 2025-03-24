import { makeStyles } from "tss-react/mui"

const useStyles = makeStyles({
  name: "iconLabelMenu",
})(theme => {
  return {
    container: {
      display: 'flex',
      flexDirection: "row",
      justifyContent: "flex-start",
      alignItems: "center",
      cursor: "pointer",
    },
    activeContainer: {
      display: 'flex',
      flexDirection: "row",
      justifyContent: "flex-start",
      alignItems: "center",
      // paddingLeft: 20,
      // paddingRight: 20,
      backgroundColor: "rgba(243, 112, 33, 1)",
      borderRadius: 48,
      cursor: "pointer"
    },
    IconMenu: {
      width: 56,
      height: 56,
    },
    IconMenuSmall: {
      width: 15,
      height: 15,
    },
    IconMenuMedium: {
      width: 24,
      height: 24,
    },
    titleH3: {
      textTransform: "uppercase",
      textAlign: 'start',
      fontFamily: "Open Sans, sans-serif",
      fontSize: "14px",
      fontWeight: "400",
      lineHeight: "24px",
    },
    activeTitleH3: {
      textTransform: "uppercase",
      textAlign: 'start',
      color: 'white',
      fontFamily: "Open Sans, sans-serif",
      fontSize: "14px",
      fontWeight: "400",
      lineHeight: "24px",
    },
    content1: {
      width: "10%",
      margin: 'auto',
    },
    activeContent1: {
      width: "10%",
      margin: 'auto',
      color: 'white',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    content2: {
      width: "90%",
      margin: 'auto',
      paddingTop: 8,
      paddingBottom: 8,
      [theme.breakpoints.up(1200)]: {
        width: "90%",
      },
    },
  }
})

export default useStyles
