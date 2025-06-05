import { makeStyles } from "tss-react/mui"

const useStyles = makeStyles({
  name: "Listing",
})(theme => {
  return {
    root: {
        width: '100%',
        display: 'flex',
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
        justifyContent: 'flex-start',
        marginRight: '12px',
        marginTop: '12px'
      },
      contentLabel: {
        padding: '12px !important',
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
      
      containerCellButton: {
        display: 'flex',
        flexDirection: 'row',
        gap: '4px',
      },
      containerButton: {
        color: 'white',
        'span': {
          fontSize: '10px',
          whiteSpace: 'nowrap'
        }
      },
      tableBorderHeader: {
        border: "1px solid white",
        backgroundColor: '#E0E0E0'
      },
      textCheckBox: {
        color: theme.palette.common.black,
      },
      textTotal: {
        padding: '12px'
      }
  }
})

export default useStyles
