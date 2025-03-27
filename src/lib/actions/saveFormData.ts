import { FormData } from "@/components/questionaireModal.tsx/QuestionaireModal";
import { supabase } from "@/lib/supabaseClient";

export const saveFormData = async (data: FormData) => {
  const creatorTypeMap: Record<"A" | "B" | "C", string> = {
    A: "No uso OnlyFans",
    B: "Uso OnlyFans parcialmente",
    C: "Uso OnlyFans a tiempo completo",
  };

  const transformedData = {
    ...data,
    creatorType: data.creatorType ? creatorTypeMap[data.creatorType] : undefined,
  };

  const { error } = await supabase.from("contact-form").insert([transformedData]);

  if (error) {
    console.error("Error saving form data:", error);
    return false;
  }

  return true;
};
