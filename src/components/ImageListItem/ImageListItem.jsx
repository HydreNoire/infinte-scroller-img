import s from "./style.module.css";

export function ImageListItem({ img }) {
  return (
    <div className={s.card}>
      <a href={img.url}>
        <img src={img.download_url} className={s.img} alt={img.author} />
      </a>
      <div className={s.card_banner}>
        <img src={img.download_url} alt="The author" className={s.card_thumb} />
        <div className={s.card_text}>
          <h3 className={s.card_title}>{img.author}</h3>
          <div className={s.card_status}>
            Originale size: {img.height}x{img.width}
          </div>
          <button className={s.card_btn}>Download</button>
        </div>
      </div>
    </div>
  );
}
