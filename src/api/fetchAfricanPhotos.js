import axios from "axios";

const UNSPLASH_ACCESS_KEY = import.meta.env.VITE_APP_UNSPLASH_ACCESS_KEY;

export const fetchAfricanPhotos = async () => {
    try {
        const response = await axios.get("https://api.unsplash.com/search/photos", {
            params: {
                query: "African",
                per_page: 8, // Fetch 8 photos
                order_by: "latest",
            },
            headers: {
                Authorization: `Client-ID ${UNSPLASH_ACCESS_KEY}`,
            },
        });

        return response.data.results; // Extract only the results array
    } catch (error) {
        console.error("Error fetching African photos:", error);
        throw error;
    }
};
