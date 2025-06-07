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
import useStyles from "./barcode-printing.styles";
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
          <AppText600>In mã vạch</AppText600>
        </Grid>

        <Grid item xs={12} className={classes.containerBody}>
          <Grid container className={classes.containerContent} spacing={2}>
            {/* Search Filters and Action Buttons */}
            <Grid item container xs={12} spacing={2} alignItems="flex-end">
              <Grid item xs={4}>
                <AppText600>Phòng khám</AppText600>
                <AppSelected fullWidth labelRight="*" />
              </Grid>
              <Grid item xs={2} container spacing={2} justifyContent="flex-end">
                <Grid item>
                  <AppButton
                    styleSvgIcon={classes.containerButton}
                    title="Xuất file"
                    icon={SearchIcon}
                    stroke="white"
                    fontSizeIcon="small"
                    onClick={handleExportExcel}
                  />
                </Grid>
                <Grid item>
                  <AppButton
                    styleSvgIcon={classes.containerButton}
                    title="In mã vạch"
                    icon={FileDownloadIcon}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12} className={classes.containerTable}>
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell className={classes.tableBorderHeader}>
                      Tên hàng
                    </TableCell>
                    <TableCell className={classes.tableBorderHeader}>
                      Mã vạch
                    </TableCell>
                    <TableCell className={classes.tableBorderHeader}>
                      Số lượng
                    </TableCell>
                    <TableCell
                      className={classes.tableBorderHeader}
                    ></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell className={classes.tableBorder}>
                      <TextFieldBooking
                        placeholder="Thông Tin"
                        labelRight="*"
                        style={{ width: "100%" }}
                      />
                    </TableCell>
                    <TableCell className={classes.tableBorder}></TableCell>
                    <TableCell className={classes.tableBorder}>
                      <TextFieldBooking
                        placeholder="Thông Tin"
                        style={{ width: "100%" }}
                      />
                    </TableCell>
                    <TableCell className={classes.tableBorder}>
                      <AppButton
                        styleSvgIcon={classes.containerButton}
                        title="Thêm"
                        icon={SaveIcon}
                        stroke="white"
                        fontSizeIcon="small"
                        onClick={() => toast.success("Lưu thành công")}
                      ></AppButton>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default InventoryCheck;
