import { useState } from "react";
import Nav from "../Components/Nav";
import GalleryItems from "../Components/GalleryItems";
import Particle from "../Components/Particle";
import ViewGalleryImage from "../Components/ViewGalleryImage";
import Footer from "../Components/Footer";


const Gallery = () => {
  

  const [childVisible, setChildVisible] = useState(false);
  const [img, setImg] = useState();
  const [tag, setTag] = useState(null);

  return (
    <div className="absolute top-0 left-0 w-full h-fit">
      <Nav page="gallery" />
      <GalleryItems
        setChildVisible={setChildVisible}
        setImg={setImg}
        setTag={setTag}
      />
      {childVisible && (
        <ViewGalleryImage
          img={img}
          tag={tag}
          setChildVisible={setChildVisible}
        />
      )}
      <Footer />
      <Particle />
    </div>
  );
};

export default Gallery;