import { commonHelpers } from "@/utils/helpers"
import { url } from "inspector"
import { keyframes } from "tss-react"
import { makeStyles } from "tss-react/mui"


const useStyles = makeStyles({
  name: "home",
})(theme => {
  return {
    root: {
      height: "100vh",
      width: "100vw",
      overflow: "hidden",
      position: "relative",
      backgroundColor: 'white',
    },
    content4: {
      position: 'inherit',
      zIndex: 0,
      height: "auto",
      bottom: 0,
      width: "100%",
      [theme.breakpoints.up('sm')]: {
        // Tùy chỉnh CSS cho màn hình có độ phân giải >= sm (small)
      },
      [theme.breakpoints.up('md')]: {
      },
    },
    containerGird: {
      display: "flex",
      flexDirection: "column",
      justifyContent: 'flex-start',
      backgroundColor: 'rgba(244, 244, 244, 1)',
      overflow: 'auto',
      position: 'relative',
      width: '100%',
      [theme.breakpoints.up(1200)]: {
        overflow: 'auto',
        position: 'relative',
        width: '100%',
      }
    },
    content1: {
      padding: 10,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
    },
    containerChild: {
      [theme.breakpoints.down('md')]: {
        width: '100%',
        maxWidth: '100%',
        WebkitFlexBasis: '100%',
        flexBasis: '100%',
      },
      [theme.breakpoints.between(1200, 1700)]: {
        position: 'absolute',
        marginLeft: '20.8%',
        width: '100%',
        height: 'auto',
        overflow: 'hidden',
        backgroundColor: 'rgba(245, 245, 245, 1)'
      },
      [theme.breakpoints.up(1700)]: {
        position: 'absolute',
        marginLeft: '20.85%',
        width: '100%',
        height: 'auto',
        overflow: 'hidden',
        backgroundColor: 'rgba(245, 245, 245, 1)'
      },
      backgroundColor: theme.palette.common.white,
    },
    content_icon: {
      width: '100%',
      display: "flex",
      alignItems: 'flex-end',
      flexDirection: 'row',
      justifyContent: 'flex-end',
      padding: '8px',
    },
    icon_hidden: {
      boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
      cursor: 'pointer'
    },
    contentMenuChild: {
      width: '100%',
      alignItems: 'flex-end',
      alignSelf: 'flex-end',
      display: 'flex',
      flexDirection: 'column',
      marginTop: '12px',
    }
  }
})

export default useStyles
