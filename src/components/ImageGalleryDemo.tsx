import ImageGallery from "./imageGallery";

export default function ImageGalleryDemo() {
  return (
    <>
      <ImageGallery
        config={{
          closeButtonLabel: "Close dialog"
        }}
      >
        <img
          src="./dummy_600x400_ffffff_cccccc.png"
          alt="Placeholder 1"
          title="Awesome title"
        />
        <img
          src="./dummy_600x400_ffffff_cccccc.png"
          alt="Placeholder 2"
          title="Awesome title"
        />
        <img
          src="./dummy_600x400_ffffff_cccccc.png"
          alt="Placeholder 3"
          title="Awesome title"
        />
        <img
          src="./dummy_600x400_ffffff_cccccc.png"
          alt="Placeholder 4"
          title="Awesome title"
        />
        <img
          src="./dummy_600x400_ffffff_cccccc.png"
          alt="Placeholder 5"
          title="Awesome title"
        />
      </ImageGallery>
    </>
  );
}
