import Menu from "./Menu";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-top">
        <a href="#">
          <SportsSoccerIcon fontSize="large" />
          <span>Borac Retkovci</span>
        </a>
      </div>
      <div className="sidebar-middle">
        <Menu />
      </div>
      <div className="sidebar-bottom"></div>
    </div>
  );
}
