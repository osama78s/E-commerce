import axios from "axios"

export const deleteProductFromCart = async (productId, accessToken) => {
    try {
        const url = `${import.meta.env.VITE_API_URL}/api/cart/delete_product/${productId}`;
        await axios.delete(url,{
            headers: {
                Authorization: `Bearer ${accessToken}`
            },
        })
    } catch (error) {
        console.log(error)
    }
}