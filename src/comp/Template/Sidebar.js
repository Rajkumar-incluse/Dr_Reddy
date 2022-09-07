import { useLocation, useNavigate } from 'react-router-dom';

function Sidebar({ list = [] }) {
  const { pathname } = useLocation()
  const navigate = useNavigate()

  return (
    <aside className='dfc px-2 py-4 bg-[#6e5cc2] text-white [--svg-color:#fff] text-sm'>
      {
        list.map(l => (
          <div
            key={l.title}
            className={`df px-4 py-2 cursor-pointer ${pathname === l.to ? "border-l-2 border-white bg-[#8373cb]" : "hover:bg-[#a190ea] rounded"}`}
            onClick={() => navigate(l.to)}
          >
            {l.icon}
            {l.title}
          </div>
        ))
      }
    </aside>
  )
}

export default Sidebar