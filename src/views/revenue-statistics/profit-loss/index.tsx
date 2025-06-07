import React from "react";
import { Box, Grid } from "@mui/material";
import { AppText600 } from "@/components/AppText";
import useStyles from "./profit-loss.styles";
import AppButton from "@/components/AppButton";
import InventoryIcon from "@mui/icons-material/Inventory";
import SearchIcon from "@mui/icons-material/Search";
import { AppSelected } from "@/components/AppSelected";
import { AppDatePicker } from "@/components/AppDatePicker";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { toast } from "react-toastify";

const ProfitLoss = () => {
  const { classes } = useStyles();

  const handleSearch = () => {
    toast.success("Đang tìm kiếm...");
  };

  const handleExportExcel = () => {
    toast.success("Đang xuất Excel...");
  };

  const columns: GridColDef[] = [
    {
      field: "checkDate",
      headerName: "Tổng tiền",
      flex: 1,
    },
    {
      field: "productName",
      headerName: "Tổng chiết khấu",
      flex: 1,
    },
    {
      field: "unit",
      headerName: "Tổng tiền vốn",
      flex: 1,
    },
    {
      field: "costPrice",
      headerName: "Tổng tiền lời",
      flex: 1,
      type: "number",
    },
    {
      field: "actualQty",
      headerName: "Đã trả",
      flex: 1,
      type: "number",
    },
    {
      field: "bookQty",
      headerName: "Còn nợ",
      flex: 1,
      type: "number",
    },
  ];

  const rows = [
    {
      id: 1,
      checkDate: "2024-03-20",
      productName: "Thuốc A",
      unit: "Hộp",
      costPrice: 100000,
      actualQty: 50,
      bookQty: 55,
      diffQty: -5,
      openingQty: 40,
      outQty: 15,
      inQty: 30,
      actualAmount: 5000000,
      bookAmount: 5500000,
      diffAmount: -500000,
    },
    {
      id: 2,
      checkDate: "2024-03-20",
      productName: "Thuốc B",
      unit: "Vỉ",
      costPrice: 50000,
      actualQty: 100,
      bookQty: 95,
      diffQty: 5,
      openingQty: 80,
      outQty: 20,
      inQty: 35,
      actualAmount: 5000000,
      bookAmount: 4750000,
      diffAmount: 250000,
    },
    {
      id: 3,
      checkDate: "2024-03-20",
      productName: "Thuốc C",
      unit: "Chai",
      costPrice: 75000,
      actualQty: 30,
      bookQty: 30,
      diffQty: 0,
      openingQty: 25,
      outQty: 10,
      inQty: 15,
      actualAmount: 2250000,
      bookAmount: 2250000,
      diffAmount: 0,
    },
    {
      id: 4,
      checkDate: "2024-03-20",
      productName: "Thuốc C",
      unit: "Chai",
      costPrice: 75000,
      actualQty: 30,
      bookQty: 30,
      diffQty: 0,
      openingQty: 25,
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
          <AppText600>Lời lỗ</AppText600>
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
              <Grid item xs={4}>
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

export default ProfitLoss;
