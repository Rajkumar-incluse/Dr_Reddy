import { ReactComponent as Setting } from '../../assets/svg/common/setting.svg';
import { ReactComponent as Support } from '../../assets/svg/common/support.svg';
import { ReactComponent as Dpr } from '../../assets/svg/common/dpr.svg';
import AppWrapper from "../Template/AppWrapper";

const list = [
  {
    title: "DPR Info",
    icon: <Dpr />,
    to: '/supervisor/dpr'
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