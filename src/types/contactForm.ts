import * as z from "zod";

export const ContactFormSchema = z.object({
  name: z.string().min(2, "This field is required"),
  email: z.string().email("This field is required"),
  phone: z.string().min(7, "This field is required"),
  message: z.string().min(1, "This field is required"),
});

export type ContactFormData = z.infer<typeof ContactFormSchema>;




type LocationItem = {
  id: string;
  label: string;
  city?: string;
  address?: string;
  phone?: string;
  image?: string;
  mapEmbedUrl?: string;
};

export default LocationItem;