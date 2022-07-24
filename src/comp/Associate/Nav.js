import { useNavigate } from 'react-router-dom';
import logo from '../../assets/img/logo3.png';
import { ReactComponent as Notification } from '../../assets/svg/common/notification.svg';
import { ReactComponent as TriArrow } from '../../assets/svg/arrows/traiangle.svg';
import { DropDownWrapper } from '../UIComp/DropDown';

function Nav() {
  const navigate = useNavigate()

  const onClk = val => {
    if (val === "Profile") {
      navigate('/associate/setting')
    } else if (val === 'Log out') {
      navigate('/')
    }
  }

  return (
    <nav className='df gap-8 px-6 py-2 bg-[#524491] text-white'>
      <img className='w-40 mr-auto' src={logo} alt="Dr.Reddy logo" />

      <Notification />

      <div className='df'>
        <div>
          <p>Raj kumar</p>
          <p className='text-sm'>Head of the department</p>
        </div>

        <DropDownWrapper
          list={["Profile", "Log out"]}
          rootCls='p-0'
          needArrow
          onClk={onClk}
        >
          <TriArrow />
        </DropDownWrapper>
      </div>
    </nav>
  )
}

export default Nav