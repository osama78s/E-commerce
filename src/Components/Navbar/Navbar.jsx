// removed arrow icon for categories
import { CiHeart } from 'react-icons/ci';
import { IoCartOutline, IoClose } from 'react-icons/io5';
import { GoBell } from 'react-icons/go';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { Menu } from 'lucide-react';
import './Navbar.css';
import logo from '../../assets/logo.png';
import { useEffect, useState } from 'react';
import axios from 'axios';
import useSetToken from '../../store/useSetToken';
import Cookies from 'universal-cookie';
import { useTranslation } from 'react-i18next';
import insertProductsToCart from '../../store/useCart';
import { Trash } from 'lucide-react';
import { deleteProductFromCart } from '../../services/deleteProductFromCart';
import useSetUser from '../../store/useSetUser';
// useSetUser removed (not used here)

const Navbar = () => {
  const { cart = [], addProductsToCart, refreshCartVal } = insertProductsToCart();
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const { user } = useSetUser();
  const { accessToken } = useSetToken();
  // user not used in this component
  const cookie = new Cookies();

  const [reget, setReget] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [refetch, setRefetch] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const getCartItems = async () => {
      if (!accessToken) return;
      try {
        const url = `${import.meta.env.VITE_API_URL}/api/cart`;
        const res = await axios.get(url, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            'Accept-Language': i18n.language,
          },
        });
        addProductsToCart(res.data.data.cart_products);
      } catch (error) {
        console.log('Failed to fetch', error);
      }
    };
    getCartItems();
  }, [refetch, accessToken, i18n.language, refreshCartVal]);

  useEffect(() => {
    const storedLang = localStorage.getItem('lang');
    if (storedLang) {
      i18n.changeLanguage(storedLang);
    }
    document.documentElement.setAttribute('dir', storedLang === 'ar' ? 'rtl' : 'ltr');
  }, [i18n, reget]);

  const handleLogout = async () => {
    try {
      await axios.get(`${import.meta.env.VITE_API_URL}/api/auth/logout`, {
        headers: { Authorization: `Bearer ${accessToken}` },
      });
      cookie.remove('refresh_token');
      useSetToken.setState({ accessToken: '' });
      navigate('/login');
    } catch (error) {
      console.log('Error during logout:', error);
    }
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('lang', lng);
  };

  return (
    <nav className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50 backdrop-blur-sm bg-white/95">
      <div className="flex items-center justify-between font-primary container mx-auto px-4 py-4">
        {/* Logo */}
        <Link to="/" className="flex-shrink-0">
          <img
            src={logo}
            alt="logo"
            className="h-10 w-auto transition-transform duration-300 hover:scale-105"
          />
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center md:gap-6 lg:gap-8">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `nav-link ${isActive ? 'text-blue-600 before:w-full' : ''}`
            }
          >
            {t('home')}
          </NavLink>
          <NavLink
            to="/categories"
            className={({ isActive }) =>
              `nav-link ${isActive ? 'text-blue-600 before:w-full' : ''}`
            }
          >
            {t('categories')}
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `nav-link ${isActive ? 'text-blue-600 before:w-full' : ''}`
            }
          >
            {t('about')}
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `nav-link ${isActive ? 'text-blue-600 before:w-full' : ''}`
            }
          >
            {t('contact_us')}
          </NavLink>
        </ul>

        {/* Right Side Actions */}
        <div className="flex items-center lg:gap-3">
          {/* Language Switcher */}
          <button
            onClick={() => {
              const newLang = i18n.language === 'en' ? 'ar' : 'en';
              changeLanguage(newLang);
              setReget(!reget);
            }}
            className="hidden md:block px-3 py-1.5 text-sm font-semibold text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-all duration-300 border border-transparent hover:border-blue-200"
          >
            {i18n.language === 'en' ? 'العربية' : 'English'}
          </button>

          {/* Wishlist */}
          <Link
            to="/wishlist"
            className="relative p-2 text-gray-600 hover:text-red-500 hover:bg-red-50 rounded-md transition-all duration-300 group"
          >
            <CiHeart className="text-xl" />
          </Link>

          {/* Cart */}
          <div className="relative">
            <button
              onClick={() => setIsCartOpen(!isCartOpen)}
              className="relative p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-all duration-300"
            >
              <IoCartOutline className="text-xl" />
              <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center shadow-md">
                {cart.length}
              </span>
            </button>

            {/* Cart Box */}
            {isCartOpen && (
              <div
                style={{
                  left: i18n.language === 'ar' ? '0' : '',
                  right: i18n.language === 'en' ? '0' : '',
                }}
                className="absolute mt-2 w-[300px] md:w-[500px] bg-white border border-gray-200 rounded-md shadow-xl z-50 p-4"
              >
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-md font-semibold text-gray-700">{t('your_cart')}</h3>
                  <button onClick={() => setIsCartOpen(false)}>
                    <IoClose className="text-xl text-gray-500 hover:text-red-500" />
                  </button>
                </div>

                <ul className="space-y-3 max-h-64 overflow-y-auto pr-2">
                  {cart?.length > 0 ? (
                    cart.map((item) => (
                      <li
                        key={item.id}
                        className="flex items-center justify-between gap-3 border-b pb-2"
                      >
                        <div className="flex items-center gap-4">
                          {item?.product?.images?.length > 0 && (
                            <img
                              src={item?.product?.images[0]?.image_url}
                              alt="d"
                              className="w-12 h-12 object-cover rounded"
                            />
                          )}
                          <div className="flex-1">
                            <h4 className="text-sm font-semibold text-gray-800">
                              {item.product?.translatable_name}
                            </h4>
                            <p className="text-xs text-gray-500">
                              {t('quantity')} {item.product?.quantity}
                            </p>
                          </div>
                          <span className="text-sm font-bold text-blue-600">
                            {t('price')}: ${Number(item?.total_price).toFixed(2)}
                          </span>
                        </div>
                        <Trash
                          onClick={async () => {
                            await deleteProductFromCart(item?.product?.id, accessToken);
                            setRefetch(!refetch);
                          }}
                          size={20}
                          className="text-gray-700 hover:text-gray-800 cursor-pointer"
                        />
                      </li>
                    ))
                  ) : (
                    <span className="text-gray-700">{t('empty_cart')}</span>
                  )}
                </ul>

                {/* Checkout */}
                {cart?.length > 0 && (
                  <div className="mt-4">
                    <button
                      onClick={() => navigate('/checkout')}
                      className="w-full bg-blue-600 hover:bg-blue-500 text-white py-2 px-4 rounded-md font-medium transition-all duration-300"
                    >
                      {t('checkout')}
                    </button>
                  </div>
                )}
              </div>
            )}
            </div>

            {/* Logout */}
            {accessToken && (
              <button
                onClick={handleLogout}
                className="hidden md:block ml-2 px-4 py-2 text-sm font-medium text-gray-700 hover:text-red-600 hover:bg-red-50 border border-gray-200 hover:border-red-200 rounded-md transition-all duration-300"
              >
                {t('logout')}
              </button>
            )}

            {/* Dashboard */}
            {user?.role === 'admin' && (
              <Link to="/admin" className="hidden md:block ml-2 px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 border border-gray-200 hover:border-blue-200 rounded-md transition-all duration-300">
                {t('dashboard')}
              </Link>
            )}

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-md border border-gray-200 hover:bg-gray-100"
              onClick={() => setIsMenuOpen(true)}
            >
              <Menu className="w-6 h-6 text-gray-700" />
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        {isMenuOpen && (
          <div className="md:hidden fixed inset-0 z-50 bg-black bg-opacity-50" onClick={() => setIsMenuOpen(false)}>
            <div
              className={`fixed top-0 ${i18n.language === 'ar' ? 'left-0' : 'right-0'} w-64 h-full bg-white shadow-md flex flex-col gap-6`}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setIsMenuOpen(false)}
                className="absolute top-4 right-4 md:right-auto md:left-4 bg-[#f9f9f9] p-2 rounded-full shadow hover:bg-red-50 transition-all duration-300"
              >
                <IoClose className="text-2xl text-gray-700 hover:text-red-600 transition-colors duration-300" />
              </button>
              <ul className='bg-[#f9f9f9] p-6 flex flex-col gap-6'>
                <NavLink to="/" onClick={() => setIsMenuOpen(false)} className="text-gray-700 hover:text-blue-600">
                  {t('home')}
                </NavLink>
                <NavLink to="/categories" onClick={() => setIsMenuOpen(false)} className="text-gray-700 hover:text-blue-600">
                  {t('categories')}
                </NavLink>
                <NavLink to="/about" onClick={() => setIsMenuOpen(false)} className="text-gray-700 hover:text-blue-600">
                  {t('about')}
                </NavLink>
                <NavLink to="/contact" onClick={() => setIsMenuOpen(false)} className="text-gray-700 hover:text-blue-600">
                  {t('contact_us')}
                </NavLink>
                {accessToken && (
                  <button
                    onClick={handleLogout}
                    className="mt-auto w-full px-4 py-2 text-sm font-medium text-gray-700 hover:text-red-600 hover:bg-red-50 border border-gray-200 rounded-md transition-all duration-300"
                  >
                    {t('logout')}
                  </button>
                )}
              </ul>
            </div>
          </div>
        )}
    </nav>
  );
};

export default Navbar;
