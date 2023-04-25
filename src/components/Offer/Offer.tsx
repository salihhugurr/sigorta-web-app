import { TruckIcon,CalendarIcon,PhoneIcon,UserIcon } from '@heroicons/react/20/solid'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
type Props = {}

const Offer = (props: Props) => {
    const [currentTab,setCurrentTab] = useState("Kasko")
    const [formType,setFormType] = useState("person");
    const [checked, setChecked] = useState(false);
    const [form,setForm] = useState({
      name: "",
      surname: "",
      ID: "",
      phone: "",
      subject: currentTab,
       brand: "",
      model: "",
      year: "",
      job: "",
    });
    const tabs = [
        "Kasko",
        "Trafik",
        "Seyahat",
        "Tamamlayıcı Sağlık",
        "Sağlık",
        "Konut",
        "İşyeri",
        "DASK",
    ]

    useEffect(() => {
        if (currentTab === "Kasko" || currentTab === "Trafik") {
            setFormType("car")
        } else setFormType("person");

        Object.keys(form).forEach((key) => {
          //@ts-ignore
          form[key] = "";
        });
    },[currentTab])

    const changeHandle = (e: { target: { name: any; value: any } }) => {
      setForm({
        ...form,
        [e.target.name]: e.target.value,
      })
    }

    const isDisabled =
      formType === "person"
        ? !(form.name && form.surname && form.ID && form.phone)
        : !(form.brand && form.model && form.year && form.job && form.phone);
    


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

  return (
    <div
    id='offer'
      className="flex w-full justify-center items-center p-8"
      style={{ backgroundImage: `url("/white-bg-line.jpg")` }}
    >
      <div className="block">
        <div className="text-3xl text-slate-600 m-2 font-bold text-center">
          HEMEN TEKLİF AL
          <p className="text-sm text-gray-600 m-2 font-semibold">
            Formu doldurarak ücretsiz fiyat teklifi alabilirsiniz
          </p>
        </div>
        <ul className="flex my-8 justify-center flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400">
          {tabs.map((tab) => (
            <li className="mr-2">
              {currentTab === tab ? (
                <a
                  aria-current="page"
                  className="inline-block p-4 text-blue-600 bg-gray-100 rounded-t-lg active dark:bg-gray-800 dark:text-blue-500 cursor-default"
                >
                  {tab}
                </a>
              ) : (
                <a
                  onClick={() => setCurrentTab(tab)}
                  aria-current="page"
                  className="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300 cursor-pointer"
                >
                  {tab}
                </a>
              )}
            </li>
          ))}
        </ul>
        <div className="text-l text-slate-600 p-4 font-bold text-center w-full">
          Hemen {currentTab} Sigortası Teklifi Alın
        </div>
        <div className="h-[1px] bg-slate-900 w-full flex" />
        <div className="flex w-full h-full p-4 items-center rounded-lg">
          {formType === "person" && (
            <form className="block md:flex gap-4 w-full">
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
                  onChange={changeHandle}
                  name="name"
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
                  onChange={changeHandle}
                  name="surname"
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
                  onChange={changeHandle}
                  name="ID"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="TC Kimlik Numaranız*"
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
                  type="number"
                  id="phone"
                  onChange={changeHandle}
                  name="phone"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Telefon*"
                />
              </div>
            </form>
          )}
          {formType === "car" && (
            <div className="block lg:flex gap-4 w-full">
              <div className="relative m-2 lg:m-0">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <TruckIcon
                    className="h-5 w-5 flex-none text-gray-400"
                    aria-hidden="true"
                  />
                </div>
                <input
                  type="text"
                  onChange={changeHandle}
                  name="brand"
                  id="brand"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Araç Markası*"
                />
              </div>
              <div className="relative m-2 lg:m-0">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <TruckIcon
                    className="h-5 w-5 flex-none text-gray-400"
                    aria-hidden="true"
                  />
                </div>
                <input
                  type="text"
                  name="model"
                  onChange={changeHandle}
                  id="model"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Araç Modeli*"
                />
              </div>
              <div className="relative m-2 lg:m-0">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <CalendarIcon
                    className="h-5 w-5 flex-none text-gray-400"
                    aria-hidden="true"
                  />
                </div>
                <input
                  type="number"
                  id="year"
                  onChange={changeHandle}
                  name="year"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Araç Yılı*"
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
                  onChange={changeHandle}
                  name="job"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Meslek*"
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
                  type="phone"
                  id="phone"
                  onChange={changeHandle}
                  name="phone"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Telefon Numarası*"
                />
              </div>
            </div>
          )}
        </div>
        <fieldset>
          <legend className="sr-only">Checkbox variants</legend>

          <div className="flex items-center text-center mx-auto m-4">
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
                target='_blank'
                className="text-blue-600 hover:underline dark:text-blue-500 mr-1"
              >
                KVKK Aydınlatma metnini
              </a>
              okudum kabul ediyorum *
            </label>
          </div>
        </fieldset>
        <div className="mb-6 justify-end flex">
          <button onClick={submitHandle} disabled={checked ? isDisabled : true} className="inline-flex w-[50%] disabled:opacity-50 disabled:pointer-events-none lg:w-[20%] m-4 mx-auto md:mx-4 justify-center rounded-md bg-slate-900 p-4 px-7 text-sm font-medium text-white hover:bg-opacity-70   focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 hover:bg-green-700">
            HEMEN TEKLİF AL
          </button>
        </div>
      </div>
    </div>
  );
}

export default Offer