import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

interface Form {
  name: string;
  surname: string;
  email: string;
  phone: string;
  subject: string;
  ID?: string;
  tax?: string;
  city?: string;
  district?: string;
  street?: string;
  site?: string;
  apartment?: string;
  doorNumber?: string;
  number?: string;
  m2?: string;
  job?: string;
  plate?: string;
  licence?: string;
  brand?: string;
  model?: string;
  year?: string;
  place?: string;
  person?: string;
  startDate?: string;
  endDate?: string;
  birthdate?: string;
  gender?: string;
  policy?: string;
  requestedBuilding?: string;
  requestedFurniture?: string;

}

const CONTACT_MESSAGE_FIELDS = {
  name: "İsim",
  surname: "Soyisim",
  email: "Email",
  phone: "Telefon Numarası",
  subject: "Hakkında Bilgi Almak İstiyor",
  ID: "TC Kimlik Numarası",
  tax: "Vergi Numarası",
  city: "İl",
  district: "İlçe",
  street: "Cadde",
  site: "Site",
  apartment: "Apartmant",
  doorNumber: "Kapı Numarası",
  number: "Bina Numarası",
  m2: "M2 Bilgisi",
  job: "Meslek",
   plate: "Plaka",
  licence: "Ruhsat Seri ve Sıra No",
  brand: "Araç Markası",
  model: "Araç Modeli",
  year: "Araç Yılı",
  place: "Seyahat Edilecek Bölge",
  person: "Kişi Sayısı",
  startDate: "Başlangıç Tarihi",
  endDate: "Bitiş Tarihi",
  birthdate: "Doğum Tarihi",
  gender: "Cinsiyet",
  policy: "Poliçe Bilgisi",
  requestedBuilding: "Talep Edilen Bina Bedeli",
  requestedFurniture: "Talep Edilen Eşya Bedeli"
};

const generateEmailContent = (data:Form) => {
  console.log(data)
  const stringData = Object.entries(data).reduce(
    (str, [key, val]) =>
      //@ts-ignore
      (str += `${CONTACT_MESSAGE_FIELDS[key]}: \n${val} \n \n`),
    ""
  );
  const htmlData = Object.entries(data).reduce((str, [key, val]) => {
    //@ts-ignore
    return (str += `<h3 class="form-heading" align="left">${CONTACT_MESSAGE_FIELDS[key]}</h3><p class="form-answer" align="left">${val}</p>`);
  }, "");

  console.log("html data",htmlData)

  return {
    text: stringData,
    html: `<!DOCTYPE html><html> <head> <title></title> <meta charset="utf-8"/> <meta name="viewport" content="width=device-width, initial-scale=1"/> <meta http-equiv="X-UA-Compatible" content="IE=edge"/> <style type="text/css"> body, table, td, a{-webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%;}table{border-collapse: collapse !important;}body{height: 100% !important; margin: 0 !important; padding: 0 !important; width: 100% !important;}@media screen and (max-width: 525px){.wrapper{width: 100% !important; max-width: 100% !important;}.responsive-table{width: 100% !important;}.padding{padding: 10px 5% 15px 5% !important;}.section-padding{padding: 0 15px 50px 15px !important;}}.form-container{margin-bottom: 24px; padding: 20px; border: 1px dashed #ccc;}.form-heading{color: #2a2a2a; font-family: "Helvetica Neue", "Helvetica", "Arial", sans-serif; font-weight: 400; text-align: left; line-height: 20px; font-size: 18px; margin: 0 0 8px; padding: 0;}.form-answer{color: #2a2a2a; font-family: "Helvetica Neue", "Helvetica", "Arial", sans-serif; font-weight: 300; text-align: left; line-height: 20px; font-size: 16px; margin: 0 0 24px; padding: 0;}div[style*="margin: 16px 0;"]{margin: 0 !important;}</style> </head> <body style="margin: 0 !important; padding: 0 !important; background: #fff"> <div style=" display: none; font-size: 1px; color: #fefefe; line-height: 1px;  max-height: 0px; max-width: 0px; opacity: 0; overflow: hidden; " ></div><table border="0" cellpadding="0" cellspacing="0" width="100%"> <tr> <td bgcolor="#ffffff" align="center" style="padding: 10px 15px 30px 15px" class="section-padding" > <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 500px" class="responsive-table" > <tr> <td> <table width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td> <table width="100%" border="0" cellspacing="0" cellpadding="0" > <tr> <td style=" padding: 0 0 0 0; font-size: 16px; line-height: 25px; color: #232323; " class="padding message-content" > <h2>${data.subject} Hakkında</h2> <div class="form-container">${htmlData}</div></td></tr></table> </td></tr></table> </td></tr></table> </td></tr></table> </body></html>`,
  };
}; 

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { body } = req;
  const form: Form = body;

  // Create a nodemailer transporter with your email account details
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASS,
  },
});

  // Set up the email message
  const message = {
    from: process.env.EMAIL,
    to: process.env.EMAIL,
    ...generateEmailContent(form),
    subject: form.subject,
  };

  try {
    // Send the email
    //@ts-ignore
    await transporter.sendMail(message);

    // Return a success response
    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    // Return an error response
    console.error(error);
    res.status(500).json({ message: "Error sending email" });
  }
}

