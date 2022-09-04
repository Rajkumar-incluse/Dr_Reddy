import { lazy, Suspense } from 'react';
import { Route, Routes } from "react-router-dom";
import Loader from './comp/Common/Loader';

const ForgetPass = lazy(() => import("./comp/Auth/ForgetPass"))
const Signup = lazy(() => import("./comp/Auth/Signup"))
const Login = lazy(() => import("./comp/Auth/Login"))

const AdminSubscription = lazy(() => import("./comp/Admin/Subscription"))
const AdminSettings = lazy(() => import("./comp/Admin/Settings"))
const AdminSupport = lazy(() => import("./comp/Admin/Support"))
const AdminUser = lazy(() => import("./comp/Admin/User"))
const Admin = lazy(() => import("./comp/Admin"))

const SuperviserSettings = lazy(() => import("./comp/Superviser/Settings"))
const SuperviserSupport = lazy(() => import("./comp/Superviser/Support"))
const SuperviserDpr = lazy(() => import("./comp/Superviser/Dpr"))
const Superviser = lazy(() => import("./comp/Superviser"))

const AssociateSettings = lazy(() => import("./comp/Associate/Settings"))
const AssociateSupport = lazy(() => import("./comp/Associate/Support"))
const AssociateDpr = lazy(() => import("./comp/Associate/Dpr"))
const Associate = lazy(() => import("./comp/Associate"))

const ManagerTransportedDoc = lazy(() => import("./comp/Manager/TransportedDoc"))
const ManagerDashboard = lazy(() => import("./comp/Manager/Dashboard"))
const ManagerSettings = lazy(() => import("./comp/Manager/Settings"))
const ManagerUploadLR = lazy(() => import("./comp/Manager/UploadLR"))
const ManagerSupport = lazy(() => import("./comp/Manager/Support"))
const ManagerCFADoc = lazy(() => import("./comp/Manager/CFADoc"))
const ManagerTrack = lazy(() => import("./comp/Manager/Track"))
const ManagerDpr = lazy(() => import("./comp/Manager/Dpr"))
const Manager = lazy(() => import("./comp/Manager"))

const CFAUploadLR = lazy(() => import("./comp/CFA/UploadLR"))
const CFASettings = lazy(() => import("./comp/CFA/Settings"))
const CFASupport = lazy(() => import("./comp/CFA/Support"))
const CFAViewLR = lazy(() => import("./comp/CFA/ViewLR"))
const CFATrack = lazy(() => import("./comp/CFA/Track"))
const CFADpr = lazy(() => import("./comp/CFA/Dpr"))
const CFA = lazy(() => import("./comp/CFA"))

const TransporterSettings = lazy(() => import("./comp/Transporter/Settings"))
const TransporterUploadLR = lazy(() => import("./comp/Transporter/UploadLR"))
const TransporterSupport = lazy(() => import("./comp/Transporter/Support"))
const TransporterViewLR = lazy(() => import("./comp/Transporter/ViewLR"))
const TransporterTrack = lazy(() => import("./comp/Transporter/Track"))
const TransporterDpr = lazy(() => import("./comp/Transporter/Dpr"))
const Transporter = lazy(() => import("./comp/Transporter"))

const SecuritySettings = lazy(() => import("./comp/Security/Settings"))
const SecuritySupport = lazy(() => import("./comp/Security/Support"))
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
          <Route path='support' element={<AdminSupport />} />
          <Route path='setting' element={<AdminSettings />} />
        </Route>

        <Route path="superviser" element={<Superviser />}>
          <Route path='dpr' element={<SuperviserDpr />} />
          <Route path='support' element={<SuperviserSupport />} />
          <Route path='setting' element={<SuperviserSettings />} />
        </Route>

        <Route path="associate" element={<Associate />} >
          <Route path='dpr' element={<AssociateDpr />} />
          <Route path='support' element={<AssociateSupport />} />
          <Route path='setting' element={<AssociateSettings />} />
        </Route>

        <Route path="manager" element={<Manager />}>
          <Route path='dpr' element={<ManagerDpr />} />
          <Route path='track' element={<ManagerTrack />} />
          <Route path='support' element={<ManagerSupport />} />
          <Route path='dashboard' element={<ManagerDashboard />} />
          <Route path='setting' element={<ManagerSettings />} />
          <Route path='upload' element={<ManagerUploadLR />} />
          <Route path='transporter-doc' element={<ManagerTransportedDoc />} />
          <Route path='cfa-doc' element={<ManagerCFADoc />} />
        </Route>

        <Route path="cfa" element={<CFA />} >
          <Route path='dpr' element={<CFADpr />} />
          <Route path='track' element={<CFATrack />} />
          <Route path='support' element={<CFASupport />} />
          <Route path='setting' element={<CFASettings />} />
          <Route path='upload' element={<CFAUploadLR />} />
          <Route path='view' element={<CFAViewLR />} />
        </Route>

        <Route path="transporter" element={<Transporter />} >
          <Route path='dpr' element={<TransporterDpr />} />
          <Route path='track' element={<TransporterTrack />} />
          <Route path='support' element={<TransporterSupport />} />
          <Route path='setting' element={<TransporterSettings />} />
          <Route path='upload' element={<TransporterUploadLR />} />
          <Route path='view' element={<TransporterViewLR />} />
        </Route>

        <Route path="security" element={<Security />}>
          <Route path='dpr' element={<SecurityDpr />} />
          <Route path='support' element={<SecuritySupport />} />
          <Route path='setting' element={<SecuritySettings />} />
        </Route>
      </Routes>
    </Suspense>
  )
}

export default App;