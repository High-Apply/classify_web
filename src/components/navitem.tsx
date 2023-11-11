import Link from "next/link";

type NavItemType = {
  itemName: string;
  where: string;
  disabled?: boolean;
};

export default function Navitem({ itemName, where, disabled }: NavItemType) {
  return (
    <li className="px-2 h-full list-none flex items-center text-b3">
      <Link
        href={where}
        className="py-3 px-2 border-0 rounded-lg cursor-pointer bg-transparent text-left hover:bg-gray-100"
      >
        <div className={disabled ? "text-gray-300" : ""}>{itemName}</div>
      </Link>
    </li>
  );
}
