import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import en from "../../locales/en";
import fr from "../../locales/fr";
import nl from "../../locales/nl";
import DarkThemeSwitch from "./DarkThemeSwitch";
import LanguageSelector from "./LanguageSelector";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const Navbar = ({
  initialTheme,
}) => {
  const router = useRouter();

  const [selectedRoute, setselectedRoute] = useState("");

  const t = router.locale === "fr" ? fr : router.locale === "nl-NL" ? nl : en;

  function goToLink(e) {
    let a = document.getElementById(e.target.id.replace("temp", "")).offsetTop;

    window.scrollTo({
      top: a - 450,
      behavior: "smooth",
    });
  }

  const handleNavigation = (value, valueindex) => {
    console.log(window.isManualHash);
    window.isManualHash = true;
    setTimeout(() => {
      window.isManualHash = false;
    }, 3000);
  };

  useEffect(() => {
    router.push(router.asPath);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      // simple function to use for callback in the intersection observer
      const changeNav = (entries, observer) => {
        entries.forEach((entry) => {
          // verify the element is intersecting
          if (
            entry.isIntersecting &&
            entry.intersectionRatio >= 0.55 &&
            !window.isManualHash
          ) {
            console.log(window.isManualHash);
            setselectedRoute(`#${entry.target.id}`);
          }
        });
      };

      // init the observer
      const options = {
        threshold: 0.55,
      };

      const observer = new IntersectionObserver(changeNav, options);

      // target the elements to be observed
      const sections = document.querySelectorAll(".cannavigate");
      sections.forEach((section) => {
        observer.observe(section);
      });
    }, 500);
  }, []);

  useEffect(() => {
    const onHashChangeStart = (url) => {
      setselectedRoute(url);
    };

    router.events.on("hashChangeStart", onHashChangeStart);

    return () => {
      router.events.off("hashChangeStart", onHashChangeStart);
    };
  }, [router.events]);

  const navigation = [
    {
      name: t.problems,
      href: "#section-problems",
      current: selectedRoute.endsWith("#section-problems"),
    },
    {
      name: t.solutions,
      href: "#section-solutions",
      current: selectedRoute.endsWith("#section-solutions"),
    },
    {
      name: t.why_us,
      href: "#section-why_us",
      current: selectedRoute.endsWith("#section-why_us"),
    },

    {
      name: t.mindset,
      href: "#section-mindset",
      current: selectedRoute.endsWith("#section-mindset"),
    },
    {
      name: t.work,
      href: "#section-work",
      current: selectedRoute.endsWith("#section-work"),
    },
    {
      name: "FAQS",
      href: "#faq",
      current: selectedRoute.endsWith("#faq"),
    },
    {
      name: "CONTACTS",
      href: "#section-contact",
      current: selectedRoute.endsWith("#section-contact"),
    },
  ];
  return (
    <Disclosure
      as="nav"
      className="sticky top-0 z-50 bg-white text-gray-500 hover:text-gray-700 focus:text-gray-700  navbar navbar-expand-md navbar-light md:px-7 xl2:px-48 dark:bg-gray-900"
    >
      {({ open }) => (
        <>
          <div className=" px-2 md:px-6 lg:px-7">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 right-0 flex items-center xl:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md  dark:text-gray-200   text-gray-600 hover:text-white hover:bg-gray-800 ">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-start h-full  md:items-stretch md:justify-between">
                <div className="flex-shrink-0 flex items-center">
                  <img
                    className=" logo block   h-8 w-auto"
                    src="/assets/logo.svg"
                    alt="Workflow"
                  />
                  <span className="ml-3 text-transparent text-2xl bg-clip-text bg-gray-500 dark:bg-white">
                    DCD DEVELOPMENT
                  </span>
                </div>
                <div className="hidden xl:block md:ml-6 ">
                  <div className="flex items-center space-x-4 h-full">
                    {navigation.map((item, index) => (
                      <div
                        key={item.name}
                        onClick={() => handleNavigation(item, index)}
                        className={classNames(
                          item.current
                            ? "text-sky-500 dark:text-sky-500 font-bold"
                            : "text-gray-500 dark:text-gray-200",
                          "h-full flex  font-medium uppercase items-center"
                        )}
                      >
                        <Link href={item.href}>
                          <a
                            className={classNames("px-3 py-2")}
                            aria-current={item.current ? "page" : undefined}
                          >
                            {item.name}
                          </a>
                        </Link>
                      </div>
                    ))}
                    <div className="hidden xl:block absolute inset-y-0 right-0 items-center pr-2 md:static md:inset-auto md:ml-6 md:pr-0">
                      <LanguageSelector
                        additional_classes={""}
                      ></LanguageSelector>
                    </div>
                    <DarkThemeSwitch />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* mobile responsive design */}
          <Disclosure.Panel className="xl:hidden">
            <div className="px-2 pt-2 pb-3  space-y-1">
              {navigation.map((item) => (
                <Disclosure.Button
                  onClick={goToLink}
                  key={item.name}
                  id={item.href.replace("#", "") + "temp"}
                  className={classNames(
                    item.current
                      ? " text-blue-700 dark:text-gray-200"
                      : "text-gray-500 dark:text-gray-400  ",
                    "block px-3 py-2 rounded-md text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
              <div className="flex flex-row items-center py-2 px-3">
                <p className="mr-8 text-gray-500 dark:text-gray-400">
                  {" "}
                  Language :
                </p>
                <LanguageSelector
                  additional_classes={"w-48  inline-block mr-0 "}
                ></LanguageSelector>
              </div>
              <div className="flex flex-row py-2 px-3">
                <span className="mr-8 text-gray-500 dark:text-gray-400">
                  {" "}
                  Theme :
                </span>
                <DarkThemeSwitch
                  additional_classes={" inline-block mr-0 "}
                  initialTheme={ initialTheme }
                ></DarkThemeSwitch>
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}

export default Navbar;
