import Link from "next/link";
import styles from "./Header.module.css";
function Header() {
  return (
    <div className="container-fluid ">
      <div className="row">
        <div className="col-1">
          <a className={styles.toggleicon} href="#">
            <i class="bi bi-list"></i>
          </a>
        </div>
        <div className="container col-11 ">
          <nav className="navbar navbar-expand-md align-items-start">
            <div className="collapse navbar-collapse">
              <ul className="nav-item me-auto d-inline px-0 ">
                <li className="nav-link d-inline me-auto px-0">
                  <Link className="nav-link d-inline text-dark" href="/">
                    HOME
                  </Link>
                  <Link className="nav-link d-inline text-dark" href="/Shop">
                    SHOP
                  </Link>
                  <Link
                    className="nav-link d-inline text-dark"
                    href="/Magazine"
                  >
                    MAGAZINE
                  </Link>
                </li>
              </ul>
              <ul className=" nav-item d-inline ms-auto">
                <li className="nav-link d-inline text-dark ">
                  <a className={styles.icon} href="#">
                    <i class="bi bi-search"></i>
                  </a>
                </li>
                <li className="nav-link d-inline text-dark">
                  <a className={styles.icon} href="#">
                    <i class="bi bi-cart3 "></i>
                  </a>
                </li>
                <li className="nav-link d-inline text-dark">
                  <Link className="nav-link d-inline text-dark" href="/">
                    LOGIN
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}
export default Header;
