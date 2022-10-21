import { ReactComponent as Location } from '../../assets/svg/common/location.svg';
import { ReactComponent as Setting } from '../../assets/svg/common/setting.svg';
import { ReactComponent as Support } from '../../assets/svg/common/support.svg';
import { ReactComponent as Upload } from '../../assets/svg/common/upload.svg';
import { ReactComponent as Doc } from '../../assets/svg/common/doc.svg';
import { ReactComponent as Dpr } from '../../assets/svg/common/dpr.svg';
import AppWrapper from "../Template/AppWrapper";

const list = [
  {
    title: "DPR Information",
    icon: <Dpr />,
    to: '/transporter/dpr'
  },
  {
    title: "Track",
    icon: <Location />,
    to: '/transporter/track'
  },
  {
    title: "Upload Document",
    icon: <Upload />,
    to: '/transporter/upload'
  },
  {
    title: "View Document",
    icon: <Doc />,
    to: '/transporter/view'
  },
  {
    title: "Settings",
    icon: <Setting />,
    to: '/transporter/setting'
  },
  {
    title: "Support",
    icon: <Support />,
    to: '/transporter/support'
  },
]

function Transpoter() {
  return <AppWrapper list={list} />
}

export default Transpoter