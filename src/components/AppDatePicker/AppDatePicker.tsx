import * as React from "react";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { Box } from "@mui/material";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import dayjs from "dayjs";
import "dayjs/locale/vi";

dayjs.locale("vi");
type typeProps = {
  fullWidth?: boolean;
  labels?: string;
  styleLabels?: React.CSSProperties;
  labelRight?: string;
  styleLabelsRight?: React.CSSProperties;
};

const BasicDatePicker = (props: typeProps) => {
  const { labels, styleLabels, labelRight, styleLabelsRight, fullWidth } =
    props;

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="vi">
      <DemoContainer components={["DatePicker"]}>
        <Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
          <DemoItem label={labels}>
            <DesktopDatePicker
              sx={{
                width: fullWidth ? "100%" : "auto",
                marginTop: "0px !important",
                backgroundColor: "white",
                borderRadius: "8px",
              }}
              slotProps={{
                field: { clearable: true },
              }}
              format="DD/MM/YYYY"
            />
          </DemoItem>
        </Box>
      </DemoContainer>
    </LocalizationProvider>
  );
};

export default BasicDatePicker;
