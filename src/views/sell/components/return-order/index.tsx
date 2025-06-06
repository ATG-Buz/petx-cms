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
import { AppText600 } from "@/components/AppText";
import useStyles from "./ReturnOrder.styles";
import AppButton from "@/components/AppButton";
import RoomPreferencesIcon from "@mui/icons-material/RoomPreferences";
import SaveIcon from "@mui/icons-material/Save";
import PrintIcon from "@mui/icons-material/Print";
import AddIcon from "@mui/icons-material/Add";
import { AppSelected } from "@/components/AppSelected";
import { toast } from "react-toastify";

const ReturnOrder = () => {
  const { classes } = useStyles();

  const handleSave = () => {
    toast.success("Lưu thành công");
  };

  const handlePrint = () => {
    toast.success("In hóa đơn thành công");
  };

  const handleAdd = () => {
    toast.success("Thêm thành công");
  };

  return (
    <Box className={classes.root}>
      <Grid container className={classes.container}>
        <Grid item xs={12} className={classes.contentLabel}>
          <RoomPreferencesIcon />
          <AppText600>Trả hàng</AppText600>
        </Grid>

        <Grid container className={classes.containerContent} spacing={2}>
          {/* Customer Information and Action Buttons */}
          <Grid item container xs={12} spacing={2}>
            <Grid item xs={2}>
              <TextFieldBooking
                placeholder="Tên khách hàng"
                labels="Tên khách hàng:"
                labelRight="*"
                style={{ width: "100%" }}
              />
            </Grid>
            <Grid item xs={2}>
              <TextFieldBooking
                placeholder="Điện thoại"
                labels="Điện thoại:"
                labelRight="*"
                style={{ width: "100%" }}
              />
            </Grid>
            <Grid item xs={3}>
              <TextFieldBooking
                placeholder="Mã vạch"
                labels="Mã vạch:"
                labelRight="*"
                style={{ width: "100%" }}
              />
            </Grid>
            <Grid item xs={3}>
              <TextFieldBooking
                placeholder="Lý do"
                labels="Lý do:"
                labelRight="*"
                style={{ width: "100%" }}
              />
            </Grid>
            <Grid item xs={2} container spacing={1}>
              <Grid item xs={6}>
                <AppButton
                  styleSvgIcon={classes.containerButton}
                  title="Lưu"
                  icon={SaveIcon}
                  stroke="white"
                  fontSizeIcon="small"
                  onClick={handleSave}
                />
              </Grid>
              <Grid item xs={6}>
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
                        style={{ width: "100%" }}
                      />
                    </TableCell>
                    <TableCell className={classes.tableBorder}>
                      <TextFieldBooking
                        placeholder="Số lượng"
                        style={{ width: "100%" }}
                      />
                    </TableCell>
                    <TableCell className={classes.tableBorder}>
                      <TextFieldBooking
                        placeholder="Thành tiền"
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

          {/* Total Amount and Payment Method */}
          <Grid item container xs={12} spacing={2}>
            <Grid item xs={6}>
              <TextFieldBooking
                placeholder="Tổng tiền"
                labels="Tổng tiền:"
                labelRight="*"
                style={{ width: "100%" }}
                labelDisabled={true}
              />
            </Grid>
            <Grid item xs={6}>
              <AppText600>Hình thức thanh toán</AppText600>
              <AppSelected fullWidth labelRight="*" />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ReturnOrder;
