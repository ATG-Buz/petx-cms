import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()((theme) => ({
    root: {
        padding: '16px',
    },
    container: {
        display: 'flex',
        borderRadius: '8px',
        boxShadow: theme.shadows[1],
        border: `1px solid ${theme.palette.common.colorButton}`,
        padding: '16px',
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
        width: "calc(100% - 32px)",
        margin: 'auto'
    },
    filterSection: {

        marginLeft: 'auto'
    },
    buttonContainer: {
        display: 'flex',
        justifyContent: 'center',
        gap: '12px',
        alignItems: 'flex-end',
    },
    tableContainer: {
        marginTop: '16px',
        '& .MuiDataGrid-root': {
            border: 'none',
        },
    },
    summarySection: {
        marginTop: '16px',
        width: "calc(100% - 32px)",
        margin: 'auto'
    }
}));

export default useStyles; 