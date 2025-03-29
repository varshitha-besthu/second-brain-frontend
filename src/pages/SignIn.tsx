import { Button } from "../components/Button"
import { Input } from "../components/Input"
import { useRef } from "react";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";
export const SignIn = () => {
    const navigate = useNavigate();
    const usernameRef = useRef<HTMLInputElement | null>(null);
    const passwordRef = useRef<HTMLInputElement | null>(null);

    async function signin(){
        const username = usernameRef.current?.value;
        const password = passwordRef.current?.value;
        const response = await axios.post(`${BACKEND_URL}/api/v1/signin`, {
                username : username,
                password : password
            }
        )
        localStorage.setItem("token" , response.data.token);
        navigate("/dashboard");
    }
    return <div className="h-screen w-screen  bg-gray-200 flex justify-center items-center ">
        <div className="bg-white roundedborder min-w-48 p-8 rounded-xl ">
            <Input placeholder = "Username" ref={usernameRef}/>
            <Input placeholder = "Password" ref={passwordRef}/>
            <div className="flex justify-center pt-4">
                <Button loading = {false} variant="primary" text="signin" fullWidth = {true} onClick={signin}/>
            </div>
        </div>
    </div>
}

