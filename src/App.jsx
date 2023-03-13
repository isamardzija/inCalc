import { useState, useEffect, useRef } from "react";
import "./App.css";
import SelectEngine from "./components/SelectEngine/SelectEngine";
import SelectAge from "./components/SelectAge/SelectAge";
import SelectRegistration from "./components/SelectRegistration/SelectRegistration";
import SelectBonus from "./components/SelectBonus/SelectBonus";
import CashDiscountToggle from "./components/CashDiscountToggle/CashDiscountToggle";
import SafeDriverDiscountToggle from "./components/SafeDriverDiscountToggle/SafeDriverDiscountToggle";
import BudgetDiscount from "./components/BudgetDiscount/BudgetDiscount";
import AdditionalDiscount from "./components/AdditionalDiscount/AdditionalDiscount";
import SpecialDiscount from "./components/SpecialDiscount/SpecialDiscount";
import AdditionalCoverage from "./components/AdditionalCoverage/AdditionalCoverage";
import KaskoCoverage1 from "./components/KaskoCoverage/KaskoCoverage1";
import KaskoCoverage2 from "./components/KaskoCoverage/KaskoCoverage2.jsx";

function App() {
  const base = 7300;
  const kw = useRef(null);
  const [coefEngine, setCoefEngine] = useState(1);
  const [coefAge, setCoefAge] = useState(1);
  const [coefRegistration, setCoefRegistration] = useState(1);
  const [bonus, setBonus] = useState(1);
  const [data, setData] = useState([]);
  const [basePrice, setBasePrice] = useState(base);
  const [cashDiscount, setCashDiscount] = useState(0);
  const [safeDriverDiscount, setSafeDriverDiscount] = useState(0);
  const [budgetDiscount, setBudgetDiscount] = useState(0);
  const [additionalDiscount, setAdditionalDiscount] = useState(0);
  const [specialDiscount, setSpecialDiscount] = useState(0);
  const [discountedPrice, setDiscountedPrice] = useState(base);
  const [additionalCoverage, setAdditionalCoverage] = useState(0);
  const [kaskoCoverage1, setKaskoCoverage1] = useState(0);
  const [kaskoCoverage2, setKaskoCoverage2] = useState(0);
  const [finalPrice, setFinalPrice] = useState(
    discountedPrice + discountedPrice * 0.15
  );

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  useEffect(() => {
    setBasePrice(base * coefEngine * coefAge * coefRegistration * bonus);
    setDiscountedPrice(
      basePrice *
        (1 - cashDiscount) *
        (1 - safeDriverDiscount) *
        (1 - budgetDiscount) *
        (1 - additionalDiscount) *
        (1 - specialDiscount) +
        parseInt(additionalCoverage) +
        parseInt(kaskoCoverage1) +
        parseInt(kaskoCoverage2)
    );
    setFinalPrice(discountedPrice + discountedPrice * 0.15);
  }, [
    base,
    coefEngine,
    coefAge,
    coefRegistration,
    bonus,
    basePrice,
    cashDiscount,
    safeDriverDiscount,
    budgetDiscount,
    additionalDiscount,
    specialDiscount,
    additionalCoverage,
    kaskoCoverage1,
    kaskoCoverage2,
  ]);

  const handleCoefEngineSelect = (e) => {
    kw.current = parseInt(e.target.value);
    data.snageMotora.forEach((snagaMotora) => {
      e.target.value > snagaMotora.min &&
        e.target.value <= snagaMotora.max &&
        setCoefEngine(snagaMotora.koeficijent);
    });
  };

  const handleCoefAgeSelect = (e) => {
    data.dobOsiguranika.forEach((dobOsiguranika) => {
      e.target.value > dobOsiguranika.min &&
        e.target.value <= dobOsiguranika.max &&
        setCoefAge(dobOsiguranika.koeficijent);
    });
  };

  const handleCoefRegistrationSelect = (e) => {
    setCoefRegistration(e.target.value);
  };

  const handleBonusSelect = (e) => {
    setBonus(e.target.value);
  };

  const handleCashDiscountToggle = (e) => {
    setCashDiscount(e.target.value);
  };

  const handleSafeDriverDiscount = (e) => {
    setSafeDriverDiscount(e.target.value);
  };

  const handleBudgetDiscountChange = (e) => {
    setBudgetDiscount(e.target.value / 100);
  };

  const handleAdditionalDiscountChange = (e) => {
    setAdditionalDiscount(e.target.value);
  };

  const handleSpecialDiscountSelect = (e) => {
    setSpecialDiscount(e.target.value);
  };

  const handleAdditionalCoverageChange = (e) => {
    setAdditionalCoverage(e.target.value);
    console.log(typeof e.target.value);
  };

  const handleKaskoCoverage1Change = (e) => {
    if (kw && e.target.value === e.target[6].value) {
      kw < 60 && setKaskoCoverage1(e.target.value);
      kw > 60 && kw < 111 && setKaskoCoverage1(data.djelomicniKasko[6].cijena2);
      kw > 111 && setKaskoCoverage1(data.djelomicniKasko[6].cijena3);
    }
    setKaskoCoverage1(e.target.value);
  };
  const handleKaskoCoverage2Change = (e) => {
    if (kw && e.target.value === e.target[6].value) {
      kw < 60 && setKaskoCoverage2(e.target.value);
      kw > 60 && kw < 111 && setKaskoCoverage2(data.djelomicniKasko[6].cijena2);
      kw > 111 && setKaskoCoverage2(data.djelomicniKasko[6].cijena3);
    }
    setKaskoCoverage2(e.target.value);
  };

  return (
    <>
      <div className="app">
        <section className="info">
          <h2>Podaci</h2>
          {data.snageMotora && (
            <SelectEngine
              data={data.snageMotora}
              kw={kw}
              onCoefEngineSelect={handleCoefEngineSelect}
            />
          )}
          <br />
          {data.dobOsiguranika && (
            <SelectAge
              data={data.dobOsiguranika}
              onCoefAgeSelect={handleCoefAgeSelect}
            />
          )}
          {data.regOznake && (
            <SelectRegistration
              data={data.regOznake}
              onCoefRegistrationSelect={handleCoefRegistrationSelect}
            />
          )}
          <br />
          {data.premijskiStupnjevi && (
            <SelectBonus
              data={data.premijskiStupnjevi}
              onBonusSelect={handleBonusSelect}
            />
          )}
        </section>

        <section className="discounts">
          <h2>Popusti</h2>
          <CashDiscountToggle
            cashDiscount={cashDiscount}
            onCashDiscountToggle={handleCashDiscountToggle}
          />
          <SafeDriverDiscountToggle
            safeDriverDiscount={safeDriverDiscount}
            onSafeDriverDiscountToggle={handleSafeDriverDiscount}
          />
          <br />
          <BudgetDiscount onBudgetDiscountChange={handleBudgetDiscountChange} />
          <br />
          <AdditionalDiscount
            onAdditionalDiscountChange={handleAdditionalDiscountChange}
          />
          <br />
          <SpecialDiscount
            onSpecialDiscountSelect={handleSpecialDiscountSelect}
          />
        </section>
        <section className="coverage">
          <h2>Paketi</h2>
          <AdditionalCoverage
            onAdditionalCoverageChange={handleAdditionalCoverageChange}
          />
          <br />
          <KaskoCoverage1
            data={data.djelomicniKasko}
            onKaskoCoverage1Change={handleKaskoCoverage1Change}
          />
          <br />
          <KaskoCoverage2
            data={data.djelomicniKasko}
            onKaskoCoverage2Change={handleKaskoCoverage2Change}
          />
        </section>
        <section className="pricing">
          {/* <p>
            Cijena bez popusta: <br />
            {`${basePrice.toFixed(2)}HRK || ${(basePrice / 7.5345).toFixed(2)}EUR `}
            <br />
            <br />
            Cijena sa popustima: <br />
            {`${discountedPrice.toFixed(2)}HRK || ${(discountedPrice / 7.5345).toFixed(2)}EUR `}
          </p> */}
          Iznos za naplatu: <br />
          <span className="hrk">{`${finalPrice.toFixed(2)}HRK`}</span>
          <span className="eur">{`${(finalPrice / 7.5345).toFixed(2)}EUR `}</span>
        </section>
      </div>
      <footer>
        <a href="https://ivansam.com">Made by Ivan Samardžija</a>
      </footer>
    </>
  );
}

export default App;
