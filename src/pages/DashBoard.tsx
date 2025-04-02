import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BACKEND_URL } from "../config";
import { SideBar } from "../components/Sidebar";
import { CreateContentModel } from "../components/CreateContentModel";
import { Button } from "../components/Button";
import { PlusIcon } from "../icons/PlusIcon";
import { ShareIcon } from "../icons/ShareIcon";
import { Card } from "../components/Card";

export function DashBoard({ isShared = false }: { isShared?: boolean }) {
  const [modelOpen, setModelOpen] = useState(false);
  const [contents, setContents] = useState([]);
  const { hash } = useParams(); 

  useEffect(() => {
    const fetchContent = async () => {
      try {
        let response;
        if (isShared && hash) {
          response = await axios.get(`${BACKEND_URL}/api/v1/brain/${hash}`);
        } else {
          response = await axios.get(`${BACKEND_URL}/api/v1/content`, {
            headers: {
              Authorization: localStorage.getItem("token")
            }
          });
        }
        setContents(response.data.content);
      } catch (error) {
        console.error("Error fetching content:", error);
      }
    };
    fetchContent();
  }, [isShared, hash]);

  const handleShareBrain = async () => {
    const response = await axios.post(`${BACKEND_URL}/api/v1/brain/share`, 
      { share: true },
      {
        headers: {
          "Authorization": localStorage.getItem("token")
        }
      }
    );
    const shareUrl = `${window.location.origin}/${response.data.hash}`;
    navigator.clipboard.writeText(shareUrl);
    alert(`Dashboard shared! URL: ${shareUrl}`);
  };

  return (
    <div>
      <SideBar />
      <div className="p-4 ml-76 min-h-screen bg-gray-100">
        {!isShared && (
          <>
            <CreateContentModel open={modelOpen} onClose={() => setModelOpen(false)} />
            <div className="relative flex justify-end gap-4 p-4 ml-76">
              <Button
                variant="primary" 
                text="Add Content" 
                StartIcon={<PlusIcon />} 
                onClick={() => setModelOpen(true)} 
              />
              <Button 
                variant="secondary" 
                text="Share Brain" 
                StartIcon={<ShareIcon />} 
                onClick={handleShareBrain}
              />
            </div>
          </>
        )}
        
        <div className="flex gap-4 flex-wrap">
          {contents.map(({ _id, title, link, type }) => (
            <Card
              key={_id}
              _id={_id}
              type={type}
              link={link}
              title={title}// 
            />
          ))}
        </div>
      </div>
    </div>
  );
}