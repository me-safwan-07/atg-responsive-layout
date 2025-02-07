import { useState } from 'react'
import { subNav } from '../constants/home'


function SubNav() {
    const [activeNav, setActiveNav] = useState<number>(0);

  return (
    <nav
        className="row row-cols-2 pt-5 w-100 position-relative"
        style={{ top: "1px"}}
    >
        <div className="d-sm-block d-none pt-5 w-100 position-relative" >
            {subNav.map((item, index) => (
                <span
                    key={index}
                    className="me-4 py-3"
                    onClick={() => setActiveNav(item.id)}
                    style={{
                        cursor: "pointer",
                        color: activeNav === item.id ? "black" : "gray",
                        borderBottom:
                            activeNav === item.id
                                ? "2px solid black"
                                : "none"  
                    }}
                >
                    {item.title}
                </span>
            ))}
        </div>
        <div className="w-100 d-sm-none d-flex justify-content-between align-items-center">
            <h6>Posts(368)</h6>

            <div className="dropdown">
                <button
                    className="btn btn-secondary dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    >
                    {`Filter: ${subNav[activeNav].title}`}
                </button>
                <ul className="dropdown-menu">
                    {subNav.map((item, index) => (
                        <li
                        key={index}
                        onClick={() => setActiveNav(item.id)}
                        >
                            <button
                                className="dropdown-item"
                                type="button"
                                >
                                {item.title}
                            </button>
                        </li>
                    ))} 
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default SubNav
