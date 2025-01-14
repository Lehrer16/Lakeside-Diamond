"use client"
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import axios from 'axios';
import { Button } from "./ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "./ui/form";
import { Input } from "./ui/input";
import { PhoneInput } from './ui/phone-input';
import { Textarea } from "./ui/textarea";
import { Alert, AlertTitle, AlertDescription } from "./ui/alert"; // Import Alert components

const formSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  phoneNumber: z.string(),
  message: z.string()
});

type FormSchema = z.infer<typeof formSchema>;

const Contact: React.FC = () => {
  const [alertVisible, setAlertVisible] = useState(false); // State for alert visibility
  const [buttonVisible, setButtonVisible] = useState(true);
  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (values: FormSchema) => {
    try {
      await axios.post('http://localhost:3001/send-email', {
        name_1228552691: values.firstName,
        name_4065521563: values.lastName,
        name_2379382481: values.phoneNumber,
        name_6917041169: values.message,
      });
      setAlertVisible(true); // Show alert on success
      setButtonVisible(false);
    } catch (error) {
      console.error('Error submitting the form:', error);
      alert('Failed to submit the form. Please try again.');
    }
  };

  return (
    <div>
      
      <Form {...form}>
        <form 
          onSubmit={form.handleSubmit(onSubmit)} 
          className="space-y-8 max-w-3xl mx-auto py-10 text-input"
        >
          <div className="grid grid-cols-12 gap-4 focus:resize-none">
            <div className="col-span-6 focus:resize-none">
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>First Name</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder=""
                        className=""
                        type="text"
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="col-span-6">
              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Last Name</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder=""
                        type="text"
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
          <FormField
            control={form.control}
            name="phoneNumber"
            render={({ field }) => (
              <FormItem className="flex flex-col items-start resize-none">
                <FormLabel>Phone number</FormLabel>
                <FormControl className="w-full">
                  <PhoneInput
                    placeholder=""
                    className="resize-none"
                    {...field}
                    defaultCountry="US"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem className="text-input">
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder=""
                    className="resize-none border border-input"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {alertVisible && ( 
          <Alert className='bg-black text-input'>
            <AlertTitle>Success!</AlertTitle>
            <AlertDescription>Your message has been sent successfully.</AlertDescription>
          </Alert>
          )}
          
          {buttonVisible &&(
          <Button
            className="links border-input hover:bg-input hover:text-black"
            variant="outline"
            type="submit"
          >
            Send
          </Button>
          )}
          
        </form>
      </Form>
    </div>
  );
}

export default Contact;
