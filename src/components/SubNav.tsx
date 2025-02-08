import { Dispatch, SetStateAction, useState } from 'react'
import { mainNav, subNav } from '../constants/home'

interface SubNavProps {
    authenticated: boolean,
    setOpenModal: Dispatch<SetStateAction<boolean>>;
}

function SubNav({
    authenticated,
    setOpenModal
}: SubNavProps) {
    const [joinGroup, setJoinGroup] = useState(false);
    const [activeNav, setActiveNav] = useState<number>(0);

  return (
        <nav
            className="row row-cols-2 pt-5 w-100 position-relative"
            style={{ top: "1px" }}
        >
            <div className="d-sm-block d-none col h-100 flex-grow-1 mt-3">
                {mainNav.map((item, index) => (
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
                                    : "none",
                        }}
                    >
                        {item.title}
                    </span>
                ))}
            </div>
            <div className=" w-100 d-sm-none d-flex flex-row justify-content-between align-items-center">
                <h6>Posts(368)</h6>
                <div className="dropdown">
                    <button
                        className="btn btn-secondary text-black bg-gray dropdown-toggle"
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
         <div className="col-auto d-lg-flex d-none align-items-center gap-3">
                <button className="btn btn-secondary btn-outline-secondary bg-transparent text-black">Write a Post</button>
                <button
                    className="btn btn-primary d-flex gap-1"
                    onClick={() => {
                        if (authenticated) {
                            setJoinGroup(!joinGroup);
                        } else {
                            setOpenModal(true);
                        }
                    }}
                >
                    {authenticated ? (
                        <img src="/leave.svg" alt="" width={24} />
                    ) : (
                        <img src="/joinn-group.svg" alt="" width={24} />
                    )}
                    {authenticated ? "Leave Group" : "Join Group"}
                </button>
            </div>
        </nav>
  )
}

export default SubNav
