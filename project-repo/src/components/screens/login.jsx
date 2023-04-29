import { LockClosedIcon } from '@heroicons/react/20/solid'
import { useState, useContext} from 'react';
import axios from 'axios';
import apiURL from "../../config/apiURL";
import { toast } from 'react-toastify';
import { Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from '../../App';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const { isAdminLoggedIn, login } = useContext(AuthContext);
  const navigate = useNavigate();

  if(isAdminLoggedIn){
    return <Navigate to="/dashboard" />;
  }
  
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(apiURL + '/login', {
        email,
        password,
      });
      
      const data = await response.data;
      const token = data.token;
      toast.success('Welcome Admin!', { position: 'top-right' });
      sessionStorage.setItem('authToken', token);
      login();
      navigate('/browse')

      return;

    } catch (error) {
      console.log(error);
      toast.error("Invalid username or password", { position: 'top-right' });
    }
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <div className="flex near-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div>
            <img
              className="mx-auto h-12 w-auto logo"
              src="https://cdn3.iconfinder.com/data/icons/rounded-folders/64/rounded_folder_label_closed-512.png"
              alt="Your Company"
            />
             <p className="mt-6 text-center text-sm text-gray-600">Welcome Back Admin!</p>
            <h2 className="mt-2 text-center text-3xl font-bold tracking-tight text-gray-800">
              Log In
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Or{' '}
              <a href="/signup" className="font-medium text-purple-600 hover:text-purple-500">
                use admin code to create a new account
              </a>
            </p>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="-space-y-px rounded-md shadow-sm">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="relative block w-full rounded-t-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-purple-600 sm:text-sm sm:leading-6"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email address"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  autoComplete="current-password"
                  required
                  className="relative block w-full rounded-b-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-purple-600 sm:text-sm sm:leading-6"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="show-password"
                  name="show-password"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-purple-600 focus:ring-purple-600"
                  checked={showPassword}
                  onChange={toggleShowPassword}
                />
                <label htmlFor="show-password" className="ml-2 block text-sm text-gray-800">
                  Show Password
                </label>
              </div>
            {/* 
              <div className="text-sm">
                <a href="/forgotpassword" className="font-medium text-purple-600 hover:text-purple-500">
                  Forgot your password?
                </a>
              </div> */}
            </div>

            <div>
              <button
                type="submit"
                className="group relative flex w-full justify-center rounded-md bg-purple-600 py-2 px-3 text-sm font-semibold text-white hover:bg-purple-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600"
              >
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <LockClosedIcon className="h-5 w-5 text-purple-500 group-hover:text-purple-400" aria-hidden="true" />
                </span>
                Log In
              </button>
            </div>
          </form>
        </div>
        <div
          className="absolute inset-x-0 -z-10 transform-gpu overflow-hidden blur-3xl top-[calc(100%-50rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
      </div>
    </>
  )
}
