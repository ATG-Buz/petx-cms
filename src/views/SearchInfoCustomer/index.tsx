import React from "react";
import { Box, Checkbox, FormControlLabel, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";
import { makeStyles } from "tss-react/mui";
import TextFieldBooking from "@/components/TextFieldBooking";
import { AppSelected } from "@/components/AppSelected";
import SearchApp from "@/components/AppSearch/AppSearch";
import { AppDatePicker } from "@/components/AppDatePicker";
import { dataCheckedBoxInfoCustomer } from "@/services/storage/config";
import { AppText600 } from "@/components/AppText";
import useStyles from "./SearchInfoCustomer.styles";
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import AppButton from "@/components/AppButton";
import DoneIcon from '@mui/icons-material/Done';
import SearchIcon from '@mui/icons-material/Search';
import { exportTableToExcel } from "@/utils/format/exportToExcel";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import DeleteIcon from '@mui/icons-material/Delete';

const SearchInfoCustomer = () => {
    const { classes } = useStyles();

    // Dữ liệu mẫu cho bảng
    const tableData = [
        {
            id: 1,
            soHoSo: "HS001",
            tenThanChu: "Nguyễn Văn A",
            dienThoai: "0123456789",
            diaChi: "123 Đường ABC, TP.HCM",
            tenVatNuoi: "Mèo Tom",
            chuanDoan: "Cảm cúm",
            ngayTaiKham: "2025-04-10",
            tongTien: "500,000 VND",
        },
        {
            id: 2,
            soHoSo: "HS002",
            tenThanChu: "Trần Thị B",
            dienThoai: "0987654321",
            diaChi: "456 Đường XYZ, Hà Nội",
            tenVatNuoi: "Chó Max",
            chuanDoan: "Viêm da",
            ngayTaiKham: "2025-04-15",
            tongTien: "1,200,000 VND",
        },
    ];

    return (
        <Box className={classes.root}>
            <Grid container className={classes.container}>
                <Grid item xs={12} className={classes.contentLabel}>
                    <TravelExploreIcon />
                    <AppText600>Tìm kiếm thông tin hồ sơ khách hàng</AppText600>
                </Grid>
                <Box className={classes.containerBox}>
                    <Grid item xs={12} className={classes.content1}>
                        <AppDatePicker labels="Từ ngày" fullWidth />
                        <AppDatePicker labels="Đến" fullWidth />
                        <TextFieldBooking
                            placeholder="Số hồ sơ"
                            labels="Số hồ sơ"
                            labelRight="*"
                            style={{ flex: 1 }}
                        />
                        <TextFieldBooking
                            placeholder="Tên thân chủ"
                            labels="Tên thân chủ"
                            labelRight="*"
                            style={{ flex: 1 }}
                        />
                        <TextFieldBooking
                            placeholder="Điện thoại"
                            labels="Điện thoại"
                            labelRight="*"
                            style={{ flex: 1 }}
                        />
                        <TextFieldBooking
                            placeholder="Địa chỉ"
                            labels="Địa chỉ"
                            labelRight="*"
                            style={{ flex: 1 }}
                        />
                    </Grid>
                    <Grid item xs={12} className={classes.content}>
                        <TextFieldBooking
                            placeholder="Tên vật nuôi"
                            labels="Tên vật nuôi"
                            labelRight="*"
                            style={{ flex: 1 }}
                        />
                        <TextFieldBooking
                            placeholder="Chuẩn đoán"
                            labels="Chuẩn đoán"
                            labelRight="*"
                            style={{ flex: 1 }}
                        />
                        <TextFieldBooking
                            placeholder="Ghi chú"
                            labels="Ghi chú"
                            labelRight="*"
                            style={{ flex: 1 }}
                        />
                        <AppSelected classFromControl={classes.fromControl} labels="Người kê đơn" labelRight="*" />
                    </Grid>
                    <Grid item xs={12} className={classes.content}>
                        <AppDatePicker labels="Ngày tái khám" fullWidth />
                        <TextFieldBooking
                            placeholder="Lý do chiết khấu"
                            labels="Lý do chiết khấu"
                            labelRight="*"
                            style={{ flex: 1 }}
                        />
                        <AppSelected classFromControl={classes.fromControl} labels="Giới tính" labelRight="*" />
                        <Grid item xs={12} className={classes.contentCheckBox}>
                            {dataCheckedBoxInfoCustomer.map((item) => (
                                <FormControlLabel key={item.id} control={<Checkbox defaultChecked />} label={item.label} />
                            ))}
                        </Grid>
                    </Grid>
                    <Box className={classes.containerButton}>
                        <AppButton title="Tìm kiếm" icon={SearchIcon} styleSvgIcon={classes.button} fontSizeIcon="small" stroke="white" />
                        <AppButton 
                        title="Xuất Excel" 
                        icon={DoneIcon} 
                        styleSvgIcon={classes.button} 
                        fontSizeIcon="small" 
                        stroke="white" 
                        onClick={() => exportTableToExcel(tableData, 'DanhSachHoSo.xlsx')}
                        />
                    </Box>
                </Box>
                {/* Table */}
                <Grid item xs={12} className={classes.containerTable}>
                    <TableContainer component={Paper}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell style={{ border: "1px solid black" }}></TableCell>
                                    <TableCell style={{ border: "1px solid black" }}>Số hồ sơ</TableCell>
                                    <TableCell style={{ border: "1px solid black" }}>Tên thân chủ</TableCell>
                                    <TableCell style={{ border: "1px solid black" }}>Điện thoại</TableCell>
                                    <TableCell style={{ border: "1px solid black" }}>Địa chỉ</TableCell>
                                    <TableCell style={{ border: "1px solid black" }}>Tên vật nuôi</TableCell>
                                    <TableCell style={{ border: "1px solid black" }}>Chuẩn đoán</TableCell>
                                    <TableCell style={{ border: "1px solid black" }}>Ngày tái khám</TableCell>
                                    <TableCell style={{ border: "1px solid black" }}>Tổng tiền</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {tableData.map((row, index) => (
                                    <TableRow key={row.id}>
                                        <TableCell style={{ border: "1px solid black" }}>
                                            <AppButton title="xem" icon={RemoveRedEyeIcon} stroke="white" fontSizeIcon="small" styleSvgIcon={classes.buttonSeen}></AppButton>
                                            <AppButton title="xoá" icon={DeleteIcon} stroke="white" fontSizeIcon="small"></AppButton>
                                        </TableCell>
                                        <TableCell style={{ border: "1px solid black" }}>{row.soHoSo}</TableCell>
                                        <TableCell style={{ border: "1px solid black" }}>{row.tenThanChu}</TableCell>
                                        <TableCell style={{ border: "1px solid black" }}>{row.dienThoai}</TableCell>
                                        <TableCell style={{ border: "1px solid black" }}>{row.diaChi}</TableCell>
                                        <TableCell style={{ border: "1px solid black" }}>{row.tenVatNuoi}</TableCell>
                                        <TableCell style={{ border: "1px solid black" }}>{row.chuanDoan}</TableCell>
                                        <TableCell style={{ border: "1px solid black" }}>{row.ngayTaiKham}</TableCell>
                                        <TableCell style={{ border: "1px solid black" }}>{row.tongTien}</TableCell>
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

export default SearchInfoCustomer;