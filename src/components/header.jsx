import { MdOutlineDarkMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";

export default function Header() {
  return (
    <div className="w-screen p-[25px] flex justify-between shadow-xl">
      <h1 className="text-neutral-900 text-4xl">Where in the world?</h1>
      <div className="flex gap-[20px] items-center text-2xl">
        <MdDarkMode />
        <h3>Dark Mode</h3>
        <MdOutlineDarkMode />
        <h3>Light Mode</h3>
      </div>
    </div>
  );
}
