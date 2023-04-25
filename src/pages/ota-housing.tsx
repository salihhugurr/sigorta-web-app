import { Banner } from "@/components";
import {
  HomeModernIcon,
  CalendarIcon,
  PhoneIcon,
  UserIcon,
  EnvelopeIcon,
} from "@heroicons/react/20/solid";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
type Props = {};

const OTAHousing = (props: Props) => {
    const [form, setForm] = useState({
      name: "",
      surname: "",
      email: "",
      phone: "",
      subject: "Konut Sigortası",
      ID: "",
      tax: "",
      city: "",
      district: "",
      street: "",
      site: "",
      apartment: "",
      doorNumber: "",
      number: "",
      m2: "",
      job: "",
      requestedBuilding: "",
      requestedFurniture:"",
      
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
      <Banner title="Online Teklif Al - Konut" />

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
            id="name"
            name="name"
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
            id="surname"
            name="surname"
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
            id="ID"
            name="ID"
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
            id="tax"
            name="tax"
            onChange={changeHandle}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Vergi Numaranız"
          />
        </div>
      </div>
      <p className="m-6">Adres Bilgileri</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 m-6">
        <div className="relative m-2 lg:m-0">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <HomeModernIcon
              className="h-5 w-5 flex-none text-gray-400"
              aria-hidden="true"
            />
          </div>
          <input
            type="text"
            id="city"
            name="city"
            onChange={changeHandle}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="İl"
          />
        </div>
        <div className="relative m-2 lg:m-0">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <HomeModernIcon
              className="h-5 w-5 flex-none text-gray-400"
              aria-hidden="true"
            />
          </div>
          <input
            type="text"
            id="district"
            name="district"
            onChange={changeHandle}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="İlçe"
          />
        </div>
        <div className="relative m-2 lg:m-0">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <HomeModernIcon
              className="h-5 w-5 flex-none text-gray-400"
              aria-hidden="true"
            />
          </div>
          <input
            type="text"
            id="street"
            name="street"
            onChange={changeHandle}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Cadde/Sokak"
          />
        </div>
        <div className="relative m-2 lg:m-0">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <HomeModernIcon
              className="h-5 w-5 flex-none text-gray-400"
              aria-hidden="true"
            />
          </div>
          <input
            type="text"
            id="site"
            name="site"
            onChange={changeHandle}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Site"
          />
        </div>
        <div className="relative m-2 lg:m-0">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <HomeModernIcon
              className="h-5 w-5 flex-none text-gray-400"
              aria-hidden="true"
            />
          </div>
          <input
            type="text"
            id="apartment"
            name="apartment"
            onChange={changeHandle}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Apartman"
          />
        </div>
        <div className="relative m-2 lg:m-0">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <HomeModernIcon
              className="h-5 w-5 flex-none text-gray-400"
              aria-hidden="true"
            />
          </div>
          <input
            type="text"
            id="doorNumber"
            name="doorNumber"
            onChange={changeHandle}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Kapı No"
          />
        </div>
        <div className="relative m-2 lg:m-0">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <HomeModernIcon
              className="h-5 w-5 flex-none text-gray-400"
              aria-hidden="true"
            />
          </div>
          <input
            type="text"
            id="number"
            name="number"
            onChange={changeHandle}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Daire No"
          />
        </div>
        <div className="relative m-2 lg:m-0">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <HomeModernIcon
              className="h-5 w-5 flex-none text-gray-400"
              aria-hidden="true"
            />
          </div>
          <input
            type="text"
            id="m2"
            name="m2"
            onChange={changeHandle}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="M2 Bilgisi"
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
            id="job"
            name="job"
            onChange={changeHandle}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Mesleğiniz"
          />
        </div>
      </div>
      <p className="m-6">Talep Edilen Bina Bedeli</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 m-6">
        <div className="relative m-2 lg:m-0">
          <div className="absolute inset-y-0 left-0 flex border-x-2 p-3 rounded-lg items-center pl-3 pointer-events-none">
            TL
          </div>
          <input
            type="text"
            id="requstedBuilding"
            name="requstedBuilding"
            onChange={changeHandle}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
      </div>
      <p className="m-6">Talep Edilen Eşya Bedeli</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 m-6">
        <div className="relative m-2 lg:m-0">
          <div className="absolute inset-y-0 left-0 flex border-x-2 p-3 rounded-lg items-center pl-3 pointer-events-none">
            TL
          </div>
          <input
            type="text"
            id="requestedFurniture"
            name="requestedFurniture"
            onChange={changeHandle}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
            id="email"
            name="email"
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
            id="phone"
            name="phone"
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
          className="inline-flex disabled:opacity-50 disabled:pointer-events-none w-[50%] lg:w-[30%] m-4 mx-auto md:mx-4 justify-center rounded-md bg-slate-900 p-4 px-7 text-sm font-medium text-white hover:bg-opacity-70   focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 hover:bg-green-700"
        >
          HEMEN TEKLİF AL
        </button>
      </div>
    </div>
  );
};

export default OTAHousing;
