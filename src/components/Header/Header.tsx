import React from 'react'
import { EnvelopeIcon,PhoneIcon } from "@heroicons/react/24/outline";
import { Menu, Transition } from "@headlessui/react";


type Props = {}

const Header = (props: Props) => {
  return (
    <div className="block md:flex bg-transparent text-white text-xs md:text-sm w-full md:w-10/12 py-4 justify-between items-center rounded-md shadow-sm self-center mx-auto">
      <div className="flex gap-2 md:gap-4 justify-center items-center">
        <a href='/kvkk' target='_blank'>• KVKK Metni</a>
      </div>
      <div className="flex justify-center items-center">
        <div className="flex justify-center items-center gap-4 m-2">
          <EnvelopeIcon
            className="h-4 w-4 ml-1 lg:h-7 lg:w-7"
            aria-hidden="true"
          />
          <div>
            <p>E-Posta:</p>
            <p className="text-md md:text-md font-semibold">
              info@sigorta.com
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center gap-4 m-2">
          <PhoneIcon
            className="h-4 w-4 ml-1 lg:h-7 lg:w-7"
            aria-hidden="true"
          />
          <div>
            <p>Bizi Arayın:</p>
            <p className="text-md md:text-md font-semibold">032** *** ** **</p>
          </div>
        </div>
      </div>
      <div className="hidden md:block">
        <a
          href="#offer"
          className="inline-flex w-full justify-center rounded-md bg-sky-300 bg-opacity-20 p-4 px-7 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        >
          TEKLİF AL
        </a>
      </div>
    </div>
  );
}

export default Header