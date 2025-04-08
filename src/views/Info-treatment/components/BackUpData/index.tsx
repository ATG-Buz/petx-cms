import React, { useState } from "react";
import { Box, Checkbox, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";
import TextFieldBooking from "@/components/TextFieldBooking";
import { AppDatePicker } from "@/components/AppDatePicker";
import { tableData } from "@/services/storage/config";
import { AppText600 } from "@/components/AppText";
import useStyles from "./BackUpData.styles";
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import AppButton from "@/components/AppButton";
import DoneIcon from '@mui/icons-material/Done';
import SearchIcon from '@mui/icons-material/Search';

const SearchInfoCustomer = () => {
    const { classes } = useStyles();
    const [itemChecked, setItemChecked] = useState<string[]>([])
    const [itemCheckedAll, setItemCheckedAll] = useState(false);
    const [results, setResults] = useState(0)

    const handleCheckedAllItem = (isCheckedAll: boolean, idItem?: string) => {
        if (isCheckedAll) {
            setItemCheckedAll(true)
            setItemChecked(tableData.map((item) => item.id))
        }
        else if (idItem) {
            setItemChecked((prev) => {
                if (prev.includes(idItem)) {
                    return prev.filter((id) => id !== idItem)
                }
                else {
                    return [...prev, idItem]
                }
            })
        }
        else {
            setItemChecked([]);
            setItemCheckedAll(false)
        }
    }

    return (
        <Box className={classes.root}>
            <Grid container className={classes.container}>
                <Grid item xs={12} className={classes.contentLabel}>
                    <TravelExploreIcon />
                    <AppText600>Tìm kiếm</AppText600>
                </Grid>
                <Box className={classes.containerBox}>
                    <Grid item xs={12} className={classes.content1}>
                        <AppDatePicker labels="Từ ngày" fullWidth />
                        <AppDatePicker labels="Đến" fullWidth />
                        <TextFieldBooking
                            placeholder="Thông Tin"
                            labels="Thông Tin"
                            labelRight="*"
                            style={{ flex: 1 }}
                        />
                        <Box className={classes.containerButton}>
                            <AppButton title="Tìm kiếm" icon={SearchIcon} styleSvgIcon={classes.button} fontSizeIcon="small" stroke="white" />
                            <AppButton
                                title="Xoá vĩnh viễn"
                                icon={DoneIcon}
                                styleSvgIcon={classes.button}
                                fontSizeIcon="small"
                                stroke="white"
                            />
                        </Box>
                    </Grid>
                </Box>
                {/* Table */}
                <Grid item xs={12} className={classes.containerTable}>
                    <TableContainer component={Paper}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell style={{ border: "1px solid black" }}><Checkbox checked={itemCheckedAll} onChange={() => itemCheckedAll? handleCheckedAllItem(false) : handleCheckedAllItem(true)} /></TableCell>
                                    <TableCell style={{ border: "1px solid black" }}>Ngày xoá</TableCell>
                                    <TableCell style={{ border: "1px solid black" }}>Ngày Khám</TableCell>
                                    <TableCell style={{ border: "1px solid black" }}>Tên thân chủ</TableCell>
                                    <TableCell style={{ border: "1px solid black" }}>Điện thoại</TableCell>
                                    <TableCell style={{ border: "1px solid black" }}>Địa chỉ</TableCell>
                                    <TableCell style={{ border: "1px solid black" }}>Tên vật nuôi</TableCell>
                                    <TableCell style={{ border: "1px solid black" }}>Chuẩn đoán</TableCell>
                                    <TableCell style={{ border: "1px solid black" }}>Tổng tiền</TableCell>
                                    <TableCell style={{ border: "1px solid black" }}> Người xoá</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {tableData.map((row, index) => (
                                    <TableRow key={row.id}>
                                        <TableCell style={{ border: "1px solid black" }}>
                                            <Checkbox checked={itemChecked.includes(row.id)} onChange={() => handleCheckedAllItem(false, row.id)} />
                                        </TableCell>
                                        <TableCell style={{ border: "1px solid black" }}>{row.soHoSo}</TableCell>
                                        <TableCell style={{ border: "1px solid black" }}>{row.tenThanChu}</TableCell>
                                        <TableCell style={{ border: "1px solid black" }}>{row.dienThoai}</TableCell>
                                        <TableCell style={{ border: "1px solid black" }}>{row.diaChi}</TableCell>
                                        <TableCell style={{ border: "1px solid black" }}>{row.tenVatNuoi}</TableCell>
                                        <TableCell style={{ border: "1px solid black" }}>{row.chuanDoan}</TableCell>
                                        <TableCell style={{ border: "1px solid black" }}>{row.ngayTaiKham}</TableCell>
                                        <TableCell style={{ border: "1px solid black" }}>{row.tongTien}</TableCell>
                                        <TableCell style={{ border: "1px solid black" }}>{row.NguoiXoa}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
                <Grid item xs={12} className={classes.contentResult}>
                    <AppText600>Tổng số: {results}</AppText600>
                </Grid>
            </Grid>
        </Box>
    );
};

export default SearchInfoCustomer;