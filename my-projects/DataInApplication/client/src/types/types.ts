import {z} from "zod";


// Create Schemas
export const LoginSchema = z.object({
  email: z.string(),
  password: z.string(),
})
export const RegisterSchema = z.object({
  username: z.string().min(5, "Длина строки не менее 5 символов"),
  email: z.string(),
  password: z.string().min(8, "Длина строки не менее 8 символов"),
})
export const NotesSchema = z.object({
  title: z.string(),
  text: z.string(),
})
export const MainObjectSchema = z.object({
  id: z.string(),
  title: z.string(),
  text: z.string(),
  userId: z.string(),
  createdAt: z.number()
})
export const ListSchema = z.array(MainObjectSchema)
export const InputNameSchema = z.object({})


// Create types
export type Register = z.infer<typeof RegisterSchema>;
export type List = z.infer<typeof ListSchema>
export type Note = z.infer<typeof NotesSchema>