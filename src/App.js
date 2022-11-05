import { lazy, Suspense } from 'react';
import { Route, Routes } from "react-router-dom";
import Loader from './comp/Common/Loader';

const ForgetPass = lazy(() => import("./comp/Auth/ForgetPass"))
const Signup = lazy(() => import("./comp/Auth/Signup"))
const Login = lazy(() => import("./comp/Auth/Login"))

const AdminSubscription = lazy(() => import("./comp/Admin/Subscription"))
const AdminUser = lazy(() => import("./comp/Admin/User"))
const Admin = lazy(() => import("./comp/Admin"))

const TemplateConsignmentStatus = lazy(() => import("./comp/Template/ConsignmentStatus"))
const TemplateSettings = lazy(() => import("./comp/Template/Settings"))
const TemplateSupport = lazy(() => import("./comp/Template/Support"))
const TemplateTrack = lazy(() => import("./comp/Template/Track"))

const SuperviserTransportedDoc = lazy(() => import("./comp/Superviser/TransportedDoc"))
const SuperviserDpr = lazy(() => import("./comp/Superviser/Dpr"))
const Superviser = lazy(() => import("./comp/Superviser"))

const AssociateDpr = lazy(() => import("./comp/Associate/Dpr"))
const Associate = lazy(() => import("./comp/Associate"))

const ManagerDashboard = lazy(() => import("./comp/Manager/Dashboard"))
const ManagerUploadLR = lazy(() => import("./comp/Manager/UploadLR"))
const ManagerCFADoc = lazy(() => import("./comp/Manager/CFADoc"))
const ManagerDpr = lazy(() => import("./comp/Manager/Dpr"))
const Manager = lazy(() => import("./comp/Manager"))

const CFAUploadLR = lazy(() => import("./comp/CFA/UploadLR"))
const CFAViewLR = lazy(() => import("./comp/CFA/ViewLR"))
const CFADpr = lazy(() => import("./comp/CFA/Dpr"))
const CFA = lazy(() => import("./comp/CFA"))

const TransporterUploadLR = lazy(() => import("./comp/Transporter/UploadLR"))
const TransporterViewLR = lazy(() => import("./comp/Transporter/ViewLR"))
const TransporterDpr = lazy(() => import("./comp/Transporter/Dpr"))
const Transporter = lazy(() => import("./comp/Transporter"))

const SecurityDpr = lazy(() => import("./comp/Security/Dpr"))
const Security = lazy(() => import("./comp/Security"))

function App() {
  return (
    <Suspense fallback={<Loader wrapperCls='h-screen' />}>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="forget-password" element={<ForgetPass />} />

        <Route path="admin" element={<Admin />}>
          <Route path='user' element={<AdminUser />} />
          <Route path='subscription' element={<AdminSubscription />} />
          <Route path='support' element={<TemplateSupport />} />
          <Route path='setting' element={<TemplateSettings />} />
        </Route>

        <Route path="supervisor" element={<Superviser />}>
          <Route path='dpr' element={<SuperviserDpr />} />
          <Route path='track' element={<TemplateTrack />} />
          <Route path='transporter-doc' element={<SuperviserTransportedDoc />} />
          <Route path='support' element={<TemplateSupport />} />
          <Route path='setting' element={<TemplateSettings />} />
          <Route path='consignment-status' element={<TemplateConsignmentStatus />} />
        </Route>

        <Route path="associate" element={<Associate />} >
          <Route path='dpr' element={<AssociateDpr />} />
          <Route path='support' element={<TemplateSupport />} />
          <Route path='setting' element={<TemplateSettings />} />
        </Route>

        <Route path="manager" element={<Manager />}>
          <Route path='dpr' element={<ManagerDpr />} />
          <Route path='track' element={<TemplateTrack />} />
          <Route path='support' element={<TemplateSupport />} />
          <Route path='dashboard' element={<ManagerDashboard />} />
          <Route path='setting' element={<TemplateSettings />} />
          <Route path='upload' element={<ManagerUploadLR />} />
          <Route path='cfa-doc' element={<ManagerCFADoc />} />
          <Route path='consignment-status' element={<TemplateConsignmentStatus />} />
        </Route>

        <Route path="cfa" element={<CFA />} >
          <Route path='dpr' element={<CFADpr />} />
          <Route path='track' element={<TemplateTrack />} />
          <Route path='support' element={<TemplateSupport />} />
          <Route path='setting' element={<TemplateSettings />} />
          <Route path='upload' element={<CFAUploadLR />} />
          <Route path='view' element={<CFAViewLR />} />
          <Route path='consignment-status' element={<TemplateConsignmentStatus role='cfa' />} />
        </Route>

        <Route path="transporter" element={<Transporter />} >
          <Route path='dpr' element={<TransporterDpr />} />
          <Route path='track' element={<TemplateTrack />} />
          <Route path='support' element={<TemplateSupport />} />
          <Route path='setting' element={<TemplateSettings />} />
          <Route path='upload' element={<TransporterUploadLR />} />
          <Route path='view' element={<TransporterViewLR />} />
          <Route path='consignment-status' element={<TemplateConsignmentStatus />} />
        </Route>

        <Route path="security" element={<Security />}>
          <Route path='dpr' element={<SecurityDpr />} />
          <Route path='support' element={<TemplateSupport />} />
          <Route path='setting' element={<TemplateSettings />} />
        </Route>
      </Routes>
    </Suspense>
  )
}

export default App;