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
import TextFieldBooking from "@/components/TextFieldBooking";
import { AppText600 } from "@/components/AppText";
import useStyles from "./SearchProduct.styles";
import AppButton from "@/components/AppButton";
import RoomPreferencesIcon from "@mui/icons-material/RoomPreferences";
import SearchIcon from "@mui/icons-material/Search";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { AppSelected } from "@/components/AppSelected";
import { AppDatePicker } from "@/components/AppDatePicker";
import { toast } from "react-toastify";

const SearchProduct = () => {
  const { classes } = useStyles();

  const handleSearch = () => {
    toast.success("Đang tìm kiếm...");
  };

  const handleViewDetail = () => {
    toast.success("Xem chi tiết...");
  };

  return (
    <Box className={classes.root}>
      <Grid container className={classes.container}>
        <Grid item xs={12} className={classes.contentLabel}>
          <RoomPreferencesIcon />
          <AppText600>Hàng đã bán</AppText600>
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
            <Grid item xs={3}>
              <AppText600>Loại bán hàng</AppText600>
              <AppSelected fullWidth labelRight="*" />
            </Grid>
            <Grid item xs={2}>
              <TextFieldBooking
                placeholder="Tên hàng"
                labels="Tên hàng:"
                style={{ width: "100%" }}
              />
            </Grid>
            <Grid item xs={3}>
              <AppText600>Phòng khám</AppText600>
              <AppSelected fullWidth labelRight="*" />
            </Grid>
          </Grid>

          {/* Action Buttons */}
          <Grid item container xs={12} spacing={2} justifyContent="flex-end">
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
                title="Xem chi tiết"
                icon={VisibilityIcon}
                stroke="white"
                fontSizeIcon="small"
                onClick={handleViewDetail}
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
                      Tên hàng
                    </TableCell>
                    <TableCell className={classes.tableBorderHeader}>
                      Đơn vị tính
                    </TableCell>
                    <TableCell className={classes.tableBorderHeader}>
                      Số lượng
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>{/* Table rows will be populated here */}</TableBody>
              </Table>
            </TableContainer>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SearchProduct;
