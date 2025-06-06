import React,{useId} from 'react'
// import {useCurrencyInfo} from '../hooks/useCurrencyInfo'
export default function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions=[],
  selectCurrency="usd", 
  amountDisable=false,
  currencyDisable=false,
  className="",
}){
  const amountInputId = useId()
  return(
    <div className={`bg-white rounded-lg p-3 text-sm flex ${className}`}>
    <div className='w-1/2'>
    <label htmlFor={amountInputId} className='text-black/40 mb-2 inline-block'>{label}</label>
    <input id={amountInputId} className='w-full border-0 bg-transparent focus:outline-none py-1.5' type='number' placeholder='Amount' disabled={amountDisable}
      value={amount}
      onChange={(e)=>onAmountChange && onAmountChange(Number(e.target.value))}/>
    
    </div>
      <div className='w-1/2 flex flex-wrap justify-end text-right'> 
        <p className='text-black/40 mb-2 w-full' >Currency Type</p>
        <select className='bg-gray-100 rounded-lg px-1 py-1 cursor-pointer focus:outline-none' value={selectCurrency}
          onChange={(e)=>onCurrencyChange && onCurrencyChange(e.target.value)} disabled={currencyDisable}>
          {currencyOptions.map((currency)=>(
            <option key={currency} value={currency}>{currency}</option>
          ))}
        </select>
    </div>
    </div>
  );
}