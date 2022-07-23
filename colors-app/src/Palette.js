import { useState } from "react";
import ColorBox from "./ColorBox";
import "./Palette.css";
import Navbar from "./Navbar";

export default function Plaette({palette}) {
    const [level, setLevel] = useState(500);

    function changeLevel(level) {
        setLevel(level);
    }

    const colorBoxes = palette.colors[level].map(color => {
        return <ColorBox background={color.hex} name={color.name}/>
    });

    return (
        <div className="Palette">
            {/* Navbar goes here */}
            <Navbar level={level} changeLevel={changeLevel}/>
            <div className="Palette-colors">
                {/* Bunch of Color Boxes */}
                {colorBoxes}
            </div>
            {/* Footer goes here */}
        </div>
    );
}