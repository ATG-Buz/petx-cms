import AppButton from "@/components/AppButton";
import { AppText600 } from "@/components/AppText";
import TextFieldBooking from "@/components/TextFieldBooking";
import { dataService, tableData } from "@/services/storage/config";
import { Box, Grid, TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody } from "@mui/material";
import useStyles from './SettingService.styles'
import SettingsIcon from '@mui/icons-material/Settings';
import { toast } from "react-toastify";
import SaveIcon from '@mui/icons-material/Save';

const SettingService = () => {
    const {classes, cx} = useStyles();
    const handleClickSave = () => {
        toast.success('Lưu thành công')
    }
return (
    <Box className={classes.root}>
        <Grid container className={classes.container}>
            <Grid item xs={12} className={classes.contentLabel}>
                <SettingsIcon />
                <AppText600>Cài đặt dịch vụ</AppText600>
            </Grid>
            {/* Table */}
            <Grid item xs={12} className={classes.containerTable}>
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell className={classes.tableBorderHeader}>Tên dịch vụ </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {dataService.map((row, index) => (
                                <TableRow key={row.id}>
                                    <TableCell className={classes.tableBorder}>
                                        <AppText600>{row.tenDichVu}</AppText600>
                                    </TableCell>
                                    
                                    <TableCell
                                        className={cx(classes.tableBorder, classes.containerCellButton)}
                                        colSpan={2}
                                    >
                                        <AppButton
                                            styleSvgIcon={classes.containerButton}
                                            title="Xoá" icon={SaveIcon}
                                            stroke="white"
                                            fontSizeIcon="small"
                                            onClick={() => handleClickSave()}
                                        ></AppButton>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Grid>
        </Grid>
    </Box>
)
}
export default SettingService;