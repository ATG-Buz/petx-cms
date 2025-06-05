import React from "react";
import { Box, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";
import TextFieldBooking from "@/components/TextFieldBooking";
import { dataDiagnosticSettings, tableData } from "@/services/storage/config";
import { AppText600 } from "@/components/AppText";
import useStyles from "./DiagnosticSettings.styles";
import AppButton from "@/components/AppButton";
import RoomPreferencesIcon from '@mui/icons-material/RoomPreferences';
import SaveIcon from '@mui/icons-material/Save';
import { toast } from "react-toastify";

const DiagnosticSettings = () => {
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
                                    <TableCell className={classes.tableBorderHeader}>Chuẩn đoán</TableCell>
                                    <TableCell className={classes.tableBorderHeader}></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody component={Paper} className={classes.tableBody}>
                                {dataDiagnosticSettings.map((row, index) => (
                                    <TableRow key={row.id}>
                                        <TableCell className={classes.tableBorder}>
                                            <TextFieldBooking
                                                placeholder={row.chuanDoan}
                                                labelRight="*"
                                                style={{width: '100%'}}
                                            />
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
                                        <TableCell className={classes.tableBorder}>
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
    );
};

export default DiagnosticSettings;