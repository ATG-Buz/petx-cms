import React, { useState } from "react";
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
import { AppText600 } from "@/components/AppText";
import useStyles from "./Delivery.styles";
import AppButton from "@/components/AppButton";
import AddIcon from "@mui/icons-material/Add";
import SaveIcon from "@mui/icons-material/Save";
import PrintIcon from "@mui/icons-material/Print";
import { AppSelected } from "@/components/AppSelected";
import { toast } from "react-toastify";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";

const Delivery = () => {
  const { classes } = useStyles();
  const [products, setProducts] = useState([]);

  const handleSave = () => {
    toast.success("Lưu thành công");
  };

  const handlePrint = () => {
    toast.success("In hóa đơn thành công");
  };

  const handleAdd = () => {
    toast.success("Thêm sản phẩm thành công");
  };

  return (
    <Box className={classes.root}>
      <Grid container className={classes.container}>
        <Grid item xs={12} className={classes.contentLabel}>
          <LocalShippingIcon />
          <AppText600>Giao hàng</AppText600>
        </Grid>

        <Grid container className={classes.containerContent} spacing={2}>
          {/* Customer Information Row */}
          <Grid item container xs={12} spacing={2}>
            <Grid item xs={2}>
              <AppSelected labels="Xuất từ:" labelRight="*" fullWidth />
            </Grid>
            <Grid item xs={2}>
              <AppSelected labels="Đến:" labelRight="*" fullWidth />
            </Grid>
            <Grid item xs={2}>
              <AppSelected labels="Xuất theo:" labelRight="*" fullWidth />
            </Grid>
            <Grid item xs={2}>
              <TextFieldBooking
                placeholder="Điện thoại"
                labels="Điện thoại:"
                labelRight="*"
                style={{ width: "100%" }}
              />
            </Grid>
            <Grid item xs={2}>
              <TextFieldBooking
                placeholder="Quét mã vạch"
                labels="Mã vạch:"
                style={{ width: "100%" }}
              />
            </Grid>
            <Grid item xs={1} className={classes.buttonWrapper}>
              <AppButton
                styleSvgIcon={classes.containerButton}
                title="Lưu"
                icon={SaveIcon}
                stroke="white"
                fontSizeIcon="small"
                onClick={handleSave}
              />
            </Grid>
            <Grid item xs={1} className={classes.buttonWrapper}>
              <AppButton
                styleSvgIcon={classes.containerButton}
                title="In HĐ"
                icon={PrintIcon}
                stroke="white"
                fontSizeIcon="small"
                onClick={handlePrint}
              />
            </Grid>
          </Grid>

          {/* Products Table */}
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
                        labelDisabled={true}
                      />
                    </TableCell>
                    <TableCell className={classes.tableBorder}>
                      <AppButton
                        styleSvgIcon={classes.containerButton}
                        title="Thêm"
                        icon={AddIcon}
                        stroke="white"
                        fontSizeIcon="small"
                        onClick={handleAdd}
                      />
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>

          {/* Bottom Section */}
          <Grid item container xs={12} spacing={2}>
            <Grid item xs={3}>
              <TextFieldBooking
                placeholder="Tổng tiền"
                labels="Tổng tiền:"
                type="number"
                style={{ width: "100%" }}
                labelDisabled={true}
              />
            </Grid>
            <Grid item xs={3}>
              <TextFieldBooking
                placeholder="Lý do chiết khấu"
                labels="Lý do chiết khấu:"
                style={{ width: "100%" }}
              />
            </Grid>
            <Grid item xs={2}>
              <TextFieldBooking
                placeholder="Chiết khấu"
                labels="Chiết khấu:"
                type="number"
                style={{ width: "100%" }}
              />
            </Grid>
            <Grid item xs={2}>
              <TextFieldBooking
                placeholder="%"
                labels="%"
                type="number"
                style={{ width: "100%" }}
              />
            </Grid>
            <Grid item xs={2}>
              <TextFieldBooking
                placeholder="(A/B)"
                labels="(A/B)"
                type="number"
                style={{ width: "100%" }}
              />
            </Grid>
          </Grid>

          <Grid item container xs={12} spacing={2}>
            <Grid item xs={3}>
              <TextFieldBooking
                placeholder="Tiền phải thanh toán"
                labels="Tiền phải thanh toán:"
                type="number"
                style={{ width: "100%" }}
                labelDisabled={true}
              />
            </Grid>
            <Grid item xs={3}>
              <TextFieldBooking
                placeholder="Đã thanh toán"
                labels="Đã thanh toán:"
                type="number"
                style={{ width: "100%" }}
              />
            </Grid>
            <Grid item xs={3}>
              <AppSelected labels="Tiền mặt:" labelRight="*" fullWidth />
            </Grid>
            <Grid item xs={3}>
              <TextFieldBooking
                placeholder="Còn lại"
                labels="Còn lại:"
                type="number"
                style={{ width: "100%" }}
                labelDisabled={true}
              />
            </Grid>
            <Grid item xs={8}>
              <TextFieldBooking
                placeholder="Ghi chú"
                labels="Ghi chú:"
                multiline
                rows={2}
                style={{ width: "100%" }}
              />
            </Grid>
          </Grid>

          <Grid item container xs={12} spacing={2}></Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Delivery;
