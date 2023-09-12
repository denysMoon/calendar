import { ROUTES } from "../../constants";
import { CustomLink } from "../CustomLink";

export const Header = () => {
  return (
    <header>
      {ROUTES.map((route) => {
        return (
          <CustomLink key={route.path} to={route.path}>
            {route.name}
          </CustomLink>
        );
      })}
    </header>
  );
};
