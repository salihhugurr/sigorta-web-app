import { Banner } from "@/components";
import {
  TruckIcon,
  CalendarIcon,
  PhoneIcon,
  UserIcon,
  EnvelopeIcon,
} from "@heroicons/react/20/solid";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
type Props = {};

const OTAWorkplace = (props: Props) => {

  const [form, setForm] = useState({
    name: "",
    surname: "",
    email: "",
    phone: "",
    subject: "İşyeri Sigortası",
    ID: "",
    tax: "",
  });

  const [checked, setChecked] = useState(false);

  const changeHandle = (e: { target: { name: any; value: any } }) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandle = async () => {
    const newForm = Object.fromEntries(
      Object.entries(form).filter(([_, value]) => value)
    );
    const response = await fetch("/api/send-email", {
      method: "POST",
      body: JSON.stringify(newForm),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.status === 200) {
      toast.success("Mesaj başarıyla gönderildi.", {
        position: "top-right",
        autoClose: 5000,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "light",
      });
    } else {
      toast.error("Mesaj gönderilirken bir hata oluştu", {
        position: "top-right",
        autoClose: 5000,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "light",
      });
    }
  };

    const isDisabled = !(form.name && form.surname && form.email && form.phone);


  return (
    <div
      className="block w-full h-full justify-start items-center text-left"
      style={{ backgroundImage: `url("/white-bg-line.jpg")` }}
    >
      <Banner title="Online Teklif Al - İşyeri" />

      <div className="text-3xl text-slate-600 m-2 mt-6 font-bold text-center">
        {"(*) ile belirtilen alanlar zorunludur"}
        <p className="text-sm text-gray-600 m-2 font-semibold">
          Formu doldurarak ücretsiz fiyat teklifi alabilirsiniz
        </p>
      </div>
      <p className="m-6">Kişisel Bilgiler</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 m-6">
        <div className="relative m-2 lg:m-0">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <UserIcon
              className="h-5 w-5 flex-none text-gray-400"
              aria-hidden="true"
            />
          </div>
          <input
            type="text"
            name="name"
            id="name"
            onChange={changeHandle}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Adınız*"
          />
        </div>
        <div className="relative m-2 lg:m-0">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <UserIcon
              className="h-5 w-5 flex-none text-gray-400"
              aria-hidden="true"
            />
          </div>
          <input
            type="text"
            name="surname"
            id="surname"
            onChange={changeHandle}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Soyadınız*"
          />
        </div>
        <div className="relative m-2 lg:m-0">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <UserIcon
              className="h-5 w-5 flex-none text-gray-400"
              aria-hidden="true"
            />
          </div>
          <input
            type="text"
            name="ID"
            id="ID"
            onChange={changeHandle}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="TC Kimlik No"
          />
        </div>
        <div className="relative m-2 lg:m-0">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <UserIcon
              className="h-5 w-5 flex-none text-gray-400"
              aria-hidden="true"
            />
          </div>
          <input
            type="text"
            name="tax"
            id="tax"
            onChange={changeHandle}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Vergi Numaranız"
          />
        </div>
      </div>
      <p className="m-6">İletişim Bilgileri</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 m-6">
        <div className="relative m-2 lg:m-0">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <EnvelopeIcon
              className="h-5 w-5 flex-none text-gray-400"
              aria-hidden="true"
            />
          </div>
          <input
            type="text"
            name="email"
            id="email"
            onChange={changeHandle}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="E-Posta Adresiniz*"
          />
        </div>
        <div className="relative m-2 lg:m-0">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <PhoneIcon
              className="h-5 w-5 flex-none text-gray-400"
              aria-hidden="true"
            />
          </div>
          <input
            type="text"
            name="phone"
            id="phone"
            onChange={changeHandle}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Telefon Numaranız*"
          />
        </div>
      </div>
      <fieldset className="m-6">
        <legend className="sr-only">Checkbox variants</legend>

        <div className="flex items-center mb-4">
          <input
            id="checkbox-1"
            type="checkbox"
            checked={checked}
            onChange={() => setChecked(!checked)}
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            <a
              href="/kvkk"
              target="_blank"
              className="text-blue-600 hover:underline dark:text-blue-500 mr-1"
            >
              KVKK Aydınlatma metnini
            </a>
            okudum kabul ediyorum *
          </label>
        </div>
      </fieldset>
      <div className="mb-6 justify-center flex">
        <button
          onClick={submitHandle}
          disabled={checked ? isDisabled : true}
          className="inline-flex w-[50%] lg:w-[30%] m-4 mx-auto md:mx-4 justify-center rounded-md bg-slate-900 p-4 px-7 text-sm font-medium text-white hover:bg-opacity-70   focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 hover:bg-green-700 disabled:opacity-50 disabled:pointer-events-none"
        >
          HEMEN TEKLİF AL
        </button>
      </div>
    </div>
  );
};

export default OTAWorkplace;
