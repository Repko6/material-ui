import Menu from "./Menu";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-top">
        <Link to="/">
          <SportsSoccerIcon fontSize="large" />
          <span>Borac Retkovci</span>
        </Link>
      </div>
      <div className="sidebar-middle">
        <Menu />
      </div>
      <div className="sidebar-bottom"></div>
    </div>
  );
}
