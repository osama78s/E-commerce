import axios from "axios";
export const deleteWishList = async (productId, accessToken) => {
    try {
        const url = `${import.meta.env.VITE_API_URL}/api/whishlistes/delete/${productId}`;
        await axios.delete(url, {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        })
    } catch (error) {
        console.log("delete errror", error)
    } 
}
