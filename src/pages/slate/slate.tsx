// src/pages/slate/slate.tsx (or src/components/Slate.tsx)
import React from "react";
import './slate.css'

interface SlateProps {
  header?: string;
  children: React.ReactNode;
  className?: string;
}

const Slate: React.FC<SlateProps> = ({ header, children, className = "" }) => {
  return (
    <div className="container-fluid">
      <div className="row justify-content-center">
        <div className="col-md-8  col-lg-10 column">
          <div className={`p-4   ${className}`}>
            {header && (
              <div className=" mb-4 text-center">
                <h1 className="uppercase">{header}</h1>
              </div>
            )}
            <div className="slate-body">{children}</div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slate;

// interface Slate {
//     header?: string;
// }

// export default function Slate({
//     header,
//     children,
// }){
//     return (
//         <div className="p-4 border-rounded">
//             <h1 className="text-end">{header}</h1>
//             <div className="Slate-body">
//                 {children}
//             </div>
//         </div>
//     )
// }
