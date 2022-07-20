import React, { useEffect, useState } from "react";
import "./ColorBox.css";
import {CopyToClipboard} from "react-copy-to-clipboard";

export default function ColorBox({background, name}) {
    const [copied, setCopied] = useState(false);

    useEffect(() => {
        if(copied === true){
            setTimeout(() => setCopied(false), 1500);
        }
    }, [copied])

    return(
        <CopyToClipboard text={background} onCopy={() => setCopied(true)}>
            <div style={{background}} className="ColorBox">
            <div style={{background}} className={`copy-overlay ${copied && "show"}`}/>
            <div className={`copy-msg ${copied && "show"}`}>
                <h1>copied!</h1>
                <p>{background}</p>
            </div>

                <div className="copy-container">
                    <div className="box-content">
                        <span>{name}</span>
                    </div>
                    <button className="copy-button">Copy</button>
                </div>
                <span className="see-more">More</span>
            </div>
        </CopyToClipboard>
    );
}