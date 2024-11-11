import "./App.css";
import { FlowDemo } from "./components/FlowDemo";
import ImageGallery from "./components/imageGallery";
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
        <ImageGallery>
          <img src="https://via.placeholder.com/150" alt="Placeholder 1" />
          <img src="https://via.placeholder.com/150" alt="Placeholder 2" />
          <img src="https://via.placeholder.com/150" alt="Placeholder 3" />
          <img src="https://via.placeholder.com/150" alt="Placeholder 4" />
          <img src="https://via.placeholder.com/150" alt="Placeholder 5" />
          <img src="https://via.placeholder.com/150" alt="Placeholder 6" />
        </ImageGallery>
      </section>
    </>
  );
}

export default App;
