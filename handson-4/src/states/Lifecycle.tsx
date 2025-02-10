import { useEffect, useState } from "react";
const LifeCycle = () => {
    // buat componen yg menyimpan data secara dinamis
    const [count, setCount] = useState(0);
    useEffect(() => {
        console.log("Effect triggered");
    }, [count])
    return (
        <div>
            <p>Counter value : {count}</p>
            <button onClick={() => setCount(count + 1)}>Increase</button>
        </div>
    )
}
export default LifeCycle;