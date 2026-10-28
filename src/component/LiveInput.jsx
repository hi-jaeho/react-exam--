import { useState } from "react"

const LiveInput = () => {
    const [text, setText] = useState("")

    const handleInputChange = (e) => {
        setText(e.target.value);
    }

    return (
        <div>
            <h2>문제 2번</h2>
            <input
                type="text"
                onChange={handleInputChange}
                placeholder="텍스트를 입력하세요. "
            />
            <p>입력값: {text}</p>
        </div>

    )
}

export default LiveInput;