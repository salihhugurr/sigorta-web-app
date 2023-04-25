import { Banner, Detail } from "@/components";
import React from "react";

type Props = {};

const Mission = (props: Props) => {
  return (
    <div className="flex h-full w-full">
      <div className="block w-full">
        <Banner title="Misyonumuz" />
        <Detail
          title="Misyonumuz"
          desc="“Sigortayı Kolay, Yalın ve Erişilebilir Hale Getirmek.”

Sigorta İhtiyaçlarınıza hızlı, etkin ve ekonomik çözümler üretiyoruz. Hizmette Kalite ve Güven Her Şeyden Önemlidir!"
        />
      </div>
    </div>
  );
};

export default Mission;
