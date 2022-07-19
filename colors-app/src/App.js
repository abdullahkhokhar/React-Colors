import Plaette from "./Palette";
import seedColors from "./seedColors";

export default function App() {
  return (
    <div>
      <Plaette {...seedColors[4]}/>
    </div>
  );
}