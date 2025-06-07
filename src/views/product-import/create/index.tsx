import React from "react";
import {
  Box,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import TextFieldBooking from "@/components/TextFieldBooking";
import AppButton from "@/components/AppButton";
import { AppSelected } from "@/components/AppSelected";
import InventoryIcon from "@mui/icons-material/Inventory";
import { AppText600 } from "@/components/AppText";
import AddIcon from "@mui/icons-material/Add";
import SaveIcon from "@mui/icons-material/Save";
import PrintIcon from "@mui/icons-material/Print";
import useStyles from "./styles";

const ProductImportCreate = () => {
  const { classes } = useStyles();

  const handleAdd = () => {
    // Implement add logic
  };

  return (
    <Box className={classes.root}>
      <Grid container className={classes.container}>
        <Grid item xs={12} className={classes.contentLabel}>
          <InventoryIcon />
          <AppText600>Nhập hàng hóa mới</AppText600>
        </Grid>

        <Grid item xs={12} className={classes.containerBody}>
          <Grid container spacing={2} className={classes.filterSection}>
            <Grid item xs={4}>
              <AppSelected labels="Nhà cung cấp" fullWidth />
            </Grid>
            <Grid item xs={4}>
              <TextFieldBooking
                labels="Ghi chú"
                fullWidth
                placeholder="Nhập ghi chú"
              />
            </Grid>
            <Grid item xs={4} className={classes.buttonContainer}>
              <AppButton title="Lưu" onClick={() => {}} icon={SaveIcon} />
              <AppButton title="In" onClick={() => {}} icon={PrintIcon} />
            </Grid>
          </Grid>

          <Grid container className={classes.containerContent}>
            <Grid item xs={12}>
              <TableContainer component={Paper}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell className={classes.tableBorderHeader}>
                        Tên hàng
                      </TableCell>
                      <TableCell className={classes.tableBorderHeader}>
                        Đơn vị tính
                      </TableCell>
                      <TableCell className={classes.tableBorderHeader}>
                        Giá vốn
                      </TableCell>
                      <TableCell className={classes.tableBorderHeader}>
                        Giá bán
                      </TableCell>
                      <TableCell className={classes.tableBorderHeader}>
                        Số lượng
                      </TableCell>
                      <TableCell className={classes.tableBorderHeader}>
                        Hạn sử dụng
                      </TableCell>
                      <TableCell className={classes.tableBorderHeader}>
                        Thành tiền
                      </TableCell>
                      <TableCell className={classes.tableBorderHeader}>
                        Hiện tồn
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
                          placeholder="Tên hàng"
                          style={{ width: "100%" }}
                        />
                      </TableCell>
                      <TableCell className={classes.tableBorder}>
                        <TextFieldBooking
                          placeholder="Đơn vị tính"
                          style={{ width: "100%" }}
                        />
                      </TableCell>
                      <TableCell className={classes.tableBorder}>
                        <TextFieldBooking
                          placeholder="Giá vốn"
                          type="number"
                          style={{ width: "100%" }}
                        />
                      </TableCell>
                      <TableCell className={classes.tableBorder}>
                        <TextFieldBooking
                          placeholder="Giá bán"
                          type="number"
                          style={{ width: "100%" }}
                        />
                      </TableCell>
                      <TableCell className={classes.tableBorder}>
                        <TextFieldBooking
                          placeholder="Số lượng"
                          type="number"
                          style={{ width: "100%" }}
                        />
                      </TableCell>
                      <TableCell className={classes.tableBorder}>
                        <TextFieldBooking
                          placeholder="Hạn sử dụng"
                          type="date"
                          style={{ width: "100%" }}
                        />
                      </TableCell>
                      <TableCell className={classes.tableBorder}>
                        <TextFieldBooking
                          placeholder="Thành tiền"
                          type="number"
                          style={{ width: "100%" }}
                          disabled
                        />
                      </TableCell>
                      <TableCell className={classes.tableBorder}>
                        <TextFieldBooking
                          placeholder="Hiện tồn"
                          type="number"
                          style={{ width: "100%" }}
                          disabled
                        />
                      </TableCell>
                      <TableCell className={classes.tableBorder}>
                        <AppButton
                          title="Thêm"
                          icon={AddIcon}
                          onClick={handleAdd}
                        />
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
          </Grid>

          <Grid container className={classes.summarySection}>
            <Grid item xs={6}></Grid>
            <Grid item xs={6}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextFieldBooking
                    labels="Tổng tiền"
                    fullWidth
                    type="number"
                    disabled
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextFieldBooking
                    labels="VAT (%)"
                    fullWidth
                    type="number"
                    placeholder="Nhập VAT"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextFieldBooking
                    labels="Chiết khấu"
                    fullWidth
                    type="number"
                    placeholder="Nhập chiết khấu"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextFieldBooking
                    labels="Tổng tiền phải thanh toán"
                    fullWidth
                    type="number"
                    disabled
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextFieldBooking
                    labels="Đã thanh toán"
                    fullWidth
                    type="number"
                    placeholder="Nhập số tiền đã thanh toán"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextFieldBooking
                    labels="Còn lại"
                    fullWidth
                    type="number"
                    disabled
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProductImportCreate;
