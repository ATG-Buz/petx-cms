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
      width: 'auto'
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
    content1: {
      width: "100%",
      margin: 'auto',
    },
    content2: {
      width: "auto",
      margin: 'auto',
      padding: '8px',
      border: `1px solid ${theme.palette.divider}`,
      borderRadius: '12px'
    },
  }
})

export default useStyles
