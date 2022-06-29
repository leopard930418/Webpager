import React, {useEffect, useState} from "react";
import Button from "./Button";
import Content from "../Content";
import fr from "../../locales/fr";
import nl from "../../locales/nl";
import en from "../../locales/en";
import {useRouter} from "next/router";

function Studie({items}) {
    const router = useRouter();
    const t = router.locale === "fr" ? fr : router.locale === "nl-NL" ? nl : en;

    let [itemArr, setItemArr] = useState(items)
    let [filterObj, setFilterObj] = useState({
        industries: 'unset',
        category: 'unset'
    })

    function filterNow(e) {
        let temp2 = filterObj
        temp2[e.target.id] = e.target.innerHTML
        setFilterObj(temp2)
        let temp = items.filter((x) => {
            console.log(e.target.innerHTML)
            if (x.industrie && x.category) {
                if ((x.industrie.includes(filterObj.industries) || filterObj.industries === 'unset') && (x.category.includes(filterObj.category) || filterObj.category === 'unset')) {
                    return true
                }
            }
        })
        setItemArr(temp)
    }

    function closeOverlay() {
        document.getElementById('overlay').style.height = '0px'
        let l = window.scrollY
        let k = document.getElementById('anc').getBoundingClientRect().top + window.scrollY;
        console.log(k)

        window.scrollTo({
            top: k - 100,
            behavior: 'smooth'
        })
    }

    useEffect(() => {
        let b = document.getElementById('doc')
        let c = document.getElementById('previewer')

        if (b && c) {
            b.addEventListener('scroll', (event) => {
                let divTop = document.getElementById('doc').getBoundingClientRect().y
                let top = document.getElementById('doc').scrollTop
                let v = b.querySelectorAll("h1, h2, h3, h4, h5, h6")
                let arr = []
                v.forEach((x) => {
                    arr.push({placement: x.getBoundingClientRect().y, item: x.id})

                })

                arr.forEach((x) => {
                    if (divTop - x.placement > -50 && divTop - x.placement < 10) {
                        if (x.item && c) {
                            console.log(document.getElementById(x.item.replace('doc', 'preview')))
                            let elementTop2 = document.getElementById(x.item.replace('doc', 'preview')).offsetTop;

                            let divTop2 = document.getElementById('previewer').offsetTop;
                            let elementRelativeTop = elementTop2 - divTop2;

                            document.getElementById('previewer').scrollTo({
                                top: elementRelativeTop - 25,
                                behavior: 'smooth'
                            })
                            document.getElementById('previewer').querySelectorAll("h1, h2, h3, h4, h5, h6").forEach((x) => {
                                x.style.fontWeight = 'unset'
                            })
                            document.getElementById(x.item.replace('doc', 'preview')).style.fontWeight = 'bold'
                        }
                    }
                })
            })


            let a = b.querySelectorAll("h1, h2, h3, h4, h5, h6")
            a.forEach((x, i) => {
                x.id = `doc_${i.toString()}`
            })

            let d = c.querySelectorAll("h1, h2, h3, h4, h5, h6")
            d.forEach((x, i) => {
                x.id = `preview_${i.toString()}`
            })

            c.addEventListener('click', (event) => {
                let active = c.querySelectorAll(`#${event.target.id}`)

                d.forEach((x) => {
                    x.style = 'font-weight: unset'
                })

                active.forEach((x) => {
                    x.style = 'font-weight: bold;'
                })

                if(document.getElementById(event.target.id.replace('preview', 'doc'))){
                let elementTop = document.getElementById(event.target.id.replace('preview', 'doc')).offsetTop;
                let divTop = document.getElementById('doc').offsetTop;
                let elementRelativeTop = elementTop - divTop;

                document.getElementById('doc').scrollTo({
                    top: elementRelativeTop - 25,
                    behavior: 'smooth'
                })}
            });
        }
    }, [])


    return (
        <div className={'relative mt-10 min-h-[100vh]'}>
            {/*<div className={'mt'}></div>*/}
            <div id='overlay' onClick={closeOverlay} className={" x absolute overlay flex justify-center items-center"}>
                <img id='icon' className={'z-50 overlay opacity-100 max-h-[20%] '} src="assets/eye.png" alt=""/>
            </div>
            <div id='anc' className={' max-w-[100vw] absolute'}>
                <div
                    className={'min-h-[50px] max-h-[50px]  w-[100%]   w-full bg-green-100  changing_back3  flex items-center p-5 m-auto '}>
                    <div
                        className={'min-h-[50px] max-h-[50px] flex  lg:min-w-[25vw]   xl:min-w-[20vw]  2xl:min-w-[15vw] max-w-[100vw] items-center '}>
                        <div className="flex justify-center mr-5">
                            <div>
                                <div className="dropdown relative">
                                    <button
                                        className="
                               dropdown-toggle
                               px-6
                               py-2.5
                               bg-blue-600
                               text-white
                               font-medium
                               text-xs
                               leading-tight
                               uppercase
                               rounded
                               shadow-md
                               hover:bg-blue-700 hover:shadow-lg
                               focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
                               active:bg-blue-800 active:shadow-lg active:text-white
                               transition
                               duration-150
                               ease-in-out
                               flex
                               items-center
                               whitespace-nowrap
                               bg-gradient-to-r from-cyan-500 to-blue-500
                               "
                                        type="button"
                                        id="dropdownMenuButton1"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        {filterObj.industries === 'unset' ? 'industries': filterObj.industries }
                                        <svg
                                            aria-hidden="true"
                                            focusable="false"
                                            data-prefix="fas"
                                            data-icon="caret-down"
                                            className="w-2 ml-2"
                                            role="img"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 320 512"
                                        >
                                            <path
                                                fill="currentColor"
                                                d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"
                                            >
                                            </path>
                                        </svg>
                                    </button>
                                    <ul className=" dropdown-menu min-w-max absolute hidden bg-white text-base z-50 float-left py-2 list-none text-left rounded-lg shadow-lg mt-1 hidden m-0 bg-clip-padding border-none"
                                        aria-labelledby="dropdownMenuButton1">
                                        <li>
                                            <div id='industries' onClick={filterNow}
                                                 className=" dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100 ">unset
                                            </div>
                                        </li>
                                        <li>
                                            <div id='industries' onClick={filterNow}
                                                 className=" dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100 ">Marketing
                                            </div>
                                        </li>

                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <div>
                                <div className="dropdown relative">
                                    <button
                                        className="
                               dropdown-toggle
                               px-6
                               py-2.5
                               bg-blue-600
                               text-white
                               font-medium
                               text-xs
                               leading-tight
                               uppercase
                               rounded
                               shadow-md
                               hover:bg-blue-700 hover:shadow-lg
                               focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
                               active:bg-blue-800 active:shadow-lg active:text-white
                               transition
                               duration-150
                               ease-in-out
                               flex
                               items-center
                               whitespace-nowrap
                               bg-gradient-to-r from-cyan-500 to-blue-500"
                                        type="button"
                                        id="dropdownMenuButton1"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        {filterObj.category === 'unset' ? 'category': filterObj.category }
                                        <svg
                                            aria-hidden="true"
                                            focusable="false"
                                            data-prefix="fas"
                                            data-icon="caret-down"
                                            className="w-2 ml-2"
                                            role="img"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 320 512"
                                        >
                                            <path
                                                fill="currentColor"
                                                d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"
                                            >
                                            </path>
                                        </svg>
                                    </button>
                                    <ul className=" dropdown-menu min-w-max absolute hidden bg-white text-base z-50 float-left py-2 list-none text-left rounded-lg shadow-lg mt-1 hidden m-0 bg-clip-padding border-none"
                                        aria-labelledby="dropdownMenuButton1">
                                        <li>
                                            <div id='category' onClick={filterNow}
                                                 className=" dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100 ">unset
                                            </div>
                                        </li>
                                        <li>
                                            <div id='category' onClick={filterNow}
                                                 className=" dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100 ">Fullstack
                                            </div>
                                        </li>

                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>
                    {/*<span><img className={'relative max-h-[50px]  -align-right'} src="assets/eye.png" alt=""/></span>*/}

                </div>
                <div className={'rounded  mb-20 flex justify-center w-[100%]  min-h-[70vh] max-h-[70vh]  m-auto'}>

                    <div id='previewer'
                         className={' hidden lg:block scrollbar overflow-y-auto  p-5 w-[30%] cursor-pointer bg-gray-100'}>
                        <div className="force-overflow"></div>
                        {itemArr.map(function (item) {
                            return (
                                <div className={'text-lg font-medium  my-8 tracking-wide text-gray-600 docOverview'}
                                     dangerouslySetInnerHTML={{__html: item.long_description.content}}>
                                </div>
                            );
                        })}
                    </div>
                    <div id='doc' className={'overflow-y-auto p-5 w-[100%] lg:w-[70%] bg-gray-100'}>
                        {itemArr.map((item) => {
                            return (
                                <div className={'p-5 bg-white mt-6 shadow rounded'}>
                                    <div className={'doc text-lg font-extralight  my-8	tracking-wide text-gray-600'}
                                         dangerouslySetInnerHTML={{__html: item.long_description.content}}>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>


    );


}

export default Studie;
