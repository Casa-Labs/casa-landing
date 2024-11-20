"use client";

import { useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { NewsLetterSchema } from "@/schema/zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

export default function NewsLetterForm() {
  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof NewsLetterSchema>>({
    resolver: zodResolver(NewsLetterSchema),
    defaultValues: {
      emailId: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof NewsLetterSchema>) {
    startTransition(async () => {
      await fetch("/newsletter/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: values.emailId }),
      });
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="emailId"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="hidden">Email</FormLabel>
              <FormControl>
                <Input placeholder="E-mail" className="border-b" {...field} />
              </FormControl>
              <FormDescription>
                Join our newsletter to get offers, update and our latest trends.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button disabled={isPending}>
          {isPending ? "Subscribing..." : "Subscribe"}
        </Button>
      </form>
    </Form>
  );
}
