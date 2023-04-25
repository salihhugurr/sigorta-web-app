import React from 'react'

type Props = {
    images: any;
}

const Agencies = ({images}: Props) => {
  return (
    <div className="flex w-full items-center justify-center p-6 bg-gray-50 divide-y divide-dashed">
      <div className="block justify-center items-center text-center">
        <div className="text-3xl text-slate-600 m-2 font-bold">
          Yetkili Acenteliklerimiz
        </div>
        <section className={`flex justify-center items-center my-4 rounded-lg`}>
          <div className={`flex justify-center items-center flex-wrap w-full`}>
            {images.map((image: { url: string | undefined; }) => (
              <div
                className={`flex-1 flex justify-center items-center sm:min-w-[192px] min-w-[120px] m-5`}
              >
                <img
                  src={image.url}
                  alt="client_logo"
                  className="sm:w-[192px] w-[100px] object-contain"
                />
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default Agencies