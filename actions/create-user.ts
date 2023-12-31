"use server";

export async function createUser(formData: FormData) {
  console.log(formData.get("name"));
  return "success";
}
