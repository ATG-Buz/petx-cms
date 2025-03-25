import { makeStyles } from "tss-react/mui"

const useStyles = makeStyles({
  name: "Info-treatment",
})(theme => {
  return {
    Box: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between'
    },
    Row: {
        display: 'flex',
        flexDirection: 'row'
    },
    styleSvgIcon: {
        width: 'fit-content'
    }
  }
})

export default useStyles
