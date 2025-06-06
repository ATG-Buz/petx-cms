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
import useStyles from "./RestoreDeletedSales.styles";
import AppButton from "@/components/AppButton";
import RestoreIcon from "@mui/icons-material/Restore";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { AppDatePicker } from "@/components/AppDatePicker";
import { toast } from "react-toastify";

const RestoreDeletedSales = () => {
  const { classes } = useStyles();

  const handleSearch = () => {
    toast.success("Tìm kiếm thành công");
  };

  const handlePermanentDelete = () => {
    toast.success("Xóa vĩnh viễn thành công");
  };

  return (
    <Box className={classes.root}>
      <Grid container className={classes.container}>
        <Grid item xs={12} className={classes.contentLabel}>
          <RestoreIcon />
          <AppText600>Khôi phục xóa bán hàng</AppText600>
        </Grid>

        <Grid container className={classes.containerContent} spacing={2}>
          {/* Search Filters */}
          <Grid
            item
            container
            xs={12}
            spacing={2}
            className={classes.containerFilter}
          >
            <Grid item xs={3}>
              <AppDatePicker labels="Từ ngày:" labelRight="*" />
            </Grid>
            <Grid item xs={3}>
              <AppDatePicker labels="Đến ngày:" labelRight="*" />
            </Grid>
            <Grid item xs={4}>
              <TextFieldBooking
                placeholder="Thông tin"
                labels="Thông tin:"
                style={{ width: "100%" }}
              />
            </Grid>
            <Grid
              item
              xs={2}
              container
              spacing={1}
              className={classes.buttonContainer}
            >
              <Grid item xs={6}>
                <AppButton
                  styleSvgIcon={classes.containerButton}
                  title="Tìm kiếm"
                  icon={RestoreIcon}
                  stroke="white"
                  fontSizeIcon="small"
                  onClick={handleSearch}
                />
              </Grid>
              <Grid item xs={6}>
                <AppButton
                  styleSvgIcon={classes.containerButtonDelete}
                  title="Xóa VV"
                  icon={DeleteForeverIcon}
                  stroke="white"
                  fontSizeIcon="small"
                  onClick={handlePermanentDelete}
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
                      Ngày xóa
                    </TableCell>
                    <TableCell className={classes.tableBorderHeader}>
                      Ngày bán
                    </TableCell>
                    <TableCell className={classes.tableBorderHeader}>
                      Tên khách hàng
                    </TableCell>
                    <TableCell className={classes.tableBorderHeader}>
                      Điện thoại
                    </TableCell>
                    <TableCell className={classes.tableBorderHeader}>
                      Tổng tiền
                    </TableCell>
                    <TableCell className={classes.tableBorderHeader}>
                      Người xóa
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>{/* Table rows will be populated here */}</TableBody>
              </Table>
            </TableContainer>
          </Grid>

          {/* Total Count Label */}
          <Grid item xs={12}>
            <Box className={classes.totalCount}>
              <AppText600>Tổng số: 0</AppText600>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default RestoreDeletedSales;
