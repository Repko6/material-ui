import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import AnnouncementIcon from "@mui/icons-material/Announcement";
import GroupIcon from "@mui/icons-material/Group";
import SportsScoreIcon from "@mui/icons-material/SportsScore";

const routes = [
  {
    path: "/",
    title: "Naslovna",
    icon: <HomeIcon />,
    name: "Naslovna",
  },
  {
    path: "/utakmice",
    title: "Utakmice",
    icon: <SportsScoreIcon />,
    name: "Utakmice",
  },
  {
    path: "/seniori",
    title: "Seniori",
    icon: <GroupIcon />,
    name: "Seniori",
  },
  {
    path: "/novosti",
    title: "Novosti",
    icon: <AnnouncementIcon />,
    name: "Novosti",
  },
  {
    path: "/kontakt",
    title: "Kontakt",
    icon: <ContactMailIcon />,
    name: "Kontakt",
  },
  {
    path: "/o-klubu",
    title: "O klubu",
    icon: <InfoIcon />,
    name: "O klubu",
  },
];

export function getRoutes() {
  return routes;
}
