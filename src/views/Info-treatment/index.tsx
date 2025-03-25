import { Box } from "@mui/material";
import AppButton from "@/components/AppButton"
import useStyles from "./Info-treatment.styles"

const InfoTreatment = () => {
    const { classes } = useStyles();

    return (
        <Box>
            <Box className={classes.Box}>
                <div className={classes.Row}>
                    <AppButton
                        title="Tìm kiếm"
                        styleSvgIcon={classes.styleSvgIcon}
                    />
                    <AppButton
                        title="Thêm hồ sơ mới"
                    />
                </div>
                <div className={classes.Row}>
                    <AppButton
                        title="Lưu"
                    />
                    <AppButton
                        title="In đơn thuốc"
                    />
                </div>
            </Box>
            <Box>

            </Box>
        </Box>
    )
}
export default InfoTreatment;