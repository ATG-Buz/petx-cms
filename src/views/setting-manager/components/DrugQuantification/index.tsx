import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { makeStyles } from "tss-react/mui"

const AddNew = React.lazy(()=> import('./AddNew'))
const Listing = React.lazy(()=> import('./Listing'))

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}
const useStyles = makeStyles({
    name: "tabs",
})(theme => {
    return {
        root: {
            width: '100%'
        },
        boxTab: {
            borderBottom: 1,
            borderColor: 'divider',
            width: '100%'
        },
        containerTabs: {
            width: '100%',
            "& .MuiTabs-indicator": {
                backgroundColor: theme.palette.common.colorButton
            }
        },
        tab: {
            flex: 1,
            "&.Mui-selected": {
                backgroundColor: theme.palette.common.colorButton,
                color: "white",
                borderBottom: theme.palette.common.colorButton
            },
        },
    }
});

const CustomTabPanel = (props: TabPanelProps) => {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
        </div>
    );
}

const a11yProps = (index: number) => {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const TabsApp = () => {
    const [value, setValue] = React.useState(0);
    const { classes } = useStyles();

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Box className={classes.root}>
            <Box className={classes.boxTab}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" variant='fullWidth' className={classes.containerTabs} >
                    <Tab label="Danh Sách" {...a11yProps(0)} className={classes.tab} />
                    <Tab label="Thêm Mới" {...a11yProps(1)} className={classes.tab} />
                </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
                <Listing />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
                <AddNew/>
            </CustomTabPanel>
        </Box>
    );
}

export default TabsApp;