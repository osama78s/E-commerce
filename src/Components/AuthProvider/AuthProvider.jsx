import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Cookies from 'universal-cookie';
import { getToken } from '../../Redux/Reducers/Token';

const AuthProvider = ({ children }) => {
    const { accessToken, userDetails } = useSelector((state) => state.token);
    const cookie = new Cookies();
    const dispatch = useDispatch();

    useEffect(() => {
      const checkAccessToken = async () => {
        if (!accessToken) {
          const refreshToken = cookie.get('refresh');
          if (refreshToken){
            try{
              const res = await axios.post('https://e-commerce-production-2d41.up.railway.app/api/auth/refresh-token', {refreshToken});
              dispatch(getToken({ accessToken: res.data.accessToken, userDetails: res.data.user }));
            } catch(error) {
              console.log(error)
            }
          }
        } 
      }
        checkAccessToken();
    }, [accessToken]);

  return children;
}

export default AuthProvider;