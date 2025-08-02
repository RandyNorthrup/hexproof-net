export default function LoginForm() {
  return (
    <form className="flex flex-col gap-2 max-w-sm">
      <input type="email" placeholder="Email" className="border p-2" />
      <input type="password" placeholder="Password" className="border p-2" />
      <button className="bg-blue-500 text-white px-4 py-2">Login</button>
    </form>
  );
}