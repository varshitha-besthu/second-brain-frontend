import { DocumentIcon } from "../icons/DocumentIcon"
import { LinkIcon } from "../icons/linkIcon"
import { Logo } from "../icons/Logo"
import { TwitterIcon } from "../icons/TwitterIcon"
import { YouTubeIcon } from "../icons/YouTubeIcon"
import { SideBarItem } from "./SidebarItem"

export const SideBar = () => {
    return(
        <div className="fixed h-screen bg-white border-2 border-gray-100 w-76  left-0 top-0 pl-6">
            <div className="flex text-2xl pt-8 items-center gap-2">
                <div className="text-purple-600 ">
                    <Logo />
                </div>
                Brainly
            </div>
            <div className="pt-4 pl-4" >
                <SideBarItem text="Tweets" icon={<TwitterIcon />} />
                <SideBarItem text="Youtube" icon={<YouTubeIcon />} />
                <SideBarItem text="Documents" icon={<DocumentIcon />} />
                <SideBarItem text="Links" icon = {<LinkIcon />} />
            </div>
         </div>
    )
}