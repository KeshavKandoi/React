function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency,
    amountDisable = false,
  }) {
    return (
      <div className="bg-white p-3 rounded-lg text-sm flex">
        
        {/* Amount */}
        <div className="w-1/2">
          <label className="text-black/40 mb-2 inline-block">
            {label}
          </label>
  
          <input
            className="outline-none w-full bg-transparent py-1.5"
            type="number"
            value={amount}
            disabled={amountDisable}
            onChange={(e) =>
              onAmountChange && onAmountChange(Number(e.target.value))
            }
          />
        </div>
  
        {/* Currency */}
        <div className="w-1/2 flex flex-wrap justify-end text-right">
          <p className="text-black/40 mb-2 w-full">Currency</p>
  
          <select
            className="rounded-lg px-2 py-1 bg-gray-100 outline-none"
            value={selectCurrency}
            onChange={(e) => onCurrencyChange(e.target.value)}
          >
            {currencyOptions.map((cur) => (
              <option key={cur} value={cur}>
                {cur.toUpperCase()}
              </option>
            ))}
          </select>
        </div>
      </div>
    );
  }
  
  export default InputBox;
  