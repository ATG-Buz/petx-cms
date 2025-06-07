import React from "react";
import { Box, Grid, Stack } from "@mui/material";
import TextFieldBooking from "@/components/TextFieldBooking";
import AppButton from "@/components/AppButton";
import { AppDatePicker } from "@/components/AppDatePicker";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { IconButton, Tooltip } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityIcon from "@mui/icons-material/Visibility";
import InventoryIcon from "@mui/icons-material/Inventory";
import { AppText600 } from "@/components/AppText";
import useStyles from "./styles";

const ProductImportList = () => {
  const { classes } = useStyles();

  const [paginationModel, setPaginationModel] = React.useState({
    pageSize: 10,
    page: 0,
  });

  const columns: GridColDef[] = [
    {
      field: "no",
      headerName: "STT",
      width: 100,
    },
    {
      field: "supplier",
      headerName: "Nhà cung cấp",
      width: 200,
    },
    {
      field: "importDate",
      headerName: "Nhập",
      width: 150,
    },
    {
      field: "totalAmount",
      headerName: "Tổng tiền",
      width: 150,
    },
    {
      field: "notes",
      headerName: "Ghi chú",
      width: 200,
    },
    {
      field: "actions",
      headerName: "",
      width: 120,
      renderCell: (params) => (
        <Box>
          <Tooltip title="Xem">
            <IconButton onClick={() => handleView(params.row)}>
              <VisibilityIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Xóa">
            <IconButton onClick={() => handleDelete(params.row)}>
              <DeleteIcon />
            </IconButton>
          </Tooltip>
        </Box>
      ),
    },
  ];

  const handleSearch = () => {
    // Implement search logic
  };

  const handleExport = () => {
    // Implement export logic
  };

  const handleView = (row: any) => {
    // Implement view logic
  };

  const handleDelete = (row: any) => {
    // Implement delete logic
  };

  return (
    <Box className={classes.root}>
      <Grid container className={classes.container}>
        <Grid item xs={12} className={classes.contentLabel}>
          <InventoryIcon />
          <AppText600>Danh sách nhập hàng hóa</AppText600>
        </Grid>

        <Grid container spacing={2} className={classes.filterSection}>
          <Grid item xs={2.5}>
            <AppDatePicker labels="Từ ngày" />
          </Grid>
          <Grid item xs={2.5}>
            <AppDatePicker labels="Đến ngày" />
          </Grid>
          <Grid item xs={2.5}>
            <TextFieldBooking labels="Nhà cung cấp" fullWidth />
          </Grid>
          <Grid item xs={2.5}>
            <TextFieldBooking labels="Ghi chú" fullWidth />
          </Grid>
          <Grid item xs={2} className={classes.buttonContainer}>
            <AppButton title="Tìm kiếm" onClick={handleSearch}></AppButton>
            <AppButton title="Xuất Excel" onClick={handleExport}></AppButton>
          </Grid>
        </Grid>

        <Grid container className={classes.containerContent} spacing={2}>
          <DataGrid
            rows={[]}
            columns={columns}
            paginationModel={paginationModel}
            onPaginationModelChange={setPaginationModel}
            pageSizeOptions={[10]}
            disableRowSelectionOnClick
            autoHeight
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProductImportList;
