import { z } from "zod";

export const NewsLetterSchema = z.object({
  emailId: z.string().email({ message: "Email id required!" }).min(1),
});
