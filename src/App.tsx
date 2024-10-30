import "./App.css";
import { FlowDemo } from "./components/FlowDemo";
import { TabDemo } from "./components/TabDemo";

function App() {
  return (
    <>
      <h1>Components library</h1>
      <section>
        <h2>Simple Flow Component</h2>
        <FlowDemo />
      </section>
      <section>
        <h2>Simple Tab Component</h2>
        <TabDemo />
      </section>
    </>
  );
}

export default App;
