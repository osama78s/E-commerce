import { useEffect, useState } from 'react'
import useSetToken from '../../store/useSetToken'
import { useTranslation } from 'react-i18next'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import useFilter from '../../store/useFilter'
import LoadingSpinner from '../../Components/LoadingSpinner'

const Categories = () => {
    const navigate = useNavigate()
    const { accessToken } = useSetToken()
    const {setFilter} = useFilter()
    const { t } = useTranslation()
    const [subcategories, setSubcategories] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        const getProducts = async () => {
            setIsLoading(true)
            try {
                const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/product`, {
                    headers: {
                        Authorization: `Bearer ${accessToken}`
                    },
                })
                setSubcategories(res.data.data.subcategories)
            } catch (error) {
                console.log("Failed to fetch subcategories:", error)
            } finally {
                setIsLoading(false)
            }
        }

        getProducts()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <div className='container mt-7'>
            {isLoading ? (
                <div className="w-full h-60 flex items-center justify-center">
                    <LoadingSpinner w={40} h={40} />
                </div>
            ) : (
                <>
                    <h1 className='my-8 text-3xl text-gray-900 font-semibold'>{t("categoris")}</h1>
                    <div className='flex flex-col gap-3'>
                        {subcategories.map((category) => (
                            <div onClick={()=> {
                                setFilter("subcategory_id", category.id)
                                navigate(`/products`)
                            }} className='bg-slate-50 px-3 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all border-[1px] border-slate-200 shadow-md rounded-md' key={category.id}>
                                <div className="w-14 h-14 rounded-md overflow-hidden border-[1px] border-slate-100">
                                    <img src={category.image_url} alt={category.translatable_name} className="w-full h-full" />
                                </div>
                                <div>
                                    {category.translatable_name}
                                </div>
                            </div>
                        ))}
                    </div>
                </>
            )}
        </div>
    )
}

export default Categories