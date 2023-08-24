import React, { Suspense, useState } from "react";
const Lazy = React.lazy(() => import('./Lazy'))  // lazy loading | dynamic import
export default function Main(){
    const [s,setS]  = useState(0)
    import("./Fun").then(abc => {
      setS(abc.add(16, 26));
      });
    return(
        <>
        <h1>{s}</h1> 
        <Suspense fallback={<h1>intazar mat karna....</h1>}>
            <Lazy />

        </Suspense>
     
        </>
    )
}