import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()((theme) => ({
    root: {
        padding: "20px",
        backgroundColor: theme.palette.grey[100],
        height: "100%",
        overflow: 'hidden',
    },
    container: {
        display: 'flex',
        borderRadius: '8px',
        boxShadow: theme.shadows[1],
        border: `1px solid ${theme.palette.common.colorButton}`,
        padding: '16px',
        overflow: 'hidden',
        height: '95vh',
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
    containerBody: {
        width: "calc(100% - 16px)",
        marginLeft: '0',
        height: '85vh',
        overflow: 'auto',
    },
    containerContent: {
        marginBottom: '16px',
        width: "100%",
        margin: 'auto'
    },
    containerButton: {
        color: theme.palette.common.white,
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
    tableBorderHeader: {
        border: "1px solid white",
        backgroundColor: '#E0E0E0'
    }
}));

export default useStyles; 