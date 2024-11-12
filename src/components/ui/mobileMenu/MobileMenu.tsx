import { useState } from "react";
import styles from "./styles.module.css";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  function handleClick() {
    setIsOpen(!isOpen);
  }
  return (
    <>
      <button
        type="button"
        className={styles.menuButton}
        aria-label="Menu"
        onClick={handleClick}
      >
        {isOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        )}
      </button>
      {isOpen && (
        <nav className={styles.menu}>
          <ul>
            <li>
              <a href="#flow" onClick={handleClick}>
                Flow
              </a>
            </li>
            <li>
              <a href="#tab" onClick={handleClick}>
                Tab
              </a>
            </li>
            <li>
              <a href="#gallery" onClick={handleClick}>
                Gallery
              </a>
            </li>
          </ul>
        </nav>
      )}
    </>
  );
}
