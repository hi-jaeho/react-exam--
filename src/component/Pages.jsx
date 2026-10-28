import { useEffect } from "react";

const Pages = () => {
    useEffect(() => {
        console.log("페이지 로딩...")
    }, []);
    
    return (
        <div>
            <h2>문제 3번</h2>
        </div>
    )    
}

export default Pages;