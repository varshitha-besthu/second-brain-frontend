// import { ReactElement } from "react"
import { ShareIcon } from "../icons/ShareIcon"
import { DeleteIcon } from "../icons/DeleteIcon"
import { FileIcon } from "../icons/FileIcon"

interface CardProps {
    title : string,
    link : string,
    type : "twitter" | "youtube"
}
export const Card = (Props: CardProps) => {
    return(
        <div >
            <div className="p-4 border bg-white rounded-md border-gray-200 max-w-72 min-h-48 min-w-72">
                <div className="flex justify-between">
                    <div className="flex items-center text-sm">
                        <div className="text-gray-500 pr-2">
                            <FileIcon />
                        </div>
                        {Props.title}
                    </div>
                    <div className="flex items-center text-gray-500">   
                        <div className="pr-4" >
                            <a href= {Props.link} target = "_blank"></a>
                            <ShareIcon />
                        </div>
                        <div>
                            <DeleteIcon />
                        </div>

                    </div>
                </div>

                <div className="pt-4 ">
                    {Props.type === "youtube" && 
                    <iframe  className = "w-full" src={Props.link.replace("watch","embed").replace("?v=","/")} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe> }

                    {Props.type === "twitter" && 
                    <blockquote className="twitter-tweet">
                        <a href={Props.link.replace("x.com","twitter.com")}></a> 
                    </blockquote>}
                </div>
                    
            </div>

            
        </div>
        
    )
}