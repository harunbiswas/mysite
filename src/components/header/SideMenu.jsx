import Link from "next/link";
import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import { items } from "./NavMenu";

export default function SideMenu() {
  const { secId } = useContext(ThemeContext);

  return (
    <div className="side-menu">
      <ul>
        {items.map((item, i) => (
          <li key={i}>
            <Link
              href={item.url}
              className={
                (secId === item.url.replace("#", "") && "active") || ""
              }
            >
              {item.icon} <span>{item.text}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
