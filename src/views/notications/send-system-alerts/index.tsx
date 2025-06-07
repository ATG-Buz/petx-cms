import React from "react";
import { Box, Grid } from "@mui/material";
import { AppText600 } from "@/components/AppText";
import useStyles from "./send-system-alerts.styles";
import AppButton from "@/components/AppButton";
import InventoryIcon from "@mui/icons-material/Inventory";
import { toast } from "react-toastify";
import TextFieldBooking from "@/components/TextFieldBooking";
import SaveIcon from "@mui/icons-material/Save";

const SendSystemAlerts = () => {
  const { classes } = useStyles();

  const handleSend = () => {
    toast.success("Gửi thông báo thành công");
  };

  return (
    <Box className={classes.root}>
      <Grid container className={classes.container}>
        <Grid item xs={12} className={classes.contentLabel}>
          <InventoryIcon />
          <AppText600>Gửi thông báo hệ thống</AppText600>
        </Grid>

        <Grid item xs={12} className={classes.containerBody}>
          <Grid container className={classes.containerContent} spacing={2}>
            <Grid item xs={12}>
              <TextFieldBooking
                placeholder="Nội dung"
                style={{ width: "100%" }}
                multiline
                rows={4}
                labels="Nội dung"
              />
            </Grid>
            <Grid container display="flex" justifyContent="flex-end">
              <Grid item xs={2}>
                <AppButton
                  title="Gửi"
                  icon={SaveIcon}
                  styleSvgIcon={classes.containerButton}
                  onClick={handleSend}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SendSystemAlerts;
