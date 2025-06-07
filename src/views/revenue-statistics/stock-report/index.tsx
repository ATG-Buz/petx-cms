import React from "react";
import { Box, Checkbox, FormControlLabel, Grid } from "@mui/material";
import { AppText600 } from "@/components/AppText";
import useStyles from "./stock-report.styles";
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
      headerName: "Tên hàng",
      flex: 1,
    },
    {
      field: "unit",
      headerName: "Đơn vị tính",
      flex: 1,
    },
    {
      field: "costPrice",
      headerName: "Giá vốn",
      flex: 1,
      type: "number",
    },
    {
      field: "actualQty",
      headerName: "Hiện tồn",
      flex: 1,
      type: "number",
    },
    {
      field: "standardQty",
      headerName: "định mức tồn kho",
      flex: 1,
      type: "number",
    },
    {
      field: "totalAmount",
      headerName: "thành tiền",
      flex: 1,
      type: "number",
    },
  ];

  const rows = [
    {
      id: 1,
      productName: "Thuốc A",
      unit: "Hộp",
      costPrice: 100000,
      actualQty: 50,
      standardQty: 55,
      totalAmount: 5000000,
    },
    {
      id: 2,
      productName: "Thuốc B",
      unit: "Vỉ",
      costPrice: 50000,
      actualQty: 100,
      standardQty: 95,
      totalAmount: 5000000,
    },
    {
      id: 3,
      productName: "Thuốc C",
      unit: "Chai",
      costPrice: 75000,
      actualQty: 30,
      standardQty: 30,
      totalAmount: 2250000,
    },
    {
      id: 4,
      productName: "Thuốc D",
      unit: "Chai",
      costPrice: 75000,
      actualQty: 30,
      standardQty: 30,
      totalAmount: 2250000,
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
                <AppText600>Phòng khám</AppText600>
                <AppSelected fullWidth labelRight="*" />
              </Grid>
              <Grid item xs={2}>
                <TextFieldBooking fullWidth labels="Tên hàng" />
              </Grid>
              <Grid item xs={2}>
                <FormControlLabel
                  control={<Checkbox />}
                  label={`Dưới định mức`}
                  className={classes.textCheckBox}
                />
                <FormControlLabel
                  control={<Checkbox />}
                  label={`Hết hàng`}
                  className={classes.textCheckBox}
                />
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
                    title="Xuất file"
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
