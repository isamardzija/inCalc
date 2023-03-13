export default function SelectEngine(props) {
    const {data, kw, onCoefEngineSelect} = props;
    return <>
    {data &&
    <>
    <label htmlFor="coefEngine">Unesite snagu motora (u kW):</label> 
    <input type="number" name="coefEngine" id="coefEngine" min={0} max={1000} onChange={onCoefEngineSelect} />
    </>
    }

    </>
}