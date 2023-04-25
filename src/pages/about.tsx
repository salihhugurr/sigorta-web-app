import { Banner, Detail } from '@/components'
import React from 'react'

type Props = {}

const About = (props: Props) => {
  return (
    <div className="flex h-full w-full">
      <div className="block w-full">
        <Banner title="Hakkımızda" />
        <Detail
          title="Hakkımızda"
          desc="1990’larda Adana ilimizde başlayan sigortacılık yolculuğumuzu taçlandırdığımız İş Sigorta 2002 yılında kurularak sektöre merhaba demiştir. 
Kurulduğu ilk günden itibaren müşteri odaklı hizmet sunmayı ve sigorta bilincinin yaygınlaşmasını kendine misyon edinen İş Sigorta, kalite bilincini ve değerini yükselterek yoluna devam etmektedir.  
Hizmet Yarışı olarak adlandırdığımız anlayışımız, verilen hizmetin kalitesine odaklanmıştır. Bu düşünce ile önceliğimiz;  insanların mutluluğu ve güvencesi hedeflenmekte, sunulan tüm hizmetler, bireylerin ve kurumların karşı karşıya kalacakları tüm risklere ve ihtiyaçlara, en uygun, en ekonomik çözümler üretilerek, doğru zamanda yerine getirilmektedir.
Sigortacılıkta bu hizmet anlayışı ve güven, bir hasar gerçekleştiğinde İş Sigorta’nın müşterilerinin yanında olması olarak özetlenebilir."
        />
      </div>
    </div>
  );
}

export default About