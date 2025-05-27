import AppButton from "@/components/AppButton";
import { AppText600 } from "@/components/AppText";
import TextFieldBooking from "@/components/TextFieldBooking";
import { tableData } from "@/services/storage/config";
import { Box, Grid, TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody } from "@mui/material";
import useStyles from './AddNew.styles'
import SettingsIcon from '@mui/icons-material/Settings';
import { toast } from "react-toastify";
import SaveIcon from '@mui/icons-material/Save';

const AddNew = () => {
    const { classes, cx } = useStyles();

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
                                    <TableCell className={classes.tableBorderHeader}>Tên Thuốc</TableCell>
                                    <TableCell className={classes.tableBorderHeader}>Đơn vị tính</TableCell>
                                    <TableCell className={classes.tableBorderHeader}>Trọng lượng tử</TableCell>
                                    <TableCell className={classes.tableBorderHeader}>Trọng lượng đến</TableCell>
                                    <TableCell className={classes.tableBorderHeader}>Liều lượng tối thiểu</TableCell>
                                    <TableCell className={classes.tableBorderHeader}>Liều lượng tối đa</TableCell>
                                    <TableCell className={classes.tableBorderHeader}></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow >
                                    <TableCell className={classes.tableBorder}>
                                        <TextFieldBooking
                                            placeholder="Họ và tên nhân viên"
                                            labelRight="*"
                                            style={{ width: '100%' }}
                                        />
                                    </TableCell>
                                    <TableCell className={classes.tableBorder}>
                                        <TextFieldBooking
                                            placeholder="Tên đăng nhập"
                                            style={{ width: '100%' }}
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