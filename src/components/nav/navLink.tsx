import { Link } from "react-scroll";
type NavItemType = {
  itemName: string;
  where: string;
  disabled?: boolean;
  isMobile?: boolean;
};

export default function NavLink({
  itemName,
  where,
  disabled,
  isMobile,
}: NavItemType) {
  return (
    <div>
      {isMobile ? (
        <li
          className={`w-full h-full list-none flex items-center text-b2 whitespace-nowrap`}
        >
          <Link
            to={where}
            className={`py-4 px-5 w-full border-0 rounded-none cursor-pointer text-left `}
          >
            <div className={disabled ? "text-gray-300" : ""}>{itemName}</div>
          </Link>
        </li>
      ) : (
        <li className="px-2 h-full list-none flex items-center text-b2 whitespace-nowrap">
          <Link
            to={where}
            className="py-3 px-[10px] border-0 rounded-lg cursor-pointer text-left hover:bg-gray-100"
          >
            <div className={disabled ? "text-gray-300" : ""}>{itemName}</div>
          </Link>
        </li>
      )}
    </div>
  );
}