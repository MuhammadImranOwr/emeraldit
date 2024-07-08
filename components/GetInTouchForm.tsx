"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { getInTouchFormSchema } from "@/lib/definitions";
import { toast } from "@/components/ui/use-toast";
import SubmitButton from "./SubmitButton";
import { contactusform, handleContactForm } from "@/lib/actions";
import { useFormState } from "react-dom";
import { useAction } from "next-safe-action/hooks";
const GetInTouchForm = () => {
  const form = useForm<z.infer<typeof getInTouchFormSchema>>({
    resolver: zodResolver(getInTouchFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      phone: "", // Add this line
      message: "",
    },
  });

  const { execute, status } = useAction(contactusform, {
    onSuccess(data) {
      if (data.data?.message) {
        toast({
          title: "Success",
          description: data.data.message,
          variant: "success",
        });

        form.reset();
      }
    },

    onError(data) {
      if (data.error) {
        toast({
          title: "Something went wrong",
          description: data.error.serverError,
          variant: "destructive",
        });
      }
    },
  });

  function onSubmit(data: z.infer<typeof getInTouchFormSchema>) {
    execute(data);
  }

  return (
    <div className="w-full max-w-2xl">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 pl-4">
          <div className="grid md:grid-cols-2 gap-4 ">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-custom-heading-500 text-1xl font-semibold">
                    Your Name *
                  </FormLabel>
                  <FormControl>
                    <Input
                      required
                      placeholder="Enter Name"
                      {...field}
                      className="block w-full p-4 rounded-none text-gray-900 border border-gray-300   text-base appearance-none  focus-visible:ring-0 focus:border-customr-inputborder focus:bg-gray-100 py-6 "
                    />
                  </FormControl>{" "}
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-custom-heading-500 text-1xl font-semibold">
                    Your Email *
                  </FormLabel>

                  <FormControl>
                    <Input
                      required
                      placeholder="Enter Email"
                      type="email"
                      {...field}
                      className="block w-full p-4 rounded-none text-gray-900 border border-gray-300   text-base appearance-none  focus-visible:ring-0 focus:border-customr-inputborder focus:bg-gray-100 py-6 "
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="grid md:grid-cols-2 gap-4 ">
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-custom-heading-500 text-1xl font-semibold">
                    Phone *
                  </FormLabel>
                  <FormControl>
                    <Input
                      maxLength={10}
                      required
                      placeholder="Enter Phone Number"
                      {...field}
                      className="block w-full p-4 rounded-none text-gray-900 border border-gray-300   text-base appearance-none  focus-visible:ring-0 focus:border-customr-inputborder focus:bg-gray-100  py-6"
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="subject"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-custom-heading-500 text-1xl font-semibold">
                    Company *
                  </FormLabel>
                  <FormControl>
                    <Input
                      required
                      placeholder="Enter Company Name"
                      {...field}
                      id="large-input"
                      className="block w-full p-4 rounded-none text-gray-900 border border-gray-300   text-base appearance-none  focus-visible:ring-0 focus:border-customr-inputborder focus:bg-gray-100 py-6 "
                    />
                  </FormControl>{" "}
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                {" "}
                <FormLabel className="text-custom-heading-500 text-1xl font-semibold">
                  Message
                </FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Type Your Message..."
                    {...field}
                    className="block w-full p-4 rounded-none text-gray-900 border border-gray-300   text-base appearance-none  focus-visible:ring-0 focus:border-customr-inputborder focus:bg-gray-100 "
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex justify-end">
            <SubmitButton
              text="Submit Request"
              variant="outline"
              className="bg-custom-emerald text-1xl font-semibold px-14  hover:bg-custom-heading-500 hover:text-white"
              status={status}
            />
          </div>
        </form>
      </Form>
    </div>
  );
};

export default GetInTouchForm;
