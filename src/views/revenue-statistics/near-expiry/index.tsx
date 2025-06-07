import React from "react";
import { Box, Checkbox, FormControlLabel, Grid } from "@mui/material";
import { AppText600 } from "@/components/AppText";
import useStyles from "./near-expiry.styles";
import AppButton from "@/components/AppButton";
import InventoryIcon from "@mui/icons-material/Inventory";
import SearchIcon from "@mui/icons-material/Search";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import { AppSelected } from "@/components/AppSelected";
import { AppDatePicker } from "@/components/AppDatePicker";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { toast } from "react-toastify";
import TextFieldBooking from "@/components/TextFieldBooking";

const NearExpiry = () => {
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
      headerName: "Tên hàng",
      flex: 1,
    },
    {
      field: "expiryDate",
      headerName: "Ngày hết hạn",
      flex: 1,
    },
    {
      field: "actualQty",
      headerName: "Phòng khám",
      flex: 1,
      type: "number",
    },
  ];

  const rows = [
    {
      id: 1,
      name: "Thuốc A",
      expiryDate: "Hộp",
      actualQty: 50,
      standardQty: 55,
    },
    {
      id: 2,
      name: "Thuốc B",
      expiryDate: "Vỉ",
      actualQty: 100,
      standardQty: 95,
    },
    {
      id: 3,
      name: "Thuốc C",
      expiryDate: "Chai",
      actualQty: 30,
      standardQty: 30,
    },
    {
      id: 4,
      name: "Thuốc D",
      expiryDate: "Chai",
      actualQty: 30,
      standardQty: 30,
    },
  ];

  return (
    <Box className={classes.root}>
      <Grid container className={classes.container}>
        <Grid item xs={12} className={classes.contentLabel}>
          <InventoryIcon />
          <AppText600>Thống kê hàng cận hạn</AppText600>
        </Grid>

        <Grid item xs={12} className={classes.containerBody}>
          <Grid container className={classes.containerContent} spacing={2}>
            {/* Search Filters and Action Buttons */}
            <Grid item container xs={12} spacing={2} alignItems="flex-end">
              <Grid item xs={2}>
                <TextFieldBooking fullWidth labels="Tên hàng" />
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

export default NearExpiry;
