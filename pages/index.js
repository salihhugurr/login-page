import Head from "next/head";
import { FaFacebookF, FaGoogle, FaGithub, FaRegEnvelope } from "react-icons/fa";
import { MdLockOutline } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <div className="bg-white rounded-xl shadow-2xl w-2/3 max-w-4xl flex">
          {/* Sign In */}
          <div className="w-3/5 p-5">
            <div className="text-left font-bold">
              <span className="text-green-700 font-bold">NDB</span>Learning
            </div>
            <div className="py-10">
              <div className="text-3xl font-bold text-gray-900">
                <span className="text-3xl font-bold text-green-700 mb-2">
                  Sign in to NDB
                </span>
                Learning
              </div>
              <div className="border-2 w-10 border-green-700 inline-block mb-2"></div>
              <div className="flex justify-center my-2">
                <a
                  href="#"
                  className="border-2 border-gray-100 rounded-full p-3 mx-1"
                >
                  <FaFacebookF className="text-2xl text-blue-900" />
                </a>
                <a
                  href="#"
                  className="border-2 border-gray-100 rounded-full p-3 mx-1"
                >
                  <FcGoogle className="text-2xl" />
                </a>
                <a
                  href="#"
                  className="border-2 border-gray-100 rounded-full p-3 mx-1"
                >
                  <FaGithub className="text-2xl" />
                </a>
              </div>
              <p className="text-gray-400 my-3">or use your email account</p>
              <div className="flex flex-col items-center mb-3">
                <div className="bg-gray-100 w-64 p-2 flex items-center">
                  <FaRegEnvelope className="text-gray-400 m-2" />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="bg-gray-100 outline-none"
                  />
                </div>
              </div>
              <div className="flex flex-col items-center mb-3">
                <div className="bg-gray-100 w-64 p-2 flex items-center">
                  <MdLockOutline className="text-gray-400 m-2" />
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="bg-gray-100 outline-none"
                  />
                </div>
                <div className="flex justify-between items-center mt-3 w-64 mb-5">
                  <label className="text-xs items-center flex">
                    <input type="checkbox" name="remember" className="mr-1" />
                    Remember me
                  </label>
                  <a href="#" className="text-xs">
                    Forgot Password?
                  </a>
                </div>
                <a
                  href="#"
                  className="border-2 border-green-700 text-green-700 rounded-full px-12 py-2 inline-block font-semibold hover:font-bold hover:bg-green-700 hover:border-white hover:text-white"
                >
                  Sign in
                </a>
              </div>
            </div>
          </div>

          {/* Sign Up */}
          <div className="w-2/5 bg-green-700 text-white rounded-tr-2xl rounded-br-2xl py-36 px-12">
            <h2 className="text-3xl font-bold mb-2">Hello!</h2>
            <div className="border-2 w-10 border-white inline-block mb-2"></div>
            <p className="mb-10">
              Fill up personal information and start journey with us!
            </p>
            <a
              href="#"
              className="border-2 border-white rounded-full px-12 py-2 inline-block font-semibold hover:font-bold hover:bg-white hover:border-white hover:text-green-700"
            >
              Sign Up
            </a>
          </div>
        </div>
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t">
        <a
          className="flex items-center justify-center"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/logo-gray.png" alt="Hitsoft Logo" className="h-4 ml-2" />
        </a>
      </footer>
    </div>
  );
}
