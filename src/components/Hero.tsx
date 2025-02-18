import { Dispatch, SetStateAction, useState } from "react";
interface HeroProp {
    authenticated: boolean,
    setOpenModal: Dispatch<SetStateAction<boolean>>;
}
const Hero = ({
    authenticated,
    setOpenModal
}: HeroProp) => {
    const [joinGroup, setJoinGroup] = useState<boolean>(false);
    return (
        <div
            style={{
                background: "url(/mainImg.jpeg)",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
            className="hero position-relative"
        >
            <div className="position-relative z-3 d-lg-none d-flex flex-row align-items-center justify-content-between w-100 px-3 py-2">
                <img
                    src="/arrow.svg"
                    alt="back-button"
                    width={24}
                    height={24}
                />
                <button
                    className="btn btn-sm btn-outline-light"
                    onClick={() => {
                        if (authenticated) {
                            setJoinGroup(!joinGroup);
                        } else {
                            setOpenModal(true);
                        }
                    }}
                >
                    {joinGroup ? "Leave Group" : "Join Group"}
                </button>
            </div>
            <div className="hero-text position-absolute d-flex flex-column justify-content-between align-items-center top-0 w-100 h-100 start-0 bg-black bg-opacity-50">
                <div></div>
                <div
                    className="mb-lg-5 mb-md-3 mb-sm-2 mb-1 text-white me-md-0 me-5"
                    style={{ width: "75%" }}
                >
                    <h1>Computer Engineering</h1>
                    <p>142,765 Computer Engineers follow this</p>
                </div>
            </div>
        </div>
    );
};

export default Hero;