"use server";

import nodemailer from 'nodemailer';
import { formSchema, getInTouchFormSchema } from "@/lib/definitions";
import { actionClient } from "./saveaction";
export const handleFormSubmission = async (formdata: FormData) => {
  const data = formSchema.safeParse({
    fullname: formdata.get("fullname"),
    email: formdata.get("email"),
    contactnumber: formdata.get("contactnumber"),
    company: formdata.get("company"),
    industry: formdata.get("industry"),
    sector: formdata.get("sector"),
    service: formdata.get("service"),
    
  });

  if (!data.success) {
    return {
      errors: data.error.flatten().fieldErrors,
      message: "Please fill all required fields",
    };
  }

  console.log(data);
  return { message: "Form Submitted Successfully" };
};

export const handleContactForm = (prev: any, formdata: FormData) => {
  const data = getInTouchFormSchema.safeParse({
    name: formdata.get("name"),
    email: formdata.get("email"),
    subject: formdata.get("subject"),
    phone: formdata.get("phone"),
    message: formdata.get("message"),
  });

  if (!data.success) {
    console.log(data.error.flatten().fieldErrors);
    return {
      errors: data.error.flatten().fieldErrors,
      message: "Please fill all required fields",
    };
  }


  console.log(data);
};


export const contactusform = actionClient.schema(
  getInTouchFormSchema
).action(async({parsedInput:{email,name,message,phone,subject}})=>{

  // Create a transporter object
  let transporter = nodemailer.createTransport({
    service: 'gmail', // e.g., Gmail
    auth: {
      user: process.env.EMAIL, // Your email address
      pass: process.env.EMAIL_PASSWORD, // Your email password
    },
  });

  // Set up email data
  let mailOptions = {
    from: process.env.EMAIL,
    to :"imran5hayder@gmail.com",
    subject : "free consultation ",
    text :`email: ${email},
    name: ${name} `,
  };

  //A promise that returns message from sendmail
  const sendMailPromise =()=>{
    return new Promise<void>((res,reject)=>{
      transporter.sendMail(mailOptions , function (err) {
        if(!err){
          res()
          console.log(`Email Seent: ${res}`)
        }
        else{
          reject()
          console.log(err)

        }
      })
    })
  }

  // Send the email
  try {
    await sendMailPromise()
   return {message: 'Email sent successfully!' };
  } catch (error) {
    return { error: 'Failed to send email'   };
  }
})


// quoteform data 


export const quoteaform = actionClient.schema(
  formSchema
).action(async({parsedInput:{fullname,email,contactnumber,company,industry,sector,service}})=>{

  // Create a transporter object
  let transporter = nodemailer.createTransport({
    service: 'gmail', // e.g., Gmail
    auth: {
      user: process.env.EMAIL, // Your email address
      pass: process.env.EMAIL_PASSWORD, // Your email password
    },
  });

 // Set up email data
 let mailOptions = {
  from: process.env.EMAIL,
  to :"imran5hayder@gmail.com",
  subject : "free consultation ",
  text :`email: ${email},
  name: ${name} `,
};


  //A promise that returns message from sendmail
  const sendMailPromise =()=>{
    return new Promise<void>((res,reject)=>{
      transporter.sendMail(mailOptions , function (err) {
        if(!err){
          res()
          console.log(`Email Seent: ${res}`)
        }
        else{
          reject()
          console.log(err)

        }
      })
    })
  }
    // Send the email
    try {
      await sendMailPromise()
     return {message: 'Email sent successfully!' };
    } catch (error) {
      return { error: 'Failed to send email'   };
    }
})



