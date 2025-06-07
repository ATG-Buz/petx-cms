import React from "react";
import { Box, Grid } from "@mui/material";
import { AppText600 } from "@/components/AppText";
import useStyles from "./styles";
import AppButton from "@/components/AppButton";
import InventoryIcon from "@mui/icons-material/Inventory";
import SearchIcon from "@mui/icons-material/Search";
import { AppDatePicker } from "@/components/AppDatePicker";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { toast } from "react-toastify";
import { AppSelected } from "@/components/AppSelected";
import TextFieldBooking from "@/components/TextFieldBooking";

const Inventory = () => {
  const { classes } = useStyles();

  const handleSearch = () => {
    toast.success("Đang tìm kiếm...");
  };

  const handleExportExcel = () => {
    toast.success("Đang xuất Excel...");
  };

  const columns: GridColDef[] = [
    {
      field: "stt",
      headerName: "STT",
      flex: 1,
    },
    {
      field: "date",
      headerName: "Ngày",
      flex: 1,
    },
    {
      field: "employee",
      headerName: "Nhân viên",
      flex: 1,
    },
    {
      field: "reason",
      headerName: "Lý do",
      flex: 1,
    },
    {
      field: "amount",
      headerName: "Số tiền",
      flex: 1,
    },
  ];

  const rows = [
    {
      id: 1,
      stt: 1,
      date: "2024-03-20",
      employee: "Nguyễn Văn A",
      reason: "Lý do 1",
      amount: 100000,
    },
    {
      id: 2,
      stt: 2,
      date: "2024-03-20",
      employee: "Nguyễn Văn B",
      reason: "Lý do 2",
      amount: 200000,
    },
    {
      id: 3,
      stt: 3,
      date: "2024-03-20",
      employee: "Nguyễn Văn C",
      reason: "Lý do 3",
      amount: 300000,
    },
    {
      id: 4,
      stt: 4,
      date: "2024-03-20",
      employee: "Nguyễn Văn D",
      reason: "Lý do 4",
      amount: 400000,
    },
  ];

  return (
    <Box className={classes.root}>
      <Grid container className={classes.container}>
        <Grid item xs={12} className={classes.contentLabel}>
          <InventoryIcon />
          <AppText600>Danh sách phiếu chi</AppText600>
        </Grid>

        <Grid item xs={12} className={classes.containerBody}>
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
              <Grid item xs={2}>
                <AppText600>Nhân viên</AppText600>
                <AppSelected fullWidth labelRight="*" />
              </Grid>
              <Grid item xs={2}>
                <TextFieldBooking fullWidth labels="Lý do" />
              </Grid>
              <Grid item xs={2}>
                <AppText600>Thanh toán</AppText600>
                <AppSelected fullWidth labelRight="*" />
              </Grid>
              <Grid item xs={2} container spacing={2} justifyContent="flex-end">
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
                    icon={SearchIcon}
                    stroke="white"
                    fontSizeIcon="small"
                    onClick={handleSearch}
                  />
                </Grid>
              </Grid>
            </Grid>

            {/* Results Table */}
            <Grid item xs={12}>
              <DataGrid
                rows={rows}
                columns={columns}
                className={classes.dataGrid}
                disableRowSelectionOnClick
                hideFooter
                autoHeight
              />
            </Grid>

            {/* Total Count */}
            <Grid item container xs={12}>
              <Grid item>
                <AppText600>Tổng số: {rows.length}</AppText600>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Inventory;
