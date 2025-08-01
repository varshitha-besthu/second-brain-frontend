// import { ReactElement } from "react"
import { ShareIcon } from "../icons/ShareIcon"
import { DeleteIcon } from "../icons/DeleteIcon"
import { FileIcon } from "../icons/FileIcon"
import TwitterEmbedBasic from "./tweetEmbed"
import {  GoogleDocViewer } from "./Docs"
import { LinkRender } from "./LinkRender"

interface CardProps {
    _id: string
    title : string,
    link : string,
    type : "tweets" | "videos" | "documents" | "links",
    onDelete ?: (_id:string) => void

}
export const Card = (Props: CardProps) => {
    const handleDeleteClick = () => {
        if(Props.onDelete){
            Props.onDelete(Props._id)
        }
    }
    return(
        <div className="mt-8 mr-4">
            <div className="px-4 pt-4 border bg-white rounded-md border-gray-200 dark:border-neutral-700 min-h-48 min-w-72  dark:bg-black dark:text-white">
                <div className="flex justify-between">
                    <div className="flex items-center text-sm">
                        <div className="text-gray-500 pr-2">
                            <FileIcon />
                        </div>
                        {Props.title}
                    </div>
                    <div className="flex items-center text-gray-500">   
                        <div className="cursor-pointer pr-4">
                            <a href= {Props.link} target = "_blank"><ShareIcon /></a>
                            
                        </div>
                        <div onClick = {handleDeleteClick} className="cursor-pointer">
                            <DeleteIcon />
                        </div>

                    </div>
                </div>
                <div className="p-4 ">
                    {/* YOUTUBE VIDEO */}
                    {Props.type === "videos" && 
                    <iframe  className = "w-full" src={Props.link.replace("watch","embed").replace("?v=","/")} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe> }
                    {/* TWITTER VIDEO */}
                    {Props.type === "tweets" && 
                     <TwitterEmbedBasic
                     tweetUrl={Props.link} 
                   />}
                   {/* Google DOCS */}
                   {Props.type === "documents" && <GoogleDocViewer docId= {Props.link}  />}
                   {/* Links */}
                   {Props.type === "links" && <LinkRender link={Props.link} title={Props.title} />}
                </div>
                    
            </div>

            
        </div>
        
    )
}