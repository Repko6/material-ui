import AddReactionIcon from "@mui/icons-material/AddReaction";
import AirportShuttleIcon from "@mui/icons-material/AirportShuttle";
import ArchitectureIcon from "@mui/icons-material/Architecture";
import Filter9PlusIcon from "@mui/icons-material/Filter9Plus";

const routes = [
  {
    path: "/",
    title: "Home",
    icon: <AddReactionIcon />,
    name: "Home",
  },
  {
    path: "/about",
    title: "About",
    icon: <AirportShuttleIcon />,
    name: "About",
  },
  {
    path: "/news",
    title: "News",
    icon: <ArchitectureIcon />,
    name: "News",
  },
  {
    path: "/contact",
    title: "Contact",
    icon: <Filter9PlusIcon />,
    name: "Contact",
  },
];

export function getRoutes() {
  return routes;
}
