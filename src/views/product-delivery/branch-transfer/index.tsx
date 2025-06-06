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
import useStyles from "./BranchTransfer.styles";
import AppButton from "@/components/AppButton";
import SearchIcon from "@mui/icons-material/Search";
import { AppDatePicker } from "@/components/AppDatePicker";
import { AppSelected } from "@/components/AppSelected";
import { toast } from "react-toastify";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";

const BranchTransfer = () => {
  const { classes } = useStyles();
  const [showTotalAmount, setShowTotalAmount] = useState(false);
  const [searchOtherBranch, setSearchOtherBranch] = useState(false);

  const handleSearch = () => {
    toast.success("Tìm kiếm thành công");
  };

  return (
    <Box className={classes.root}>
      <Grid container className={classes.container}>
        <Grid item xs={12} className={classes.contentLabel}>
          <CompareArrowsIcon />
          <AppText600>Danh sách xuất hàng sang chi nhánh</AppText600>
        </Grid>

        <Grid container className={classes.containerContent} spacing={2}>
          {/* First Row - Search Filters */}
          <Grid
            item
            container
            xs={12}
            spacing={2}
            className={classes.containerFilter}
          >
            <Grid item xs={2}>
              <AppDatePicker labels="Từ ngày:" labelRight="*" />
            </Grid>
            <Grid item xs={2}>
              <AppDatePicker labels="Đến ngày:" labelRight="*" />
            </Grid>
            <Grid item xs={3}>
              <AppSelected labels="Người xuất:" labelRight="*" fullWidth />
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
            <Grid item xs={1} className={classes.buttonContainer}>
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

          {/* Second Row - Additional Filters */}
          <Grid
            item
            container
            xs={12}
            spacing={2}
            className={classes.containerFilter}
          >
            <Grid item xs={6}>
              <TextFieldBooking
                placeholder="Ghi chú"
                labels="Ghi chú:"
                style={{ width: "100%" }}
              />
            </Grid>
            <Grid item xs={3}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={showTotalAmount}
                    onChange={(e) => setShowTotalAmount(e.target.checked)}
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
                      Từ
                    </TableCell>
                    <TableCell className={classes.tableBorderHeader}>
                      Đến
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
                      Người xuất
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

export default BranchTransfer;
