import { ReactComponent as Location } from '../../assets/svg/common/location.svg';
import { ReactComponent as Setting } from '../../assets/svg/common/setting.svg';
import { ReactComponent as Support } from '../../assets/svg/common/support.svg';
import { ReactComponent as Upload } from '../../assets/svg/common/upload.svg';
import { ReactComponent as Temp } from '../../assets/svg/common/temp.svg';
import { ReactComponent as Doc } from '../../assets/svg/common/doc.svg';
import { ReactComponent as Dpr } from '../../assets/svg/common/dpr.svg';
import AppWrapper from "../Template/AppWrapper";

const list = [
  {
    title: "DPR Information",
    icon: <Dpr />,
    to: '/cfa/dpr'
  },
  {
    title: "View Document",
    icon: <Doc />,
    to: '/cfa/view'
  },
  {
    title: "Track",
    icon: <Location />,
    to: '/cfa/track'
  },
  {
    title: "Consignment Status",
    icon: <Temp />,
    to: '/cfa/consignment-status'
  },
  {
    title: "Upload Document",
    icon: <Upload />,
    to: '/cfa/upload'
  },
  {
    title: "Settings",
    icon: <Setting />,
    to: '/cfa/setting'
  },
  {
    title: "Support",
    icon: <Support />,
    to: '/cfa/support'
  },
]

function CFA() {
  return <AppWrapper list={list} />
}

export default CFA