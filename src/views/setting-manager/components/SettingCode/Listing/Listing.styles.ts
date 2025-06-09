import { makeStyles } from "tss-react/mui"

const useStyles = makeStyles({
  name: "Listing",
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
    content: {
      width: '100%',
      gap: '12px',
      alignItems: 'center',
      display: 'grid',
      gridTemplateColumns: "repeat(4,1fr)",
      marginLeft: '12px',
      justifyContent: 'flex-start'
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
    contentCheckBox: {
      width: '100%',
      gap: '12px',
      display: 'grid',
      gridTemplateColumns: "repeat(5,1fr)",
      'span': {
        fontSize: '12px',
        whiteSpace: 'nowrap'
      }
    },
    fromControl: {
      flex: 1,
    },
    containerTable: {
      padding: '12px !important'
    },
    buttonSeen: {
      marginBottom: '4px'
    },
    contentResult: {
      marginLeft: 12
    },
    tableBorder: {
      border: "1px solid #E0E0E0",
    },
    containerButton: {
      color: 'white',
      'span': {
        fontSize: '10px',
        whiteSpace: 'nowrap'
      }, marginBottom: '4px'
    },
    tableBorderHeader: {
      border: "1px solid white",
      backgroundColor: '#E0E0E0'
    }
  }
})

export default useStyles
