import { Dispatch, SetStateAction } from "react";
import { posts } from "../constants/home";
import SubNav from "./SubNav";
import { Card } from "./Card";

interface MainProps {
    authenticated: boolean,
    setOpenModal: Dispatch<SetStateAction<boolean>>;
}

const Main = ({
    authenticated,
    setOpenModal    
}: MainProps ) => {
    return (
        <main 
            className="container"
        >
           <SubNav 
                authenticated={authenticated}
                setOpenModal={setOpenModal}
           />
           <hr style={{ border: "1px solid gray"}} />
           <div 
                className="row"
                style={{ cursor: "pointer"}}
            >
                <div className="col-8 vstack gap-4 py-3">
                    {posts.map((post, index) => (
                        <Card key={index} post={post} />
                    ))}
                </div>
                <div className="d-lg-block d-none col-4 py-5 ps-xl-5 ps-lg-3 p-2 pe-0 vstack gap-4">
                    <div className="d-flex flex-row align-items-center gap-3 border-1 border-bottom border-secondary">
                        <img src="/location.svg" alt="location" width={18} />
                        <input
                            type="text"
                            value={"Noida, India"}
                            className=" border-0 bg-transparent flex-grow-1 flex-shrink-1 w-75"
                            style={{ outline: "none" }}
                        />
                        <img src="/pencil.svg" alt="pencil" width={18} />
                    </div>
                    <p className=" text-secondary w-100">
                        <img src="/info.svg" alt="info" width={18} />
                        &nbsp;Your location will help us serve better and extend
                        a personalised experience.
                    </p>
                </div>
            </div>
        </main> 
    )
};

export default Main;