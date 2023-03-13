export default function KaskoCoverage2(props) {
  const { data, onKaskoCoverage2Change } = props;
  return (
    <>
    <label htmlFor="kaskoCoverage2">Djelomični kasko 2:</label>
      <select
        name="kaskoCoverage2"
        id="kaskoCoverage2"
        onChange={onKaskoCoverage2Change}
      >
        <option value={0}>Nije odabrano</option>
        {data &&
          data.map((kaskoPackage, index) => (
            <option key={index} value={kaskoPackage.cijena}>
              {kaskoPackage.paket}
            </option>
          ))}
      </select>
    </>
  );
}
