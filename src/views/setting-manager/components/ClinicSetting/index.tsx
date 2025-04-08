import React from "react";
import { Box, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";
import TextFieldBooking from "@/components/TextFieldBooking";
import { tableData } from "@/services/storage/config";
import { AppText600 } from "@/components/AppText";
import useStyles from "./ClinicSetting.styles";
import AppButton from "@/components/AppButton";
import RoomPreferencesIcon from '@mui/icons-material/RoomPreferences';
import SaveIcon from '@mui/icons-material/Save';
import { toast } from "react-toastify";

const ClinicSetting = () => {
    const { classes } = useStyles();

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
                                    <TableCell className={classes.tableBorderHeader}>Tên phòng khám</TableCell>
                                    <TableCell className={classes.tableBorderHeader}>Địa chỉ</TableCell>
                                    <TableCell className={classes.tableBorderHeader}>Điện thoại</TableCell>
                                    <TableCell className={classes.tableBorderHeader}></TableCell>
                                    <TableCell className={classes.tableBorderHeader}></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {tableData.map((row, index) => (
                                    <TableRow key={row.id}>
                                        <TableCell className={classes.tableBorder}>
                                            <TextFieldBooking
                                                placeholder="Thông Tin"
                                                labelRight="*"
                                                style={{width: '100%'}}
                                            />
                                        </TableCell>
                                        <TableCell className={classes.tableBorder}>
                                            <TextFieldBooking
                                                placeholder="Thông Tin"
                                                style={{width: '100%'}}
                                            />
                                        </TableCell>
                                        <TableCell className={classes.tableBorder}>
                                            <TextFieldBooking
                                                placeholder="Thông Tin"
                                                style={{width: '100%'}}
                                            />
                                        </TableCell>
                                        <TableCell className={classes.tableBorder}>

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
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
            </Grid>
        </Box>
    );
};

export default ClinicSetting;