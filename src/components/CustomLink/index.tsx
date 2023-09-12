import { Link } from "react-router-dom";

interface ICustomLink {
  children: string;
  to: string;
}

export const CustomLink: React.FC<ICustomLink> = ({
  children,
  to,
  ...props
}) => {
  return (
    <Link to={to} {...props}>
      {children}
    </Link>
  );
};
