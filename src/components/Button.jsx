// import { useState } from 'react';
import { Create } from "./CreateEvents";
// 
export default function Button() {
//  const [open, setOpen] = useState(false);

//  const handleButtonClick = () => {
    // setOpen(true);
//  }

    return (
    <div>
      <button onClick={Create()}className="bg-purple-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Create New event</button>
      {/* { open && ( */}
        {/* // <Create /> */}
    {/* //   )} */}
    </div>
  )
}