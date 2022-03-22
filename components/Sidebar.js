import Link from "next/link";
import Image from "next/image";
import { links } from "../utils/constants";

import { useAppContext } from "../context/app_context";
import { FaMobileAlt, FaTimes } from "react-icons/fa";

import styled from "styled-components";

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useAppContext();

  return (
    <SidebarContainer>
      <aside
        className={`${isSidebarOpen ? "sidebar show-sidebar" : "sidebar"}`}
      >
        <div className="sidebar-header">
          <Link href="/">
            <a>
              <Image
                alt="Bennetts Car Care"
                src="/assets/Bennettscarcare.png"
                width={150}
                height={57}
              />
            </a>
          </Link>
          <button className="close-btn" onClick={closeSidebar}>
            <FaTimes />
          </button>
        </div>

        <ul className="links">
          {links.map((link) => {
            const { id, url, text } = link;
            return (
              <li key={id}>
                <Link href={url} onClick={closeSidebar}>
                  <a>{text}</a>
                </Link>
              </li>
            );
          })}
        </ul>
        <a
          className="phone-btn"
          target="_blank"
          href="https://wa.me/13459230411"
        >
          <FaMobileAlt className="icon" /> (345) 923-0411
        </a>
      </aside>
    </SidebarContainer>
  );
};

const SidebarContainer = styled.div`
  text-align: center;
  .sidebar-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1.5rem;
  }
  .close-btn {
    font-size: 2rem;
    background: transparent;
    border-color: transparent;
    color: var(--clr-primary-5);
    transition: var(--transition);
    cursor: pointer;
    color: var(--clr-red-dark);
    margin-top: 0.2rem;
  }
  .close-btn:hover {
    color: var(--clr-red-light);
  }
  .logo {
    justify-self: center;
    height: 45px;
  }
  .links {
    margin-bottom: 2rem;
  }
  .links a {
    display: block;
    text-align: left;
    font-size: 1rem;
    text-transform: capitalize;
    padding: 1rem 1.5rem;
    color: var(--clr-grey-3);
    transition: var(--transition);
    letter-spacing: var(--spacing);
  }

  .links a:hover {
    padding: 1rem 1.5rem;
    padding-left: 2rem;
    background: var(--clr-grey-10);
    color: var(--clr-grey-2);
  }

  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--clr-white);
    transition: var(--transition);
    transform: translate(-100%);
    z-index: -1;
  }
  .show-sidebar {
    transform: translate(0);
    z-index: 999;
  }
  .cart-btn-wrapper {
    margin: 2rem auto;
  }
  .phone-btn {
    font-size: 1.4rem;
    letter-spacing: var(--spacing);

    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--clr-grey-1);

    .icon {
      margin-right: 0.2rem;
      color: var(--clr-primary-1);
    }
  }
  @media screen and (min-width: 992px) {
    .sidebar {
      display: none;
    }
  }
`;

export default Sidebar;
