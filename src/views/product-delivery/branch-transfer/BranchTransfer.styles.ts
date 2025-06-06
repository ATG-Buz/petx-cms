import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()((theme) => {
    return {
        root: {
            padding: theme.spacing(2),
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
        containerContent: {
            padding: '0 16px 16px 16px',
            width: "calc(100% - 32px)",
            marginLeft: '0px',
            marginBottom: '16px'
        },
        containerFilter: {
            display: 'flex',
            alignItems: 'center',
        },
        buttonContainer: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
        containerButton: {
            color: "white",
            borderRadius: theme.spacing(1),
            cursor: "pointer",
            "&:hover": {
                backgroundColor: theme.palette.primary.dark,
            },
        },
        tableBorderHeader: {
            borderBottom: `1px solid ${theme.palette.divider}`,
            fontWeight: "bold",
        },
        tableBorder: {
            borderBottom: `1px solid ${theme.palette.divider}`,
        },
        totalCount: {
            marginTop: theme.spacing(1),
            textAlign: 'left',
        },
    };
});

export default useStyles; 