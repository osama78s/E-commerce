import { CiHeart } from "react-icons/ci";
import { ShoppingBag } from "lucide-react";
import { Rating } from "flowbite-react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import useSetToken from "../../store/useSetToken";
import useSetUser from "../../store/useSetUser";
import axios from "axios";
import { useTranslation } from "react-i18next";
import AddToCartBox from "../../Components/Products/AddToCartBox";
import { toggleProductInWishlist } from "../../services/addProductToWishlist";
import ProductLoadingSkeleton from "../../Components/Products/ProductLoadingSkeleton";

const Offers = () => {
    const { t, i18n } = useTranslation();
    const { accessToken } = useSetToken();
    const { user } = useSetUser();
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const [currentProduct, setCurrentProduct] = useState(null);
    const [showAddToCartBox, setShowAddToCartBox] = useState(false);

    const deleteWishList = async (productId) => {
        try {
            const url = `${import.meta.env.VITE_API_URL}/api/whishlistes/delete/${productId}`;
            await axios.delete(url, {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                    "Accept-Language": i18n.language
                }
            });
        } catch (error) {
            console.log("delete error", error);
        }
    };

    useEffect(() => {
        const getProducts = async () => {
            setIsLoading(true);
            try {
                const url = `${import.meta.env.VITE_API_URL}/api/offer?all=true`;
                const res = await axios.get(url, {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                        "Accept-Language": i18n.language,
                    },
                });
                console.log("Offers data structure:", res.data.data.offers);
                setProducts(res.data.data.offers);
            } catch (error) {
                console.log("Failed to fetch offers:", error);
            } finally {
                setIsLoading(false);
            }
        };

        getProducts();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="pt-[80px] container font-secondry pb-5">
            {showAddToCartBox && (
                <AddToCartBox
                    product={currentProduct}
                    setShowAddToCartBox={setShowAddToCartBox}
                />
            )}

            <h1 className="text-dark text-[40px] font-bold">
                {t("offers")}
            </h1>

            {isLoading && (
                <div className="grid lg:grid-cols-3 xl:grid-cols-4 md:grid-cols-3 gap-6 mt-[30px] font-primary">
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((itm) => (
                        <ProductLoadingSkeleton key={itm} />
                    ))}
                </div>
            )}

            {!isLoading && (
                <div className="grid lg:grid-cols-3 xl:grid-cols-4 md:grid-cols-3 gap-6 mt-[30px] font-primary">
                    {products.map((offer) => {
                        const product = offer.product;
                        const wishlistIds = product.whishlistes?.map(item => item.product_id) || [];
                        const userIds = product.whishlistes?.map(item => item.user_id) || [];
                        const isInWishlist = wishlistIds.includes(String(product.id)) && userIds.includes(String(user.id));

                        return (
                            <div
                                key={product.id}
                                className="p-4 shadow-main rounded-md border border-slate-200"
                            >
                                <div className="flex items-center justify-center relative">
                                    <CiHeart
                                        onClick={async (e) => {
                                            e.stopPropagation();
                                            if (!accessToken) {
                                                navigate("/login");
                                                return;
                                            }

                                            if (isInWishlist) {
                                                // Update local state to remove from wishlist
                                                setProducts(prev => 
                                                    prev.map(offerItem => 
                                                        offerItem.product.id === product.id 
                                                            ? { 
                                                                ...offerItem, 
                                                                product: {
                                                                    ...offerItem.product,
                                                                    whishlistes: offerItem.product.whishlistes?.filter(item => 
                                                                        String(item.user_id) !== String(user.id)
                                                                    ) || [] 
                                                                }
                                                            }
                                                            : offerItem
                                                    )
                                                );
                                                // Send DELETE API request
                                                await deleteWishList(product.id);
                                            } else {
                                                // Update local state to add to wishlist
                                                setProducts(prev => 
                                                    prev.map(offerItem => 
                                                        offerItem.product.id === product.id 
                                                            ? { 
                                                                ...offerItem, 
                                                                product: {
                                                                    ...offerItem.product,
                                                                    whishlistes: [...(offerItem.product.whishlistes || []), { 
                                                                        product_id: String(product.id), 
                                                                        user_id: String(user.id) 
                                                                    }] 
                                                                }
                                                            }
                                                            : offerItem
                                                    )
                                                );
                                                // Send ADD API request
                                                await toggleProductInWishlist(product.id, accessToken);
                                            }
                                        }}
                                        style={{
                                            backgroundColor: isInWishlist ? "#2830d1" : "white",
                                            color: isInWishlist ? "white" : "#3b82f6"
                                        }}
                                        className='absolute right-[20px] top-[10px] rounded-full text-[30px] p-1 cursor-pointer transition-all duration-200'
                                    />
                                    <img
                                        src={product?.images[0]?.image_url}
                                        className="w-full aspect-square rounded-md"
                                        alt={product.translatable_name}
                                    />
                                </div>

                                <div className="p-2 flex flex-col gap-1">
                                    <span
                                        onClick={() => navigate(`/products/${product.id}`)}
                                        className="font-semibold text-[17px] cursor-pointer"
                                    >
                                        {product.translatable_name}
                                    </span>
                                    <div className="flex items-center gap-2">
                                        <span className="font-bold text-red">
                                            ${product.price}
                                        </span>
                                        <Rating>
                                            <Rating.Star />
                                            <Rating.Star />
                                            <Rating.Star />
                                            <Rating.Star />
                                            <Rating.Star filled={false} />
                                        </Rating>
                                    </div>
                                </div>

                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        if (!accessToken) {
                                            navigate("/login");
                                            return;
                                        }
                                        console.log("Setting current product:", product);
                                        setCurrentProduct(product);
                                        setShowAddToCartBox(true);
                                    }}
                                    className="bg-blue-600 w-full mt-3 rounded-md text-white py-[8px] font-secondry hover:bg-blue-700 transition-all duration-300 flex items-center gap-3 justify-center"
                                >
                                    <span>{t("add_to_cart")}</span>
                                    <ShoppingBag size={18} />
                                </button>
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
};

export default Offers;
