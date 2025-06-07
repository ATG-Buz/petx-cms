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
    containerButton: {
        // backgroundColor: theme.palette.common.colorButton,
        color: theme.palette.common.white,
    },
    dataGrid: {
        border: 'none',
        '& .MuiDataGrid-columnHeaders': {
            backgroundColor: '#f5f5f5',
            borderRadius: '8px 8px 0 0',
            marginBottom: '12px',
            '& .MuiDataGrid-columnHeader': {
                padding: '12px 16px',
                '&:focus, &:focus-within': {
                    outline: 'none !important',
                },
            },
            '& .MuiDataGrid-columnHeaderTitleContainer': {
                padding: '0',
            },
            '& .MuiDataGrid-columnHeaderTitle': {
                fontWeight: 600,
            },
        },
        '& .MuiDataGrid-virtualScroller': {
            marginTop: '0 !important',
        },
        '& .MuiDataGrid-cell': {
            border: 'none',
            padding: '8px 16px',
            '&:focus': {
                outline: 'none !important',
            },
        },
        '& .MuiDataGrid-row': {
            backgroundColor: '#ffffff',
            marginBottom: '1px',
            '&:hover': {
                backgroundColor: '#f5f5f5',
            },
            '&:focus': {
                outline: 'none !important',
            },
            '&.Mui-selected': {
                backgroundColor: 'transparent !important',
                '&:hover': {
                    backgroundColor: '#f5f5f5 !important',
                },
            },
        },
    },
    textCheckBox: {
        color: theme.palette.common.black,
    }
}));

export default useStyles; 