import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchImages } from "../redux/unsplashSlice";

const ImageGrid = () => {
  const dispatch = useDispatch();
  const { images, loading, error } = useSelector((state) => state.unsplash);

  useEffect(() => {
    dispatch(fetchImages());
  }, [dispatch]);

  if (loading) return <p className="text-center text-xl">Loading...</p>;
  if (error) return <p className="text-center text-red-500 text-lg">Error: {error}</p>;

  return (
    <div className="columns-1 md:columns-2 xl:columns-3 space-y-4 gap-4 p-4 ">
      {images.map((image) => (
        <div key={image.id} className="rounded-lg overflow-hidden shadow-lg">
          <img
            src={image.urls.small}
            alt={image.alt_description}
            className="w-full rounded-lg"
          />
          <p className="text-center p-2 text-sm">{image.user.name}</p>
        </div>
      ))}
    </div>
  );
};

export default ImageGrid;
