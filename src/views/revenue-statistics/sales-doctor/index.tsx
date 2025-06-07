import React from "react";
import { Box, Grid } from "@mui/material";
import { AppText600 } from "@/components/AppText";
import useStyles from "./sale-doctor.styles";
import AppButton from "@/components/AppButton";
import InventoryIcon from "@mui/icons-material/Inventory";
import SearchIcon from "@mui/icons-material/Search";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import { AppSelected } from "@/components/AppSelected";
import { AppDatePicker } from "@/components/AppDatePicker";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { toast } from "react-toastify";

const SaleDoctor = () => {
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
      headerName: "Họ tên",
      flex: 1,
    },
    {
      field: "totalTreatment",
      headerName: "Tổng số ca điều trị",
      flex: 1,
    },
    {
      field: "totalAmount",
      headerName: "Tổng tiền",
      flex: 1,
      type: "number",
    },
  ];

  const rows = [
    {
      id: 1,
      name: "Nguyễn Văn A",
      totalTreatment: 10,
      totalAmount: 1000000,
      outQty: 15,
      inQty: 30,
      actualAmount: 5000000,
      bookAmount: 5500000,
      diffAmount: -500000,
    },
    {
      id: 2,
      name: "Nguyễn Văn B",
      totalTreatment: 10,
      totalAmount: 1000000,
      outQty: 20,
      inQty: 35,
      actualAmount: 5000000,
      bookAmount: 4750000,
      diffAmount: 250000,
    },
    {
      id: 3,
      name: "Nguyễn Văn C",
      totalTreatment: 10,
      totalAmount: 1000000,
      outQty: 10,
      inQty: 15,
      actualAmount: 2250000,
      bookAmount: 2250000,
      diffAmount: 0,
    },
    {
      id: 4,
      name: "Nguyễn Văn D",
      totalTreatment: 10,
      totalAmount: 1000000,
      outQty: 10,
      inQty: 15,
      actualAmount: 2250000,
      bookAmount: 2250000,
      diffAmount: 0,
    },
  ];

  return (
    <Box className={classes.root}>
      <Grid container className={classes.container}>
        <Grid item xs={12} className={classes.contentLabel}>
          <InventoryIcon />
          <AppText600>Thống kê bán hàng theo tư vấn bác sĩ</AppText600>
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

export default SaleDoctor;
