const Enter = ({ colorValue, setColorValue, isDarkText, setIsDarkText }) => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <input
        type="text"
        autoFocus
        placeholder="Add Color Name"
        required
        value={colorValue}
        onChange={(e) => setColorValue(e.target.value)}
      />
      <button type="button" onClick={() => setIsDarkText(!isDarkText)}>
        Text Color
      </button>
    </form>
  );
};

export default Enter;
