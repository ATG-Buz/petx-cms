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
        height: 'auto',
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
    containerContent: {
        marginBottom: '16px',
        width: "calc(100% - 16px)",
        marginLeft: '0px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
    },
    containerButton: {
        color: theme.palette.common.white,
    },

}));

export default useStyles; 