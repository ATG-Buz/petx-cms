import AppButton from "@/components/AppButton";
import { AppText600 } from "@/components/AppText";
import TextFieldBooking from "@/components/TextFieldBooking";
import { tableData } from "@/services/storage/config";
import { Box, Grid, TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody } from "@mui/material";
import useStyles from './Listing.styles'
import SettingsIcon from '@mui/icons-material/Settings';
import { toast } from "react-toastify";
import SaveIcon from '@mui/icons-material/Save';

const Listing = () => {
    const {classes, cx} = useStyles();
    const handleClickSave = () => {
        toast.success('Lưu thành công')
    }
return (
    <Box className={classes.root}>
        <Grid container className={classes.container}>
            <Grid item xs={12} className={classes.contentLabel}>
                <SettingsIcon />
                <AppText600>Định lượng thuốc</AppText600>
            </Grid>

            <Grid item xs={12} className={classes.content}>
                    <AppText600>Tên hàng</AppText600>
            </Grid>
            <Grid item xs={12} className={classes.content}>
                <TextFieldBooking
                    placeholder="Tên hàng"
                    style={{ width: '100%' }}
                />
                <AppButton
                    title="Tìm kiếm"
                    onClick={() => handleClickSave()}
                ></AppButton>
                <AppButton
                    title="Xuất excel"
                    onClick={() => handleClickSave()}
                ></AppButton>
            </Grid>
            {/* Table */}
            <Grid item xs={12} className={classes.containerTable}>
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell className={classes.tableBorderHeader}>Tên hàng</TableCell>
                                <TableCell className={classes.tableBorderHeader}>Mã hàng</TableCell>
                                <TableCell className={classes.tableBorderHeader}>Đon vị tính</TableCell>
                                <TableCell className={classes.tableBorderHeader}>Cách dùng</TableCell>
                                <TableCell className={classes.tableBorderHeader}>Giá vốn</TableCell>
                                <TableCell className={classes.tableBorderHeader}>Giá bán</TableCell>
                                <TableCell className={classes.tableBorderHeader}>Vạt</TableCell>
                                <TableCell className={classes.tableBorderHeader}>Loại hàng hoá</TableCell>
                                <TableCell className={classes.tableBorderHeader}>Quy cách đóng gói</TableCell>
                                <TableCell className={classes.tableBorderHeader}>Mã vạch</TableCell>
                                <TableCell className={classes.tableBorderHeader}></TableCell>
                                <TableCell className={classes.tableBorderHeader}></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {tableData.map((row, index) => (
                                <TableRow key={row.id}>
                                    <TableCell className={classes.tableBorder}>
                                        <TextFieldBooking
                                            placeholder="Tên hàng"
                                            style={{ width: '100%' }}
                                            labelDisabled
                                        />
                                    </TableCell>
                                    <TableCell className={classes.tableBorder}>
                                        <TextFieldBooking
                                            placeholder="Mã hàng"
                                            style={{ width: '100%' }}
                                            labelDisabled
                                        />
                                    </TableCell>
                                    <TableCell className={classes.tableBorder}>
                                        <TextFieldBooking
                                            placeholder="Đơn vị tính"
                                            style={{ width: '100%' }}
                                        />
                                    </TableCell>
                                    <TableCell className={classes.tableBorder}>
                                        <TextFieldBooking
                                            placeholder="Cách dùng"
                                            style={{ width: '100%' }}
                                        />
                                    </TableCell>
                                    <TableCell className={classes.tableBorder}>
                                        <TextFieldBooking
                                            placeholder="Giá vốn"
                                            style={{ width: '100%' }}
                                        />
                                    </TableCell>
                                    <TableCell className={classes.tableBorder}>
                                        <TextFieldBooking
                                            placeholder="Giá bán"
                                            style={{ width: '100%' }}
                                        />
                                    </TableCell>
                                    <TableCell className={classes.tableBorder}>
                                        <TextFieldBooking
                                            placeholder="Vạt"
                                            style={{ width: '100%' }}
                                        />
                                    </TableCell>
                                    <TableCell className={classes.tableBorder}>
                                        <TextFieldBooking
                                            placeholder="Loại hàng hoá"
                                            style={{ width: '100%' }}
                                        />
                                    </TableCell>
                                    <TableCell className={classes.tableBorder}>
                                        <TextFieldBooking
                                            placeholder="Quy cách đóng gói"
                                            style={{ width: '100%' }}
                                        />
                                    </TableCell>
                                    <TableCell className={classes.tableBorder}>
                                        <TextFieldBooking
                                            placeholder="Mã vạch"
                                            style={{ width: '100%' }}
                                        />
                                    </TableCell>
                                    <TableCell
                                        className={cx(classes.tableBorder, classes.containerCellButton)}
                                        colSpan={2}
                                    >
                                        <AppButton
                                            styleSvgIcon={classes.containerButton}
                                            title="Lưu"
                                            stroke="white"
                                            fontSizeIcon="small"
                                            onClick={() => handleClickSave()}
                                        ></AppButton>
                                        <AppButton
                                            styleSvgIcon={classes.containerButton}
                                            title="Xoá"
                                            stroke="white"
                                            fontSizeIcon="small"
                                            onClick={() => handleClickSave()}
                                        ></AppButton>
                                    </TableCell>
                                    <TableCell className={classes.tableBorder}>
                                        <AppButton
                                            styleSvgIcon={classes.containerButton}
                                            title="+"
                                            stroke="white"
                                            fontSizeIcon="small"
                                            onClick={() => handleClickSave()}
                                        ></AppButton>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Grid>
        </Grid>
    </Box>
)
}
export default Listing;