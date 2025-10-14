import { Route, Routes, useLocation, Navigate } from 'react-router-dom'
import Home from './Pages/Home/Home'
import SearchBar from './Components/SearchBar/SearchBar'
import Navbar from './Components/Navbar/Navbar';
import About from './Pages/About/About';
import FixedButtons from './Components/FixedButtons/FixedButtons';
import Footer from './Components/Footer/Footer';
import MainHome from './Pages/MainHome/MainHome';
import ProductDetails from './Pages/Home/ProductsContent/ProductDetails/ProductDetails';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import SetPassword from './Pages/SetPassword/SetPassword';
import ForgotPassword from './Pages/ForgotPassword/ForgotPassword';
import ResetCode from './Pages/ResetCode/ResetCode';
import './i18n'

import AdminHome from './Pages/admin/AdminHome';
import InsertGlobalData from './Pages/admin/InsertGlobalData';
import useSetToken from './store/useSetToken';
import LoadingSpinner from './Components/LoadingSpinner';
import Offer from './Components/admin/discounts/Offer';
import AdminLayout from './Components/admin/AdminLayout';
import AdminProviderWrapper from './Components/admin/AdminProviderWrapper';
import Discount from './Components/admin/discounts/Discount';
import Products from './Pages/admin/products/Products';
import Offers from './Pages/Offers/Offers';
import Checkout from './Pages/checkout/Checkout';
import insertProductsToCart from './store/useCart';
import OrdersPage from './Pages/orders/Orders';
import OfferDetails from './Pages/Offers/OfferDetails';
import Categories from './Pages/categories/Categories';
import ContactUs from './Pages/Contact/Contact';
import useSetUser from './store/useSetUser';
import Wishlists from './Pages/wishlist/WishList';

const App = () => {
  const {cart = []} = insertProductsToCart()
  const location = useLocation();
  const { accessToken } = useSetToken();
  const { user } = useSetUser()
  const isAuthPage = location.pathname === '/login' ||
    location.pathname === '/register' ||
    location.pathname === '/setpassword' ||
    location.pathname === '/forgotpassword' ||
    location.pathname === '/resetcode';

  const isAdmin = location.pathname.startsWith("/admin")
  const isAccessToken = !!accessToken;
  
  return (
    <>
      <div className="relative">
        <FixedButtons />
        {!isAdmin && <Navbar />}
        {!isAuthPage && !isAdmin && <SearchBar />}
        <Routes>
          <Route path='/' element={<MainHome />} />
          <Route path='/categories' element={<Categories />} />
          <Route path='/wishlist' element={<Wishlists />} />
          <Route path='/products' element={<Home />} />
          <Route path='/products/:id' element={<ProductDetails />} />
          <Route path='/about' element={<About />} />
          <Route path='/offers' element={<Offers />} />
          <Route path="offer/:id" element={<OfferDetails />} />
          <Route path='/orders' element={<OrdersPage />} />
          <Route path='/checkout' element={cart.length > 0 ? <Checkout /> : <Navigate to="/" />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/setpassword' element={<SetPassword />} />
          <Route path='/forgotpassword' element={<ForgotPassword />} />
          <Route path='/resetcode' element={<ResetCode />} />
          <Route path='/contact' element={<ContactUs />} />
          <Route
            path="/admin"
            element={
              isAccessToken ? (
                user?.role === 'admin' ? (
                  <AdminProviderWrapper>
                    <AdminLayout />
                  </AdminProviderWrapper>
                ) : (
                  <Navigate to="/" />
                )
              ) : (
                <LoadingSpinner forRoute={true} w={52} h={52} />
              )
            }
          >
            <Route index element={<AdminHome />} />
            <Route path="g-data" element={<InsertGlobalData />} />
            <Route path="offers" element={<Offer />} />
            <Route path="coupons" element={<Discount />} />
            <Route path="products" element={<Products />} />
          </Route>
        </Routes>
      </div>
      {!isAuthPage && !isAdmin && <Footer />}
    </>
  )
}

export default App;
