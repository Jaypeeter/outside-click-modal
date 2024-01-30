import { useEffect, useRef, useState } from "react";
import "./Navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import OpenReplayLogo from "../../src/Images/open-replay.png";

export default function Navbar() {
  const [navMenu, setNavMenu] = useState(false);

  const handleNavMenu = function () {
    setNavMenu((prevMenu) => !prevMenu);
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
  }, []);

  const refOne = useRef(null);
  const handleClickOutside = (e) => {
    if (!refOne.current?.contains(e.target)) {
      console.log("clicked outside");
      handleNavMenu();
    }
  };

  return (
    <div>
      <div className="navbar">
        <a href="https://www.openreplay.com/">
          <img class="logo" src={OpenReplayLogo} alt="logo" width={200} />
        </a>{" "}
        <div>
          <ul class="nav-items">
            <li>
              <a href="https://www.openreplay.com">Platform</a>
            </li>
            <li>
              <a href="https://www.openreplay.com">Enterprise</a>
            </li>
            <li>
              <a href="https://www.openreplay.com">Resources</a>
            </li>
            <li>
              <a href="https://www.openreplay.com">Developers</a>
            </li>
            <li>
              <a href="https://www.openreplay.com">Pricing</a>
            </li>

            <li>
              <a class="upgrade-btn" href="https://www.openreplay.com">
                Upgrade
              </a>
            </li>
          </ul>
        </div>
        <div className="hamburger">
          <GiHamburgerMenu className="hamburger" />
        </div>
      </div>
      <div className="modal">
        {navMenu && (
          <div className="modal-menu">
            <div className="close-button">
              <IoCloseSharp className="close" onClick={handleNavMenu} />
            </div>

            <p className="modal-text">
              OpenReplay is a session replay and analytics tool, built for
              developers and self-hosted for full control over your data.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
