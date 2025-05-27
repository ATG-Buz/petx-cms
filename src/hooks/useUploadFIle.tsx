import { useState } from "react";

type valueImageType = {
    name: string;
    url: string;
    file: File;
}
type propsValueImage = {
    setValueImage: (image: valueImageType[])=> void;
}
const useUploadFile = ({setValueImage}: propsValueImage) => {
    const [loading, setLoading] = useState(false);

    const uploadFile = async (files: FileList|File[]) => {
        setLoading(true);
         try {
            const uploadFileImg: valueImageType[] = [];

            for(const file of Array.from(files)) {
                const formatData = new FormData()

                formatData.append('file', file);

                const res = await fetch('/api/upload', {
                    method: 'POST',
                    body: formData,
                  });
            }
         } catch (error) {
            
         }
    }
}