import Button from "./Button"

const Footer = ({ data }) => {
    return (
        <>
            <div className="bg-gradient-to-b from-[#FFF] to-[#B6F1F0] relative">
                <div className="flex gap-12 flex-col md:w-[90%] m-auto py-5 items-center justify-center text-center">
                    <h2 className="font-extrabold text-[3.5rem] font-[#232323]">
                        {data.heading}
                    </h2>
                    <p className="text-2xl font-semibold" >{data.subtext}</p>
                    <div className="flex gap-4">
                        <Button data={data.contactUs} />
                        <Button data={data.privacyPolicy} />
                    </div>
                </div>
                <svg width="100%" viewBox="0 0 1920 477" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_575_3796)">
                        <mask id="mask0_575_3796" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="-121" y="67" width="2411" height="424">
                            <path d="M-121 144.964C-121 144.964 91.2298 58.077 234.5 67.7519C393.514 78.49 485.806 215.471 644.995 207.75C754.309 202.448 808.837 150.941 918.116 144.964C1061.73 137.108 1137.31 213.474 1281.02 207.75C1419.74 202.226 1487.52 112.637 1626.03 122.047C1750.35 130.492 1801.96 220.232 1926.15 230.353C2071.62 242.209 2290 144.964 2290 144.964V491H-121V144.964Z" fill="url(#paint0_linear_575_3796)" />
                        </mask>
                        <g mask="url(#mask0_575_3796)">
                            <g filter="url(#filter0_d_575_3796)">
                                <path d="M-2 -31H1918V634.5H-2V-31Z" fill="url(#paint1_linear_575_3796)" />
                            </g>
                        </g>
                        <g filter="url(#filter1_d_575_3796)">
                            <path d="M6.86459 222.333C78.8424 222.333 95.4506 330.156 248.826 334.799C421.713 340.032 430.301 235.381 603.257 238.369C734.825 240.643 795.124 371.595 926.694 373.812C1093.38 376.62 1248.88 249.923 1415.09 238.371C1563.24 228.073 1531.48 312.957 1657.54 373.812C1748.02 417.489 1920 373.812 1920 373.812V515.5H-4.62501L-4.62501 408.093C-4.62501 408.093 -73.2821 222.333 6.86459 222.333Z" fill="url(#paint2_linear_575_3796)" />
                        </g>
                    </g>
                    <defs>
                        <filter id="filter0_d_575_3796" x="-52" y="-85" width="2020" height="765.5" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                            <feOffset dy="-4" />
                            <feGaussianBlur stdDeviation="25" />
                            <feComposite in2="hardAlpha" operator="out" />
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_575_3796" />
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_575_3796" result="shape" />
                        </filter>
                        <filter id="filter1_d_575_3796" x="-102" y="148.333" width="2092" height="433.167" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                            <feOffset dy="-4" />
                            <feGaussianBlur stdDeviation="35" />
                            <feComposite in2="hardAlpha" operator="out" />
                            <feColorMatrix type="matrix" values="0 0 0 0 0.0605035 0 0 0 0 0.61133 0 0 0 0 0.854167 0 0 0 0.3 0" />
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_575_3796" />
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_575_3796" result="shape" />
                        </filter>
                        <linearGradient id="paint0_linear_575_3796" x1="1084.5" y1="67" x2="1084.5" y2="491" gradientUnits="userSpaceOnUse">
                            <stop offset="1" stopColor="#B6F1F0" />
                            <stop stopColor="white" />
                        </linearGradient>
                        <linearGradient id="paint1_linear_575_3796" x1="958" y1="-31" x2="958" y2="634.5" gradientUnits="userSpaceOnUse">
                            <stop offset="1" stopColor="#B6F1F0" />
                            <stop stopColor="white" />
                        </linearGradient>
                        <linearGradient id="paint2_linear_575_3796" x1="944" y1="222.333" x2="944" y2="515.5" gradientUnits="userSpaceOnUse">
                            <stop offset="1" stopColor="#B6F1F0" />
                            <stop stopColor="white" />
                        </linearGradient>
                        <clipPath id="clip0_575_3796">
                            <rect width="1920" height="477" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
            </div>
            <div className="relative bg-gradient-to-b from-[#B6F1F0] to-[#fff]">
                <div className="flex flex-col items-center justify-center md:px-28 px-10 py-6 gap-12">
                    <div className="flex flex-col gap-6 md:w-[80%] text-center">
                        <h3 className="text-xl font-semibold">
                            {data.heading1}
                        </h3>
                        <p dangerouslySetInnerHTML={{ __html: `<span>${data.keywords}</span>` }}>
                        </p>
                    </div>
                    <div className="flex flex-col gap-6 md:w-[80%] text-center">
                        <h3 className="text-xl font-semibold">
                            {data.heading2}
                        </h3>
                        <p>
                            {data.text}
                        </p>
                    </div>
                    <div className="flex gap-10">
                        <a href="https://www.youtube.com/@Tejoparty" className="hover:opacity-80">
                            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 45 45" fill="none">
                                <path fillRule="evenodd" clipRule="evenodd" d="M22.4354 0C34.8261 0 44.8707 10.0476 44.8707 22.442C44.8707 34.8363 34.8261 44.8839 22.4354 44.8839C10.0447 44.8839 0 34.8363 0 22.442C0 10.0476 10.0447 0 22.4354 0ZM34.6075 13.2118C36.0059 14.2022 36.3858 16.0867 36.5624 17.7914C36.8856 20.9312 36.8887 24.1025 36.5734 27.2438C36.4442 28.5385 36.225 29.9057 35.3721 30.8882C34.5271 31.8628 33.2738 32.2397 31.959 32.3816C31.2905 32.4541 30.6063 32.4667 29.9505 32.4652C24.8347 32.462 19.7189 32.4573 14.6047 32.4526C12.9935 32.451 11.2404 32.4005 9.99814 31.3771C8.59662 30.2211 8.30497 28.2168 8.18989 26.4033C8.03381 23.9179 8.01962 21.4247 8.15047 18.9379C8.22142 17.5722 8.34438 16.1734 8.93242 14.9386C9.3565 14.0508 10.0612 13.2528 10.9614 12.8334C11.8719 12.4088 12.8194 12.4184 13.7923 12.4282C13.9396 12.4297 14.0874 12.4312 14.2358 12.4312C15.5865 12.4297 16.9371 12.4285 18.2878 12.4273C19.6393 12.4261 20.9908 12.4249 22.3423 12.4234C23.4664 12.4227 24.5908 12.4216 25.7153 12.4205C27.4009 12.4187 29.0867 12.417 30.7719 12.417C32.1009 12.4155 33.5245 12.4439 34.6075 13.2118ZM19.3847 18.0374V26.8448L27.0087 22.4403L19.3847 18.0374Z" fill="url(#paint0_linear_135_238)" />
                                <defs>
                                    <linearGradient id="paint0_linear_135_238" x1="0" y1="22.442" x2="44.8707" y2="22.442" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#212876" />
                                        <stop offset="1" stopColor="#009182" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </a>
                        <a href="https://www.facebook.com/people/Tejoparty/61557751929687/?is_tour_dismissed" className="hover:opacity-80">
                            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 46 46" fill="none">
                                <path fillRule="evenodd" clipRule="evenodd" d="M26.5017 44.7956C37.4443 43.2707 45.8676 33.8735 45.8676 22.5066H45.8707C45.8707 10.0769 35.7968 0 23.3707 0C10.9446 0 0.870728 10.0769 0.870728 22.5066C0.870728 33.7079 9.05283 42.9995 19.7652 44.7247C20.9382 44.9139 22.1426 45.0117 23.3692 45.0117C24.4317 45.0117 25.4785 44.9376 26.5017 44.7956ZM26.4591 17.7789V12.876L26.4607 12.8745C26.4607 11.7028 27.4113 10.7519 28.5826 10.7519H32.5239V5.04004H26.4922C26.4867 5.04004 26.4815 5.04083 26.4764 5.04162C26.4713 5.04241 26.4662 5.0432 26.4607 5.0432V5.04004C22.7385 5.04004 19.7226 8.05838 19.7226 11.7801V17.7789H14.1307V24.3833H19.7226V39.5286C20.8956 39.7178 22.1 39.8156 23.3265 39.8156C24.3891 39.8156 25.4359 39.7414 26.4591 39.5995V24.3833H31.5623L32.5223 17.7789H26.4591Z" fill="url(#paint0_linear_135_222)" />
                                <defs>
                                    <linearGradient id="paint0_linear_135_222" x1="0.870728" y1="22.5058" x2="45.8707" y2="22.5058" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#212876" />
                                        <stop offset="1" stopColor="#009182" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </a>
                        <a href="https://www.instagram.com/tejoparty/" className="hover:opacity-80">
                            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 46 46" fill="none">
                                <path fillRule="evenodd" clipRule="evenodd" d="M23.3187 0H23.4212C35.8188 0 45.8692 10.0533 45.8692 22.4546V22.5571C45.8692 34.9584 35.8188 45.0117 23.4212 45.0117H23.3187C10.921 45.0117 0.870728 34.9584 0.870728 22.5571V22.4546C0.870728 10.0533 10.921 0 23.3187 0ZM16.4088 9.1582H30.3326C34.1793 9.1582 37.3087 12.2885 37.3087 16.1363V28.8783C37.3087 32.7261 34.1793 35.8564 30.3326 35.8564H16.4088C12.5621 35.8564 9.43274 32.7261 9.43274 28.8783V16.1363C9.43274 12.2885 12.5621 9.1582 16.4088 9.1582ZM16.4088 11.6199C13.9195 11.6199 11.8937 13.6463 11.8937 16.1363V28.8783C11.8937 31.3684 13.9195 33.3948 16.4088 33.3948H30.3326C32.8219 33.3948 34.8477 31.3684 34.8477 28.8783V16.1363C34.8477 13.6463 32.8219 11.6199 30.3326 11.6199H16.4088ZM23.3709 28.9964C26.948 28.9964 29.8598 26.0853 29.8598 22.5055C29.8598 18.9258 26.9496 16.0147 23.3709 16.0147C19.7922 16.0147 16.882 18.9258 16.882 22.5055C16.882 26.0853 19.7922 28.9964 23.3709 28.9964ZM23.3709 18.4779C25.5922 18.4779 27.3989 20.2852 27.3989 22.5071C27.3989 24.7291 25.5922 26.5363 23.3709 26.5363C21.1496 26.5363 19.3429 24.7291 19.3429 22.5071C19.3429 20.2852 21.1496 18.4779 23.3709 18.4779ZM32.2087 15.3147C32.2087 16.2798 31.4236 17.0636 30.4603 17.0636C29.4955 17.0636 28.712 16.2798 28.712 15.3147C28.712 14.3496 29.4955 13.5658 30.4603 13.5658C31.4252 13.5658 32.2087 14.3496 32.2087 15.3147Z" fill="url(#paint0_linear_135_226)" />
                                <defs>
                                    <linearGradient id="paint0_linear_135_226" x1="0.870728" y1="22.5058" x2="45.8692" y2="22.5058" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#212876" />
                                        <stop offset="1" stopColor="#009182" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </a>
                    </div>
                    <p>{data.copywrite}</p>
                </div>
            </div>
        </>
    )
}

export default Footer