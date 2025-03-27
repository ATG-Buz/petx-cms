import { makeStyles } from "tss-react/mui"

const useStyles = makeStyles({
  name: "Info-treatment",
})(theme => {
  return {
    root: {
      paddingTop: 16,
      paddingBottom: 16,
    },
    Box: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
        padding: 8
    },
    Row: {
        display: 'flex',
        flexDirection: 'row',
        width: '50%',
        gap: 16
    },
    Row2: {
      display: 'flex',
      flexDirection: 'row',
      width: '50%',
      gap: 16,
      justifyContent: 'flex-end'
  },
    styleSvgIcon: {
        width: 'fit-content'
    }
  }
})

export default useStyles
