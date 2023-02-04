import { useState } from "react";
import { navigation } from "../data";

const Navigation = () => {
  const [showLinks, setShowLinks] = useState(false);
  return (
    <>
      <button
        className="toggle-button"
        onClick={() => {
          setShowLinks(!showLinks);
        }}
      >
        <i className="fa-solid fa-bars"></i>
      </button>
      <nav className={`navigation ${showLinks ? "hidden" : ""}`}>
        <ul className="navigation-links">
          {navigation.map((navLink) => {
            const { id, name, url } = navLink;
            return (
              <li className="navigation-link" key={id}>
                <a
                  href={url}
                  onClick={() => {
                    setShowLinks(false);
                  }}
                >
                  {name}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
};

export default Navigation;
