import s from "./LayoutСontainer.module.css";

export default function LayoutСontainer({ children }) {
  return <div className={s.layoutСontainer}>{children}</div>;
}
