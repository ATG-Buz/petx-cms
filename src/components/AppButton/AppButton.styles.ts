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
      border: `1px solid ${theme.palette.divider}`,
      borderRadius: '12px',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: theme.palette.common.orange,
      padding: '8px',
      gap: 4
    },
    content2: {
      width: "auto",
      margin: 'auto',
    },
  }
})

export default useStyles
