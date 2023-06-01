import { useEffect , useState } from "react";
import astronaut1 from "../video/astronaut1.mp4";
import newfont from "../images/newfont.png";
import DownArrow from "./DownArrow";

export default function LandingPage(){
    const messages = ["Drowning in a Sea of Unplanned Events?", "We've Got Your Back!"];
    const [currentMessage, setCurrentMessage] = useState("");
    // Set state to detect last message's visibility and show first image(the text Planiverse)
    const [showCompanyName, setShowCompanyName] = useState(false);

    useEffect(()=> {
        let start = 0;
        const interval = setInterval(() => {
            setCurrentMessage(messages[start]);
            start++;
            if(start === messages.length) {
                clearInterval(interval);
                setTimeout(() => {
                    setShowCompanyName(true);
                }, 3000);
            }
        }, 2000);

        return () => {
            clearInterval(interval);
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return(
        <div className="relative w-full h-screen">
        <div className="absolute top-0 left-0 w-full h-full">
        <video className="w-full h-full object-cover" src={astronaut1} autoPlay loop muted
        />
        </div>
        
            <div className="absolute top-1/2 left-1/2 
            transform -translate-x-1/2 -translate-y-1/2 
            font-geo text-6xl text-center text-white w-11/12">
                <div className={`animate-typing ${showCompanyName ? "opacity-0" : ""}`}>
                {currentMessage}
            </div>
            {showCompanyName && (
                <img src={newfont} alt="Planiverse text"/>
            )}
            <DownArrow/> 
            
       </div>
        </div>
    )
}