import { commonHelpers } from "@/utils/helpers"
import { keyframes } from "tss-react"
import { makeStyles } from "tss-react/mui"

const subtractRestHorizontalSizePercent = 199
const subtractSlopeHorizontalSizePercent = 207
const standardWidth = 1920
const standardHeight = 1080

const useStyles = makeStyles({
  name: "iconLabelMenu",
})(theme => {
  return {
    container: {
      display: 'flex',
      flexDirection: "row",
      justifyContent: "flex-start",
      alignItems: "end",
      cursor: "pointer",
    },
    activeContainer: {
      display: 'flex',
      flexDirection: "row",
      justifyContent: "flex-start",
      alignItems: "end",
      paddingLeft: 20,
      paddingRight: 20,
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
      fontFamily: "var(--font-bebasneue)",
      fontSize: "22px",
      fontWeight: "400",
      lineHeight: "32px",
    },
    activeTitleH3: {
      textTransform: "uppercase",
      textAlign: 'start',
      color: 'white',
      fontFamily: "var(--font-bebasneue)",
      fontSize: "22px",
      fontWeight: "400",
      lineHeight: "32px",
    },
    content1: {
      width: "30%",
      margin: 'auto',
    },
    activeContent1: {
      width: "30%",
      margin: 'auto',
      color: 'white',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    content2: {
      width: "70%",
      margin: 'auto',
      paddingTop: 12,
      paddingBottom: 12,
      [theme.breakpoints.up(1200)]: {
        width: "80%",
      },
    },
  }
})

export default useStyles
