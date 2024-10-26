import { toast } from '@/hooks/use-toast';
import axios from 'axios';
import { useError } from './use-error';

export const useCloudinary = () => {
    const { error } = useError()

    async function uploadFile(file: File | null) {
        if (!file) {
            toast({
                variant: "destructive",
                title: "Missing profile image",
            });
            throw new Error("No file selected.");
        }

        const formData = new FormData();
        formData.append('file', file);

        // Request signature from backend
        formData.append('api_key', "313347163544245");
        formData.append('upload_preset', 'uttdyeus');

        try {
            // Upload the image to Cloudinary
            const res = await axios.post(
                `https://api.cloudinary.com/v1_1/duiuyyz1b/image/upload`,
                formData
            );

            const imageUrl = res.data.secure_url;
            toast({
                variant: "default",
                title: "Coach image uploaded",
            });
            return imageUrl;  // Correctly returning the image URL here
        } catch (err: any) {
            error(err, "Error uploading image")  // Throw the error so it can be handled upstream
        }
    }

    return { uploadFile };
};
