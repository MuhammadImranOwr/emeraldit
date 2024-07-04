"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { formSchema } from "@/lib/definitions";
import SubmitButton from "@/components/SubmitButton";
import { quoteaform ,handleFormSubmission } from "@/lib/actions";
import {useAction}from 'next-safe-action/hooks'
import { toast } from "./ui/use-toast";

type FormData = z.infer<typeof formSchema>;

const QuoteForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullname: "",
      email: "",
      contactnumber: "",
      company: "",
      sector: "",
      industry: "",
    },
  });

  const {execute,status} = useAction(quoteaform ,{
    onSuccess(data){
      if(data.data?.message){
        toast({
          title:'Success',
          description: data.data.message,
          variant:'success'
        })

        form.reset()
      }
    },

    onError(data){
      if(data.error){
        toast({
          title:'Something went wrong',
          description:data.error.serverError,
          variant:'destructive'
        })

      }
    },
    

  })

  function onSubmit(data: z.infer<typeof formSchema>) {
    execute(data)
   
  }
  

  


  return (
    <div className="w-full">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
          <div className="grid md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="fullname"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      {...field}
                      required
                      placeholder="Full Name *"
                      className="text-black"
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      {...field}
                      required
                      placeholder="Email *"
                      className="text-black"
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="contactnumber"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      maxLength={10}
                      required
                      placeholder="Enter Phone Number"
                      {...field}
                      className="text-black input-no-focus-ring "
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="company"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      required
                      {...field}
                      placeholder="Company Name *"
                      className="text-black"
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="sector"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Select
                      name="sector"
                      onValueChange={field.onChange}
                      defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="sector" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="sector1">sector1</SelectItem>
                        <SelectItem value="sector2">sector2</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="service"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Select
                      name="service"
                      onValueChange={field.onChange}
                      defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Service" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="business-intelligence">
                          Business Intelligence
                        </SelectItem>
                        <SelectItem value="responsible-ai">
                          Responsible AI
                        </SelectItem>
                        <SelectItem value="cloud">Cloud</SelectItem>
                        <SelectItem value="iot">
                          Internet Of Things (IOT)
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <SubmitButton
            status=""
            className="bg-custom-purple-400 hover:bg-custom-purple-500 hover:text-white uppercase px-10 py-6 text-xl"
            text="Submit "
          />
        </form>
      </Form>
    </div>
  );
};

export default QuoteForm;
