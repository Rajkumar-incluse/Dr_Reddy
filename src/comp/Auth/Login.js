import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ReactComponent as LoginImg } from '../../assets/svg/auth/login.svg';
import AnimeInputField from "../Common/AnimeInputField";
import logoIgc from '../../assets/img/logo-igc.png';
import logoUh from '../../assets/img/uh-logo.png';
import logo from '../../assets/img/logo2.png';

function Login() {
  const navigate = useNavigate()
  const [deatails, setDetails] = useState({
    email: '',
    pass: ''
  })

  const onChange = e => {
    setDetails(p => ({
      ...p,
      [e.target.name]: e.target.value
    }))
  }

  const onSubmit = () => {
    if (deatails.email === "admin" && deatails.pass === "admin") {
      navigate('/admin/user')
    }

    if (deatails.email === "superviser" && deatails.pass === "superviser") {
      navigate('/superviser/dpr')
    }

    if (deatails.email === "manager" && deatails.pass === "manager") {
      navigate('/manager/dashboard')
    }

    if (deatails.email === "associate" && deatails.pass === "associate") {
      navigate('/associate/dpr')
    }

    if (deatails.email === "cfa" && deatails.pass === "cfa") {
      navigate('/cfa/dpr')
    }

    if (deatails.email === "transporter" && deatails.pass === "transporter") {
      navigate('/transporter/dpr')
    }

    if (deatails.email === "security" && deatails.pass === "security") {
      navigate('/security/dpr')
    }
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
            value={deatails.email}
            onChange={onChange}
          />

          <AnimeInputField
            wrapperCls="mx-6 my-3"
            inputType="password"
            inpCls="border-0 border-b"
            txt="Password"
            name="pass"
            value={deatails.pass}
            onChange={onChange}
          />

          <button
            className="my-6 px-8 bg-[#dfe7fe] hover:bg-[#b0c3fd] transition-colors mx-auto rounded-full"
            onClick={onSubmit}
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
        {/* <strong className="font-semibold">Inclusive Growth Chain</strong> */}
      </div>
    </div>
  )
}

export default Login