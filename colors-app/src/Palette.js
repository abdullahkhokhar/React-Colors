import ColorBox from "./ColorBox";
import "./Palette.css";

export default function Plaette({colors}) {
    const colorBoxes = colors.map(color => {
        return <ColorBox background={color.color} name={color.name}/>
    });

    return (
        <div className="Palette">
            {/* Navbar goes here */}
            <div className="Palette-colors">
                {/* Bunch of Color Boxes */}
                {colorBoxes}
            </div>
            {/* Footer goes here */}
        </div>
    );
}