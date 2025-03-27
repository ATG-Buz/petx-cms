import { Box, FormControl, Grid, InputLabel, MenuItem, Select } from "@mui/material";

type typeProps = {
    fullWidth?: boolean;
    classFromControl?: string
}
const AppSelected = (props: typeProps) => {
    const {fullWidth, classFromControl} =  props;

    return (
        <FormControl fullWidth={fullWidth} className={classFromControl}>
            <InputLabel id="demo-simple-select-label">Age</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                // value={age}
                label="Age"
            // onChange={handleChange}
            >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
            </Select>
        </FormControl>
    )
}
export default AppSelected