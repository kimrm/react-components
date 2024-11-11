import React, { useState, useRef, useEffect } from "react";
import styles from "./Styles.module.css";

interface ImageGalleryProps {
  children: React.ReactNode;
}

interface FullSizeImageProps {
  image: React.ReactElement | null;
  onClose: () => void;
}

function FullSizeImage({ image, onClose }: FullSizeImageProps) {
  const src = image?.props.src || "";
  const alt = image?.props.alt || "Full-size image";
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (dialogRef.current) {
      dialogRef.current.showModal();
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        handleClose();
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  function handleClose() {
    if (dialogRef.current) {
      dialogRef.current.close();
    }
    onClose();
  }

  function handleOutsideClick(event: React.MouseEvent<HTMLDialogElement>) {
    if (event.target === dialogRef.current) {
      handleClose();
    }
  }

  return (
    <dialog
      ref={dialogRef}
      className={styles.image}
      onClick={handleOutsideClick}
    >
      <img src={src} alt={alt} />
      <button tabIndex={1} className={styles.close} onClick={handleClose}>
        Close
      </button>
    </dialog>
  );
}

export default function ImageGallery({ children }: ImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<React.ReactElement | null>(
    null
  );

  function handleClick(image: React.ReactElement) {
    setSelectedImage(image);
  }

  return (
    <>
      {selectedImage && (
        <FullSizeImage
          image={selectedImage}
          onClose={() => setSelectedImage(null)}
        />
      )}
      <div className={styles.gallery}>
        {React.Children.map(children, (child, i) => {
          if (React.isValidElement(child)) {
            return (
              <button key={i} onClick={() => handleClick(child)}>
                {child}
              </button>
            );
          }
          return null;
        })}
      </div>
    </>
  );
}
