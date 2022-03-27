import s from "./Filter.module.css";

function Filter({ value, оnChange, children }) {
  return (
    <div className={s.form}>
      <label>
        Find contacts by name
        <input
          className={s.inputFilter}
          type="text"
          value={value}
          onChange={оnChange}
        />
      </label>
      {children}
    </div>
  );
}

export default Filter;
