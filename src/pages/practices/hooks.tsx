import React, {useState} from "react";

const Example = () => {
    const [count, setCount] = useState(0);

    return(
        <div className="text-center m-8 p-8">
            <p>You clicked {count} times</p>
            <button className="btn" onClick={() => setCount(count + 1)}>
                Click me
            </button>
        </div>
    )
}

export default Example;