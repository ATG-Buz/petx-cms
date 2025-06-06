import React from "react";
import {
  Box,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { AppText600 } from "@/components/AppText";
import useStyles from "./ReturnProduct.styles";
import AppButton from "@/components/AppButton";
import RoomPreferencesIcon from "@mui/icons-material/RoomPreferences";
import SearchIcon from "@mui/icons-material/Search";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import { AppSelected } from "@/components/AppSelected";
import { AppDatePicker } from "@/components/AppDatePicker";
import { toast } from "react-toastify";

const ReturnProduct = () => {
  const { classes } = useStyles();

  const handleSearch = () => {
    toast.success("Đang tìm kiếm...");
  };

  const handleExportExcel = () => {
    toast.success("Đang xuất Excel...");
  };

  return (
    <Box className={classes.root}>
      <Grid container className={classes.container}>
        <Grid item xs={12} className={classes.contentLabel}>
          <RoomPreferencesIcon />
          <AppText600>Danh sách trả hàng</AppText600>
        </Grid>

        <Grid container className={classes.containerContent} spacing={2}>
          {/* Search Filters and Action Buttons */}
          <Grid item container xs={12} spacing={2} alignItems="flex-end">
            <Grid item xs={2}>
              <AppText600>Từ ngày</AppText600>
              <AppDatePicker fullWidth />
            </Grid>
            <Grid item xs={2}>
              <AppText600>Đến</AppText600>
              <AppDatePicker fullWidth />
            </Grid>
            <Grid item xs={4}>
              <AppText600>Người nhận</AppText600>
              <AppSelected fullWidth labelRight="*" />
            </Grid>
            <Grid item xs={4} container spacing={2} justifyContent="flex-end">
              <Grid item>
                <AppButton
                  styleSvgIcon={classes.containerButton}
                  title="Tìm kiếm"
                  icon={SearchIcon}
                  stroke="white"
                  fontSizeIcon="small"
                  onClick={handleSearch}
                />
              </Grid>
              <Grid item>
                <AppButton
                  styleSvgIcon={classes.containerButton}
                  title="Xuất Excel"
                  icon={FileDownloadIcon}
                  stroke="white"
                  fontSizeIcon="small"
                  onClick={handleExportExcel}
                />
              </Grid>
            </Grid>
          </Grid>

          {/* Results Table */}
          <Grid item xs={12}>
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell className={classes.tableBorderHeader}>
                      STT
                    </TableCell>
                    <TableCell className={classes.tableBorderHeader}>
                      Khách hàng
                    </TableCell>
                    <TableCell className={classes.tableBorderHeader}>
                      Ngày trả
                    </TableCell>
                    <TableCell className={classes.tableBorderHeader}>
                      Người nhận
                    </TableCell>
                    <TableCell className={classes.tableBorderHeader}>
                      Tổng tiền
                    </TableCell>
                    <TableCell className={classes.tableBorderHeader}>
                      Lý do
                    </TableCell>
                    <TableCell className={classes.tableBorderHeader}>
                      Tên hàng
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>{/* Table rows will be populated here */}</TableBody>
              </Table>
            </TableContainer>
          </Grid>

          {/* Total Count */}
          <Grid item container xs={12}>
            <Grid item>
              <AppText600>Tổng số: 0</AppText600>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ReturnProduct;
