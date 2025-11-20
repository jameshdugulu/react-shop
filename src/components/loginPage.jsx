function Login() {
  return (
      <div
        className="
          sticky top-10 bg-white h-[max-content] w-full max-w-md mx-auto 
          p-10 rounded-lg shadow-lg flex flex-col gap-6 justify-center
        "
      >
        <h1 className="text-2xl font-semibold text-center mb-10">Welcome Back</h1>

        <form className="space-y-4 p-10">
          {/* Email */}
          <div className="flex flex-col">
            <label htmlFor="email" className="font-medium mb-1">Email</label>
            <input
              type="email"
              id="email"
              className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Password */}
          <div className="flex flex-col">
            <label htmlFor="password" className="font-medium mb-1">Password</label>
            <input
              type="password"
              id="password"
              className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter your password"
              required
            />
          </div>

          {/* Forgot Password */}
          <div className="text-right">
            <a href="#" className="text-sm text-indigo-500 hover:underline">
              Forgot password?
            </a>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition"
          >
            Login
          </button>

          {/* Divider */}
          <div className="flex items-center justify-center my-2">
            <hr className="w-full border-gray-300" />
            <span className="px-2 text-gray-500 text-sm">OR</span>
            <hr className="w-full border-gray-300" />
          </div>

          {/* Google Login */}
          <button
            type="button"
            className="w-full flex items-center justify-center gap-2 border border-gray-300 py-2 rounded-lg hover:bg-gray-100 transition"
          >
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="Google"
              className="w-5 h-5"
            />
            Continue with Google
          </button>
        </form>

        {/* Create Account */}
        <p className="text-center text-sm mt-10">
          Don’t have an account?{" "}
          <a href="#" className="text-indigo-600 font-medium hover:underline">
            Create one
          </a>
        </p>
      </div>
  );
}

export default Login;
