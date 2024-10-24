export const Range = ({length,value, setValue }) => {
    const bgvalue = ((value - 0) / (length - 0)) * 100;
    return (
        <>
            <input 
            type="range"
            className="range-slider"
            style={{
                background:`linear-gradient(to right, #10d5c2 0%, #10d5c2 ${bgvalue}%, #eaeefb ${bgvalue}%, #eaeefb 100%)`
            }}
            step={1} max={length}
            value={value}
            onChange={e=>setValue(e.target.value)}
            />
        </>
        )
}