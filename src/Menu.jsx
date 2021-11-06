import AddReactionIcon from "@mui/icons-material/AddReaction";
import AirportShuttleIcon from "@mui/icons-material/AirportShuttle";
import ArchitectureIcon from "@mui/icons-material/Architecture";
import Filter9PlusIcon from "@mui/icons-material/Filter9Plus";

export default function Menu() {
  return (
    <>
      <a className="menu-item active" href="#home">
        <AddReactionIcon /> <span>Home</span>
      </a>
      <a className="menu-item" href="#news">
        <AirportShuttleIcon /> <span>News</span>
      </a>
      <a className="menu-item" href="#contact">
        <ArchitectureIcon /> <span>Contact</span>
      </a>
      <a className="menu-item" href="#about">
        <Filter9PlusIcon /> <span>About</span>
      </a>
    </>
  );
}
