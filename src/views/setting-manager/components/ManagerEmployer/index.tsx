import React from "react";
import { Box, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";
import TextFieldBooking from "@/components/TextFieldBooking";
import { tableData } from "@/services/storage/config";
import { AppText600 } from "@/components/AppText";
import useStyles from "./ManagerEmployer.styles";
import AppButton from "@/components/AppButton";
import RoomPreferencesIcon from '@mui/icons-material/RoomPreferences';
import SaveIcon from '@mui/icons-material/Save';
import { toast } from "react-toastify";

const ManagerEmployer = () => {
    const { classes, cx } = useStyles();

    const handleClickSave = () => {
        toast.success('Lưu thành công')
    }
    return (
        <Box className={classes.root}>
            <Grid container className={classes.container}>
                <Grid item xs={12} className={classes.contentLabel}>
                    <RoomPreferencesIcon />
                    <AppText600>Phòng Khám</AppText600>
                </Grid>
                {/* Table */}
                <Grid item xs={12} className={classes.containerTable}>
                    <TableContainer component={Paper}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell className={classes.tableBorderHeader}>Họ và tên nhân viên</TableCell>
                                    <TableCell className={classes.tableBorderHeader}>Tên đăng nhập</TableCell>
                                    <TableCell className={classes.tableBorderHeader}>Mật khẩu</TableCell>
                                    <TableCell className={classes.tableBorderHeader}>Điện thoại</TableCell>
                                    <TableCell className={classes.tableBorderHeader}>Địa chỉ</TableCell>
                                    <TableCell className={classes.tableBorderHeader}>Chứng chỉ</TableCell>
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
                                            <AppButton
                                                styleSvgIcon={classes.containerButton}
                                                title="Phân quyền"
                                                onClick={() => handleClickSave()}
                                            ></AppButton>
                                            <AppButton
                                                styleSvgIcon={classes.containerButton}
                                                title="Phòng khám"
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
    );
};

export default ManagerEmployer;