import React from "react";
import {FaInstagram} from "react-icons/fa";
import {FaTwitter} from "react-icons/fa";
import {FaLinkedin} from "react-icons/fa";
import {FaYoutube} from "react-icons/fa";
import Button from "./Button";

function Tabs() {
    return (
        <>
            <div className={'mt-20 mb-20 flex justify-center min-w-[90vw] '}>
                <div className={'flex flex-col lg:flex-row  mb:p-20 justify-center    '}>
                    <div className={'h-full flex flex-col justify-between w-100% lg:pr-8'}>
                        <div   className={'w-100% h-1/2 2xl:h-full bg-gray-50  p-10 rounded'}>
                            <h1 className={'text-[#1ca0e2] font-semibold text-2xl  2xl:text-42xl  md:text-left dark:text-gray-200 mb-5'}>This
                                is a title</h1>
                            <p className={'mb-5'}>
                                aggagaggagLorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc viverra porta enim quis
                                faucibus. Etiam nisl ante, cursus et nisi sit amet, posuere iaculis lacus. Etiam odio
                                nisi, laoreet quis felis at, auctor accumsan est. Sed sit
                                amet sodales lacus. Etiam aliquam in arcu eget egestas. s
                            </p>
                            <Button
                                className="border-2 border-[#1CA0E2] rounded-2xl rounded-br-none text-[#1CA0E2] w-full md:w-fit"
                                text="contact"
                            > </Button>

                        </div>
                        <div className={'mt-8 hidden lg:block 2xl:hidden h-1/2'}>
                            <div   className={'w-100% h-full bg-gray-50  p-10 rounded'}>
                                <h1 className={'text-[#1ca0e2] font-semibold text-2xl  2xl:text-42xl  md:text-left dark:text-gray-200 mb-5'}>This
                                    is a title</h1>
                                <p className={'mb-5'}>
                                    ccccccccccccccLorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc viverra porta enim quis
                                    faucibus. Etiam nisl ante, cursus et nisi sit amet, posuere iaculis lacus. Etiam odio
                                    nisi, laoreet quis felis at, auctor accumsan est. Sed sit
                                    amet sodales lacus. Etiam aliquam in arcu eget egestas. s
                                </p>
                                <Button
                                    className="border-2 border-[#1CA0E2] rounded-2xl rounded-br-none text-[#1CA0E2] w-full md:w-fit"
                                    text="contact"
                                > </Button>

                            </div>
                        </div>
                    </div>

                    <div className={'flex pl-8 px-8 flex-col md:flex-row lg:flex-col 2xl:flex-row 2xl:p-4 w-[100%]  2xl:justify-between changing_back rounded  '}>
                        <div
                            className="  2xl:px-4 2xl:py-8   w-full 2xl:w-[22vw] flex-col mr-5 ">
                            <div className={'w-[100%] aspect-video mb-8 mt-4  bg-white  rounded  '}>
                                <div className={'p-4 max-h-[40%] '}>
                                    <img className={'  m-auto mb-3 w-[20%] '} src="assets/1.png" alt=""/>
                                    <p className={'m-auto text-gray-600 dark:text-gray-300 max-h-[40%]'}> Thie Thie si a
                                        piece of text that need to be filled with real text but </p>
                                </div>
                            </div>
                            <div className={'w-[100%] aspect-video mb-8 mt-4   bg-white  rounded  '}>
                                <div className={'p-4 max-h-[40%] '}>
                                    <img className={'  m-auto mb-3 w-[20%] '} src="assets/1.png" alt=""/>
                                    <p className={'m-auto text-gray-600 dark:text-gray-300 max-h-[40%]'}> Thie Thie si a
                                        piece of text that need to be filled with real text but </p>
                                </div>
                            </div>
                        </div>
                        <div
                            className=" 2xl:px-4 2xl:py-8   w-full 2xl:w-[22vw] flex-col mr-5 ">

                            <iframe className={'w-[100%] aspect-video mb-8 mt-4 bg-white  rounded '}
                                    src="https://www.youtube.com/embed/0cCoaaHs6Ww"
                                    title="YouTube video player" frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen></iframe>


                            <div className={'w-[100%] aspect-video mb-8 mt-4   bg-white  rounded  '}>
                                <div className={'p-4 max-h-[40%] '}>
                                    <img className={'  m-auto mb-3 w-[20%] '} src="assets/1.png" alt=""/>
                                    <p className={'m-auto text-gray-600 dark:text-gray-300 max-h-[40%]'}> Thie Thie si a
                                        piece of text that need to be filled with real text but </p>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className={'h-full   w-100% lg:pl-8'}>
                    <div className={'   lg:hidden 2xl:block h-full 2xl:h-full  bg-gray-50 p-10 rounded'}>
                        <h1 className={'text-[#1ca0e2] font-semibold text-2xl  2xl:text-42xl  md:text-left dark:text-gray-200 mb-5'}>This
                            is a title</h1>
                        <p className={'mb-5'}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc viverra porta enim quis
                            faucibus. Etiam nisl ante, cursus et nisi sit amet, posuere iaculis lacus. Etiam odio nisi,
                            laoreet quis felis at, auctor accumsan est. Sed sit
                            amet sodales lacus. Etiam aliquam in arcu eget egestas. s
                        </p>
                        <Button
                            className="border-2 border-[#1CA0E2] rounded-2xl rounded-br-none text-[#1CA0E2] w-full md:w-fit"
                            text="contact"
                        > </Button>
                    </div>
                </div>
                </div>
            </div>
        </>
    );
}

export default Tabs;
