import { createUser } from "@/actions/create-user";

function RegisterPage() {
  return (
    <div className="bg-amber-400 w-full min-h-screen">
      <form action={createUser}>
        <label htmlFor="name">name</label>
        <input type="text" name="name" id="name" placeholder="name" />
        <button type="submit">create user</button>
      </form>
    </div>
  );
}

export default RegisterPage;
