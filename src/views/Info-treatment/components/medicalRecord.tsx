import { Checkbox, FormControlLabel, Grid } from "@mui/material";
import { makeStyles } from "tss-react/mui";
import TextFieldBooking from "@/components/TextFieldBooking";
import { AppSelected } from "@/components/AppSelected";
import SearchApp from "@/components/AppSearch/AppSearch";
import { AppDatePicker } from "@/components/AppDatePicker";
import { dataCheckedBox } from "@/services/storage/config";

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
            width: '100%',
            gap: '12px',
            alignItems: 'center',
            display: 'grid',
            gridTemplateColumns: "repeat(4,1fr)"
        },
        contentCheckBox: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-start',
            width: '100%',
            gap: '12px',
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
                    labels="Họ tên chủ vật nuôi"
                    labelRight="*"
                    style={{flex: 1}}
                />
                <TextFieldBooking
                    placeholder="Điện thoại"
                    labels="Điện thoại"
                    labelRight="*"
                    style={{flex: 1}}
                />
                <TextFieldBooking
                    placeholder="Địa chỉ"
                    labels="Địa chỉ"
                    labelRight="*"
                    style={{flex: 1}}
                />
            </Grid>
            <Grid item xs={12} className={classes.content}>
                <TextFieldBooking
                    placeholder="Tên vật nuôi và màu lông"
                    labels="Tên vật nuôi và màu lông"
                    labelRight="*"
                    style={{flex: 1}}
                />
                <TextFieldBooking
                    placeholder="Loại vật nuôi"
                    labels="Loại vật nuôi"
                    labelRight="*"
                    style={{flex: 1}}
                />
                <TextFieldBooking
                    placeholder="Trọng lượng (kg)"
                    labels="Trọng lượng (kg)"
                    labelRight="*"
                    style={{flex: 1}}
                />
                <AppSelected classFromControl={classes.fromControl} labels="Tuổi" labelRight="*"/>
            </Grid>
            <Grid item xs={12} className={classes.content}>
                <SearchApp data={[]} labels="Tìm Kiếm" fullWidth/>
                <TextFieldBooking
                    placeholder="Năm sinh"
                    labels="Năm sinh"
                    labelRight="*"
                    style={{flex: 1}}
                />
                <TextFieldBooking
                    placeholder="Chuẩn đoán"
                    labels="Chuẩn đoán"
                    labelRight="*"
                    style={{flex: 1}}
                />
            </Grid>
            <Grid item xs={12} className={classes.content}>
                <AppDatePicker  labels="Ngày tháng" fullWidth/>
                <TextFieldBooking
                    placeholder="Lời dặn"
                    labels="Lời dặn"
                    labelRight="*"
                />
            </Grid>
            <Grid item xs={12} className={classes.contentCheckBox}>
                {dataCheckedBox.map((item)=> (
                    <FormControlLabel key={item.id} control={<Checkbox defaultChecked />} label={item.label} />
                ))}
            </Grid>
        </Grid>
    )
}
export default MedicalRecord;