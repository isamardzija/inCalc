export default function SelectRegistration(props) {
  const { data, onCoefRegistrationSelect } = props;
  return (
    <>
      {data && (
        <>
          <label htmlFor="coefRegistration">
            Odaberite registrasko područje:
          </label>
          <select
            name="coefRegistration"
            id="coefRegistration"
            onChange={onCoefRegistrationSelect}
          >
                        <option value={1} hidden></option>

            {data &&
              data.map((regOznaka, index) => (
                <option key={index} value={regOznaka.koeficijent}>
                  {regOznaka.podrucje} - {regOznaka.grad}
                </option>
              ))}
          </select>
        </>
      )}
    </>
  );
}
