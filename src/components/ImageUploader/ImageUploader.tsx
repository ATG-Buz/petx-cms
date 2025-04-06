import React, { useState } from "react";
import { Grid, Button, Box } from "@mui/material";
import useStyles from "./ImageUploader.styles";
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';

interface ImageUploaderProps {
    onImagesChange?: (images: File[]) => void; // Callback khi danh sách hình ảnh thay đổi
}

const ImageUploader: React.FC<ImageUploaderProps> = ({ onImagesChange }) => {
    const { classes } = useStyles();
    const [selectedImages, setSelectedImages] = useState<File[]>([]);

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            const filesArray = Array.from(event.target.files)
                .filter((file) => file.type.startsWith("image/"))
                .map((file) => file);

            setSelectedImages((prevImages) => [...prevImages, ...filesArray]);

            // Gọi callback nếu có
            if (onImagesChange) {
                onImagesChange([...selectedImages, ...filesArray]);
            }

            // Free memory when the component unmounts
            filesArray.forEach((file) => URL.revokeObjectURL(URL.createObjectURL(file)));
        }
    };

    const removeImage = (index: number) => {
        const updatedImages = selectedImages.filter((_, i) => i !== index);
        setSelectedImages(updatedImages);

        // Gọi callback nếu có
        if (onImagesChange) {
            onImagesChange(updatedImages);
        }
    };

    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Button
                    variant="contained"
                    component="label"
                    className={classes.uploadButton}
                >
                    Chọn hình ảnh
                    <input
                        type="file"
                        accept="image/*"
                        multiple
                        hidden
                        onChange={handleImageChange}
                    />
                    <DriveFolderUploadIcon style={{ marginLeft: "8px" }} />
                </Button>
            </Grid>
            <Grid item xs={12}>
                <Box className={classes.imageContainer}>
                    {selectedImages.map((image, index) => (
                        <Box key={index} className={classes.imageBox}>
                            <img src={URL.createObjectURL(image)} alt={`Selected ${index}`} className={classes.image} />
                            <Button
                                size="small"
                                color="secondary"
                                onClick={() => removeImage(index)}
                                className={classes.removeButton}
                            >
                                ✕
                            </Button>
                        </Box>
                    ))}
                </Box>
            </Grid>
        </Grid>
    );
};

export default ImageUploader;