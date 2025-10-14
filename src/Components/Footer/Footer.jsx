import React from 'react';
import { MdFacebook } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import './Footer.css';
import { useTranslation } from "react-i18next";

const Footer = () => {
    const { t } = useTranslation();

    return (
        <div className='bg-blue font-primary mt-16'>
            {/* Top Section */}
            <div className='border-b border-gray container pb-10 pt-[50px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-center lg:text-left'>
                {/* Logo + Social */}
                <div className='flex flex-col items-center lg:items-start'>
                    {/* <img src={logo} alt="Logo" /> */}
                    <div className="flex gap-3 text-white mt-5">
                        <MdFacebook className='text-[23px] cursor-pointer hover:text-gray-300 transition' />
                        <FaInstagram className='text-[23px] cursor-pointer hover:text-gray-300 transition' />
                        <FaXTwitter className='text-[23px] cursor-pointer hover:text-gray-300 transition' />
                    </div>
                </div>

                {/* Customer Services */}
                <div className='text-white'>
                    <h1 className='text-[20px] font-semibold'>{t("footer.customerServices")}</h1>
                    <div className="flex flex-col gap-3 mt-6">
                        <span className='text-[14px] cursor-pointer hover:text-gray-300'>{t("footer.faqs")}</span>
                        <span className='text-[14px] cursor-pointer hover:text-gray-300'>{t("footer.terms")}</span>
                        <span className='text-[14px] cursor-pointer hover:text-gray-300'>{t("footer.privacy")}</span>
                    </div>
                </div>

                {/* Profile */}
                <div className='text-white'>
                    <h1 className='text-[20px] font-semibold'>{t("footer.profile")}</h1>
                    <div className="flex flex-col gap-3 mt-6">
                        <span className='text-[14px] cursor-pointer hover:text-gray-300'>{t("footer.account")}</span>
                        <span className='text-[14px] cursor-pointer hover:text-gray-300'>{t("footer.wishlist")}</span>
                        <span className='text-[14px] cursor-pointer hover:text-gray-300'>{t("footer.settings")}</span>
                    </div>
                </div>

                {/* Contact */}
                <div className='text-white'>
                    <h1 className='text-[20px] font-semibold'>{t("footer.contact")}</h1>
                    <div className="flex flex-col gap-3 mt-6">
                        <span className='text-[14px]'>{t("footer.phone")}</span>
                        <span className='text-[14px]'>{t("footer.email")}</span>
                        <span className='text-[14px]'>{t("footer.address")}</span>
                    </div>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-5 text-white p-6 text-sm text-center">
                <span className="cursor-pointer hover:text-gray-300">{t("footer.termsOfUse")}</span>
                <span className="cursor-pointer hover:text-gray-300">{t("footer.privacyPolicy")}</span>
                <span className="cursor-pointer hover:text-gray-300">{t("footer.rights")}</span>
            </div>
        </div>
    );
}

export default Footer;
