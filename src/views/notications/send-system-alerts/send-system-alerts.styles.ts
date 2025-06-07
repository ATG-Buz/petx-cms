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
        width: "100%",
        marginLeft: '0',
        height: '85vh',
        overflow: 'auto',
    },
    containerContent: {
        width: "calc(100% - 32px)",
        margin: 'auto'
    },
    containerButton: {
        color: theme.palette.common.white,
        paddingTop: '16px',
    },
}));

export default useStyles; 