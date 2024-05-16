"use client"

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { AnimatedBorder } from "./AnimatedBorder";

const formSchema = z.object({
  apiKey: z.string().min(2, {
    message: "API key must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  latitude: z.string({
    required_error: "Latitude is required.",
  }),
  longitude: z.string({
    required_error: "Longitude is required.",
  }),
});

type ProfileFormValues = z.infer<typeof formSchema>;

type ProfileFormProps = {
  onSubmit: (data: ProfileFormValues) => void;
  defaultLatitude?: {latitude: string, longitude: string};
  defaultLongitude?: string;
  loading?: boolean;
};

export function ProfileForm({ onSubmit, defaultLatitude, defaultLongitude, loading }: ProfileFormProps) {
  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      apiKey: "",
      email: "",
      latitude: defaultLatitude.latitude ? defaultLatitude.latitude : "",
      longitude: defaultLatitude.longitude ? defaultLatitude.longitude :"",
    },
  });

  return (
          <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 ">
        <FormField
          control={form.control}
          name="apiKey"
          render={({ field }) => (
            <FormItem>
              <FormLabel>API Key</FormLabel>
              <FormControl>
                <AnimatedBorder enabled={loading}>
                  <Input placeholder="Your API key..." {...field} 
                  style={{ width: '400px' }}
                  />
                </AnimatedBorder>
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
              <FormLabel>Email</FormLabel>
              <FormControl>
              <AnimatedBorder enabled={loading}>
                <Input placeholder="Your email..." {...field} />
              </AnimatedBorder>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="latitude"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Latitude</FormLabel>
              <FormControl>
                <AnimatedBorder enabled={loading}>
                  <Input placeholder="Enter Latitude..." {...field} />
                </AnimatedBorder>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="longitude"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Longitude</FormLabel>
              <FormControl>
                <AnimatedBorder enabled={loading}>
                  <Input placeholder="Enter Longitude..." {...field} />
                </AnimatedBorder>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}