import { Link } from "react-router";

type linkarProps = {
  to: string;
  children: string;
  className?: string;
};

const Linkar = (props: linkarProps) => {
  return (
    <Link
      className="border-b hover:border-amber-300/80 border-transparent transition-all duration-300"
      {...props}
    />
  );
};

export default Linkar;
