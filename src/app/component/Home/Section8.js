"use client"
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';

const Section8 = ({ data }) => {
    const { ref, inView } = useInView();

    return (
        <div className="bg-gradient-to-b  from-[#FFFFFF] to-[#B6F1F0]">
            <div className="flex flex-col md:flex-row md:pl-28 py-10 gap-10">
                <div className="md:w-[70%] flex flex-col gap-16 items-center">
                    <h2 className="font-extrabold text-center md:text-left text-[3.5rem] font-[#232323]">
                        {data.heading}
                        <span className="uppercase inline-block text-transparent bg-clip-text bg-gradient-to-r  from-[#212876] to-[#009082] font-extrabold text-[3.5rem]">{data.gradientText}</span>
                    </h2>
                    <p className="text-xl font-light w-[80%] md:w-[85%]" dangerouslySetInnerHTML={{ __html: `<span>${data?.text}</span>` }}></p>
                </div>
                <div ref={ref} className="w-[50%] m-auto" >
                    <motion.svg
                        initial={{ opacity: 0 }}
                        animate={{
                            y: inView ? [-500, 150, 0] : 0,
                            opacity: 1,
                            transition: { duration: 0.3, ease: "easeInOut" }
                        }}
                        className="m-auto" width="50%" viewBox="0 0 115 107" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M36.4921 83.0228C30.3356 80.5201 24.9052 76.5131 20.6982 71.3685C16.4912 66.2239 13.6418 60.1062 12.4111 53.5754C11.1803 47.0446 11.6075 40.3094 13.6535 33.9864C15.6994 27.6634 19.2988 21.9547 24.1221 17.3828L24.2221 16.1428C24.3132 14.9679 24.3132 13.7877 24.2221 12.6128C14.4921 20.5428 8.00208 31.6128 7.05208 43.8328C5.60208 62.6328 17.5921 78.8328 35.7721 85.5028L36.4921 83.0228Z" fill="url(#paint0_linear_222_994)" />
                        <path d="M32.1021 9.99268C32.7021 10.4427 33.1021 10.7427 33.3321 10.8627L33.7421 10.6327C34.1221 10.4327 34.5721 10.1827 35.1821 9.91266C37.541 8.83702 39.9949 7.98335 42.5121 7.36267C43.7812 5.78895 44.6892 3.9558 45.1721 1.99268C39.9108 3.398 34.8792 5.55347 30.2321 8.3927C30.8188 8.96748 31.4435 9.502 32.1021 9.99268Z" fill="url(#paint1_linear_222_994)" />
                        <path d="M60.8222 0.00278783C57.4496 -0.0300694 54.0805 0.227568 50.7522 0.772807C50.1922 1.89281 49.8821 3.51282 50.2121 6.28282C50.8521 6.28282 51.4721 6.28282 52.0921 6.28282C62.7479 6.24027 72.9848 10.4291 80.5542 17.9291C88.1237 25.4292 92.4066 35.6271 92.4621 46.2828C92.4621 66.4628 79.3821 78.8628 66.9821 83.8228L67.9821 87.2828C89.4321 82.1928 106.182 65.2828 107.752 44.9728C109.612 20.3828 88.5922 0.292788 60.8222 0.00278783Z" fill="url(#paint2_linear_222_994)" />
                        <path d="M58.4021 85.9927C56.6782 86.2221 54.9412 86.339 53.2021 86.3428C50.4635 86.3237 47.7323 86.0559 45.0421 85.5427L43.4321 87.6627C46.8894 88.3626 50.405 88.7343 53.9321 88.7728C56.056 88.7885 58.1792 88.6883 60.2921 88.4727L58.4021 85.9927Z" fill="url(#paint3_linear_222_994)" />
                        <path d="M91.1621 46.1926C91.1621 46.1917 91.1621 46.1907 91.1621 46.1898C91.1433 68.4669 74.2647 81.2741 60.9021 83.9426C62.4696 83.9212 64.0336 83.7875 65.5821 83.5426L69.3621 97.2626L59.4421 84.2626C54.537 85.0056 49.5371 84.8395 44.6921 83.7726L34.6121 97.0826L38.5521 82.7526C39.5721 82.8826 40.6221 83.0026 41.6221 83.0026C34.58 81.0469 28.2472 77.1111 23.3759 71.6626C18.5046 66.2142 15.2994 59.4821 14.1411 52.2659C12.9828 45.0496 13.9201 37.6526 16.8415 30.9533C19.763 24.254 24.5458 18.5339 30.6221 14.4726C32.8085 13.1138 34.021 12.4481 36.1721 11.3526C38.6114 10.2372 41.1578 9.37275 43.7721 8.77262L46.0821 8.34263C48.1738 8.02352 50.2862 7.85969 52.4021 7.85258C57.4646 7.82493 62.4829 8.79471 67.1706 10.7065C71.8583 12.6183 76.1235 15.4348 79.7227 18.995C83.3219 22.5552 86.1846 26.7895 88.1474 31.456C90.1098 36.1217 91.1342 41.1282 91.1621 46.1898C91.1621 46.1774 91.1621 46.165 91.1621 46.1526V46.1926Z" fill="url(#paint4_linear_222_994)" />
                        <path d="M36.4921 30.7426C32.9621 38.0026 32.5821 53.0026 35.8921 59.8026C37.0921 62.2626 38.8921 63.9426 41.7821 64.1326C49.5021 64.6326 64.6321 56.9626 69.4821 50.3226C71.7521 47.2326 71.7821 44.5226 69.5421 41.3226C65.0021 34.9626 52.5421 27.3226 44.8121 26.4126C40.8121 25.9226 38.2821 27.1326 36.4921 30.7226V30.7426Z" fill="#00883E" />
                        <path d="M30.4021 21.7728C31.7021 20.6428 32.8821 19.6528 34.2821 18.6128C34.6282 18.3476 35.0655 18.2307 35.4978 18.2879C35.93 18.3451 36.3219 18.5717 36.5871 18.9178C36.8523 19.2639 36.9692 19.7012 36.912 20.1335C36.8548 20.5657 36.6282 20.9576 36.2821 21.2228C35.6321 21.7128 32.6621 22.8828 31.5721 23.4328C31.352 23.5853 31.0803 23.6441 30.8168 23.5963C30.5533 23.5485 30.3196 23.3979 30.1671 23.1778C30.0146 22.9577 29.9558 22.686 30.0036 22.4225C30.0514 22.159 30.202 21.9253 30.4221 21.7728H30.4021Z" fill="#00883E" />
                        <path d="M18.1121 46.8928C18.1562 44.3379 18.4442 41.793 18.9721 39.2928C19.6641 36.3665 20.772 33.5546 22.2621 30.9428C23.6203 28.7234 25.1767 26.6316 26.9121 24.6928C27.008 24.5822 27.1255 24.4925 27.2574 24.4291C27.3893 24.3657 27.5328 24.33 27.679 24.3243C27.8253 24.3186 27.9712 24.343 28.1076 24.3959C28.2441 24.4488 28.3682 24.5291 28.4724 24.6319C28.5765 24.7347 28.6585 24.8578 28.7132 24.9936C28.7679 25.1293 28.7942 25.2748 28.7904 25.4211C28.7867 25.5674 28.7529 25.7114 28.6913 25.8441C28.6297 25.9769 28.5415 26.0955 28.4321 26.1928C26.7143 27.9307 25.1672 29.8294 23.8121 31.8628C22.2756 34.2662 21.0966 36.8802 20.3121 39.6228C19.674 42.0204 19.2787 44.4761 19.1321 46.9528C19.1029 47.0678 19.0345 47.1689 18.9387 47.2389C18.8429 47.3089 18.7257 47.3432 18.6073 47.3361C18.4889 47.329 18.3767 47.2809 18.29 47.2C18.2032 47.1191 18.1474 47.0105 18.1321 46.8928H18.1121Z" fill="#00883E" />
                        <path d="M41.1921 29.3828C33.7221 31.4928 32.7621 58.1528 38.6221 63.7628C44.2021 69.1028 69.9921 55.5727 69.9921 47.4727C69.9921 39.6827 49.0421 27.1728 41.1921 29.3828Z" fill="white" />
                        <path d="M29.4921 21.7728C30.7921 20.6428 31.9721 19.6528 33.3621 18.6128C33.5335 18.4814 33.7291 18.3852 33.9376 18.3294C34.1462 18.2737 34.3637 18.2596 34.5778 18.2879C34.7918 18.3162 34.9982 18.3864 35.1851 18.4945C35.372 18.6026 35.5358 18.7464 35.6671 18.9178C35.7985 19.0891 35.8947 19.2847 35.9505 19.4933C36.0062 19.7019 36.0203 19.9194 35.992 20.1335C35.9637 20.3475 35.8935 20.5539 35.7854 20.7408C35.6773 20.9277 35.5335 21.0914 35.3621 21.2228C34.7121 21.7128 31.7421 22.8828 30.6521 23.4328C30.432 23.584 30.1608 23.6415 29.8983 23.5928C29.6357 23.544 29.4033 23.3929 29.2521 23.1728C29.101 22.9526 29.0434 22.6815 29.0922 22.4189C29.1409 22.1564 29.292 21.924 29.5121 21.7728H29.4921Z" fill="white" />
                        <path d="M17.2121 46.8928C17.2546 44.3373 17.546 41.7919 18.0821 39.2928C18.7661 36.3656 19.871 33.553 21.3621 30.9428C22.7203 28.7234 24.2766 26.6316 26.0121 24.6928C26.1079 24.5822 26.2254 24.4925 26.3574 24.4291C26.4893 24.3657 26.6328 24.33 26.779 24.3243C26.9253 24.3186 27.0711 24.343 27.2076 24.3959C27.344 24.4488 27.4682 24.5291 27.5723 24.6319C27.6765 24.7347 27.7585 24.8578 27.8132 24.9936C27.8679 25.1293 27.8942 25.2748 27.8904 25.4211C27.8866 25.5674 27.8529 25.7114 27.7913 25.8441C27.7296 25.9769 27.6414 26.0955 27.5321 26.1928C25.8143 27.9307 24.2672 29.8294 22.9121 31.8628C21.3755 34.2662 20.1965 36.8802 19.4121 39.6228C18.7786 42.0214 18.3833 44.4766 18.2321 46.9528C18.2028 47.0678 18.1345 47.1689 18.0387 47.2389C17.9429 47.3089 17.8257 47.3432 17.7073 47.3361C17.5889 47.329 17.4767 47.2809 17.3899 47.2C17.3032 47.1191 17.2474 47.0105 17.2321 46.8928H17.2121Z" fill="white" />
                        <path d="M101.972 34.0729C101.982 34.7577 101.788 35.43 101.415 36.0041C101.041 36.5782 100.505 37.0281 99.8751 37.2966C99.2451 37.5652 98.5493 37.6401 97.8766 37.5119C97.2038 37.3836 96.5844 37.0581 96.0973 36.5766C95.6102 36.0952 95.2774 35.4797 95.1413 34.8084C95.0052 34.1372 95.072 33.4407 95.3331 32.8075C95.5942 32.1744 96.0379 31.6332 96.6076 31.2531C97.1773 30.8729 97.8473 30.671 98.5321 30.6729C99.4384 30.6702 100.309 31.0263 100.953 31.6633C101.598 32.3004 101.964 33.1667 101.972 34.0729Z" fill="white" />
                        <path d="M101.842 44.1128C101.846 44.5547 101.719 44.9878 101.476 45.3571C101.233 45.7265 100.887 46.0154 100.479 46.1873C100.072 46.3591 99.6233 46.4062 99.1894 46.3224C98.7556 46.2386 98.3563 46.0278 98.0425 45.7167C97.7286 45.4057 97.5142 45.0084 97.4265 44.5753C97.3389 44.1421 97.3819 43.6928 97.55 43.2841C97.7182 42.8755 98.004 42.526 98.3711 42.2801C98.7383 42.0342 99.1702 41.9028 99.6121 41.9028C100.2 41.9028 100.764 42.135 101.182 42.5489C101.6 42.9628 101.837 43.5248 101.842 44.1128Z" fill="white" />
                        <path d="M100.012 52.2028C100.018 52.5153 99.9306 52.8226 99.7608 53.0851C99.5911 53.3476 99.3468 53.5535 99.0593 53.6763C98.7719 53.7992 98.4543 53.8334 98.1472 53.7746C97.8401 53.7158 97.5576 53.5667 97.3359 53.3464C97.1141 53.126 96.9632 52.8445 96.9024 52.5378C96.8416 52.2312 96.8738 51.9133 96.9948 51.6251C97.1157 51.3368 97.32 51.0912 97.5815 50.9197C97.8429 50.7483 98.1495 50.6588 98.4621 50.6627C98.8715 50.6627 99.2642 50.8247 99.5546 51.1132C99.845 51.4017 100.009 51.7934 100.012 52.2028Z" fill="white" />
                        <g opacity="0.27">
                            <g style={{ mixBlendMode: 'multiply' }} opacity="0.02">
                                <path d="M114.002 98.2527C114.272 102.833 89.0921 106.613 57.7821 106.683C26.4721 106.753 0.872134 103.093 0.612134 98.5127C0.352134 93.9327 25.5221 90.1527 56.8321 90.0827C88.1421 90.0127 113.752 93.6727 114.002 98.2527Z" fill="#929497" />
                            </g>
                            <g style={{ mixBlendMode: 'multiply' }} opacity="0.03">
                                <path d="M113.212 98.2627C113.472 102.783 88.6121 106.503 57.6821 106.583C26.7521 106.663 1.48214 103.043 1.22214 98.5127C0.962144 93.9827 25.8221 90.2727 56.7521 90.1927C87.6821 90.1127 112.962 93.7327 113.212 98.2627Z" fill="#909295" />
                            </g>
                            <g style={{ mixBlendMode: 'multiply' }} opacity="0.05">
                                <path d="M112.402 98.2627C112.662 102.733 88.1021 106.403 57.5621 106.473C27.0221 106.543 2.06212 102.983 1.80212 98.4727C1.54212 93.9627 26.1021 90.3327 56.6421 90.2627C87.1821 90.1927 112.172 93.8027 112.402 98.2627Z" fill="#8F9194" />
                            </g>
                            <g style={{ mixBlendMode: 'multiply' }} opacity="0.06">
                                <path d="M111.632 98.2727C111.882 102.673 87.6321 106.273 57.4821 106.373C27.3321 106.473 2.68212 102.923 2.40212 98.5027C2.12212 94.0827 26.4021 90.5027 56.5421 90.4027C86.6821 90.3027 111.402 93.8627 111.632 98.2727Z" fill="#8D8F92" />
                            </g>
                            <g style={{ mixBlendMode: 'multiply' }} opacity="0.08">
                                <path d="M110.832 98.2727C111.082 102.623 87.1521 106.203 57.3821 106.273C27.6121 106.343 3.29213 102.883 3.04213 98.5327C2.79213 94.1827 26.7221 90.6127 56.4921 90.5327C86.2621 90.4527 110.592 93.9327 110.832 98.2727Z" fill="#8C8E91" />
                            </g>
                            <g style={{ mixBlendMode: 'multiply' }} opacity="0.09">
                                <path d="M110.042 98.2827C110.292 102.573 86.6721 106.093 57.2821 106.163C27.8921 106.233 3.89214 102.813 3.65214 98.5327C3.41214 94.2527 27.0221 90.7127 56.4021 90.6427C85.7821 90.5727 109.802 93.9927 110.042 98.2827Z" fill="#8B8D8F" />
                            </g>
                            <g style={{ mixBlendMode: 'multiply' }} opacity="0.11">
                                <path d="M109.252 98.2927C109.492 102.513 86.1821 105.993 57.1921 106.063C28.2021 106.133 4.49214 102.753 4.25214 98.5327C4.01214 94.3127 27.3221 90.8227 56.3121 90.7627C85.3021 90.7027 109.012 94.0627 109.252 98.2927Z" fill="#898B8E" />
                            </g>
                            <g style={{ mixBlendMode: 'multiply' }} opacity="0.12">
                                <path d="M108.462 98.2927C108.702 102.463 85.7021 105.893 57.0921 105.953C28.4821 106.013 5.09212 102.703 4.86212 98.5327C4.63212 94.3627 27.6221 90.9327 56.2321 90.8727C84.8421 90.8127 108.222 94.1327 108.462 98.2927Z" fill="#888A8C" />
                            </g>
                            <g style={{ mixBlendMode: 'multiply' }} opacity="0.14">
                                <path d="M107.672 98.3027C107.902 102.413 85.2121 105.783 56.9921 105.853C28.7721 105.923 5.70213 102.643 5.47213 98.5327C5.24213 94.4227 27.9221 91.0527 56.1421 90.9827C84.3621 90.9127 107.402 94.1927 107.672 98.3027Z" fill="#86888B" />
                            </g>
                            <g style={{ mixBlendMode: 'multiply' }} opacity="0.15">
                                <path d="M106.872 98.3127C107.112 102.313 84.7321 105.683 56.8721 105.753C29.0121 105.823 6.28211 102.583 6.05211 98.5427C5.82211 94.5027 28.2021 91.1627 56.0521 91.0927C83.9021 91.0227 106.642 94.2627 106.872 98.3127Z" fill="#858789" />
                            </g>
                            <g style={{ mixBlendMode: 'multiply' }} opacity="0.17">
                                <path d="M106.082 98.3127C106.312 102.313 84.2422 105.583 56.7922 105.643C29.3422 105.703 6.91214 102.503 6.68214 98.5027C6.45214 94.5027 28.5221 91.2326 55.9721 91.1726C83.4221 91.1126 105.862 94.3227 106.082 98.3127Z" fill="#838588" />
                            </g>
                            <g style={{ mixBlendMode: 'multiply' }} opacity="0.18">
                                <path d="M105.292 98.3227C105.512 102.243 83.7621 105.483 56.6921 105.543C29.6221 105.603 7.51215 102.473 7.29215 98.5427C7.07215 94.6127 28.8221 91.3827 55.8821 91.3227C82.9421 91.2627 105.072 94.3927 105.292 98.3227Z" fill="#828486" />
                            </g>
                            <g style={{ mixBlendMode: 'multiply' }} opacity="0.2">
                                <path d="M104.502 98.3227C104.722 102.193 83.2721 105.323 56.5921 105.443C29.9121 105.563 8.12212 102.443 7.89212 98.5527C7.66212 94.6627 29.1221 91.4927 55.7921 91.4327C82.4621 91.3727 104.282 94.5027 104.502 98.3227Z" fill="#818285" />
                            </g>
                            <g style={{ mixBlendMode: 'multiply' }} opacity="0.21">
                                <path d="M103.702 98.3327C103.922 102.143 82.7821 105.273 56.4921 105.333C30.2021 105.393 8.72212 102.333 8.49212 98.5527C8.26212 94.7727 29.4121 91.6027 55.7021 91.5527C81.9921 91.5027 103.492 94.5027 103.702 98.3327Z" fill="#7F8184" />
                            </g>
                            <g style={{ mixBlendMode: 'multiply' }} opacity="0.23">
                                <path d="M102.912 98.3427C103.132 102.083 82.3021 105.173 56.3921 105.233C30.4821 105.293 9.32211 102.303 9.11211 98.5526C8.90211 94.8026 29.7221 91.7226 55.6221 91.6626C81.5221 91.6026 102.702 94.5927 102.912 98.3427Z" fill="#7E7F82" />
                            </g>
                            <g style={{ mixBlendMode: 'multiply' }} opacity="0.24">
                                <path d="M102.122 98.3427C102.332 102.033 81.8121 105.073 56.3021 105.133C30.7921 105.193 9.93214 102.243 9.71214 98.5527C9.49214 94.8627 30.0221 91.8327 55.5321 91.7727C81.0421 91.7127 101.912 94.6527 102.122 98.3427Z" fill="#7C7E81" />
                            </g>
                            <g style={{ mixBlendMode: 'multiply' }} opacity="0.26">
                                <path d="M101.332 98.3527C101.532 101.983 81.3321 104.963 56.2021 105.023C31.0721 105.083 10.5321 102.193 10.3221 98.5627C10.1121 94.9327 30.3221 91.9427 55.4521 91.8827C80.5821 91.8227 101.122 94.7227 101.332 98.3527Z" fill="#7B7D7F" />
                            </g>
                            <g style={{ mixBlendMode: 'multiply' }} opacity="0.27">
                                <path d="M100.532 98.3527C100.742 101.923 80.8422 104.863 56.1022 104.923C31.3622 104.983 11.1021 102.133 10.9321 98.5627C10.7621 94.9927 30.6221 92.0527 55.3621 91.9927C80.1021 91.9327 100.332 94.7827 100.532 98.3527Z" fill="#797B7E" />
                            </g>
                            <g style={{ mixBlendMode: 'multiply' }} opacity="0.29">
                                <path d="M99.7421 98.3627C99.9421 101.873 80.3621 104.763 56.0021 104.823C31.6421 104.883 11.7421 102.073 11.5421 98.5627C11.3421 95.0527 30.9221 92.1627 55.2721 92.1127C79.6221 92.0627 99.5421 94.8527 99.7421 98.3627Z" fill="#787A7C" />
                            </g>
                            <g style={{ mixBlendMode: 'multiply' }} opacity="0.3">
                                <path d="M98.9521 98.3727C99.1521 101.823 79.8721 104.663 55.9021 104.713C31.9321 104.763 12.3421 102.023 12.1421 98.5727C11.9421 95.1227 31.2221 92.2727 55.1921 92.2227C79.1621 92.1727 98.7521 94.9227 98.9521 98.3727Z" fill="#77787B" />
                            </g>
                            <g style={{ mixBlendMode: 'multiply' }} opacity="0.32">
                                <path d="M98.1621 98.3727C98.3521 101.763 79.3921 104.553 55.8021 104.613C32.2121 104.673 12.9421 101.963 12.8021 98.6127C12.6621 95.2627 31.5721 92.4327 55.1521 92.3727C78.7321 92.3127 97.9721 94.9827 98.1621 98.3727Z" fill="#757779" />
                            </g>
                            <g style={{ mixBlendMode: 'multiply' }} opacity="0.33">
                                <path d="M97.4021 98.3827C97.6021 101.713 78.9421 104.453 55.7421 104.513C32.5421 104.573 13.5921 101.903 13.4021 98.5727C13.2121 95.2427 31.8621 92.5027 55.0521 92.4427C78.2421 92.3827 97.1821 95.0527 97.4021 98.3827Z" fill="#747578" />
                            </g>
                            <g style={{ mixBlendMode: 'multiply' }} opacity="0.35">
                                <path d="M96.5721 98.3827C96.7621 101.663 78.4221 104.383 55.5721 104.383C32.7221 104.383 14.1221 101.833 13.9321 98.5527C13.7421 95.2727 32.0921 92.5527 54.9321 92.5527C77.7721 92.5527 96.4021 95.1127 96.5721 98.3827Z" fill="#727476" />
                            </g>
                            <g style={{ mixBlendMode: 'multiply' }} opacity="0.36">
                                <path d="M95.7821 98.3927C95.9621 101.603 77.9321 104.253 55.5021 104.303C33.0721 104.353 14.7521 101.793 14.5721 98.5827C14.3921 95.3727 32.4221 92.7227 54.8421 92.6727C77.2621 92.6227 95.6021 95.1827 95.7821 98.3927Z" fill="#717275" />
                            </g>
                            <g style={{ mixBlendMode: 'multiply' }} opacity="0.38">
                                <path d="M94.9921 98.4027C95.1721 101.553 77.4521 104.143 55.4121 104.193C33.3721 104.243 15.3621 101.733 15.1821 98.5827C15.0021 95.4327 32.7221 92.8327 54.7521 92.7827C76.7821 92.7327 94.8121 95.2427 94.9921 98.4027Z" fill="#6F7173" />
                            </g>
                            <g style={{ mixBlendMode: 'multiply' }} opacity="0.39">
                                <path d="M94.2021 98.4027C94.3721 101.503 76.9621 104.043 55.3121 104.093C33.6621 104.143 15.9621 101.683 15.7821 98.5827C15.6021 95.4827 33.0221 92.9427 54.6721 92.8927C76.3221 92.8427 94.0221 95.3127 94.2021 98.4027Z" fill="#6E6F72" />
                            </g>
                            <g style={{ mixBlendMode: 'multiply' }} opacity="0.41">
                                <path d="M93.4021 98.4127C93.5821 101.413 76.4821 103.943 55.2121 103.993C33.9421 104.043 16.5621 101.623 16.3921 98.5927C16.2221 95.5627 33.3221 93.0627 54.5821 93.0127C75.8421 92.9627 93.2321 95.3827 93.4021 98.4127Z" fill="#6C6E70" />
                            </g>
                            <g style={{ mixBlendMode: 'multiply' }} opacity="0.42">
                                <path d="M92.6121 98.4126C92.7821 101.413 75.9921 103.843 55.1121 103.883C34.2321 103.923 17.1721 101.563 17.0021 98.5927C16.8321 95.6227 33.6221 93.1727 54.4921 93.1227C75.3621 93.0727 92.4021 95.4426 92.6121 98.4126Z" fill="#6B6C6E" />
                            </g>
                            <g style={{ mixBlendMode: 'multiply' }} opacity="0.44">
                                <path d="M91.8221 98.4227C91.9921 101.343 75.5121 103.733 55.0121 103.783C34.5121 103.833 17.7721 101.513 17.6021 98.5927C17.4321 95.6727 33.9221 93.2827 54.4121 93.2327C74.9021 93.1827 91.6521 95.5027 91.8221 98.4227Z" fill="#696A6D" />
                            </g>
                            <g style={{ mixBlendMode: 'multiply' }} opacity="0.45">
                                <path d="M91.0321 98.4327C91.1921 101.283 75.0322 103.633 54.9121 103.683C34.7921 103.733 18.4021 101.503 18.2121 98.5927C18.0221 95.6827 34.2122 93.3927 54.3222 93.3427C74.4322 93.2927 90.8621 95.5727 91.0321 98.4327Z" fill="#68696B" />
                            </g>
                            <g style={{ mixBlendMode: 'multiply' }} opacity="0.47">
                                <path d="M90.2321 98.4327C90.3921 101.233 74.5421 103.533 54.8121 103.573C35.0821 103.613 18.9821 101.393 18.8121 98.5727C18.6421 95.7527 34.5121 93.4727 54.2221 93.4327C73.9321 93.3927 90.0821 95.6427 90.2321 98.4327Z" fill="#66676A" />
                            </g>
                            <g style={{ mixBlendMode: 'multiply' }} opacity="0.48">
                                <path d="M89.4021 98.4427C89.5621 101.173 74.0121 103.443 54.6721 103.443C35.3321 103.443 19.5421 101.313 19.3821 98.5727C19.2221 95.8327 34.7821 93.5727 54.1121 93.5727C73.4421 93.5727 89.2921 95.7027 89.4021 98.4427Z" fill="#646668" />
                            </g>
                            <g style={{ mixBlendMode: 'multiply' }} opacity="0.5">
                                <path d="M88.6521 98.4427C88.8021 101.123 73.5621 103.323 54.6521 103.373C35.7421 103.423 20.2221 101.283 20.0721 98.6027C19.9221 95.9227 35.1621 93.7227 54.0721 93.6827C72.9821 93.6427 88.5021 95.7727 88.6521 98.4427Z" fill="#636466" />
                            </g>
                            <g style={{ mixBlendMode: 'multiply' }} opacity="0.52">
                                <path d="M87.8621 98.5027C88.0121 101.123 73.0821 103.273 54.5121 103.313C35.9421 103.353 20.7921 101.313 20.6421 98.6626C20.4921 96.0126 35.4221 93.8927 53.9721 93.8427C72.5221 93.7927 87.7121 95.8427 87.8621 98.5027Z" fill="#616265" />
                            </g>
                            <g style={{ mixBlendMode: 'multiply' }} opacity="0.53">
                                <path d="M87.0621 98.5027C87.2121 101.053 72.5921 103.163 54.4221 103.203C36.2521 103.243 21.4221 101.203 21.2521 98.6527C21.0821 96.1027 35.7221 93.9927 53.8921 93.9527C72.0621 93.9127 86.9221 95.9027 87.0621 98.5027Z" fill="#606163" />
                            </g>
                            <g style={{ mixBlendMode: 'multiply' }} opacity="0.55">
                                <path d="M86.2721 98.5027C86.4121 101.003 72.1122 103.053 54.3222 103.103C36.5322 103.153 21.9922 101.153 21.8522 98.6527C21.7122 96.1527 36.0221 94.1027 53.8021 94.0627C71.5821 94.0227 86.1321 95.9727 86.2721 98.5027Z" fill="#5E5F61" />
                            </g>
                            <g style={{ mixBlendMode: 'multiply' }} opacity="0.56">
                                <path d="M85.4821 98.5027C85.6221 100.943 71.6221 102.943 54.2221 102.983C36.8221 103.023 22.6021 101.083 22.4621 98.6527C22.3221 96.2227 36.3221 94.2027 53.7121 94.1627C71.1021 94.1227 85.3421 96.0327 85.4821 98.5027Z" fill="#5C5D60" />
                            </g>
                            <g style={{ mixBlendMode: 'multiply' }} opacity="0.58">
                                <path d="M84.6921 98.5027C84.8221 100.873 71.1421 102.833 54.1221 102.873C37.1021 102.913 23.2021 101.023 23.0721 98.6427C22.9421 96.2627 36.6221 94.3027 53.6321 94.2627C70.6421 94.2227 84.5521 96.1027 84.6921 98.5027Z" fill="#5B5C5E" />
                            </g>
                            <g style={{ mixBlendMode: 'multiply' }} opacity="0.59">
                                <path d="M83.8921 98.5027C84.0321 100.823 70.6521 102.733 54.0221 102.773C37.3921 102.813 23.8121 100.963 23.6721 98.6427C23.5321 96.3227 36.9221 94.4127 53.5421 94.3827C70.1621 94.3527 83.7621 96.1627 83.8921 98.5027Z" fill="#595A5C" />
                            </g>
                            <g style={{ mixBlendMode: 'multiply' }} opacity="0.61">
                                <path d="M83.1021 98.5027C83.2321 100.763 70.1721 102.613 53.9221 102.653C37.6721 102.693 24.4121 100.893 24.2821 98.6527C24.1521 96.4127 37.2221 94.5027 53.4521 94.5027C69.6821 94.5027 82.9721 96.2327 83.1021 98.5027Z" fill="#57585A" />
                            </g>
                            <g style={{ mixBlendMode: 'multiply' }} opacity="0.62">
                                <path d="M82.3121 98.5027C82.4421 100.703 69.6821 102.503 53.8221 102.503C37.9621 102.503 25.0121 100.793 24.8921 98.5927C24.7721 96.3927 37.5221 94.5927 53.3721 94.5927C69.2221 94.5927 82.1821 96.3027 82.3121 98.5027Z" fill="#565659" />
                            </g>
                            <g style={{ mixBlendMode: 'multiply' }} opacity="0.64">
                                <path d="M81.5221 98.5027C81.6421 100.643 69.2021 102.403 53.7221 102.433C38.2421 102.463 25.6221 100.773 25.4921 98.6327C25.3621 96.4927 37.8121 94.7327 53.2821 94.6927C68.7521 94.6527 81.4021 96.3627 81.5221 98.5027Z" fill="#545557" />
                            </g>
                            <g style={{ mixBlendMode: 'multiply' }} opacity="0.65">
                                <path d="M80.7221 98.5027C80.8421 100.583 68.7221 102.293 53.6221 102.323C38.5221 102.353 26.2221 100.703 26.1021 98.6227C25.9821 96.5427 38.1021 94.8326 53.1921 94.8026C68.2821 94.7726 80.6121 96.4327 80.7221 98.5027Z" fill="#525355" />
                            </g>
                            <g style={{ mixBlendMode: 'multiply' }} opacity="0.67">
                                <path d="M79.9321 98.5027C80.0521 100.503 68.2321 102.183 53.5321 102.223C38.8321 102.263 26.8221 100.653 26.7121 98.6327C26.6021 96.6127 38.4121 94.9426 53.1121 94.9126C67.8121 94.8826 79.8221 96.5027 79.9321 98.5027Z" fill="#515153" />
                            </g>
                            <g style={{ mixBlendMode: 'multiply' }} opacity="0.68">
                                <path d="M79.1421 98.5027C79.2521 100.503 67.7421 102.073 53.4321 102.103C39.1221 102.133 27.4321 100.583 27.3121 98.6227C27.1921 96.6627 38.7121 95.0427 53.0221 95.0127C67.3321 94.9827 79.0321 96.5627 79.1421 98.5027Z" fill="#4F4F51" />
                            </g>
                            <g style={{ mixBlendMode: 'multiply' }} opacity="0.7">
                                <path d="M78.4021 98.5027C78.5121 100.413 67.3121 101.973 53.4021 102.003C39.4921 102.033 28.1021 100.523 27.9921 98.6227C27.8821 96.7227 39.0821 95.1627 52.9921 95.1227C66.9021 95.0827 78.2421 96.6327 78.4021 98.5027Z" fill="#4D4D4F" />
                            </g>
                            <g style={{ mixBlendMode: 'multiply' }} opacity="0.71">
                                <path d="M77.5621 98.5027C77.6621 100.343 66.7721 101.863 53.2321 101.893C39.6921 101.923 28.6321 100.463 28.5321 98.6127C28.4321 96.7627 39.3122 95.2627 52.8522 95.2327C66.3922 95.2027 77.4521 96.6927 77.5621 98.5027Z" fill="#4B4B4D" />
                            </g>
                            <g style={{ mixBlendMode: 'multiply' }} opacity="0.73">
                                <path d="M76.7621 98.5027C76.8721 100.283 66.2921 101.743 53.1321 101.773C39.9721 101.803 29.2421 100.393 29.1321 98.6127C29.0221 96.8327 39.6121 95.3627 52.7621 95.3327C65.9121 95.3027 76.6621 96.7627 76.7621 98.5027Z" fill="#4A4A4C" />
                            </g>
                            <g style={{ mixBlendMode: 'multiply' }} opacity="0.74">
                                <path d="M75.9721 98.5027C76.0721 100.233 65.8021 101.643 53.0321 101.673C40.2621 101.703 29.8421 100.333 29.7421 98.6127C29.6421 96.8927 39.9121 95.5027 52.6821 95.5027C65.4521 95.5027 75.8721 96.8227 75.9721 98.5027Z" fill="#48484A" />
                            </g>
                            <g style={{ mixBlendMode: 'multiply' }} opacity="0.76">
                                <path d="M75.1821 98.5527C75.2721 100.213 65.3121 101.553 52.9321 101.613C40.5521 101.673 30.4421 100.313 30.3521 98.6127C30.2621 96.9127 40.2121 95.6127 52.5921 95.5527C64.9721 95.4927 75.0821 96.8927 75.1821 98.5527Z" fill="#464648" />
                            </g>
                            <g style={{ mixBlendMode: 'multiply' }} opacity="0.77">
                                <path d="M74.4021 98.5527C74.4921 100.163 64.8421 101.483 52.8421 101.553C40.8421 101.623 31.0622 100.313 30.9722 98.7127C30.8822 97.1127 40.5221 95.7827 52.5121 95.7627C64.5021 95.7427 74.2921 96.9527 74.4021 98.5527Z" fill="#444446" />
                            </g>
                            <g style={{ mixBlendMode: 'multiply' }} opacity="0.79">
                                <path d="M73.5921 98.5627C73.6821 100.103 64.3421 101.373 52.7321 101.403C41.1221 101.433 31.6521 100.203 31.5621 98.6626C31.4721 97.1226 40.8121 95.8527 52.4221 95.8227C64.0321 95.7927 73.5121 97.0227 73.5921 98.5627Z" fill="#424244" />
                            </g>
                            <g style={{ mixBlendMode: 'multiply' }} opacity="0.8">
                                <path d="M72.8021 98.5727C72.8921 100.053 63.8622 101.273 52.6322 101.303C41.4022 101.333 32.2521 100.143 32.1721 98.6627C32.0921 97.1827 41.1121 95.9627 52.3321 95.9327C63.5521 95.9027 72.7221 97.0927 72.8021 98.5727Z" fill="#404042" />
                            </g>
                            <g style={{ mixBlendMode: 'multiply' }} opacity="0.82">
                                <path d="M72.0121 98.5727C72.0921 100.003 63.3721 101.173 52.5421 101.193C41.7121 101.213 32.8621 100.093 32.7821 98.6627C32.7021 97.2327 41.4121 96.0727 52.2421 96.0427C63.0721 96.0127 71.9321 97.1527 72.0121 98.5727Z" fill="#3E3E3F" />
                            </g>
                            <g style={{ mixBlendMode: 'multiply' }} opacity="0.83">
                                <path d="M71.2222 98.5827C71.3022 99.9427 62.8922 101.073 52.4422 101.093C41.9922 101.113 33.4422 100.033 33.3822 98.6727C33.3222 97.3127 41.7122 96.1827 52.1622 96.1627C62.6122 96.1427 71.1422 97.2227 71.2222 98.5827Z" fill="#3C3C3D" />
                            </g>
                            <g style={{ mixBlendMode: 'multiply' }} opacity="0.85">
                                <path d="M70.4021 98.5827C70.4821 99.8927 62.4021 100.963 52.3221 100.993C42.2421 101.023 34.0421 99.9926 33.9721 98.6726C33.9021 97.3526 41.9721 96.2927 52.0521 96.2727C62.1321 96.2527 70.4021 97.2827 70.4021 98.5827Z" fill="#3A393B" />
                            </g>
                            <g style={{ mixBlendMode: 'multiply' }} opacity="0.86">
                                <path d="M69.6322 98.5927C69.7022 99.8427 61.9221 100.863 52.2421 100.883C42.5621 100.903 34.6722 99.8827 34.6022 98.6727C34.5322 97.4627 42.3121 96.4027 51.9821 96.3827C61.6521 96.3627 69.5622 97.3527 69.6322 98.5927Z" fill="#383738" />
                            </g>
                            <g style={{ mixBlendMode: 'multiply' }} opacity="0.88">
                                <path d="M68.8421 98.6027C68.9121 99.7827 61.4321 100.763 52.1421 100.783C42.8521 100.803 35.2721 99.8627 35.2021 98.6827C35.1321 97.5027 42.6121 96.5127 51.9021 96.4927C61.1921 96.4727 68.7721 97.4127 68.8421 98.6027Z" fill="#363536" />
                            </g>
                            <g style={{ mixBlendMode: 'multiply' }} opacity="0.89">
                                <path d="M68.0521 98.6027C68.1121 99.7327 60.9521 100.603 52.0521 100.683C43.1521 100.763 35.8822 99.8027 35.8222 98.6827C35.7622 97.5627 42.9222 96.6827 51.8222 96.6127C60.7222 96.5427 67.9821 97.5027 68.0521 98.6027Z" fill="#343233" />
                            </g>
                            <g style={{ mixBlendMode: 'multiply' }} opacity="0.91">
                                <path d="M67.2521 98.6127C67.3221 99.6827 60.4621 100.553 51.9421 100.613C43.4221 100.673 36.4821 99.7927 36.4221 98.7227C36.3621 97.6527 43.2121 96.7827 51.7221 96.7227C60.2321 96.6627 67.1921 97.5527 67.2521 98.6127Z" fill="#313031" />
                            </g>
                            <g style={{ mixBlendMode: 'multiply' }} opacity="0.92">
                                <path d="M66.4621 98.6227C66.5221 99.6227 59.9821 100.453 51.8421 100.473C43.7021 100.493 37.0821 99.6927 37.0221 98.6827C36.9621 97.6727 43.5121 96.8527 51.6421 96.8327C59.7721 96.8127 66.4021 97.6127 66.4621 98.6227Z" fill="#2F2D2E" />
                            </g>
                            <g style={{ mixBlendMode: 'multiply' }} opacity="0.94">
                                <path d="M65.6721 98.6227C65.7221 99.6227 59.4921 100.353 51.7421 100.363C43.9921 100.373 37.6821 99.6327 37.6321 98.6927C37.5821 97.7527 43.8121 96.9627 51.5521 96.9427C59.2921 96.9227 65.6221 97.6827 65.6721 98.6227Z" fill="#2D2A2B" />
                            </g>
                            <g style={{ mixBlendMode: 'multiply' }} opacity="0.95">
                                <path d="M64.8822 98.6327C64.8822 99.5227 59.0121 100.243 51.6521 100.263C44.2921 100.283 38.2921 99.5827 38.2421 98.6927C38.1921 97.8027 44.1121 97.0727 51.4621 97.0627C58.8121 97.0527 64.8322 97.7427 64.8822 98.6327Z" fill="#2A2829" />
                            </g>
                            <g style={{ mixBlendMode: 'multiply' }} opacity="0.97">
                                <path d="M64.0921 98.6327C64.0921 99.4627 58.5221 100.143 51.5521 100.163C44.5821 100.183 38.8921 99.5227 38.8521 98.6927C38.8121 97.8627 44.4121 97.1827 51.3821 97.1727C58.3521 97.1627 64.0421 97.8127 64.0921 98.6327Z" fill="#282526" />
                            </g>
                            <g style={{ mixBlendMode: 'multiply' }} opacity="0.98">
                                <path d="M63.2922 98.6427C63.3422 99.4127 58.0421 100.043 51.4521 100.053C44.8621 100.063 39.5021 99.4627 39.4521 98.7027C39.4021 97.9427 44.7122 97.3027 51.2922 97.2827C57.8722 97.2627 63.2522 97.8727 63.2922 98.6427Z" fill="#262223" />
                            </g>
                            <g style={{ mixBlendMode: 'multiply' }}>
                                <path d="M62.5021 98.6527C62.5021 99.3627 57.5021 99.9427 51.3521 99.9527C45.2021 99.9627 40.1021 99.4127 40.0621 98.7027C40.0221 97.9927 45.0121 97.4127 51.2021 97.3927C57.3921 97.3727 62.4621 97.9427 62.5021 98.6527Z" fill="#231F20" />
                            </g>
                        </g>
                        <path d="M53 6.21826C50 6.21826 42.5 7.21826 39 8.21826L44.5 2.21826C46.5215 1.44512 52 0.218262 58 0.218262L53 6.21826Z" fill="#7D8082" />
                        <path d="M34.5 10.2183C30.2457 12.6206 25.2745 16.5704 22 19.2183L23.5 13.2183C25.8476 11.1701 27.3591 10.073 30.5 8.21826L34.5 10.2183Z" fill="#7A7C80" />
                        <defs>
                            <linearGradient id="paint0_linear_222_994" x1="21.3821" y1="-0.617209" x2="21.7421" y2="66.8528" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#808285" />
                                <stop offset="1" stopColor="#58595B" />
                            </linearGradient>
                            <linearGradient id="paint1_linear_222_994" x1="37.6721" y1="-0.697322" x2="38.0221" y2="66.7726" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#808285" />
                                <stop offset="1" stopColor="#58595B" />
                            </linearGradient>
                            <linearGradient id="paint2_linear_222_994" x1="78.8221" y1="-0.917212" x2="79.1821" y2="66.5428" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#808285" />
                                <stop offset="1" stopColor="#58595B" />
                            </linearGradient>
                            <linearGradient id="paint3_linear_222_994" x1="51.4121" y1="-0.808366" x2="51.7621" y2="66.6825" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#808285" />
                                <stop offset="1" stopColor="#58595B" />
                            </linearGradient>
                            <linearGradient id="paint4_linear_222_994" x1="67.7221" y1="23.2245" x2="38.3303" y2="77.8175" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#E9ED1F" />
                                <stop offset="1" stopColor="#299F4E" />
                            </linearGradient>
                        </defs>
                    </motion.svg>
                </div>
            </div>
            <svg width="1920" height="163" viewBox="0 0 1920 163" fill="none" xmlns="http://www.w3.org/2000/svg" >
                <defs>
                    <linearGradient id="svgGradient" x1="0%" y1="0%" x2="100%" y2="0%" gradientUnits="userSpaceOnUse">
                        <stop offset="0.363984" stopColor="#E4E6F8" />
                        <stop offset="0.803186" stopColor="#E4E6F8" />
                    </linearGradient>
                </defs>
                <path fillRule="evenodd" clipRule="evenodd" d="M0 19.0296V163H1920V71C1920 71 1663.95 0 1431 0C1311.87 0 1191.91 24.6964 1061.29 51.5879C905.186 83.7264 733.85 119 530.5 119C345.868 119 0 19.0296 0 19.0296Z" fill="url(#svgGradient)" />
            </svg>
        </div>
    )
}

export default Section8;