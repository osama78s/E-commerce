import { Rating } from "flowbite-react";
import { CiHeart } from "react-icons/ci";
import { ShoppingBagIcon } from "lucide-react";
import { useEffect, useState } from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import useSetToken from "../../store/useSetToken";
import useSetUser from "../../store/useSetUser";
import AddToCartBox from "../../Components/Products/AddToCartBox";
import ProductLoadingSkeleton from "../../Components/Products/ProductLoadingSkeleton";
import { toggleProductInWishlist } from "../../services/addProductToWishlist";

const Wishlists = () => {
  const { t, i18n } = useTranslation();
  const { accessToken } = useSetToken();
  const { user } = useSetUser();
  const navigate = useNavigate();

  const [wishlistProducts, setWishlistProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
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
      
      // Update local state to remove from wishlist
      setWishlistProducts(prev => 
        prev.filter(wishlist => wishlist.product.id !== productId)
      );
    } catch (error) {
      console.log("delete error", error);
    }
  };

  useEffect(() => {
    const fetchWishlist = async () => {
      if (!accessToken) {
        navigate("/login");
        return;
      }

      setIsLoading(true);
      try {
        const url = `${import.meta.env.VITE_API_URL}/api/whishlistes`;
        const res = await axios.get(url, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            "Accept-Language": i18n.language,
          },
        });
        setWishlistProducts(res.data.data.whishlistes || []);
      } catch (error) {
        console.log("Failed to fetch wishlist:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchWishlist();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);



  return (
    <div className="pt-[80px] container font-primary pb-5">
      {showAddToCartBox && (
        <AddToCartBox
          product={currentProduct}
          setShowAddToCartBox={setShowAddToCartBox}
        />
      )}

      <h1 className="text-[30px] font-bold uppercase text-dark mb-5">
        {t("wishlist")}
      </h1>

      {isLoading && (
        <div className="grid lg:grid-cols-3 xl:grid-cols-4 md:grid-cols-3 gap-4">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((itm) => (
            <ProductLoadingSkeleton key={itm} />
          ))}
        </div>
      )}

      {!isLoading && wishlistProducts.length > 0 && (
        <div className="grid lg:grid-cols-3 xl:grid-cols-4 md:grid-cols-3 gap-4">
          {wishlistProducts.map((wishlist) => {
            const product = wishlist.product;
            return (
              <div
                key={product.id}
                className="p-4 shadow-main rounded-md border border-slate-200"
              >
                <div
                  className="flex items-center justify-center relative"
                >
                  <CiHeart
                    onClick={async (e) => {
                      e.stopPropagation();
                      await deleteWishList(product.id);
                    }}
                    style={{
                      backgroundColor: "#2830d1",
                      color: "white"
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
                    setCurrentProduct(product);
                    setShowAddToCartBox(true);
                  }}
                  className="bg-blue-600 w-full mt-3 rounded-md text-white py-[8px] font-secondry hover:bg-blue-700 transition-all duration-300 flex items-center gap-3 justify-center"
                >
                  <span>{t("add_to_cart")}</span>
                  <ShoppingBagIcon size={18} />
                </button>
              </div>
            );
          })}
        </div>
      )}

      {!isLoading && wishlistProducts.length === 0 && (
        <p className="text-gray-500 mt-10">{t("wishlist_empty")}</p>
      )}
    </div>
  );
};

export default Wishlists;
