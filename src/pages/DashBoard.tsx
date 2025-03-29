import { Card } from "../components/Card"
import { Button } from "../components/Button"
import { PlusIcon } from "../icons/PlusIcon"
import { ShareIcon } from "../icons/ShareIcon"
import { CreateContentModel } from "../components/CreateContentModel"
import { useState } from "react"
import { SideBar } from "../components/Sidebar"
import { useContent } from "../hooks/useContent"
import axios from "axios"
import { BACKEND_URL } from "../config"


export function DashBoard() {
  const [modelOpen, setModelOpen] = useState(false);
  const contents = useContent();

  return (
    <div>
      <SideBar />
      <div className="p-4 ml-76 min-h-screen bg-gray-100 ">
        <CreateContentModel open={modelOpen} onClose={() => { setModelOpen(false) }} />
        <div className="relative flex justify-end gap-4 p-4 ml-76">

          <Button variant="primary" text="Add Content" StartIcon={<PlusIcon />} onClick={() => { setModelOpen(true) }} />
          <Button variant="secondary" text="Share Brain" StartIcon={<ShareIcon />} onClick={async() => {
            const response= await axios.post(`${BACKEND_URL}/api/v1/brain/share`, {
              share :true
            },{
              headers: {
                "Authorization" : localStorage.getItem("token")
              }
            })
            const shareURl = `http://localhost:5173/${response.data.hash}`;
            alert(shareURl);
          }}/>
        </div>
        <div className="flex gap-4 flex-wrap">
          {/* <Card type="twitter" link="https://x.com/AkshitVig4/status/1903170102167789886" title="First tweet" />
          <Card type="youtube" link="https://www.youtube.com/watch?v=rTpm33Xyjn4" title="First video" /> */}
          {contents.map(({title, link, type}) => 
             <Card type = {type} link= {link} title= {title} />
          )}
        </div>
      </div>
    </div>

  )
}


