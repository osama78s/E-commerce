import { CiHeart } from "react-icons/ci";
import { useState, useEffect } from "react";
import axios from "axios";
import { Rating } from "flowbite-react";
import { useNavigate } from 'react-router-dom';
import { ShoppingBagIcon } from 'lucide-react';
import { useTranslation } from "react-i18next";
import useSetToken from "../../../../../../store/useSetToken";
import useSetUser from "../../../../../../store/useSetUser"
import { toggleProductInWishlist} from "../../../../../../services/addProductToWishlist"
import AddToCartBox from "../../../../../../Components/Products/AddToCartBox";

// eslint-disable-next-line react/prop-types
const SimilarProducts = ({ similarProducts }) => {
    const {t} = useTranslation()
    const navigate = useNavigate()
    const { accessToken } = useSetToken()
    const { user } = useSetUser()
    const [localSimilarProducts, setLocalSimilarProducts] = useState(similarProducts)
    const [currentProduct, setCurrentProduct] = useState(null)
    const [showAddToCartBox, setShowAddToCartBox] = useState(false)

    // Update local state when similarProducts prop changes
    useEffect(() => {
        if (similarProducts) {
            setLocalSimilarProducts(similarProducts)
        }
    }, [similarProducts])

    const deleteWishList = async (productId) => {
        try {
            const url = `${import.meta.env.VITE_API_URL}/api/whishlistes/delete/${productId}`;
            await axios.delete(url, {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                }
            })
            // Update local state to remove from wishlist
            setLocalSimilarProducts(prev => 
                prev.map(product => 
                    product.id === productId 
                        ? { 
                            ...product, 
                            whishlistes: product.whishlistes?.filter(item => 
                                String(item.user_id) !== String(user.id)
                            ) || [] 
                        }
                        : product
                )
            )
        } catch (error) {
            console.log("delete error", error)
        }
    }

    const addToWishlist = async (productId) => {
        try {
            await toggleProductInWishlist(productId, accessToken)
            // Update local state to add to wishlist
            setLocalSimilarProducts(prev => 
                prev.map(product => 
                    product.id === productId 
                        ? { 
                            ...product, 
                            whishlistes: [...(product.whishlistes || []), { 
                                product_id: String(productId), 
                                user_id: String(user.id) 
                            }] 
                        }
                        : product
                )
            )
        } catch (error) {
            console.log("add to wishlist error", error)
        }
    }

    return (
        <div className='pt-[80px] font-secondry'>
            {showAddToCartBox && (
                <AddToCartBox product={currentProduct} setShowAddToCartBox={setShowAddToCartBox} />
            )}
            <div className="flex items-center justify-between">
                <h1 className='text-dark text-[40px] font-bold'>{t('similar_products')}</h1>
                <button className='bg-blue text-white rounded-md px-6 py-2 hover:bg-blue2 transition-all duration-300'>{t("view_all")}</button>
            </div>

            <div className="grid lg:grid-cols-3 xl:grid-cols-4 md:grid-cols-3 gap-4 mt-[30px] font-primary">

                {localSimilarProducts.map((product) => {
                    const wishlistIds = product.whishlistes?.map(item => item.product_id) || [];
                    const userIds = product.whishlistes?.map(item => item.user_id) || [];
                    const isInWishlist = wishlistIds.includes(String(product.id)) && userIds.includes(String(user.id));

                    return (
                        <div key={product.id} className="p-4 shadow-main rounded-md border-[1px] border-slate-200 cursor-pointer" onClick={() => navigate(`/products/${product.id}`)}>
                            <div className="flex items-center justify-center relative">
                                <CiHeart
                                    onClick={async (e) => {
                                        e.stopPropagation();
                                        if (isInWishlist) {
                                            await deleteWishList(product.id)
                                        } else {
                                            await addToWishlist(product.id)
                                        }
                                    }}
                                    style={{
                                        backgroundColor: isInWishlist ? "#2830d1" : "white",
                                        color: isInWishlist ? "white" : "#3b82f6"
                                    }}
                                    className='absolute right-[20px] top-[10px] rounded-full text-[30px] p-1 cursor-pointer transition-all duration-200'
                                />
                                <img src={product.images[0].image_url} className='w-full aspect-square' alt="" />
                            </div>
                            <div className="p-2 flex flex-col gap-1">
                                <span
                                    onClick={() => {
                                        navigate(`/products/${product.id}`)
                                        navigate(0)
                                        
                                    }} 
                                    className='font-semibold text-[17px] cursor-pointer'
                                >{product.translatable_name}</span>
                                <div className='flex items-center gap-2'>
                                    <span className='font-bold text-red'>${product.price}</span>
                                    <Rating>
                                        <Rating.Star />
                                        <Rating.Star />
                                        <Rating.Star />
                                        <Rating.Star />
                                        <Rating.Star filled={false} />
                                    </Rating>
                                </div>
                                <div className='flex items-center gap-2 mt-2'>
                                    <div className='w-4 h-4 rounded-full bg-blue border-[1px] border-slate-300'></div>
                                    <div className='w-4 h-4 rounded-full bg-red border-[1px] border-slate-300'></div>
                                    <div className='w-4 h-4 rounded-full bg-gray border-[1px] border-slate-300'></div>
                                </div>
                            </div>
                            <button 
                                onClick={(e) => {
                                    e.stopPropagation();
                                    if (!accessToken) {
                                        navigate("/login");
                                        return;
                                    }
                                    setCurrentProduct(product);
                                    setShowAddToCartBox(true);
                                }}
                                className='bg-blue w-full mt-3 rounded-md text-white py-[8px] font-secondry hover:bg-blue2 transition-all duration-300 flex items-center gap-3 justify-center'
                            >
                                <span>{t("add_to_cart")}</span> 
                                <ShoppingBagIcon size={18} />
                            </button>
                        </div>
                    )
                })}

            </div>
        </div>
    )
}

export default SimilarProducts