import React from "react";
import { Box, Grid, Checkbox, FormControlLabel } from "@mui/material";
import { AppText, AppText600 } from "@/components/AppText";
import useStyles from "./GenaralManagenent.styles";
import RoomPreferencesIcon from '@mui/icons-material/RoomPreferences';
import { AppSelected } from "@/components/AppSelected";
import { useTranslation } from "react-i18next";
import TextFieldBooking from "@/components/TextFieldBooking";
import ImageUploader from "@/components/ImageUploader";

const GeneralManagement = () => {
    const { classes, cx } = useStyles();
    const { t } = useTranslation();
    const handleImagesChange = (images: File[]) => {
        console.log("Selected images:", images);
    };

    return (
        <>
            <Box className={classes.root}>
                <Grid container className={classes.container}>
                    <Grid item xs={12} className={classes.contentLabel}>
                        <RoomPreferencesIcon />
                        <AppText600>Cài đặt chung</AppText600>
                    </Grid>
                    <Grid container className={classes.containerTable}>
                        <Grid item xs={12}>
                            <AppText>Tái khám</AppText>
                            <AppSelected
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={3}>
                            <AppText>Logo</AppText>

                            {/* <Image /> */}
                        </Grid>
                        <Grid container>
                            <ImageUploader onImagesChange={handleImagesChange} />
                        </Grid>
                        <Grid item xs={12}>
                            <FormControlLabel control={<Checkbox />} label={`${t('Cho phép ra toa thuốc khi hết hàng')}`} className={classes.textCheckBox} />
                        </Grid>
                        <Grid item xs={12}>
                            <FormControlLabel control={<Checkbox />} label={`${t('Cập nhật lại giá khi nhập hàng giá nhập thay đổi')}`} className={classes.textCheckBox} />
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
            <Box className={classes.root}>
                <Grid container className={classes.container}>
                    <Grid item xs={12} className={classes.contentLabel}>
                        <RoomPreferencesIcon />
                        <AppText600>Cài đặt tin nhắn</AppText600>
                    </Grid>
                    <Grid container className={classes.containerTable} spacing={2} alignItems={"center"}>
                        <Grid item xs={2}>
                            <AppText>Kích hoạt gửi tin nhắn:</AppText>
                        </Grid>
                        <Grid item xs={10} justifyContent={"space-between"} display={"flex"}>
                            <FormControlLabel control={<Checkbox />} label={`${t('Điều trị')}`} className={classes.textCheckBox} />
                            <FormControlLabel control={<Checkbox />} label={`${t('Bán hàng')}`} className={classes.textCheckBox} />
                            <FormControlLabel control={<Checkbox />} label={`${t('Nhắc tái khám')}`} className={classes.textCheckBox} />
                        </Grid>
                        <Grid item xs={2}>
                            <AppText>Nội dung tin nhắn : </AppText>
                        </Grid>
                        <Grid item xs={10}>
                            <TextFieldBooking
                                // placeholder="Địa chỉ"
                                style={{ width: '100%' }}
                            />
                        </Grid>
                        <Grid item xs={2}>
                            <AppText>Gửi tin sau : </AppText>
                        </Grid>
                        <Grid item xs={10} alignItems={"center"} display={"flex"} gap={1}>
                            <TextFieldBooking
                                // placeholder="Địa chỉ"
                                style={{ width: '30%' }}
                            />
                            <AppText>
                                {t('phút')}
                            </AppText>
                        </Grid>

                        <Grid item xs={2}>
                            <AppText>Nội dung tin nhắn nhắc khám: </AppText>
                        </Grid>
                        <Grid item xs={10}>
                            <TextFieldBooking
                                // placeholder="Địa chỉ"
                                style={{ width: '100%' }}
                            />
                        </Grid>

                        <Grid item xs={2}>
                            <AppText>Gửi tin nhắn nhắc tái khám trước: </AppText>
                        </Grid>
                        <Grid item xs={10} alignItems={"center"} display={"flex"} gap={1}>
                            <TextFieldBooking
                                // placeholder="Địa chỉ"
                                style={{ width: '50%' }}
                            />
                            <AppText>
                                {t('ngày')}
                            </AppText>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
};

export default GeneralManagement;