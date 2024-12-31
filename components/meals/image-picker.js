'use client';
import classes from './image-picker.module.css';
import { useRef, useState } from 'react';
import Image from 'next/image';
export const ImagePicker = ({ label, name }) => {
  const imageInputRef = useRef();
  const [pickedImage, setPickedImage] = useState();
  const handlePickClick = (event) => {
    imageInputRef.current.click();
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (!file) {
      setPickedImage(null);
      return;
    }
    const reader = new FileReader();
    reader.onload = (e) => {
      setPickedImage(e.target.result);
    };
    reader.readAsDataURL(file);
  };
  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <div className={classes.preview}>
          {!pickedImage && <p>No image picked yet.</p>}
          {pickedImage && (
            <Image
              src={pickedImage}
              alt="The image selected by the user."
              fill
            />
          )}
        </div>
        <input
          className={classes.input}
          type="file"
          id={name}
          name={name}
          accept="image/png, image/jpeg"
          ref={imageInputRef}
          onChange={handleImageChange}
          required
        />
        <button
          type="button"
          className={classes.button}
          onClick={handlePickClick}
        >
          Pick an image
        </button>
      </div>
    </div>
  );
};
