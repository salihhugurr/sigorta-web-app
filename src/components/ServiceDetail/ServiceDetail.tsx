import React from "react";

type Props = {
  title: string;
  desc: string;
  mainTitle: string;
};

const ServiceDetail = ({ title, desc,mainTitle }: Props) => {
  return (
    <div className="flex w-full justify-center py-32">
      <img src="/misyon.jpg" className="h-[30%] w-[30%]" />
      <div className="block w-[40%] h-[40%] font-semibold text-slate-600 my-auto ml-8 text-xl">
        {mainTitle}
        <p className="text-4xl font-black text-slate-900 my-2">{title}</p>
        <p className="text-base font-normal text-slate-600 mt-4">{desc}</p>
      </div>
    </div>
  );
};

export default ServiceDetail;
