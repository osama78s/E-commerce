import axios from 'axios'
import { useEffect } from 'react'
import Cookies from 'universal-cookie';
import useSetToken from '../../store/useSetToken';
import { useLocation, useNavigate } from 'react-router-dom';
import useSetUser from '../../store/useSetUser';

const AuthProvider = ({ children }) => {
  const navigate = useNavigate()
  const location = useLocation();
  const cookie = new Cookies();
  const { accessToken, setAccessToken } = useSetToken()
  const { setUser } = useSetUser();
  const isAuthPage = location.pathname === '/login' ||
    location.pathname === '/register' ||
    location.pathname === '/setpassword' ||
    location.pathname === '/forgotpassword' ||
    location.pathname === '/resetcode';
    
  useEffect(() => {
    const checkAccessToken = async () => {
      const refreshToken = cookie.get('refresh_token');
      if(!refreshToken && !isAuthPage) navigate("/login")
      if (!accessToken && !isAuthPage) {
        if (refreshToken) {
          try {
            const res = await axios.post(`${import.meta.env.VITE_API_URL}/api/refresh-token`, {
              'refresh_token': refreshToken
            });
           setUser(res.data.data.user)
            setAccessToken(res.data.data.access_token)
          } catch (error) {
            console.log(error)
            navigate("/login")
          }
        }else {
          navigate("/login")
        }
      }
    }
    checkAccessToken()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [accessToken, isAuthPage]);

  return children;
}

export default AuthProvider;