import {Carousel,Agencies, About, Offer} from "@/components";
import React from "react";

const Home = () => {

  const images = [
    {
      url: "https://sigortacigazetesi.com.tr/wp-content/uploads/2019/11/acibadem.jpg",
    },
    {
      url: "https://sigortacigazetesi.com.tr/wp-content/uploads/2022/05/axa-sigorta-logo-.png",
    },
    {
      url: "https://www.allianz.com.tr/content/dam/onemarketing/system/AZ_Logo_Twitter_438x220px.png",
    },
    {
      url: "https://i.borsamanset.com/storage/files/images/2022/02/08/a-R017_cover.jpg",
    },
    {
      url: "https://sigortasepeti.com/wp-content/uploads/2020/04/halksigorta-750x465.png",
    },
    {
      url: "https://cdnuploads.aa.com.tr/uploads/sirkethaberleri/Contents/2021/06/01/thumbs_b_c_e9c9cfc2224b5907c92d6c5d74c09f18.jpg",
    },
    
    
  ];
  return (
    <div className="block w-full h-full justify-center items-center divide-y divide-dashed">
      <Carousel autoSlide={true} />
      <About />
      <Agencies images={images} />
      <Offer />
    </div>
  );
}
export default Home;
