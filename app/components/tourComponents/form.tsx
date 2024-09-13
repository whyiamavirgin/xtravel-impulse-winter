"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { useTranslations } from "next-intl"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useState } from "react"



export function ProfileForm() {

    const g = useTranslations("General")

    const formSchema = z.object({
        name: z.string().min(1, {
          message: `${g('required')}`,
        }),
        email: z.string().email({
          message: `${g('required')}`,
        }),
        phone: z.string().min(5, {
          message: `${g('required')}`,
        }),
      })

    const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
        name: "",
        email: "",
        phone: ""
      },
    })
   
    function onSubmit(values: z.infer<typeof formSchema>) {
      console.log(values)
    }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-14">
        <div className="flex flex-col gap-4">
            <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
                <FormItem>
                <FormControl>
                    <Input placeholder={`${g('name')}`} {...field} />
                </FormControl>
                <FormMessage className="text-xs ml-1 font-bold" />
                </FormItem>
            )}
            />
            <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
                <FormItem>
                <FormControl>
                    <Input placeholder={`${g('email')}`} {...field} />
                </FormControl>
                <FormMessage className="text-xs ml-1 font-bold" />
                </FormItem>
            )}
            />
            <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
                <FormItem>
                <FormControl>
                    <Input placeholder='+49 123 456 7890' {...field} />
                </FormControl>
                <FormMessage className="text-xs ml-1 font-bold" />
                </FormItem>
            )}
            />
        </div>
        <Button className="w-full" type="submit">{g('callMe')}</Button>
      </form>
    </Form>
  )
}
