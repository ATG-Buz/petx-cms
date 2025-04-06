import { Box, Grid } from "@mui/material";
import { makeStyles } from "tss-react/mui";
import TextFieldBooking from "@/components/TextFieldBooking";
import SearchApp from "../../../components/AppSearch/AppSearch";
import AddIcon from '@mui/icons-material/Add';
import { AppText600 } from "@/components/AppText";
import { useState } from "react";
import RemoveIcon from '@mui/icons-material/Remove';
import ImageUploader from "@/components/ImageUploader";

const useStyles = makeStyles({
    name: "medicalRecord",
})(theme => {
    return {
        root: {
            width: '100%',
            display: 'flex',
            gap: '12px',
        },
        contentSearch: {
            width: 'auto',
            height: 'auto',
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center',
            gap: '12px',
        },
        content: {
            width: '100%',
            gap: '12px',
            alignItems: 'center',
            justifyContent: 'space-between',
            display: 'grid',
            gridTemplateColumns: "repeat(4,1fr)"
        },
        contentAdd: {
            width: 'auto',
            height: 'auto',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: '8px',
            cursor: 'pointer',
            '& svg': {
                color: theme.palette.common.orange,
                fontSize: '20px'
            }
        },
        contentInput: {
            marginBottom: '12px',
        },
        contentNote: {
            width: '100%',
            height: 'auto',
            display: 'flex',
            flex: 1,
        },
    }
});

const Prescription = () => {
    const { classes } = useStyles();
    const [dataColumn, setDataColumn] = useState<Array<{
        name: string;
        unit: string;
        quantity: string;
        note: string;
    }>>([{ name: '', unit: '', quantity: '', note: '' }]);

    const handleAddColumn = () => {
        setDataColumn([...dataColumn, { name: '', unit: '', quantity: '', note: '' }]);
    };
    const handleRemoveColumn = (index: number) => {
        const newDataColumn = [...dataColumn];
        newDataColumn.splice(index, 1);
        setDataColumn(newDataColumn);
    };
    const handleImagesChange = (images: File[]) => {
        console.log("Selected images:", images);
    };

    return (
        <Grid container className={classes.root}>
            <Grid item xs={12} className={classes.contentSearch}>
                <AppText600>Toa tự động: </AppText600>
                <SearchApp data={[]} />
            </Grid>
            <Grid container>
                <Grid item xs={11} className={classes.content}>
                    <AppText600>Tên thuốc</AppText600>
                    <AppText600>Đơn vị tính</AppText600>
                    <AppText600>Số lượng</AppText600>
                    <AppText600>Ghi chú ( Đường cấp ,Thời điểm , Liều lượng )</AppText600>
                </Grid>
                <Grid item xs={1} className={classes.contentAdd}>
                </Grid>
            </Grid>
            <Grid container>
                {dataColumn.map((item, index) => (
                    <Grid container key={index} className={classes.contentInput}>
                        <Grid item xs={11.5} className={classes.content}>
                            <TextFieldBooking
                                fullWidth
                                placeholder="Tên thuốc"
                                onClick={() => handleRemoveColumn(index)}
                            />
                            <TextFieldBooking
                                fullWidth
                                placeholder="Đơn vị tính"
                            />
                            <TextFieldBooking
                                fullWidth
                                placeholder="Số lượng"
                            />
                            <TextFieldBooking
                                fullWidth
                                placeholder="Ghi chú ( Đường cấp ,Thời điểm , Liều lượng )"
                            />
                        </Grid>
                        {index === dataColumn.length - 1 ? (
                            <Grid item xs={0.5} className={classes.contentAdd} onClick={handleAddColumn}>
                                <AddIcon />
                            </Grid>
                        ) : (
                            <Grid item xs={0.5} className={classes.contentAdd} onClick={() => handleRemoveColumn(index)}>
                                <RemoveIcon />
                            </Grid>
                        )}
                    </Grid>
                ))}
            </Grid>
            <Grid container className={classes.contentNote}>
                <TextFieldBooking
                    fullWidth
                    placeholder="Ghi chú"
                    style={{ flex: 1 }}
                />
            </Grid>
            <Grid container spacing={2}>
                <ImageUploader onImagesChange={handleImagesChange} />
            </Grid>
        </Grid>
    )
}
export default Prescription;