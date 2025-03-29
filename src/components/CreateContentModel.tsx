import { useRef, useState } from "react"
import { CrossIcon } from "../icons/CrossIcon"
import { Button } from "./Button"
import { Input } from "./Input"
import axios from "axios"
import { BACKEND_URL } from "../config"

enum ContentType {
    Youtube = "youtube",
    Twitter = "twitter"
}
export const CreateContentModel = ({ open, onClose } : {open : any, onClose: any}) => {
    const titleRef = useRef<HTMLInputElement | null>(null);
    const linkRef = useRef<HTMLInputElement | null>(null);
    const [type, setType] = useState(ContentType.Youtube);

    async function contentModel() {
        const title = titleRef.current?.value;
        const link = linkRef.current?.value;
        await axios.post(`${BACKEND_URL}/api/v1/content`, {
            title,
            link,
            type
        }, {headers : {
            "Authorization" : localStorage.getItem("token")
        }})
        
        onClose();
        
    }
    return (
        <div>
            {open && 
            <div>
                <div className="w-screen h-screen fixed top-0 left-0 bg-black opacity-60 flex justify-center">
                </div>
                <div className="w-screen h-screen fixed top-0 left-0  flex justify-center trasparent">
                    <div className="flex flex-col justify-center">
                        <span className="bg-white opacity-100 p-4 rounded ">
                            <div className="flex justify-end cursor-pointer" onClick={onClose}>
                                <CrossIcon />
                            </div>
                            <div>
                                <Input placeholder={"Title"} ref={titleRef} />
                                <Input placeholder={"Link"} ref={linkRef} />
                            </div>
                            <div className="flex gap-2 p-4">
                                <Button text="Youtube" variant={type == ContentType.Youtube ? "primary" : "secondary"} onClick={() => { setType(ContentType.Youtube) }} />
                                <Button text="Twitter" variant={type == ContentType.Twitter ? "primary" : "secondary"} onClick={() => setType(ContentType.Twitter)} />
                            </div>
                            <div className="flex justify-center">
                                <Button variant="primary" text="Submit" onClick={contentModel} loading={false} />
                            </div>
                        </span>
                    </div>
                </div>
                
            </div>}
        </div>
    )
}

