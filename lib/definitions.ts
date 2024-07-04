import z from "zod";

export interface PageProps {
  params: { slug: string };
}

export interface FontProps {
  className: string;
  style: {
    fontFamily: string;
    fontWeight?: number;
    fontStyle?: string;
  };
  variable: string;
}

export const formSchema = z.object({
  fullname: z
    .string({ required_error: "Required" })
    .min(2, { message: "Name must be at least 2 characters long." })
    .trim(),
  email: z
    .string({ required_error: "Required" })
    .email({ message: "Enter a valid email." })
    .trim(),
    

    contactnumber: z
    .string()
    .min(10, "Phone number must be at least 10 digits")
    .regex(/^\(?([0-9]{3})\)?[-.●]?([0-9]{3})[-.●]?([0-9]{4})$/, "Invalid phone number"),
    // contactnumber: z.coerce
    // .number({
    //   required_error: "Telphone number required!",
    //   invalid_type_error: "Invalid Number!",
    // })
    // .positive()
    // .min(11),
  company: z.string(),
  industry: z.string(),
  service: z.string(),
  sector: z.string(),
  
});

export const getInTouchFormSchema = z.object({
  name: z.string().min(1, { message: "Cannot be empty!!!" }),
  email: z.string().email().min(5, { message: "Cannot be empty!!!" }),
  subject: z.string().min(1, { message: "Cannot be empty!!!" }),
  phone: z
    .string()
    .min(10, "Phone number must be at least 10 digits")
    .regex(/^\(?([0-9]{3})\)?[-.●]?([0-9]{3})[-.●]?([0-9]{4})$/, "Invalid phone number"),
  message: z
    .string()
    .max(350, { message: "Message cannot be longer than 350 characters" }),
});
