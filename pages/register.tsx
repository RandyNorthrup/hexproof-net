export default function Register() {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Register</h2>
      <form className="flex flex-col gap-2">
        <input type="email" placeholder="Email" className="border p-2" />
        <input type="password" placeholder="Password" className="border p-2" />
        <button className="bg-blue-500 text-white px-4 py-2">Register</button>
      </form>
    </div>
  );
}