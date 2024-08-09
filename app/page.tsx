import Image from "next/image";
import Navbar from "./main_page_comps/nav_bar";
import Entry from "./main_page_comps/entry";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Entry />
    </div>
  );
}
