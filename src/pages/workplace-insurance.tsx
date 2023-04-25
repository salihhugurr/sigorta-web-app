import { Banner, ServiceDetail } from "@/components";
import { EnvelopeIcon, PhoneIcon, UserIcon } from "@heroicons/react/20/solid";
import React, { useState } from "react";
import { toast } from "react-toastify";

type Props = {};

const WorkplaceInsurance = (props: Props) => {
        const [form, setForm] = useState({
          name: "",
          email: "",
          phone: "",
          subject: "İşyeri Sigortası"
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

        const isDisabled = Object.values(form).some((value) => !value);
        return (
          <div className="flex h-full w-full">
            <div className="block w-full h-full">
              <div className="block w-full">
                <Banner title="İşyeri Sigortası" />
                <div className="block md:flex w-full justify-center md:py-32 py-8">
                  <img
                    src="/misyon.jpg"
                    className="w-[90%] m-auto md:m-0 md:h-[40%] md:w-[40%]"
                  />
                  <div className="block w-[90%] h-[90%] md:w-[40%] md:h-[40%] font-semibold text-slate-600 my-auto ml-8 text-xl">
                    İşyeri Sigortası
                    <p className="text-4xl font-black text-slate-900 my-2">"</p>
                    <div className="text-base font-bold text-slate-600 mt-4 gap-2">
                      İşyeri Sigortası Nedir?
                      <p className="text-sm font-normal text-slate-500">
                        İş yeri sigortası veya iş yeri yangın sigortası hem iş
                        yerini hem de iş yerindeki malları güvence altına alan
                        bir sigorta türüdür. İş yeri ile birlikte iş yerindeki
                        her türlü muhteviyatı (demirbaş eşya, emtia, makine ve
                        tesisat) ve camları yangın, yıldırım, deprem, infilak
                        gibi durumlara karşı güvence altına alır. Sen de iş yeri
                        sigortası yaptırarak ihtiyaçlarına göre düzenlenen tek
                        bir poliçe ile iş yerini olası risklere koruyabilirsin.
                        İş yeri sahiplerinin çalışanlarına yaptırabileceği
                        sigorta türlerinden biri ise grup sağlık sigortasıdır.
                      </p>
                      <div className="m-3 font-bold text-md">
                        - Uygun Fiyat
                        <br />
                        - 7/24 & Kaza Anında Destek
                        <br />
                        - WhatsApp ile HızlıTeklif
                        <br />- Kesintisiz Hizmet
                      </div>
                    </div>
                    <p className="m-4 font-bold text-slate-900">
                      Hizmet Talep Formu
                    </p>
                    <form className="block justify-center gap-6 w-full m-auto">
                      <div className="relative m-2 ">
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
                          placeholder="Adınız Soyadınız*"
                        />
                      </div>
                      <div className="relative m-2 ">
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
                          placeholder="Email Adresiniz*"
                        />
                      </div>
                      <div className="relative m-2 ">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                          <PhoneIcon
                            className="h-5 w-5 flex-none text-gray-400"
                            aria-hidden="true"
                          />
                        </div>
                        <input
                          type="number"
                          id="phone"
                          name="phone"
                          onChange={changeHandle}
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder="Telefon*"
                        />
                      </div>
                    </form>
                    <fieldset className="m-4">
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
                        className="inline-flex w-[50%] lg:w-[50%] m-4 mx-auto md:mx-4 justify-center rounded-md bg-slate-900 p-4 px-7 text-sm font-medium text-white hover:bg-opacity-70   focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 hover:bg-green-700 disabled:opacity-50 disabled:pointer-events-none"
                      >
                        Gönder
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
};

export default WorkplaceInsurance;
