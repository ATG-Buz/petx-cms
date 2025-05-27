import AppButton from "@/components/AppButton";
import { AppText600 } from "@/components/AppText";
import TextFieldBooking from "@/components/TextFieldBooking";
import { tableData } from "@/services/storage/config";
import { Box, Grid, TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody } from "@mui/material";
import useStyles from './Listing.styles'
import SettingsIcon from '@mui/icons-material/Settings';
import { toast } from "react-toastify";
import SaveIcon from '@mui/icons-material/Save';

const Listing = () => {
    const {classes, cx} = useStyles();
    const handleClickSave = () => {
        toast.success('Lưu thành công')
    }
return (
    <Box className={classes.root}>
        <Grid container className={classes.container}>
            <Grid item xs={12} className={classes.contentLabel}>
                <SettingsIcon />
                <AppText600>Định lượng thuốc</AppText600>
            </Grid>
            {/* Table */}
            <Grid item xs={12} className={classes.containerTable}>
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell className={classes.tableBorderHeader}>Tên Thuốc</TableCell>
                                <TableCell className={classes.tableBorderHeader}>Đơn vị tính</TableCell>
                                <TableCell className={classes.tableBorderHeader}>Trọng lượng tử</TableCell>
                                <TableCell className={classes.tableBorderHeader}>Trọng lượng đến</TableCell>
                                <TableCell className={classes.tableBorderHeader}>Liều lượng tối thiểu</TableCell>
                                <TableCell className={classes.tableBorderHeader}>Liều lượng tối đa</TableCell>
                                <TableCell className={classes.tableBorderHeader} colSpan={2}>
                                    <AppButton
                                        styleSvgIcon={classes.containerButton}
                                        title="Thêm"
                                        onClick={() => handleClickSave()}
                                    ></AppButton>
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {tableData.map((row, index) => (
                                <TableRow key={row.id}>
                                    <TableCell className={classes.tableBorder}>
                                        <TextFieldBooking
                                            placeholder="Họ và tên nhân viên"
                                            style={{ width: '100%' }}
                                            labelDisabled
                                        />
                                    </TableCell>
                                    <TableCell className={classes.tableBorder}>
                                        <TextFieldBooking
                                            placeholder="Tên đăng nhập"
                                            style={{ width: '100%' }}
                                            labelDisabled
                                        />
                                    </TableCell>
                                    <TableCell className={classes.tableBorder}>
                                        <TextFieldBooking
                                            placeholder="Mật khẩu"
                                            style={{ width: '100%' }}
                                        />
                                    </TableCell>
                                    <TableCell className={classes.tableBorder}>
                                        <TextFieldBooking
                                            placeholder="Điện thoại"
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
                                        <TextFieldBooking
                                            placeholder="Chứng chỉ"
                                            style={{ width: '100%' }}
                                        />
                                    </TableCell>
                                    <TableCell
                                        className={cx(classes.tableBorder, classes.containerCellButton)}
                                        colSpan={2}
                                    >
                                        <AppButton
                                            styleSvgIcon={classes.containerButton}
                                            title="Lưu" icon={SaveIcon}
                                            stroke="white"
                                            fontSizeIcon="small"
                                            onClick={() => handleClickSave()}
                                        ></AppButton>
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
export default Listing;