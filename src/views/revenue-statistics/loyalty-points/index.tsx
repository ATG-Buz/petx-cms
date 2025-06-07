import React from "react";
import { Box, Checkbox, FormControlLabel, Grid } from "@mui/material";
import { AppText600 } from "@/components/AppText";
import useStyles from "./loyalty-points.styles";
import AppButton from "@/components/AppButton";
import InventoryIcon from "@mui/icons-material/Inventory";
import SearchIcon from "@mui/icons-material/Search";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import { AppSelected } from "@/components/AppSelected";
import { AppDatePicker } from "@/components/AppDatePicker";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { toast } from "react-toastify";
import TextFieldBooking from "@/components/TextFieldBooking";

const LoyaltyPoints = () => {
  const { classes } = useStyles();

  const handleSearch = () => {
    toast.success("Đang tìm kiếm...");
  };

  const handleExportExcel = () => {
    toast.success("Đang xuất Excel...");
  };

  const columns: GridColDef[] = [
    {
      field: "customerName",
      headerName: "Tên khách hàng",
      flex: 1,
    },
    {
      field: "phone",
      headerName: "Điện thoại",
      flex: 1,
    },
    {
      field: "loyaltyPoints",
      headerName: "Điểm thưởng",
      flex: 1,
      type: "number",
    },
  ];

  const rows = [
    {
      id: 1,
      customerName: "Thuốc A",
      phone: "Hộp",
      loyaltyPoints: 100000,
    },
    {
      id: 2,
      customerName: "Thuốc B",
      phone: "Vỉ",
      loyaltyPoints: 50000,
    },
    {
      id: 3,
      customerName: "Thuốc C",
      phone: "Chai",
      loyaltyPoints: 75000,
    },
    {
      id: 4,
      customerName: "Thuốc D",
      phone: "Chai",
      loyaltyPoints: 75000,
    },
  ];

  return (
    <Box className={classes.root}>
      <Grid container className={classes.container}>
        <Grid item xs={12} className={classes.contentLabel}>
          <InventoryIcon />
          <AppText600>Thống kê điểm thưởng</AppText600>
        </Grid>

        <Grid item xs={12} className={classes.containerBody}>
          <Grid container className={classes.containerContent} spacing={2}>
            {/* Search Filters and Action Buttons */}
            <Grid item container xs={12} spacing={2} alignItems="flex-end">
              <Grid item xs={2}>
                <TextFieldBooking fullWidth labels="Tên khách hàng" />
              </Grid>
              <Grid item xs={2}>
                <TextFieldBooking fullWidth labels="Điện thoại" />
              </Grid>
              <Grid item xs={2}>
                <TextFieldBooking fullWidth labels="Điểm từ" />
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

export default LoyaltyPoints;
