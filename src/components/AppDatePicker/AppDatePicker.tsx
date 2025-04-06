import * as React from 'react';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Box, TextField } from '@mui/material';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';

type typeProps = {
  fullWidth?: boolean;
  labels?: string,
  styleLabels?: React.CSSProperties;
  labelRight?: string,
  styleLabelsRight?: React.CSSProperties;
}

const BasicDatePicker = (props: typeProps) => {
  const { labels, styleLabels, labelRight, styleLabelsRight, fullWidth } = props

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} >
      <DemoContainer components={['DatePicker']}>
        <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
          <DemoItem label={labels}>
          <DesktopDatePicker
            sx={{ width: fullWidth ? '100%' : 'auto', marginTop: '0px !important', backgroundColor: 'white', borderRadius: '8px' }}
            slotProps={{
              field: { clearable: true,},
            }}
          />
        </DemoItem>
        </Box>
      </DemoContainer>
    </LocalizationProvider>
  );
}

export default BasicDatePicker;