import React from "react";
import { Box, Checkbox, FormControlLabel, Grid } from "@mui/material";
import { AppText600 } from "@/components/AppText";
import useStyles from "./stock-alerts.styles";
import AppButton from "@/components/AppButton";
import InventoryIcon from "@mui/icons-material/Inventory";
import SearchIcon from "@mui/icons-material/Search";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import { AppSelected } from "@/components/AppSelected";
import { AppDatePicker } from "@/components/AppDatePicker";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { toast } from "react-toastify";
import TextFieldBooking from "@/components/TextFieldBooking";

const StockReport = () => {
  const { classes } = useStyles();

  const handleSearch = () => {
    toast.success("Đang tìm kiếm...");
  };

  const handleExportExcel = () => {
    toast.success("Đang xuất Excel...");
  };

  const columns: GridColDef[] = [
    {
      field: "productName",
      headerName: "Ngày",
      flex: 1,
    },
    {
      field: "unit",
      headerName: "Người gửi",
      flex: 1,
    },
    {
      field: "costPrice",
      headerName: "Nội dung",
      flex: 1,
    },
  ];

  const rows = [
    {
      id: 1,
      productName: "2025-06-07",
      unit: "Hộp",
      costPrice: 100000,
    },
    {
      id: 2,
      productName: "2025-06-07",
      unit: "Hộp",
      costPrice: 100000,
    },
    {
      id: 3,
      productName: "2025-06-07",
      unit: "Hộp",
      costPrice: 100000,
    },
    {
      id: 4,
      productName: "2025-06-07",
      unit: "Hộp",
      costPrice: 100000,
    },
  ];

  return (
    <Box className={classes.root}>
      <Grid container className={classes.container}>
        <Grid item xs={12} className={classes.contentLabel}>
          <InventoryIcon />
          <AppText600>Thống kê hàng tồn kho</AppText600>
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
                <TextFieldBooking fullWidth labels="Người gửi" />
              </Grid>
              <Grid item xs={2}>
                <TextFieldBooking fullWidth labels="Nội dung" />
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

export default StockReport;
