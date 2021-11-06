import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import AnnouncementIcon from "@mui/icons-material/Announcement";

const routes = [
  {
    path: "/",
    title: "Home",
    icon: <HomeIcon />,
    name: "Home",
  },
  {
    path: "/news",
    title: "News",
    icon: <AnnouncementIcon />,
    name: "News",
  },
  {
    path: "/contact",
    title: "Contact",
    icon: <ContactMailIcon />,
    name: "Contact",
  },
  {
    path: "/about",
    title: "About",
    icon: <InfoIcon />,
    name: "About",
  },
];

export function getRoutes() {
  return routes;
}
