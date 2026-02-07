import { useState } from "react";
import { InputBox } from "./components";
import useCurrencyInfo from "./hooks/useCurrencyInfo";

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);

  // SAFE
  const options = Object.keys(currencyInfo ?? {});

  // ✅ SWAP (NO ASYNC BUG)
  const swap = () => {
    const tempFrom = from;
    const tempAmount = amount;

    setFrom(to);
    setTo(tempFrom);

    setAmount(convertedAmount);
    setConvertedAmount(tempAmount);
  };

  // ✅ CONVERT SAFELY
  const convert = () => {
    if (!currencyInfo || !currencyInfo[to]) return;
    setConvertedAmount(amount * currencyInfo[to]);
  };

  return (
    <div
      className="w-full h-screen flex justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/3532540/pexels-photo-3532540.jpeg')",
      }}
    >
      <div className="w-full max-w-md border rounded-lg p-5 backdrop-blur-sm bg-white/30">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            convert();
          }}
        >
          {/* FROM */}
          <InputBox
            label="From"
            amount={amount}
            currencyOptions={options}
            selectCurrency={from}               // ✅ controlled by `from`
            onCurrencyChange={(c) => setFrom(c)} // ✅ THIS FIXES USD CONSTANT
            onAmountChange={(a) => setAmount(a)}
          />

          {/* SWAP */}
          <div className="relative w-full h-0.5 my-4">
            <button
              type="button"
              className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
              onClick={swap}
            >
              swap
            </button>
          </div>

          {/* TO */}
          <InputBox
            label="To"
            amount={convertedAmount}
            currencyOptions={options}
            selectCurrency={to}                 // ✅ controlled by `to`
            onCurrencyChange={(c) => setTo(c)}
            amountDisable
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg mt-4"
          >
            Convert {from.toUpperCase()} to {to.toUpperCase()}
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
