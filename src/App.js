import "./App.css";
import { React, useState } from "react";
import { Popover } from "react-tiny-popover";
import SearchModal from "./SearchModal";

function App() {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const [searchText, setSearchText] = useState('');
  
  return (
    <div className="">
      <header className="header">
        <Popover
          isOpen={isPopoverOpen}
          positions={["bottom"]}
          padding={5}
          onClickOutside={() => setIsPopoverOpen(false)}
          content={<SearchModal searchText={searchText}/>}
        >
          <input
            type="text"
            className="search"
            value={searchText}
            onChange={(e)=>setSearchText(e.target.value)}
            onClick={() => setIsPopoverOpen(!isPopoverOpen)}
          ></input>
        </Popover>
      </header>

      <div>test</div>
    </div>
  );
}

export default App;
