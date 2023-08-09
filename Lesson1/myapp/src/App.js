import Count from "./components/Lesson5/Count";
import UseEffect from "./components/Lesson5/UseEffect";
import { ThemeProvider } from "./components/Lesson6/Context";
import Themes from "./components/Lesson6/Themes.js";

const App = () => {
  return (
    <ThemeProvider>
      <Themes></Themes>
    </ThemeProvider>
  );
};
export default App;
