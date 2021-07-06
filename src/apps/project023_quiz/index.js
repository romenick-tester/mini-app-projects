import { AppProvider } from "./assets/context";
import Quiz from "./Quiz";

function App() {
  return (
    <AppProvider>
      <Quiz />
    </AppProvider>
  )
};

export default App;
