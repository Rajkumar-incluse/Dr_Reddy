import { ReactComponent as Location } from '../../assets/svg/common/location.svg';
import { ReactComponent as Setting } from '../../assets/svg/common/setting.svg';
import { ReactComponent as Support } from '../../assets/svg/common/support.svg';
import { ReactComponent as Temp } from '../../assets/svg/common/temp.svg';
import { ReactComponent as Doc } from '../../assets/svg/common/doc.svg';
import { ReactComponent as Dpr } from '../../assets/svg/common/dpr.svg';
import AppWrapper from "../Template/AppWrapper";

const list = [
  {
    title: "DPR Info",
    icon: <Dpr />,
    to: '/supervisor/dpr'
  },
  {
    title: "Track",
    icon: <Location />,
    to: '/supervisor/track'
  },
  {
    title: "Approve Document",
    icon: <Doc />,
    to: '/supervisor/transporter-doc'
  },
  {
    title: "Consignment Status",
    icon: <Temp />,
    to: '/supervisor/consignment-status'
  },
  {
    title: "Settings",
    icon: <Setting />,
    to: '/supervisor/setting'
  },
  {
    title: "Support",
    icon: <Support />,
    to: '/supervisor/support'
  },
]

function Superviser() {
  return <AppWrapper list={list} />
}

export default Superviser