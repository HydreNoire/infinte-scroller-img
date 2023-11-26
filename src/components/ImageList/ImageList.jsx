import { ImageListItem } from "../ImageListItem/ImageListItem";
import s from "./style.module.css";

export function ImageList({ imgList }) {
  return (
    <div>
      {imgList.map((img) => {
        return (
          <div
            // to get an unique id
            key={img.id + Math.floor(Math.random() * 2)}
            className={s.card_item}
          >
            <ImageListItem img={img} />
          </div>
        );
      })}
    </div>
  );
}
