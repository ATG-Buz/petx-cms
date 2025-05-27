import React from "react";
import { Box, Grid, Checkbox, FormControlLabel } from "@mui/material";
import { AppText, AppText600 } from "@/components/AppText";
import useStyles from "./GenaralManagenent.styles";
import RoomPreferencesIcon from '@mui/icons-material/RoomPreferences';
import { AppSelected } from "@/components/AppSelected";
import { useTranslation } from "react-i18next";

const GeneralManagement = () => {
    const { classes, cx } = useStyles();
    const { t } = useTranslation();
    
    return (
        <Box className={classes.root}>
            <Grid container className={classes.container}>
                <Grid item xs={12} className={classes.contentLabel}>
                    <RoomPreferencesIcon />
                    <AppText600>Cài đặt chung</AppText600>
                </Grid>
                <Grid item xs={12} className={classes.containerTable}>
                    <Grid item xs={12}>
                        <AppText>Tái khám</AppText>
                        <AppSelected 
                        fullWidth
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <AppText>Logo</AppText>
                        {/* <Image /> */}
                    </Grid>
                    <Grid item xs={12}>
                        <FormControlLabel control={<Checkbox />} label={`${t('Cho phép ra toa thuốc khi hết hàng')}`} className={classes.textCheckBox} />
                        <FormControlLabel control={<Checkbox />} label={`${t('Cập nhật lại giá khi nhập hàng giá nhập thay đổi')}`} className={classes.textCheckBox} />
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );
};

export default GeneralManagement;