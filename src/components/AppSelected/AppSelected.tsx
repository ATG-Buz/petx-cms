import { Box, FormControl, Grid, InputLabel, MenuItem, Select } from "@mui/material";

type typeProps = {
    fullWidth?: boolean;
    classFromControl?: string;
    labels?: string,
    styleLabels?: React.CSSProperties;
    labelRight?: string,
    styleLabelsRight?: React.CSSProperties;
}
const AppSelected = (props: typeProps) => {
    const { fullWidth, classFromControl, labels, styleLabels, labelRight, styleLabelsRight } = props;

    return (
        <FormControl fullWidth={fullWidth} className={classFromControl}>
            {labels && <span style={styleLabels}>{labels}<span style={{ display: labelRight ? 'inline' : 'none', color: 'red', marginLeft: '4px' }}>{labelRight}</span></span>}
            {/* <InputLabel id="demo-simple-select-label">Age</InputLabel> */}
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                // value={age}
                // label="Age"
            // onChange={handleChange}
            style={{backgroundColor: 'white', borderRadius: '8px'}}
            >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
            </Select>
        </FormControl>
    )
}
export default AppSelected