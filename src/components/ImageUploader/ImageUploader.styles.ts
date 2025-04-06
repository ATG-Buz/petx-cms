import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles({
  name: "ImageUploader",
})(theme => ({
  uploadButton: {
    backgroundColor:  theme.palette.common.colorButton,
    color: theme.palette.common.white,
    "&:hover": {
      backgroundColor: theme.palette.common.colorButton,
    },
  },
  imageContainer: {
    display: "flex",
    flexWrap: "wrap",
    gap: theme.spacing(2),
    marginTop: theme.spacing(2),
  },
  imageBox: {
    position: "relative",
    width: "100px",
    height: "100px",
    borderRadius: theme.shape.borderRadius,
    overflow: "hidden",
    boxShadow: theme.shadows[3],
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  removeButton: {
    position: "absolute",
    top: "4px",
    right: "4px",
    backgroundColor: "red",
    color: "white",
    borderRadius: "50%",
    minWidth: "24px",
    height: "24px",
    padding: "0",
    fontSize: "12px",
    "&:hover": {
      backgroundColor: "rgba(0, 0, 0, 0.7)",
    },
  },
}));

export default useStyles;