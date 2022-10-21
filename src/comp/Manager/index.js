import { ReactComponent as Dashboard } from '../../assets/svg/common/dashboard.svg';
import { ReactComponent as Location } from '../../assets/svg/common/location.svg';
import { ReactComponent as Setting } from '../../assets/svg/common/setting.svg';
import { ReactComponent as Support } from '../../assets/svg/common/support.svg';
import { ReactComponent as Upload } from '../../assets/svg/common/upload.svg';
import { ReactComponent as Doc } from '../../assets/svg/common/doc.svg';
import { ReactComponent as Dpr } from '../../assets/svg/common/dpr.svg';
import AppWrapper from "../Template/AppWrapper";

const list = [
  {
    title: "Dashboard",
    icon: <Dashboard />,
    to: '/manager/dashboard'
  },
  {
    title: "DPR Information",
    icon: <Dpr />,
    to: '/manager/dpr'
  },
  {
    title: "Track",
    icon: <Location />,
    to: '/manager/track'
  },
  {
    title: "Upload Document",
    icon: <Upload />,
    to: '/manager/upload'
  },
  {
    title: "Approve Document",
    icon: <Doc />,
    to: '/manager/transporter-doc'
  },
  {
    title: "CFA Document",
    icon: <Doc />,
    to: '/manager/cfa-doc'
  },
  {
    title: "Settings",
    icon: <Setting />,
    to: '/manager/setting'
  },
  {
    title: "Support",
    icon: <Support />,
    to: '/manager/support'
  },
]

function Manager() {
  return <AppWrapper list={list} />
}

export default Manager