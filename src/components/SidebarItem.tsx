import { ReactElement } from "react"

export const SideBarItem = ({text, icon} : {
    text:string,
    icon : ReactElement,
}) => {
    

    return(
        <div className="flex text-gray-500  py-2 cursor-pointer hover:bg-gray-200 rounded max-w-48 pl-4 dark:hover:bg-neutral-700" >
            <div className="pr-2">
                {icon}
            </div>
            <div className="">
                {text}
            </div> 
        </div>
    )
}