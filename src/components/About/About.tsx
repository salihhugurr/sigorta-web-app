import React from 'react'

type Props = {}

const About = (props: Props) => {
  return (
    <div>
      
      <div className="block md:flex text-center w-full items-center justify-center p-6 bg-white py-10">
        <div className="flex md:w-[40%] justify-center items-center">
          <div className="block text-center text-slate-900 font-bold">
            Güvenilir Sigortacılık
            <p className="text-4xl text-slate-600 m-2">HAKKIMIZDA</p>
          </div>
        </div>
        <div className="flex-1 ">
          1990’larda Adana ilimizde başlayan sigortacılık yolculuğumuzu
          taçlandırdığımız İş Sigorta 2002 yılında kurularak sektöre merhaba
          demiştir.
          <a href="/about" className="ml-2 text-blue-500">
            Devamını oku...
          </a>
        </div>
      </div>
    </div>
  );
}

export default About