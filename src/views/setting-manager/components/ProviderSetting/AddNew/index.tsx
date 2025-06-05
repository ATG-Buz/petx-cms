import AppButton from "@/components/AppButton";
import { AppText600 } from "@/components/AppText";
import TextFieldBooking from "@/components/TextFieldBooking";
import { tableData } from "@/services/storage/config";
import { Box, Grid, TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody, Checkbox, FormControlLabel } from "@mui/material";
import useStyles from './AddNew.styles'
import SettingsIcon from '@mui/icons-material/Settings';
import { toast } from "react-toastify";
import SaveIcon from '@mui/icons-material/Save';
import { useTranslation } from "next-i18next";

const AddNew = () => {
    const { classes, cx } = useStyles();
    const { t } = useTranslation();

    const handleClickSave = () => {
        toast.success('Lưu thành công')
    }
    return (
        <Box className={classes.root}>
            <Grid container className={classes.container}>
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
                                    <TableCell className={classes.tableBorderHeader}></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow >
                                    <TableCell className={classes.tableBorder}>
                                        <TextFieldBooking
                                            placeholder="Họ tên"
                                            labelRight="*"
                                            style={{ width: '100%' }}
                                        />
                                    </TableCell>
                                    <TableCell className={classes.tableBorder}>
                                        <TextFieldBooking
                                            placeholder="Số điện thoại"
                                            style={{ width: '100%' }}
                                        />
                                    </TableCell>
                                    <TableCell className={classes.tableBorder}>
                                        <TextFieldBooking
                                            placeholder="Địa chỉ"
                                            style={{ width: '100%' }}
                                        />
                                    </TableCell>
                                    <TableCell className={classes.tableBorder}>
                                        <FormControlLabel control={<Checkbox />} label={`${t('Khách hàng')}`} className={classes.textCheckBox} />
                                    </TableCell>
                                    <TableCell className={classes.tableBorder}>
                                        <FormControlLabel control={<Checkbox />} label={`${t('Nhà cung cấp')}`} className={classes.textCheckBox} />

                                    </TableCell>
                                    <TableCell className={classes.tableBorder}>
                                        <TextFieldBooking
                                            placeholder="Định mức công nợ"
                                            style={{ width: '100%' }}
                                        />
                                    </TableCell>
                                    <TableCell
                                        className={cx(classes.tableBorder, classes.containerCellButton)}
                                    >
                                        <AppButton
                                            styleSvgIcon={classes.containerButton}
                                            title="Lưu" icon={SaveIcon}
                                            stroke="white"
                                            fontSizeIcon="small"
                                            onClick={() => handleClickSave()}
                                        ></AppButton>
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
            </Grid>
        </Box>
    )
}
export default AddNew;