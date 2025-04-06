import * as React from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';

type DataSearchType = {
    title: string,
    value: string
}
type propsType = {
    data: DataSearchType[];
    labels?: string,
    styleLabels?: React.CSSProperties;
    labelRight?: string,
    fullWidth?: boolean;
}
const SearchApp = (props: propsType) => {
    const {data, labels, styleLabels, labelRight, fullWidth} = props

  return (
    <Stack spacing={2} sx={{ width: fullWidth?  '100%': '50%' }}>
      {labels && <span style={styleLabels}>{labels}<span style={{ display: labelRight ? 'inline' : 'none', color: 'red', marginLeft: '4px' }}>.{labelRight}</span></span>}
      <Autocomplete
        freeSolo
        id="search-app"
        disableClearable
        options={data.map((option) => option.title)}
        sx={{marginTop: '0px !important'}}
        style={{backgroundColor: 'white', borderRadius: '8px'}}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Tìm kiếm"
            InputProps={{
              ...params.InputProps,
              type: 'search',
            }}
          />
        )}
      />
    </Stack>
  );
}
export default SearchApp;