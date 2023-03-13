export default function SelectBonus(props) {
  const { data, onBonusSelect } = props;
  return (
    <>
      {data && (
        <>
          <label htmlFor="bonus">Odaberite premijski stupanj:</label>
          <select name="bonus" id="bonus" onChange={onBonusSelect}>
            <option value={1} hidden></option>
            {data &&
              data.map((premijskiStupanj, index) => (
                <option key={index} value={premijskiStupanj.koeficijent}>
                  {premijskiStupanj.premijskiStupanj}
                </option>
              ))}
          </select>
        </>
      )}
    </>
  );
}
