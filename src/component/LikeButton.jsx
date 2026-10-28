import { useState } from "react";

const LikeButton = () => {
    const [count, setCount] = useState(0);
    
    const countUp = () => {
        setCount(count + 1);
    }

    return (
        <div>
            <h2>문제 1번</h2>
            <p>좋아요 개수: {count}</p>
            <button onClick={countUp}>좋아요!</button>
        </div>
    )

}

export default LikeButton;