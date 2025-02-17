import axios from "axios";

const UNSPLASH_ACCESS_KEY = import.meta.env.VITE_APP_UNSPLASH_ACCESS_KEY;

export const fetchPhotosByQuery = async (query) => {
    try {
        const response = await axios.get("https://api.unsplash.com/search/photos", {
            params: {
                query,
                per_page: 8, // Fetch 8 images
                order_by: "latest",
            },
            headers: {
                Authorization: `Client-ID ${UNSPLASH_ACCESS_KEY}`,
            },
        });

        return response.data.results;
    } catch (error) {
        console.error("Error fetching photos:", error);
        throw error;
    }
};
