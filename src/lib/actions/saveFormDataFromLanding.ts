import { supabase } from "@/lib/supabaseClient";

export interface ContactFormData {
  name: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
  termsAccepted: boolean;
}

export const saveContactFormData = async (data: ContactFormData) => {
  const { error } = await supabase.from("contact").insert([data]);

  if (error) {
    console.error("Error saving contact form:", error);
    return false;
  }

  return true;
};
