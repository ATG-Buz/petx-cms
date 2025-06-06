import React, { useState } from "react";
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
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import TextFieldBooking from "@/components/TextFieldBooking";
import { AppText600 } from "@/components/AppText";
import useStyles from "./Sell.styles";
import AppButton from "@/components/AppButton";
import RoomPreferencesIcon from "@mui/icons-material/RoomPreferences";
import SearchIcon from "@mui/icons-material/Search";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import { AppSelected } from "@/components/AppSelected";
import { AppDatePicker } from "@/components/AppDatePicker";
import { toast } from "react-toastify";

const Sell = () => {
  const { classes } = useStyles();
  const [showTotal, setShowTotal] = useState(false);
  const [searchOtherBranch, setSearchOtherBranch] = useState(false);

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
          <AppText600>Bán hàng</AppText600>
        </Grid>

        <Grid container className={classes.containerContent} spacing={2}>
          {/* Search Filters - First Row */}
          <Grid item container xs={12} spacing={2} alignItems="flex-end">
            <Grid item xs={2}>
              <AppText600>Từ ngày</AppText600>
              <AppDatePicker fullWidth />
            </Grid>
            <Grid item xs={2}>
              <AppText600>Đến</AppText600>
              <AppDatePicker fullWidth />
            </Grid>
            <Grid item xs={2}>
              <AppText600>Người bán</AppText600>
              <AppSelected fullWidth labelRight="*" />
            </Grid>
            <Grid item xs={2}>
              <TextFieldBooking
                placeholder="Khách hàng"
                labels="Khách hàng:"
                style={{ width: "100%" }}
              />
            </Grid>
            <Grid item xs={2}>
              <TextFieldBooking
                placeholder="Điện thoại"
                labels="Điện thoại:"
                style={{ width: "100%" }}
              />
            </Grid>
            <Grid item xs={2}>
              <AppButton
                styleSvgIcon={classes.containerButton}
                title="Tìm kiếm"
                icon={SearchIcon}
                stroke="white"
                fontSizeIcon="small"
                onClick={handleSearch}
              />
            </Grid>
          </Grid>

          {/* Search Options - Second Row */}
          <Grid item container xs={12} spacing={2} alignItems="center">
            <Grid item xs={4}>
              <TextFieldBooking
                placeholder="Ghi chú"
                labels="Ghi chú:"
                style={{ width: "100%" }}
              />
            </Grid>
            <Grid item xs={2}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={showTotal}
                    onChange={(e) => setShowTotal(e.target.checked)}
                  />
                }
                label="Hiện tổng số tiền"
              />
            </Grid>
            <Grid item xs={3}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={searchOtherBranch}
                    onChange={(e) => setSearchOtherBranch(e.target.checked)}
                  />
                }
                label="Tìm ở chi nhánh khác"
              />
            </Grid>
            <Grid item xs={3}>
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

          {/* Results Table */}
          <Grid item xs={12}>
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell className={classes.tableBorderHeader}>
                      Khách hàng
                    </TableCell>
                    <TableCell className={classes.tableBorderHeader}>
                      Điện thoại
                    </TableCell>
                    <TableCell className={classes.tableBorderHeader}>
                      Ghi chú
                    </TableCell>
                    <TableCell className={classes.tableBorderHeader}>
                      Ngày
                    </TableCell>
                    <TableCell className={classes.tableBorderHeader}>
                      Người bán
                    </TableCell>
                    <TableCell className={classes.tableBorderHeader}>
                      Bác sĩ tư vấn
                    </TableCell>
                    <TableCell className={classes.tableBorderHeader}>
                      Tổng tiền
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>{/* Table rows will be populated here */}</TableBody>
              </Table>
            </TableContainer>
          </Grid>

          {/* Total Count */}
          <Grid item container xs={12} justifyContent="flex-end">
            <Grid item>
              <AppText600>Tổng số: 0</AppText600>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Sell;
