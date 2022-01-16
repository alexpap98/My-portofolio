import { Link } from "react-router-dom";
import classes from "./NavBar.module.css";
import Menu from "@material-ui/icons/Menu";

function NavBar() {
  function unCheck() {
    document.getElementById(classes.navToggle).checked = false;
  }

  return (
    <header className={classes.bar}>
      <div className={classes.content}>
        <div className={classes.name}>Αλέξανδρος Παπαδόπουλος</div>
        <input type="checkbox" id={classes.navToggle} />
        <label className={classes.navToggle} htmlFor={classes.navToggle}>
          <Menu />
        </label>
        <nav className={classes.nav}>
          <Link onClick={unCheck} className={classes.link} to="/">
            Home
          </Link>
          <Link onClick={unCheck} className={classes.link} to="/projects">
            Projects
          </Link>
          <Link onClick={unCheck} className={classes.link} to="/about">
            About
          </Link>
        </nav>
      </div>
    </header>
  );
}
export default NavBar;
