import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { createOrg } from "../../action-reducers/login/loginAction";

import { ReactComponent as LoginImg } from '../../assets/svg/auth/create_account1.svg';
import AnimeInputField from "../Common/AnimeInputField";

function Signup() {
  const [isLoading, setIsLoading] = useState(false)
  const [details, setDetails] = useState({
    BusinessEmail: "admin1234k0@gmail.com",
    PhoneNumber: "9876543210",
    CompanySize: "5",
    CompanyName: "ABC Company",
    LicenseKey: "A12B34C56",
    FirstName: "Raj",
    SurName: "Kumar",
    Country: "India",
    State: "Tamilnadu",
  })
  const navigate = useNavigate()

  const onChange = e => {
    setDetails(p => ({
      ...p,
      [e.target.name]: e.target.value
    }))
  }

  const onSubmit = () => {
    setIsLoading(true)
    createOrg(details, () => navigate('/'))
  }

  return (
    <div className="dc auth-bg h-screen bg-no-repeat bg-cover bg-center">
      <div className="w-[clamp(750px,60vw,900px)] grid grid-cols-[60%_40%] bg-white rounded-2xl shadow-intensed">
        <div className="dc rounded-l-2xl bg-slate-50">
          <LoginImg className="w-full h-full" />
        </div>

        <div className="dfc p-4 text-center">
          <div className="w-fit -ml-4 py-2 px-6 bg-[#dfe7fe] rounded-r-full">Welcome Back</div>

          <header className="mt-8 mb-4 px-4 text-2xl">Signup your account</header>

          <div className="dfc pt-2 scroll-y max-h-52">
            <AnimeInputField
              wrapperCls="mx-6 my-3"
              inpCls="border-0 border-b"
              txt="First Name"
              name="FirstName"
              value={details.FirstName}
              onChange={onChange}
            />

            <AnimeInputField
              wrapperCls="mx-6 my-3"
              inpCls="border-0 border-b"
              txt="Surname"
              name="SurName"
              value={details.SurName}
              onChange={onChange}
            />

            <AnimeInputField
              wrapperCls="mx-6 my-3"
              inpCls="border-0 border-b"
              txt="Business Phone Number"
              name="PhoneNumber"
              value={details.PhoneNumber}
              onChange={onChange}
            />

            <AnimeInputField
              wrapperCls="mx-6 my-3"
              inpCls="border-0 border-b"
              txt="Business Email"
              name="BusinessEmail"
              value={details.BusinessEmail}
              onChange={onChange}
            />

            <AnimeInputField
              wrapperCls="mx-6 my-3"
              inpCls="border-0 border-b"
              txt="Company Name"
              name="CompanyName"
              value={details.CompanyName}
              onChange={onChange}
            />

            <AnimeInputField
              wrapperCls="mx-6 my-3"
              inpCls="border-0 border-b"
              txt="Company Size"
              name="CompanySize"
              value={details.CompanySize}
              onChange={onChange}
            />

            <AnimeInputField
              wrapperCls="mx-6 my-3"
              inpCls="border-0 border-b"
              txt="Country"
              name="Country"
              value={details.Country}
              onChange={onChange}
            />

            <AnimeInputField
              wrapperCls="mx-6 my-3"
              inpCls="border-0 border-b"
              txt="State"
              name="State"
              value={details.State}
              onChange={onChange}
            />

            <AnimeInputField
              wrapperCls="mx-6 my-3"
              inpCls="border-0 border-b"
              txt="License"
              name="LicenseKey"
              value={details.LicenseKey}
              onChange={onChange}
            />
          </div>

          <button
            className={`mt-6 mb-2 px-8 ${isLoading ? "cursor-default" : "hover:bg-[#b0c3fd]"} bg-[#dfe7fe] transition-colors mx-auto rounded-full`}
            onClick={onSubmit}
            disabled={isLoading}
          >
            Signup
          </button>

          <Link className="mb-4 hover:text-[#375fd8]" to='/'>Login</Link>
        </div>
      </div>
    </div>
  )
}

export default Signup