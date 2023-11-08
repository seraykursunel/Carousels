import { imagesData } from "./Data";

const Images = ({ name, src }) => {
  return (
    <>
      <h1>{name}</h1>
      <img src={src} alt={name} />
    </>
  );
};

export default Images;
