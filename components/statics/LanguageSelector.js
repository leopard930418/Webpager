import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function LanguageSelector({ additional_classes }) {
  const router = useRouter();
  const { pathname, asPath, query } = router;
  const handleLanguageChange = (lang) => {
    router.push({ pathname, query }, asPath, { locale: lang, scroll: false });
  };
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div className="flex">
        <Menu.Button
          className={`inline-flex  w-full py-2 mt-4 lg:mt-0 text-sm font-medium text-gray-500 dark:text-gray-200  ${additional_classes}`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
            />
          </svg>
          {router.locale}
          <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white  dark:bg-gray-800 ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            {router.locales.map((loc) => (
              <Menu.Item>
                {({ active }) => (
                  <a
                    onClick={() => {
                      handleLanguageChange(loc);
                    }}
                    className={classNames(
                      active
                        ? "bg-gray-100   dark:bg-gray-900   text-gray-900  dark:text-gray-200"
                        : "text-gray-700   dark:text-gray-300",
                      "block px-4 py-2 text-sm"
                    )}
                  >
                    {loc}
                  </a>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
