const Button = ({ data }) => {
    return (
        <>
            {data.type === "button" ? <a href={data?.link} className="bg-[#55BF88] p-3 py-2 rounded-[4rem] flex w-fit z-[100]">
                <button className="flex  items-center gap-2 text-[1.1rem] font-[200]">
                    {data.icon && <svg className="rounded-[50%]" height="31" width="30" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g filter="url(#filter0_ii_75_761)">
                            <g clipPath="url(#clip0_75_761)">
                                <path d="M2.38123 0.428589V18.8377H9.09713L15 8.61041H30V0.428589H2.38123Z" fill="#DB4437" />
                                <path d="M2.38123 0.428589V18.8377H9.09713L15 8.61041H30V0.428589H2.38123Z" fill="url(#paint0_linear_75_761)" />
                                <path d="M9.25562 18.7695L2.46813 7.12744L2.36926 7.2979L9.10903 18.8547L9.25562 18.7695Z" fill="black" fillOpacity="0.15" />
                                <path d="M0 30.4286H14.279L20.9062 23.8013V18.8377H9.09375L0 3.23767V30.4286Z" fill="#0F9D58" />
                                <path d="M0 30.4286H14.279L20.9062 23.8013V18.8377H9.09375L0 3.23767V30.4286Z" fill="url(#paint1_linear_75_761)" />
                                <path d="M20.7614 19.0593L20.6199 18.9775L14.0745 30.4235H14.2705L20.7648 19.0644L20.7614 19.0593Z" fill="#263238" fillOpacity="0.15" />
                                <path d="M15 8.61041L20.9062 18.8377L14.2789 30.4286H30V8.61041H15Z" fill="#FFCD40" />
                                <path d="M15 8.61041L20.9062 18.8377L14.2789 30.4286H30V8.61041H15Z" fill="url(#paint2_linear_75_761)" />
                                <path d="M15 8.61041L20.9062 18.8377L14.2789 30.4286H30V8.61041H15Z" fill="#FFCD40" />
                                <path d="M15 8.61041L20.9062 18.8377L14.2789 30.4286H30V8.61041H15Z" fill="url(#paint3_linear_75_761)" />
                                <path d="M2.38123 0.428589V18.8377H9.09713L15 8.61041H30V0.428589H2.38123Z" fill="#DB4437" />
                                <path d="M2.38123 0.428589V18.8377H9.09713L15 8.61041H30V0.428589H2.38123Z" fill="url(#paint4_linear_75_761)" />
                                <path d="M15 8.61041V12.1814L28.3636 8.61041H15Z" fill="url(#paint5_radial_75_761)" />
                                <path d="M0 30.4286H14.279L17.8977 24.2922L20.9062 18.8377H9.09375L0 3.23767V30.4286Z" fill="#0F9D58" />
                                <path d="M0 30.4286H14.279L18.1534 23.6956L20.9062 18.8377H9.09375L0 3.23767V30.4286Z" fill="url(#paint6_linear_75_761)" />
                                <path d="M2.38123 7.32349L12.1397 17.0803L9.09543 18.8377L2.38123 7.32349Z" fill="url(#paint7_radial_75_761)" />
                                <path d="M14.2893 30.4115L17.862 17.082L20.9064 18.8377L14.2893 30.4115Z" fill="url(#paint8_radial_75_761)" />
                                <path d="M14.9999 22.2468C18.7655 22.2468 21.8181 19.1942 21.8181 15.4286C21.8181 11.663 18.7655 8.61041 14.9999 8.61041C11.2344 8.61041 8.18176 11.663 8.18176 15.4286C8.18176 19.1942 11.2344 22.2468 14.9999 22.2468Z" fill="#F1F1F1" />
                                <path d="M15 20.8832C18.0124 20.8832 20.4545 18.4411 20.4545 15.4286C20.4545 12.4161 18.0124 9.97406 15 9.97406C11.9875 9.97406 9.54541 12.4161 9.54541 15.4286C9.54541 18.4411 11.9875 20.8832 15 20.8832Z" fill="#4285F4" />
                                <path d="M14.9999 8.43994C11.2329 8.43994 8.18176 11.4911 8.18176 15.2581V15.4286C8.18176 11.6615 11.2329 8.6104 14.9999 8.6104H29.9999V8.43994H14.9999Z" fill="black" fillOpacity="0.2" />
                                <path d="M20.8977 18.8377C19.7182 20.8729 17.5227 22.2468 15 22.2468C12.4773 22.2468 10.2784 20.8729 9.10227 18.8377H9.09546L0 3.23767V3.40813L9.10227 19.0081C10.2818 21.0434 12.4773 22.4172 15 22.4172C17.5227 22.4172 19.7182 21.0451 20.8977 19.0081H20.9062V18.8377H20.896H20.8977Z" fill="white" fillOpacity="0.1" />
                                <path opacity="0.1" d="M15.1704 8.61041C15.1415 8.61041 15.1142 8.61382 15.0852 8.61553C18.8113 8.66155 21.8182 11.6922 21.8182 15.4286C21.8182 19.165 18.8113 22.1956 15.0852 22.2417C15.1142 22.2417 15.1415 22.2468 15.1704 22.2468C18.9375 22.2468 21.9886 19.1956 21.9886 15.4286C21.9886 11.6615 18.9375 8.61041 15.1704 8.61041Z" fill="black" />
                                <path d="M20.9659 19.0593C21.5454 18.057 21.8812 16.898 21.8812 15.657C21.8816 14.9578 21.7741 14.2627 21.5625 13.5963C21.7244 14.1792 21.8181 14.7894 21.8181 15.4252C21.8181 16.6661 21.4824 17.8252 20.9028 18.8275L20.9062 18.8343L14.2789 30.4252H14.4767L20.9659 19.0593Z" fill="white" fillOpacity="0.2" />
                                <path d="M15 0.599043C23.2551 0.599043 29.9523 7.26893 30 15.5138C30 15.4848 30.0017 15.4576 30.0017 15.4286C30.0017 7.1445 23.2858 0.428589 15.0017 0.428589C6.71762 0.428589 0 7.1445 0 15.4286C0 15.4576 0.00170458 15.4848 0.00170458 15.5138C0.0477273 7.26893 6.74489 0.599043 15 0.599043Z" fill="white" fillOpacity="0.2" />
                                <path d="M15 30.2581C23.2551 30.2581 29.9523 23.5882 30 15.3433C30 15.3723 30.0017 15.3996 30.0017 15.4286C30.0017 23.7126 23.2858 30.4285 15.0017 30.4285C6.71762 30.4285 0 23.7126 0 15.4286C0 15.3996 0.00170458 15.3723 0.00170458 15.3433C0.0477273 23.5882 6.74489 30.2581 15.0017 30.2581H15Z" fill="black" fillOpacity="0.15" />
                            </g>
                        </g>
                        <defs>
                            <filter id="filter0_ii_75_761" x="0" y="0.0756477" width="30" height="30.7059" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                <feOffset dy="0.352941" />
                                <feGaussianBlur stdDeviation="0.352941" />
                                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0" />
                                <feBlend mode="normal" in2="shape" result="effect1_innerShadow_75_761" />
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                <feOffset dy="-0.352941" />
                                <feGaussianBlur stdDeviation="0.352941" />
                                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" />
                                <feBlend mode="normal" in2="effect1_innerShadow_75_761" result="effect2_innerShadow_75_761" />
                            </filter>
                            <linearGradient id="paint0_linear_75_761" x1="3.63748" y1="11.8525" x2="12.5863" y2="6.62461" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#A52714" stopOpacity="0.6" />
                                <stop offset="0.66" stopColor="#A52714" stopOpacity="0" />
                            </linearGradient>
                            <linearGradient id="paint1_linear_75_761" x1="17.5398" y1="27.1047" x2="7.59205" y2="21.2752" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#055524" stopOpacity="0.4" />
                                <stop offset="0.33" stopColor="#055524" stopOpacity="0" />
                            </linearGradient>
                            <linearGradient id="paint2_linear_75_761" x1="19.4147" y1="7.55359" x2="21.9204" y2="18.5138" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#EA6100" stopOpacity="0.3" />
                                <stop offset="0.66" stopColor="#EA6100" stopOpacity="0" />
                            </linearGradient>
                            <linearGradient id="paint3_linear_75_761" x1="19.4147" y1="7.55359" x2="21.9204" y2="18.5138" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#EA6100" stopOpacity="0.3" />
                                <stop offset="0.66" stopColor="#EA6100" stopOpacity="0" />
                            </linearGradient>
                            <linearGradient id="paint4_linear_75_761" x1="3.63748" y1="11.8525" x2="12.5863" y2="6.62461" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#A52714" stopOpacity="0.6" />
                                <stop offset="0.66" stopColor="#A52714" stopOpacity="0" />
                            </linearGradient>
                            <radialGradient id="paint5_radial_75_761" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(14.3523 8.60189) scale(14.3318 14.3318)">
                                <stop stopColor="#3E2723" stopOpacity="0.2" />
                                <stop offset="1" stopColor="#3E2723" stopOpacity="0" />
                            </radialGradient>
                            <linearGradient id="paint6_linear_75_761" x1="17.5398" y1="27.1047" x2="7.59205" y2="21.2752" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#055524" stopOpacity="0.4" />
                                <stop offset="0.33" stopColor="#055524" stopOpacity="0" />
                            </linearGradient>
                            <radialGradient id="paint7_radial_75_761" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(2.36929 7.33542) scale(13.3023 13.3023)">
                                <stop stopColor="#3E2723" stopOpacity="0.2" />
                                <stop offset="1" stopColor="#3E2723" stopOpacity="0" />
                            </radialGradient>
                            <radialGradient id="paint8_radial_75_761" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(14.966 15.4524) scale(14.9778 14.9778)">
                                <stop stopColor="#263238" stopOpacity="0.2" />
                                <stop offset="1" stopColor="#263238" stopOpacity="0" />
                            </radialGradient>
                            <clipPath id="clip0_75_761">
                                <rect y="0.428589" width="30" height="30" rx="15" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>}
                    <span className="text-white w-fit">{data.text}</span>
                </button>
            </a> : <div className="bg-[#55BF88] p-3 py-2 rounded-[4rem] flex w-fit z-[100]">
                <button className="flex  items-center gap-2 text-[1.1rem] font-[200]">
                    <span className="text-white w-fit">{data.text}</span>
                </button>
            </div>}
        </>
    )
}

export default Button;