import { useState } from "react";
import ColorBox from "./ColorBox";
import 'rc-slider/assets/index.css';
import "./Palette.css";
import Slider from 'rc-slider';

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
            <div className ='slider'>
                <Slider 
                    defaultValue={level} 
                    step={100} min={100} max={900} 
                    onAfterChange={changeLevel}/>
            </div>
            {/* Navbar goes here */}
            <div className="Palette-colors">
                {/* Bunch of Color Boxes */}
                {colorBoxes}
            </div>
            {/* Footer goes here */}
        </div>
    );
}