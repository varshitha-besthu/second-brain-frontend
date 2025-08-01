import { DocumentIcon } from "../icons/DocumentIcon";
import { LinkIcon } from "../icons/linkIcon";
import { Logo } from "../icons/Logo";
import { TwitterIcon } from "../icons/TwitterIcon";
import { YouTubeIcon } from "../icons/YouTubeIcon";
import { SideBarItem } from "./SidebarItem";

interface SideBarProps {
  selectedItem: string;
  onItemClick: (item: string) => void;
}

export const SideBar = ({ selectedItem, onItemClick }: SideBarProps) => {
  return (
    <div className="fixed h-screen bg-white  w-76 left-0 top-0 pl-6 dark:bg-neutral-900 dark:text-white">
      <div className="flex text-2xl pt-8 items-center gap-2">
        <div className="text-purple-600">
          <Logo />
        </div>
        Brainly
      </div>
      <div className="pt-4 pl-4">
        <span onClick={() => onItemClick("tweets")}>
          <SideBarItem text="Tweets" icon={<TwitterIcon />}  />
        </span>
        <span onClick={() => onItemClick("videos")}>
          <SideBarItem text="Youtube" icon={<YouTubeIcon />}  />
        </span>
        <span onClick={() => onItemClick("documents")}>
          <SideBarItem text="Documents" icon={<DocumentIcon />}  />
        </span>
        <span onClick={() => onItemClick("links")}>
          <SideBarItem text="Links" icon={<LinkIcon />}  />
        </span>
      </div>
    </div>
  );
};