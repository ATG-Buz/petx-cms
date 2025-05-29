import React from "react";
import { Box, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";
import TextFieldBooking from "@/components/TextFieldBooking";
import { tableData } from "@/services/storage/config";
import { AppText, AppText600 } from "@/components/AppText";
import useStyles from "./ManagerEmployer.styles";
import AppButton from "@/components/AppButton";
import RoomPreferencesIcon from '@mui/icons-material/RoomPreferences';
import SaveIcon from '@mui/icons-material/Save';
import { toast } from "react-toastify";
import { AppSelected } from "@/components/AppSelected";
import { AppDatePicker } from "@/components/AppDatePicker";

const AssetManagement = () => {
    const { classes, cx } = useStyles();

    const handleClickSave = () => {
        toast.success('Lưu thành công')
    }
    return (
        <Box className={classes.root}>
            <Grid container className={classes.container} spacing={2}>
                <Grid item xs={12} className={classes.contentLabel}>
                    <RoomPreferencesIcon />
                    <AppText600>QUẢN LÝ TÀI SẢN</AppText600>
                </Grid>
                <Grid item xs={9} className={classes.content}>
                    <AppText>Phòng khám</AppText>
                    <AppText>Loại tài sản</AppText>
                    <AppText>Tên tài sản</AppText>
                    <AppText>Ghi chú</AppText>
                </Grid>
                <Grid item xs={9} className={classes.content}>
                    <AppSelected
                    />
                    <AppSelected
                    />
                    <TextFieldBooking
                        placeholder="Nhập tên tài sản"
                        />
                        <TextFieldBooking
                        placeholder="Nhập ghi chú"
                        />
                </Grid>
                <Grid item xs={3} className={classes.content}>
                        <AppButton
                        title="Tìm Kiếm"
                    />
                    <AppButton
                        title="Xuất Excel"
                    />
                </Grid>

                <Grid item xs={12} className={classes.containerTable}>
                    <TableContainer component={Paper}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell className={classes.tableBorderHeader}>Tên tài sản</TableCell>
                                    <TableCell className={classes.tableBorderHeader}>Loại tàn sản</TableCell>
                                    <TableCell className={classes.tableBorderHeader}>Phòng khám</TableCell>
                                    <TableCell className={classes.tableBorderHeader}>Giá trị</TableCell>
                                    <TableCell className={classes.tableBorderHeader}>S.Lượng</TableCell>
                                    <TableCell className={classes.tableBorderHeader}>Thành Tiền</TableCell>
                                    <TableCell className={classes.tableBorderHeader}>Ngày tạo</TableCell>
                                    <TableCell className={classes.tableBorderHeader}>Ghi chú</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                    <TableRow >
                                        <TableCell className={classes.tableBorder}>
                                            <TextFieldBooking
                                                style={{width: '100%'}}
                                            />
                                        </TableCell>
                                        <TableCell className={classes.tableBorder}>
                                        <AppSelected

                                        />
                                        </TableCell>
                                        <TableCell className={classes.tableBorder}>
                                            <AppSelected
                                            />
                                        </TableCell>
                                        <TableCell className={classes.tableBorder}>
                                            <TextFieldBooking />
                                        </TableCell>
                                        <TableCell className={classes.tableBorder}>
                                            <TextFieldBooking />
                                        </TableCell>
                                        <TableCell className={classes.tableBorder}>

                                        </TableCell>
                                        <TableCell className={classes.tableBorder}>
                                            <AppDatePicker />
                                        </TableCell>
                                        
                                        <TableCell className={classes.tableBorder}>
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
    );
};

export default AssetManagement;