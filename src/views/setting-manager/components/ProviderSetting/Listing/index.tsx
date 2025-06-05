import AppButton from "@/components/AppButton";
import { AppText600 } from "@/components/AppText";
import TextFieldBooking from "@/components/TextFieldBooking";
import { tableData } from "@/services/storage/config";
import { Box, Grid, TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody, Checkbox, FormControlLabel } from "@mui/material";
import useStyles from './Listing.styles'
import { toast } from "react-toastify";
import { useTranslation } from "next-i18next";

const Listing = () => {
    const {classes, cx} = useStyles();
    const { t } = useTranslation();
    const handleClickSave = () => {
        toast.success('Lưu thành công')
    }
return (
    <Box className={classes.root}>
        <Grid container className={classes.container}>
            {/* <Grid item xs={12} className={classes.contentLabel}>
                <SettingsIcon />
                <AppText600>Định lượng thuốc</AppText600>
            </Grid> */}

            <Grid item xs={12} className={classes.contentLabel}>
                    <AppText600>Tên hàng</AppText600>
            </Grid>
            <Grid item xs={12} className={classes.content}>
                <TextFieldBooking
                    placeholder="Tên hàng"
                    style={{ width: '100%' }}
                />
                <FormControlLabel control={<Checkbox />} label={`${t('Khách hàng')}`} className={classes.textCheckBox} />
                <FormControlLabel control={<Checkbox />} label={`${t('Nhà cung cấp')}`} className={classes.textCheckBox} />
                <AppButton
                    title="Tìm kiếm"
                    onClick={() => handleClickSave()}
                ></AppButton>
            </Grid>
            {/* Table */}
            <Grid item xs={12} className={classes.containerTable}>
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell className={classes.tableBorderHeader}>Họ tên</TableCell>
                                <TableCell className={classes.tableBorderHeader}>Số điện thoại</TableCell>
                                <TableCell className={classes.tableBorderHeader}>Địa chỉ</TableCell>
                                <TableCell className={classes.tableBorderHeader}>Khách hàng</TableCell>
                                <TableCell className={classes.tableBorderHeader}>Nhà cung cấp</TableCell>
                                <TableCell className={classes.tableBorderHeader}>Định mức công nợ</TableCell>
                            </TableRow>
                            <Box className={classes.textTotal}>
                                <AppText600>Tổng số: 0</AppText600>
                            </Box>
                        </TableHead>
                        <TableBody>
                            
                        </TableBody>
                    </Table>
                </TableContainer>
            </Grid>
        </Grid>
    </Box>
)
}
export default Listing;