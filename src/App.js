import "./styles.css";
import Images from "./Card";
import { imagesData } from "./Data";
import { useState } from "react";

export default function App() {
  const [index, setIndex] = useState(0);

  const nextEvent = () => {
    setIndex((p) => {
      if (p < imagesData.length - 1) {
        return p + 1;
      } else {
        return (p = 0);
      }
    });
  };

  const preEvent = () => {
    setIndex((p) => {
      if (p > 0) {
        return p - 1;
      } else {
        return (p = imagesData.length - 1);
      }
    });
  };

  return (
    <div className="App">
      <button onClick={preEvent} className="prev red">
        Önceki
      </button>
      <Images
        src={imagesData[index].src}
        name={imagesData[index].name}
        alt={imagesData[index].name}
      />
      <button onClick={nextEvent} className="next red">
        Sonraki
      </button>
    </div>
  );
}
