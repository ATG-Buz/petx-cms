import React, { useState } from "react";
import { Box, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";
import TextFieldBooking from "@/components/TextFieldBooking";
import { tableData } from "@/services/storage/config";
import { AppText600 } from "@/components/AppText";
import useStyles from "./AutoPrescription.styles";
import AppButton from "@/components/AppButton";
import SettingsIcon from '@mui/icons-material/Settings';
import SaveIcon from '@mui/icons-material/Save';
import { toast } from "react-toastify";

const TitleManager = () => {
    const { classes, cx } = useStyles();
    const [total, setTotal] = useState(0);
    const [isAdd, setIsAdd] = useState(false);

    const handleClickSave = () => {
        toast.success('Lưu thành công')
    }
    return (
        <Box className={classes.root}>
            <Grid container className={classes.container}>
                <Grid item xs={12} className={classes.contentLabel}>
                    <SettingsIcon />
                    <AppText600>Cài đặt toa thuốc</AppText600>
                </Grid>
                {/* Table */}
                <Grid item xs={4} className={classes.containerTitle}>
                    <AppText600>Tên bệnh</AppText600>
                    <TextFieldBooking
                        placeholder="Tên chức danh"
                        labelRight="*"
                        style={{ width: '100%' }}
                    />
                </Grid>
                <Grid item xs={8} className={classes.containerCellButton}>
                    <AppButton
                        styleSvgIcon={classes.containerButton}
                        title="Tìm kiếm" icon={SaveIcon}
                        stroke="white"
                        fontSizeIcon="small"
                        onClick={() => handleClickSave()}
                    ></AppButton>
                    <AppButton
                        styleSvgIcon={classes.containerButton}
                        title="Xuất Excel" icon={SaveIcon}
                        stroke="white"
                        fontSizeIcon="small"
                        onClick={() => handleClickSave()}
                    ></AppButton>
                    <AppButton
                        styleSvgIcon={classes.containerButton}
                        title={isAdd? 'Xong': "Thêm"}
                        onClick={() => setIsAdd(!isAdd)}
                    ></AppButton>
                </Grid>
               {!isAdd && <Grid item xs={12} className={classes.containerTable}>
                    <TableContainer component={Paper}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell className={classes.tableBorderHeader}>Tên bệnh</TableCell>
                                    <TableCell className={classes.tableBorderHeader} colSpan={2}>

                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {tableData.map((row, index) => (
                                    <TableRow key={row.id}>
                                        <TableCell className={classes.tableBorderHeader}>

                                        </TableCell>
                                        <TableCell
                                            className={cx(classes.tableBorderHeader, classes.containerCellButton)}
                                            colSpan={2}
                                        >

                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>}
                {isAdd && <Grid item xs={12} className={classes.containerTable}>
                    <TableContainer component={Paper}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell className={classes.tableBorderHeader}>Tên hàng</TableCell>
                                    <TableCell className={classes.tableBorderHeader}> số lượng</TableCell>
                                    <TableCell className={classes.tableBorderHeader}></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    <TableCell className={classes.tableBorderHeader}>
                                        <TextFieldBooking
                                            placeholder="Tên hàng"
                                            style={{ width: '100%' }}
                                        />
                                    </TableCell>
                                    <TableCell className={classes.tableBorderHeader}>
                                        <TextFieldBooking
                                            placeholder="Số lượng"
                                            style={{ width: '100%' }}
                                        />
                                    </TableCell>
                                    <TableCell
                                        className={cx(classes.tableBorderHeader)}
                                    >
                                        <AppButton
                                            styleSvgIcon={classes.containerButton}
                                            title="Thêm"
                                            onClick={() => handleClickSave()}
                                        ></AppButton>
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>}
                <Grid item xs={12} paddingLeft={'16px !important'}>
                    <AppText600>Tổng số : {total}</AppText600>
                </Grid>
            </Grid>
        </Box>
    );
};

export default TitleManager;