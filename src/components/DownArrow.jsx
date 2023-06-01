import { useEffect, useState } from "react";
import scrolldown from "../images/scrolldown.svg";

export default function DownArrow() {
    const [showArrow, setShowArrow] = useState(false);

    useEffect(() => {
        const time = setTimeout(() => {
            setShowArrow(true);
        }, 9000);

    return () => {
        clearTimeout(time);
    };
}, []);

return(
    <div>
        {showArrow && 
        <img src={scrolldown} alt="down arrow" className="mx-auto w-64 mt-14"/>
    }
    </div>
);
}