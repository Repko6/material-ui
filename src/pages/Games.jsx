import BasicTabs from "../components/tabs/BasicTabs";
import GamesResults from "./GamesResults";
import GamesStandings from "./GamesStandings";
import GamesUpcoming from "./GamesUpcoming";

export default function Games() {
  let tabs = [
    {
      label: "Raspored",
      element: <GamesUpcoming />,
    },
    {
      label: "Rezultati",
      element: <GamesResults />,
    },
    {
      label: "Tablica",
      element: <GamesStandings />,
    },
  ];
  return <BasicTabs tabs={tabs} />;
}
