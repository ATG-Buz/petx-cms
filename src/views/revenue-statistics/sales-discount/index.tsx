import React from "react";
import { Box, Grid } from "@mui/material";
import { AppText600 } from "@/components/AppText";
import useStyles from "./sale-discount.styles";
import AppButton from "@/components/AppButton";
import InventoryIcon from "@mui/icons-material/Inventory";
import SearchIcon from "@mui/icons-material/Search";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import { AppSelected } from "@/components/AppSelected";
import { AppDatePicker } from "@/components/AppDatePicker";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { toast } from "react-toastify";

const SaleDiscount = () => {
  const { classes } = useStyles();

  const handleSearch = () => {
    toast.success("Đang tìm kiếm...");
  };

  const handleExportExcel = () => {
    toast.success("Đang xuất Excel...");
  };

  const columns: GridColDef[] = [
    {
      field: "name",
      headerName: "Phòng khám",
      flex: 1,
    },
    {
      field: "totalTreatment",
      headerName: "Chiết khấu",
      flex: 1,
    },
  ];

  const rows = [
    {
      id: 1,
      name: "Phòng khám 1",
      totalTreatment: 10,
    },
    {
      id: 2,
      name: "Phòng khám 2",
      totalTreatment: 10,
    },
    {
      id: 3,
      name: "Phòng khám 3",
      totalTreatment: 10,
    },
    {
      id: 4,
      name: "Phòng khám 4",
      totalTreatment: 10,
    },
  ];

  return (
    <Box className={classes.root}>
      <Grid container className={classes.container}>
        <Grid item xs={12} className={classes.contentLabel}>
          <InventoryIcon />
          <AppText600>Thống kê chiết khấu bán hàng</AppText600>
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
                <AppText600>Phòng khám</AppText600>
                <AppSelected fullWidth labelRight="*" />
              </Grid>
              <Grid item xs={2}>
                <AppText600>Loại bán hàng</AppText600>
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

export default SaleDiscount;
