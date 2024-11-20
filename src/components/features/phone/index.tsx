import Header from "./ui/Header";
import Item from "./ui/Item";
import Navbar from "./ui/Navbar";
// import Toolbar from "./ui/Toolbar";

const Phone = () => {
  return (
    <div className="relative flex h-[640px] w-[360px] flex-col justify-between rounded-md border p-4 sm:h-[736px] sm:w-[414px]">
      <Header />
      {/* <Toolbar /> */}

      <div className="flex justify-center">
        <Item />
      </div>

      <Navbar />
    </div>
  );
};

export default Phone;

// import React from "react";
// import Iframe from "react-iframe";

// const FigmaPrototype = () => {
//   return (
//     <div style={{ width: "100%", height: "100vh" }}>
//       <Iframe
//         url="https://embed.figma.com/proto/n80WvMKtNMINVcgy8Pv7c7/Untitled?node-id=196-1302&node-type=canvas&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=196%3A1302&share=1&show-proto-sidebar=1&embed-host=share"
//         width="100%"
//         height="100%"
//         id="figma-prototype"
//         className="figma-iframe"
//         display="initial"
//         position="relative"
//         allowFullScreen
//       />
//     </div>
//   );
// };

// export default FigmaPrototype;
