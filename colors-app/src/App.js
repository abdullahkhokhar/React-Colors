import Plaette from "./Palette";
import seedColors from "./seedColors";
import { generatePalette } from "./colorHelpers";

export default function App() {
  return (
    <div>
      <Plaette palette={generatePalette(seedColors[4])}/>
    </div>
  );
}