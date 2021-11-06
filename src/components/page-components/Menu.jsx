import { getRoutes } from "../../routes";
import { Link } from "react-router-dom";

export default function Menu() {
  let routes = getRoutes();

  return (
    <>
      {routes.map((route) => {
        return (
          <Link key={route.path} className="menu-item" to={route.path}>
            {route.icon} <span>{route.name}</span>
          </Link>
        );
      })}
    </>
  );
}
