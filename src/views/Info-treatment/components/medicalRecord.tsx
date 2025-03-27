import { Box, Checkbox, FormControl, FormControlLabel, Grid, InputLabel, MenuItem, Select } from "@mui/material";
import AppButton from "@/components/AppButton"
import { makeStyles } from "tss-react/mui";
import TextFieldBooking from "@/components/TextFieldBooking";
import { AppSelected } from "@/components/AppSelected";
import SearchApp from "./searchApp";
import { AppDatePicker } from "@/components/AppDatePicker";
import { dataCheckedBox } from "../config";

const useStyles = makeStyles({
    name: "medicalRecord",
})(theme => {
    return {
        root: {
            width: '100%',
            display: 'flex',
            gap: '12px',
        },
        content: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '100%',
            gap: '12px'
        },
        fromControl: {
            flex: 1,
        }
    }
});

const MedicalRecord = () => {
    const { classes } = useStyles();

    return (
        <Grid container className={classes.root}>
            <Grid item xs={12} className={classes.content}>
                <TextFieldBooking
                    placeholder="Họ tên chủ vật nuôi"
                    label="Họ tên chủ vật nuôi"
                    style={{flex: 1}}
                />
                <TextFieldBooking
                    placeholder="Điện thoại"
                    label="Điện thoại"
                    style={{flex: 1}}
                />
                <TextFieldBooking
                    placeholder="Địa chỉ"
                    label="Địa chỉ"
                    style={{flex: 1}}
                />
            </Grid>
            <Grid item xs={12} className={classes.content}>
                <TextFieldBooking
                    placeholder="Tên vật nuôi và màu lông"
                    label="Tên vật nuôi và màu lông"
                    style={{flex: 1}}
                />
                <TextFieldBooking
                    placeholder="Loại vật nuôi"
                    label="Loại vật nuôi"
                    style={{flex: 1}}
                />
                <TextFieldBooking
                    placeholder="Trọng lượng(kg)"
                    label="Trọng lượng(kg)"
                    style={{flex: 1}}
                />
                <AppSelected classFromControl={classes.fromControl}/>
            </Grid>
            <Grid item xs={12} className={classes.content}>
                <SearchApp data={[]}/>
                <TextFieldBooking
                    placeholder="Năm sinh"
                    label="Năm sinh"
                    style={{flex: 1}}
                />
                <TextFieldBooking
                    placeholder="Chuẩn đoán"
                    label="Chuẩn đoán"
                    style={{flex: 1}}
                />
            </Grid>
            <Grid item xs={12} className={classes.content}>
                <AppDatePicker />
                <TextFieldBooking
                    placeholder="Lời dặn"
                    label="Lời dặn"
                    style={{flex: 1}}
                />
            </Grid>
            <Grid item xs={12} className={classes.content}>
                {dataCheckedBox.map((item)=> (
                    <FormControlLabel key={item.id} control={<Checkbox defaultChecked />} label={item.label} />
                ))}
            </Grid>
        </Grid>
    )
}
export default MedicalRecord;