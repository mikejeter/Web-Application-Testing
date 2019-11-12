import React from "react"

const Display = ({strikes, balls}) => {
    return (
        <div className="display">
            <h2>Display</h2>
            <p>Strike: {strikes}  Balls: {balls}</p>
        </div>
    )
}

export default Display;