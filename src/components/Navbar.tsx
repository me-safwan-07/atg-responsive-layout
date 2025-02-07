import { Dispatch, SetStateAction } from "react";

interface NavbarProps {
  setOpenModal: Dispatch<SetStateAction<boolean>>;
}

const Navbar = ({ setOpenModal }: NavbarProps) => {
  return (
    <nav
        className="d-sm-flex d-none flex-row align-items-center justify-content-between w-100 py-3"
        style={{
            padding: "0px 72px",
        }}
    >
      <a href="#">
        <img src="/brand.svg" alt="brand-icon" />
      </a>

      <form
        className="d-md-flex d-none flex-row align-items-center gap-2 rounded-pill bg-light px-3 py-1"
        style={{ width: "360px", height: "42px" }}
      >
        <img src="/search.svg" alt="search-icon" width={22} height={22} />
        <input
          type="text"
          className="border-0 bg-transparent flex-grow-1"
          placeholder="Search for your favorite groups in ATG"
          style={{ outline: "none" }}
        />
      </form>

      <p
        className="d-lg-block d-none"
        onClick={() => setOpenModal(true)}
        style={{ cursor: "pointer" }}
      >
        Create account.{" "}
        <span className="text-primary fw-bold">It&apos;s free!</span>
        <img src="/drop-down.svg" alt="drop-down" width={24} />
      </p>
    </nav>
  );
};

export default Navbar;
