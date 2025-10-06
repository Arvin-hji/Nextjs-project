export default function Login() {
  return (
    <div className="bg-amber-50 h-100 rounded-xl w-100 m-auto mt-40  ">
      <div className="text-black text-center text-4xl m-10">
        <h1>Login</h1>
      </div>

      <div>
        <form className="text-center">
          <input
            type="text"
            className="border-4 border-black rounded-2xl  text-black text-center px-5 m-5"
            placeholder="Username"
          />
          <input
            type="Password"
            className="border-4 border-black rounded-2xl  text-black text-center px-5  "
            placeholder="Password"
          />
        </form>
      </div>
      <form>
        <button
          type="submit"
          className=" border-4 border-black rounded-2xl  text-black text-center px-5 m-35"
        >
          confirm
        </button>
      </form>
    </div>
  );
}
