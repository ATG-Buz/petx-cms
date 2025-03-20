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
  }
})

export default useStyles
