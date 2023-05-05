import React from "react";
import CardTitlesAbout from "../cards/CardTitlesAbout";
import { dataClients } from "@/data/dataAbout";
import CardClientAbout from "../cards/CardClientAbout";
import { useState, useEffect } from "react";
import { Pagination } from "@nextui-org/react";

export default function Testimonial() {
  const [currentPage, setCurrentPage] = useState(0);
  return (
    <div className="p-4 sm:px-20 md:px-32 sm:pt-6 pb-20">
      <CardTitlesAbout
        titleGray="Testimonial"
        titleBlack="Happy Clients"
        style="text-center"
      />
      <div className="sm:flex sm:justify-center md:gap-2 md:grid md:grid-cols-3 pt-20">
        {dataClients.map((item, index) => {
          return (
            <CardClientAbout
              key={index}
              nameClient={item.nameClient}
              desc={item.desc}
              job={item.job}
              urlImg={item.urlImg}
              style={currentPage === index ? "flex" : "hidden"}
            />
          );
        })}
      </div>
      <div className="flex md:hidden justify-center">
        <Pagination
          rounded
          onlyDots
          size="sm"
          color="warning"
          total={dataClients.length}
          initialPage={1}
          onChange={(page) => {
            setCurrentPage(page - 1);
          }}
        />
      </div>
      <div className="md:flex hidden justify-center">
        <Pagination
          rounded
          onlyDots
          size="sm"
          color="warning"
          total={dataClients.length}
          initialPage={1}
          onChange={(page) => {
            setCurrentPage(page - 1);
          }}
        />
      </div>
    </div>
  );
}
//   } else if (width < 768) {
//     return (
//       <div className="p-4 sm:px-20 md:px-32 sm:py-6">
//         <CardTitlesAbout
//           titleGray="Testimonial"
//           titleBlack="Happy Client"
//           style="text-center"
//         />
//         <div className="sm:grid sm:gap-2 sm:grid-cols-2 md:grid-cols-3 pt-20">
//           {dataClients.map((item, index) => {
//             if (index / 2 === currentPage && dataClients[index + 1]) {
//               return (
//                 <div className="" key={index}>
//                   <CardClientAbout
//                     nameClient={item.nameClient}
//                     desc={item.desc}
//                     job={item.job}
//                     urlImg={item.urlImg}
//                   />
//                   <CardClientAbout
//                     nameClient={dataClients[index + 1].nameClient}
//                     desc={dataClients[index + 1].desc}
//                     job={dataClients[index + 1].job}
//                     urlImg={dataClients[index + 1].urlImg}
//                   />
//                 </div>
//               );
//             } else if (index / 2 === currentPage){
//               return (
//                 <div className="flex space-x-6" key={index} >
//                 <CardClientAbout
//                   nameClient={item.nameClient}
//                   desc={item.desc}
//                   job={item.job}
//                   urlImg={item.urlImg}
//                 />
//                 </div>
//               );
//             }
//           })}
//         </div>
//         <div className="flex justify-center">
//           <Pagination
//             rounded
//             onlyDots
//             size="sm"
//             color="warning"
//             total={dataClients.length / 2}
//             initialPage={1}
//             onChange={(page) => setCurrentPage(page - 1)}
//           />
//         </div>
//       </div>
//     );
//   }
//   return (
//     <div className="p-4 sm:px-20 md:px-32 sm:py-6">
//       <CardTitlesAbout
//         titleGray="Testimonial"
//         titleBlack="Happy Client"
//         style="text-center"
//       />
//       <div className="sm:grid sm:gap-2 sm:grid-cols-2 md:grid-cols-3 pt-20">
//         {dataClients.map((item, index) => {
//           if (index === currentPage) {
//             return (
//               <CardClientAbout
//                 key={index}
//                 nameClient={item.nameClient}
//                 desc={item.desc}
//                 job={item.job}
//                 urlImg={item.urlImg}
//                 hidden={false}
//               />
//             );
//           } else {
//             return (
//               <CardClientAbout
//                 key={index}
//                 nameClient={item.nameClient}
//                 desc={item.desc}
//                 job={item.job}
//                 urlImg={item.urlImg}
//                 hidden={true}
//               />
//             );
//           }
//         })}
//       </div>
//       <div className="flex justify-center">
//         <Pagination
//           rounded
//           onlyDots
//           size="sm"
//           color="warning"
//           total={dataClients.length}
//           initialPage={1}
//           onChange={(page) => setCurrentPage(page - 1)}
//         />
//       </div>
//     </div>
//   );
// }
