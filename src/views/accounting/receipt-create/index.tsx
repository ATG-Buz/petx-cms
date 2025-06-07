import React from "react";
import {
  Box,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { AppText600 } from "@/components/AppText";
import useStyles from "./styles";
import AppButton from "@/components/AppButton";
import InventoryIcon from "@mui/icons-material/Inventory";
import SearchIcon from "@mui/icons-material/Search";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import { AppSelected } from "@/components/AppSelected";
import { toast } from "react-toastify";
import TextFieldBooking from "@/components/TextFieldBooking";
import { tableData } from "@/services/storage/config";
import SaveIcon from "@mui/icons-material/Save";

const InventoryCheck = () => {
  const { classes } = useStyles();

  const handleExportExcel = () => {
    toast.success("Đang xuất Excel...");
  };

  return (
    <Box className={classes.root}>
      <Grid container className={classes.container}>
        <Grid item xs={12} className={classes.contentLabel}>
          <InventoryIcon />
          <AppText600>Tạo phiếu thu</AppText600>
        </Grid>

        <Grid container className={classes.containerContent} spacing={2}>
          <Grid item xs={4}>
            <TextFieldBooking fullWidth labels="Lý do" />
          </Grid>
          <Grid item xs={4}>
            <TextFieldBooking fullWidth labels="Số tiền" />
          </Grid>
          <Grid item xs={2}>
            <AppSelected fullWidth />
          </Grid>
          <Grid item xs={2} container spacing={2} justifyContent="flex-end">
            <Grid item>
              <AppButton
                styleSvgIcon={classes.containerButton}
                title="Lưu"
                icon={SearchIcon}
                stroke="white"
                fontSizeIcon="small"
                onClick={handleExportExcel}
              />
            </Grid>
            <Grid item>
              <AppButton
                styleSvgIcon={classes.containerButton}
                title="In phiếu"
                icon={FileDownloadIcon}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default InventoryCheck;
