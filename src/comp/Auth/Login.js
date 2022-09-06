import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';

import { login } from "../../action-reducers/login/loginAction";

import { ReactComponent as LoginImg } from '../../assets/svg/auth/login.svg';
import AnimeInputField from "../Common/AnimeInputField";
import logoIgc from '../../assets/img/logo-igc.png';
import logoUh from '../../assets/img/uh-logo.png';
import logo from '../../assets/img/logo2.png';

function Login() {
  const [isLoading, setIsLoading] = useState(false)
  const [details, setDetails] = useState({
    email: 'admin@gmail.com', // admin@gmail.com
    password: 'pwd_admin' // pwd_admin
  })

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const onChange = e => {
    setDetails(p => ({
      ...p,
      [e.target.name]: e.target.value
    }))
  }

  const onSuccess = (data) => {
    const roles = {
      transporter: '/transporter/dpr',
      supervisor: '/supervisor/dpr',
      associate: '/associate/dpr',
      security: '/security/dpr',
      manager: '/manager/dashboard',
      admin: '/admin/user',
      cfa: '/cfa/dpr',
    }

    const to = roles[data?.role] || ""
    if (to) navigate(to)
  }

  const onSubmit = () => {
    setIsLoading(true)
    dispatch(login(details, onSuccess, () => setIsLoading(false)))
  }

  return (
    <div className="df flex-col justify-between py-8 auth-bg h-screen bg-no-repeat bg-cover bg-center">
      <div className="df gap-8">
        <img className="w-16" src={logoUh} alt="logoUh" />
        <img className="h-10" src={logo} alt="logo" />
      </div>

      <div className="-mt-4 text-xl font-medium text-gray-600">Blockchain Enabled Cold Chain Logistics</div>

      <div className="w-[clamp(750px,60vw,900px)] grid grid-cols-[60%_40%] bg-white rounded-2xl shadow-intensed">
        <div className="dc rounded-l-2xl bg-slate-50">
          <LoginImg className="w-full h-full" />
        </div>

        <div className="dfc p-4 text-center">
          <p className="w-fit -ml-4 py-2 px-6 bg-[#dfe7fe] rounded-r-full">Welcome Back</p>

          <header className="mt-8 mb-4 px-4 text-2xl">Login your account</header>

          <AnimeInputField
            wrapperCls="mx-6 my-3"
            inpCls="border-0 border-b"
            txt="User Name"
            name="email"
            value={details.email}
            onChange={onChange}
          />

          <AnimeInputField
            wrapperCls="mx-6 my-3"
            inputType="password"
            inpCls="border-0 border-b"
            txt="Password"
            name="password"
            value={details.password}
            onChange={onChange}
          />

          <button
            className={`my-6 px-8 ${isLoading ? "cursor-default" : "hover:bg-[#b0c3fd]"} bg-[#dfe7fe] transition-colors mx-auto rounded-full`}
            onClick={onSubmit}
            disabled={isLoading}
          >
            Login
          </button>

          <Link className="hover:text-[#375fd8]" to='/signup'>Create Account</Link>

          <Link className="mt-auto hover:text-[#375fd8]" to='/forget-password'>Forget Password</Link>
        </div>
      </div>

      <div className="df text-xl">
        Designed and Developed by
        <img className="w-12" src={logoIgc} alt="logoIgc" />
      </div>
    </div>
  )
}

export default Login