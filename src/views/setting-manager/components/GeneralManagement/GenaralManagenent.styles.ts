import { makeStyles } from "tss-react/mui"

const useStyles = makeStyles({
  name: "GeneralManagement",
})(theme => {
  return {
    root: {
      width: '100%',
      display: 'flex',
      padding: '16px !important',
    },
    container: {
        width: '100%',
        display: 'flex',
        borderRadius: '8px',
        boxShadow: theme.shadows[1],
        border: `1px solid ${theme.palette.common.colorButton}`,
    },
    contentLabel: {
        width: '100%',
        display: 'flex',
        backgroundColor: theme.palette.common.colorButton,
        borderTopLeftRadius: '7px',
        borderTopRightRadius: '7px',
        padding: '12px !important',
        gap: '12px',
        color: theme.palette.common.white,
        '>span': {
          color: 'white !important',
        }
      },
      containerTable: {
        padding: '12px !important'
      },
      textCheckBox: {
        color: theme.palette.common.black,
      }
  }
})

export default useStyles
