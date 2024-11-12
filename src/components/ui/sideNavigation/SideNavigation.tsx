import styles from "./styles.module.css";

export default function SideNavigation() {
  return (
    <div className={styles.leftNav} role="navigation">
      <ul className={styles.navList}>
        <li>
          <a href="#flow">Flow</a>
        </li>
        <li>
          <a href="#tab">Tab</a>
        </li>
        <li>
          <a href="#gallery">Gallery</a>
        </li>
      </ul>
    </div>
  );
}
