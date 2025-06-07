import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()((theme) => ({
    root: {
        padding: "20px",
        backgroundColor: theme.palette.grey[100],
        height: "100%",
        overflow: 'hidden', // Add overflow hidden to prevent scrolling at root
    },
    container: {
        display: 'flex',
        // flexDirection: 'column', // Add flex direction column
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
        width: "calc(100% - 32px)",
        margin: 'auto',
        height: '85vh',
        overflow: 'auto',
    },
    containerContent: {
        marginBottom: '16px',
        width: "calc(100% - 32px)",
        margin: 'auto'
    },
    filterSection: {
        width: "calc(100% - 32px)",
        marginLeft: '0px',
        marginBottom: '16px',
    },
    buttonContainer: {
        display: "flex",
        gap: "10px",
        justifyContent: "flex-end",
    },
    summarySection: {
        width: "calc(100% - 16px)",
        marginTop: "20px",
    },
    tableBorderHeader: {
        borderRight: `1px solid ${theme.palette.grey[300]}`,
        borderBottom: `1px solid ${theme.palette.grey[300]}`,
        backgroundColor: theme.palette.grey[100],
        fontWeight: 600,
    },
    tableBorder: {
        borderRight: `1px solid ${theme.palette.grey[300]}`,
        borderBottom: `1px solid ${theme.palette.grey[300]}`,
        padding: "8px",
        "& .MuiInputBase-root": {
            height: "32px",
        },
    },
}));

export default useStyles; 