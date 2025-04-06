import { Grid } from "@mui/material";
import { makeStyles } from "tss-react/mui";
import TextFieldBooking from "@/components/TextFieldBooking";
import { AppSelected } from "@/components/AppSelected";

const useStyles = makeStyles({
    name: "payment",
})(theme => {
    return {
        root: {
            width: '100%',
            gap: '12px',
            alignItems: 'center',
            // display: 'grid',
            // gridTemplateColumns: "repeat(3,1fr)"
        },
        content: {
            width: '100%',
            gap: '12px',
            alignItems: 'center',
            display: 'grid',
            gridTemplateColumns: "repeat(2,1fr)"
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

const Payment = () => {
    const { classes } = useStyles();

    return (
        <Grid container className={classes.root}>
            <Grid item xs={2} />
            <Grid item xs={8}>
                <Grid item xs={12} className={classes.content}>
                    <TextFieldBooking
                        placeholder="Tổng tiền thuốc"
                        labels="Tổng tiền thuốc"
                        labelRight="*"
                        style={{ flex: 1 }}
                    />
                </Grid>
                <Grid item xs={12} className={classes.content}>
                    <TextFieldBooking
                        placeholder="Tiền công"
                        labels="Tiền công"
                        labelRight="*"
                        style={{ flex: 1 }}
                    />
                </Grid>
                <Grid item xs={12} className={classes.content}>
                    <TextFieldBooking
                        placeholder="Tổng cộng"
                        labels="Tổng cộng"
                        labelRight="*"
                        style={{ flex: 1 }}
                    />
                </Grid>
                <Grid item xs={12} className={classes.content}>
                    <TextFieldBooking
                        placeholder="Chiết khấu"
                        labels="Chiết khấu"
                        labelRight="*"
                    />
                    <TextFieldBooking
                        placeholder="(%)"
                        labels="(%)"
                        labelRight="*"
                    />
                </Grid>
                <Grid item xs={12} className={classes.content}>
                    <TextFieldBooking
                        placeholder="Lý do chiết khấu"
                        labels="Lý do chiết khấu"
                        labelRight="*"
                    />
                </Grid>
                <Grid item xs={12} className={classes.content}>
                    <TextFieldBooking
                        placeholder="Tiền phải thanh toán"
                        labels="Tiền phải thanh toán"
                        labelRight="*"
                    />
                </Grid>
                <Grid item xs={12} className={classes.content}>
                    <TextFieldBooking
                        placeholder="Đã trả"
                        labels="Đã trả"
                        labelRight="*"
                    />
                    <AppSelected
                        labels="Hình thức thanh toán"
                        labelRight="*"
                    />
                </Grid>
                <Grid item xs={12} className={classes.content}>
                    <TextFieldBooking
                        placeholder="Còn lại"
                        labels="Còn lại"
                        labelRight="*"
                    />
                </Grid>
            </Grid>
            <Grid item xs={2} />
        </Grid>
    )
}
export default Payment;