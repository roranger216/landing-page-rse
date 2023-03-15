import { useState } from 'react'

const practice = () => {

    const [num, numstate] = useState(1);
    const [name, setName] = useState("");


    return (
        <div className="text-center p-10 pb-10">
            <div>
                <div>{num}</div>
                <button onClick={() => numstate(num + 1)}>Submit</button>
            </div>

            <div>
                <div>{name}</div>
                <input name='name' value={name} onChange={(e) => setName(e.target.value)} className="border"></input>
            </div>
        </div>
    )
}

export default practice;