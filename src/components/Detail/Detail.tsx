import React from 'react'

type Props = {
    title: string,
    desc:string,
}

const Detail = ({title,desc}: Props) => {
  return (
    <div className="block md:flex w-full justify-center md:py-32 my-8 gap-8">
      <img src="/misyon.jpg" className="w-[80%] m-auto md:m-0 h-[80%] md:h-[30%] md:w-[30%]" />
      <div className="block md:w-[40%] md:h-[40%] font-semibold text-slate-600 my-auto ml-8 text-xl">
        İş Sigorta
        <p className="text-4xl font-black text-slate-900 my-2">{title}</p>
        <p className="text-base font-normal text-slate-600 mt-4">
          {desc}
        </p>
      </div>
    </div>
  );
}

export default Detail