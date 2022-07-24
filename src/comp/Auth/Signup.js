import { Link } from "react-router-dom";
import { ReactComponent as LoginImg } from '../../assets/svg/auth/create_account1.svg';
import AnimeInputField from "../Common/AnimeInputField";

function Signup() {
  return (
    <div className="dc auth-bg h-screen bg-no-repeat bg-cover bg-center">
      <div className="w-[clamp(750px,60vw,900px)] grid grid-cols-[60%_40%] bg-white rounded-2xl shadow-intensed">
        <div className="dc rounded-l-2xl bg-slate-50">
          <LoginImg className="w-full h-full" />
        </div>

        <div className="dfc p-4 text-center">
          <div className="w-fit -ml-4 py-2 px-6 bg-[#dfe7fe] rounded-r-full">Welcome Back</div>

          <header className="mt-8 mb-4 px-4 text-2xl">Signup your account</header>

          <div className="dfc scroll-y max-h-52">
            <AnimeInputField
              wrapperCls="mx-6 my-3"
              inpCls="border-0 border-b"
              txt="First Name"
            />

            <AnimeInputField
              wrapperCls="mx-6 my-3"
              inpCls="border-0 border-b"
              txt="Surname"
            />

            <AnimeInputField
              wrapperCls="mx-6 my-3"
              inpCls="border-0 border-b"
              txt="Business Phone Number"
            />

            <AnimeInputField
              wrapperCls="mx-6 my-3"
              inpCls="border-0 border-b"
              txt="Business Email"
            />

            <AnimeInputField
              wrapperCls="mx-6 my-3"
              inpCls="border-0 border-b"
              txt="Company Name"
            />

            <AnimeInputField
              wrapperCls="mx-6 my-3"
              inpCls="border-0 border-b"
              txt="Company Size"
            />

            <AnimeInputField
              wrapperCls="mx-6 my-3"
              inpCls="border-0 border-b"
              txt="Country"
            />

            <AnimeInputField
              wrapperCls="mx-6 my-3"
              inpCls="border-0 border-b"
              txt="State"
            />

            <AnimeInputField
              wrapperCls="mx-6 my-3"
              inpCls="border-0 border-b"
              txt="License"
            />
          </div>

          <button className="mt-6 mb-2 px-8 bg-[#dfe7fe] hover:bg-[#b0c3fd] transition-colors mx-auto rounded-full">Signup</button>

          <Link className="mb-4 hover:text-[#375fd8]" to='/'>Login</Link>
        </div>
      </div>
    </div>
  )
}

export default Signup