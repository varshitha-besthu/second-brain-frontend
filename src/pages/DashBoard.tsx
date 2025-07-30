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
import { SearchPage } from "../components/SearchByTagName";

interface ContentItem {
  _id: string;
  title: string;
  link: string;
  type: "tweets" | "videos" | "documents" | "links";
}

export function DashBoard({ isShared = false, sideItemType }: { isShared?: boolean; sideItemType: string }) {
  const [modelOpen, setModelOpen] = useState(false);
  const [contents, setContents] = useState<ContentItem[]>([]);
  const [selectedItem, setSelectedItem] = useState(sideItemType); 
  const [searchOpen, setSearchOpen] = useState(false);
  const [tagName, setTagName] = useState("");
  const { hash } = useParams();

  useEffect(() => {
    const fetchContent = async () => {
      try {
        let response ;
        if (isShared && hash) {
          response = await axios.get(`${BACKEND_URL}/api/v1/brain/${hash}`);
        } else {
            if(tagName == ""){
              response = await axios.get(`${BACKEND_URL}/api/v1/content`, {
                headers: {
                  "Authorization": localStorage.getItem("token")
                }
              })
              setContents(response.data.content);
            }else if(typeof(tagName) == "string"){
              await new Promise((resolve) => setTimeout(resolve, 2000));
              response = await axios.get(`${BACKEND_URL}/api/v1/filter/tagName`, {
                params:{
                  type: selectedItem,
                  tagName : tagName
                },
                headers: {
                  Authorization: localStorage.getItem("token"),
                },
              })
              setContents(response.data.content);
            }
        }
        
      } catch (error) {
        console.error("Error fetching content:", error);
      }
    };
    fetchContent();
  }, [isShared, hash, modelOpen,tagName]);

  
  useEffect(() => {
    setSelectedItem(sideItemType);
  }, [sideItemType]);

  const handleSidebarItemClick = (item: string) => {
    setSelectedItem(item.toLowerCase());
  };

  const handleDelete = async (_id: string) => {
    await axios.delete(`${BACKEND_URL}/api/v1/content`, {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
      data: {
        contentId: _id,
      },
    });
    setContents((prev) => prev.filter((content) => content._id !== _id));
  };

  const handleShareBrain = async () => {
    const response = await axios.post(
      `${BACKEND_URL}/api/v1/brain/share`,
      { share: true },
      {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      }
    );
    const shareUrl = `${window.location.origin}/${response.data.hash}`;
    navigator.clipboard.writeText(shareUrl);
    alert(`Dashboard shared! URL: ${shareUrl}`);
  };

  //@ts-ignore
  const handleOnChange = async(e) => {
    setTagName(e.target.value);
    console.log(typeof(tagName))
  }

  return (
    <div>
      <SideBar selectedItem={selectedItem} onItemClick={handleSidebarItemClick} />

      <div className="p-4 ml-76 min-h-screen bg-gray-100">
        {!isShared && (
          <>
            <CreateContentModel open={modelOpen} onClose={() => setModelOpen(false)} />
            <SearchPage open={searchOpen} onClose={() => setSearchOpen(false)}/>
            
            <div className="relative flex justify-end gap-4 p-4 ml-76">
              <div>
                <input type="text" placeholder={`Search in ${selectedItem}`} className="border border-black-300 w-[500px] px-4 py-2 rounded-xl" onChange={handleOnChange}/>
              </div>
              <Button
                variant="primary"
                text="Add Content"
                StartIcon={<PlusIcon />}
                onClick={() => setModelOpen(true)}
              />
              {/* <Button 
                variant="primary"
                text="search by tagName"
                StartIcon={<SearchIcon />}
                onClick={() => setSearchOpen(true)}
              /> */}
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
          {contents
            .filter(({ type }) => type === selectedItem) // Filter by selected sidebar item
            .map(({ _id, title, link, type }) => (
              <Card
                key={_id}
                _id={_id}
                type={type}
                link={link}
                title={title}
                onDelete={handleDelete}
              />
            ))}
        </div>
      </div>
    </div>
  );
}