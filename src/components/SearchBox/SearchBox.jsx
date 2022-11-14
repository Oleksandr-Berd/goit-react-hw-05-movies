import css from './SearchBox.module.css';

export const SearchBox = ({ submit, onChange, value }) => {
  return (
    <form className={css.form} onSubmit={submit}>
      <input
        type="text"
        className={css.input}
        onChange={evt => onChange(evt.currentTarget.value)}
        placeholder="Search movies"
        autoComplete="off"
        autoFocus
        value={value}
      />
      <button type="submit" className={css.btn__submit}>
        <span className={css.button__label}>Search</span>
      </button>
    </form>
  );
};
