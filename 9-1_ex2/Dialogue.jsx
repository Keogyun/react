import React from "react";

function Dialogue(props) {
    return (
            <div>
                {props.isButton === "true" ? (
                    <div>
                        <h1 style={{backgroundColor: props.backgroundColor, padding: "30px"}}>
                            {props.title}
                        </h1>
                        <p style={{padding: "30px", height: "150px", fontSize: "1.5rem"}}>
                            {props.message}
                            <div>
                            <button style={{marginTop: "30px"}}>확인</button>
                            </div>                        
                        </p>
                    </div>
                ) : (
                    <div>
                        <h1 style={{backgroundColor: props.backgroundColor, padding: "30px"}}>
                            {props.title}
                        </h1>
                        <p style={{padding: "30px", height: "150px", fontSize: "1.5rem"}}>
                            {props.message}
                        </p>
                    </div>
                )}
            </div>
    );
}

export default Dialogue;