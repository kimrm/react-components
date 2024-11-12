import "./App.css";
import { FlowDemo } from "./components/FlowDemo";
import ImageGalleryDemo from "./components/ImageGalleryDemo";
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
      <section>
        <h2>Simple Image Gallery Component</h2>
        <ImageGalleryDemo />
      </section>
    </>
  );
}

export default App;
