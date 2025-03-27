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
}
export const SearchApp = (props: propsType) => {
    const {data} = props

  return (
    <Stack spacing={2} sx={{ width: 300 }}>
      <Autocomplete
        freeSolo
        id="search-app"
        disableClearable
        options={data.map((option) => option.title)}
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