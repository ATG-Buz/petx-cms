import { Box } from "@mui/material";
import AppButton from "@/components/AppButton"
import useStyles from "./Info-treatment.styles"
import { dataSearchFake } from "./config";
import SearchApp from "../../components/AppSearch/AppSearch";
import TabsApp from "./components/tab";

const InfoTreatment = () => {
    const { classes } = useStyles();

    return (
        <Box className={classes.root}>
            <Box className={classes.Box}>
                <div className={classes.Row}>
                    <SearchApp data={dataSearchFake}/>
                    <AppButton
                        title="Thêm hồ sơ mới"
                    />
                </div>
                <div className={classes.Row2}>
                    <AppButton
                        title="Lưu"
                    />
                    <AppButton
                        title="In đơn thuốc"
                    />
                </div>
            </Box>
            <Box>
                <TabsApp />
            </Box>
        </Box>
    )
}
export default InfoTreatment;