import {useRouter} from "next/router";
import {useState} from "react";
import en from "../../locales/en";
import fr from "../../locales/fr";
import nl from "../../locales/nl";
import Button from "./Button";
// Import the FontAwesomeIcon component
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

// import the icons you need
import {
    faPhone,
    faEnvelope
} from "@fortawesome/free-solid-svg-icons";

function Contact() {
    const router = useRouter();
    const t = router.locale === "fr" ? fr : router.locale === "nl-NL" ? nl : en;
    const [error, seterror] = useState(null);
    const [success, setsuccess] = useState(null);
    const [data, setdata] = useState({
        name: "",
        email: "",
        message: "",
    });
    const handleSubmit = () => {
        fetch("/contact", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: data.email,
                name: data.name,
                message: data.message,
            }),
        })
            .then((res) => {

                if (res.ok) {
                    return res.json();
                }
                throw new Error("Something went wrong");
            })
            .then((data) => {

                setsuccess(data);
                seterror(null);
            })
            .catch((err) => {
                console.log(err);
                seterror(true);
                setsuccess(null);
            });
    };

    return (
        <div className={'relative max-h-[700px] '}>
            {/*<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">*/}
            {/*  <path className={'changing_back4'}  fill-opacity="1" d="M0,256L48,234.7C96,213,192,171,288,149.3C384,128,480,128,576,128C672,128,768,128,864,144C960,160,1056,192,1152,202.7C1248,213,1344,203,1392,197.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>*/}
            {/*</svg>*/}
            <div
                id="contact"
                key={`contact-form`}
                className={
                    " hidden lg:block cannavigate flex flex-col lg:flex-row flex-wrap-reverse justify-between " +
                    "flex-row-reverse bg-cover changing_back min-h-[325px] xl:min-h-[325px]  ]  "
                }>

            </div>
            <div className={'lg:relative  top-[-350px] min-w-full'}>
                <div className="flex lg:px-6 pt-10 changing_back11">
                    <div className=" ml-5 lg:ml-[20%] mr-[8%]">
                        <div className={' w-[250px] xl:w-[300px]'}>
                        <img  src="assets/back3.png" alt=""/>
                        </div>
                    </div>
                    <div className="text-gray-700 mt-12  dark:text-gray-300">
                        <h1 className={'text-gray-500 text-2xl mb-3 xl:text-4xl md:text-left dark:text-gray-200'}> Contact
                            us</h1>
                        <div className={"mb-3"}>
                            <span><FontAwesomeIcon icon={faPhone} style={{fontSize: 20, color: "grey"}}/></span>
                            <span type="tel"><a className={'text-gray-500'}
                                                href="tel:+31850603208"> call us</a></span>
                        </div>
                        <div>
                                  <span>     <FontAwesomeIcon
                                      icon={faEnvelope}
                                      style={{fontSize: 20, color: "grey"}}
                                  /></span> <span><a
                            href="mailto: contact@codevs.solutions"
                            className={'text-gray-500'}> email us</a></span>
                        </div>

                    </div>
                </div>









                <div className="flex px-6  bg-gray-50 rounded  min-w-[30%] lg:max-w-[70%] m-auto ">
                    <div className="pt-8 m-auto min-w-[90%]">
                        <div className={'flex justify-between '}>
                    <span className={'w-[100%] mr-5'}>
            <div className="uppercase text-sm text-gray-600  dark:text-gray-200  font-bold">
              {t.name}
                <span className="text-red-500"> *</span>
            </div>
                        <input
                            value={data.name}
                            onChange={(e) => {
                                setdata((prev) => ({...prev, name: e.target.value}));
                            }}
                            className=" w-[100%] dark:bg-slate-600 text-gray-900 dark:text-gray-300   mt-2 p-3 rounded-lg outline  outline-1 outline-gray-300 focus:outline-teal-200 dark:outline-teal-500 focus:shadow-outline mr-5"
                            type="text"
                            placeholder="name"
                        ></input>
                    </span>
                            <span className={'w-[100%]'}>
            <div className="uppercase text-sm text-gray-600   dark:text-gray-200  font-bold">
              {t.email}
                <span className="text-red-500"> *</span>
            </div>
                        <input
                            value={data.email}
                            onChange={(e) => {
                                setdata((prev) => ({...prev, email: e.target.value}));
                            }}
                            className="  w-[100%] dark:bg-slate-600 text-gray-900 dark:text-gray-300   mt-2 p-3 rounded-lg outline  outline-1 outline-gray-300 focus:outline-teal-200 dark:outline-teal-500 focus:shadow-outline"
                            type="text"
                            placeholder="John@workemail.com"
                        ></input>
                        </span>
                        </div>
                        <div className="mt-4">
            <span className="uppercase text-sm text-gray-600 dark:text-gray-200 font-bold">
              {t.message}
                <span className="text-red-500"> *</span>
            </span>
                            <textarea
                                value={data.message}
                                placeholder="comments"
                                onChange={(e) => {
                                    setdata((prev) => ({...prev, message: e.target.value}));
                                }}
                                className="w-full h-32  dark:bg-slate-600   text-gray-900   dark:text-gray-300 mt-2 p-3 rounded-lg outline  outline-1 outline-gray-300 focus:outline-teal-200 dark:outline-teal-500 focus:shadow-outline"
                            ></textarea>
                        </div>
                        <div className="mt-4">
                            <div className="my-4 py-4">
                                <Button
                                    onClick={handleSubmit}
                                    className={"btn_get_start w-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl rounded-br-none text-white"}
                                    text="send message"
                                ></Button>
                            </div>
                            {error && (
                                <div className="border border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700 my-4">
                                    <p>Something went wrong</p>
                                </div>
                            )}
                            {success && (
                                <div
                                    className="border border-teal-400 rounded-b bg-teal-100 px-4 py-3 text-teal-700 my-4">
                                    <p>{success.message}</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
