import React from "react";
import Navigation from "./NavTabs";

export default function Header() {
  return (
    <header className="header">
      <div>
        <Navigation />
      </div>
    </header>
  );
}


//TODO: figure out below

// import React from 'react';

// function Header(props) {
//   return (
//     <header>
//       {props.children}
//     </header>
//   );
// }

// export default Header;

