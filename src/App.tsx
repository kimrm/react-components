import "./App.css";
import { FlowDemo } from "./components/FlowDemo";
import ImageGalleryDemo from "./components/ImageGalleryDemo";
import { TabDemo } from "./components/TabDemo";
import SideNavigation from "./components/ui/sideNavigation";

function App() {
  return (
    <div className="app-container">
      <div>
        <SideNavigation />
      </div>
      <div>
        <div className="intro">
          <h1>Components library</h1>
          <p>
            This is just a personal collection of React components I&apos;m
            creating, where I try out new things.
          </p>
        </div>
        <section id="flow">
          <h2>Simple Flow Component</h2>
          <FlowDemo />
        </section>
        <section id="tab">
          <h2>Simple Tab Component</h2>
          <TabDemo />
        </section>
        <section id="gallery">
          <h2>Simple Image Gallery Component</h2>
          <p>Work in progress</p>
          <ImageGalleryDemo />
        </section>
      </div>
    </div>
  );
}

export default App;
