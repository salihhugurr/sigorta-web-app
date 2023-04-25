import { Banner, Detail } from "@/components";
import React from "react";

type Props = {};

const Vision = (props: Props) => {
  return (
    <div className="flex h-full w-full">
      <div className="block w-full">
        <Banner title="Vizyonumuz" />
        <Detail
          title="Vizyonumuz"
          desc="“Hayatınızı Sorunlara Rağmen Kolayca Yaşamanızı Sağlamak.”

Hayatın devamlılığı ve kolaylaştırılması için benzersiz sigorta deneyimi sunarak değer yaratmak."
        />
      </div>
    </div>
  );
};

export default Vision;
