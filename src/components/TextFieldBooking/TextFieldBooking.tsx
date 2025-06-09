declare module "react" {
  function forwardRef<T, P = {}>(
    render: (props: P, ref: React.Ref<T>) => React.ReactElement | null
  ): (props: P & React.RefAttributes<T>) => React.ReactElement | null;
}

import React, { ElementType, ReactNode } from "react";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Visibility from "@mui/icons-material/Visibility";

import { OutlinedInput, OutlinedInputProps, FormControl } from "@mui/material";
import IconLabelMenu from "../IconLabelMenu";

export type TextFieldBookingProps = {
  id?: string;
  style?: React.CSSProperties;
  type?: string;
  IconStart?: ReactNode | ElementType;
  placeholder?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onMouseDown?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  parameter?: any;
  IconEndDisable?: boolean;
  IconStartDisable?: boolean;
  inputValue?: string;
  maxLength?: number;
  onChange?: (text: string) => void;
  labels?: string;
  styleLabels?: React.CSSProperties;
  defaultValue?: any;
  labelDisabled?: boolean;
  modeInput?: boolean;
  onKeyDown?: any;
  labelRight?: string;
  styleLabelsRight?: React.CSSProperties;
  fullWidth?: boolean;
} & Omit<OutlinedInputProps, "margin" | "size">;

const InnerTextFieldBooking = (
  props: TextFieldBookingProps,
  ref: React.ForwardedRef<any>
) => {
  const {
    id,
    style,
    type,
    IconStart,
    placeholder,
    onClick,
    onMouseDown,
    parameter,
    IconEndDisable,
    IconStartDisable,
    inputValue,
    onChange,
    maxLength,
    labels,
    styleLabels,
    defaultValue,
    labelDisabled,
    modeInput,
    onKeyDown,
    labelRight,
    styleLabelsRight,
    fullWidth,
    ...rest
  } = props;
  const renderIconStart = () => {
    if (IconStart && typeof IconStart === "object") {
      return <React.Fragment>{IconStart}</React.Fragment>;
    }
    return (
      <IconLabelMenu
        icon={IconStart as ElementType}
        fontSizeIcon="medium"
        styleSvgIcon={{ color: "black" }}
      />
    );
  };
  return (
    <FormControl style={style} variant="outlined" fullWidth={fullWidth}>
      {labels && (
        <span style={styleLabels}>
          {labels}
          <span
            style={{
              display: labelRight ? "inline" : "none",
              color: "red",
              marginLeft: "4px",
            }}
          >
            {labelRight}
          </span>
        </span>
      )}
      <OutlinedInput
        id="outlined-adornment-password"
        // type={type}
        value={inputValue}
        onChange={onChange}
        inputProps={{ maxLength: maxLength || 255 }}
        defaultValue={defaultValue}
        disabled={labelDisabled}
        endAdornment={
          IconEndDisable ? (
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={onClick}
                edge="end"
                style={{ color: "black" }}
                sx={{
                  "& .MuiSvgIcon-root": {
                    width: "16px",
                    height: "16px",
                  },
                }}
              >
                {parameter ? (
                  <VisibilityOff style={{ color: "black" }} />
                ) : (
                  <Visibility style={{ color: "black" }} />
                )}
              </IconButton>
            </InputAdornment>
          ) : null
        }
        startAdornment={
          IconStartDisable ? (
            <InputAdornment position="start" style={{ color: "black" }}>
              {/* {IconStart} */}
              {renderIconStart()}
            </InputAdornment>
          ) : null
        }
        placeholder={placeholder || " "}
        inputMode={modeInput ? "numeric" : "text"}
        onKeyDown={onKeyDown}
        style={{ backgroundColor: "white", borderRadius: "8px" }}
        {...rest}
      />
    </FormControl>
  );
};

const TextFieldBooking = React.forwardRef(InnerTextFieldBooking);

export default TextFieldBooking;
