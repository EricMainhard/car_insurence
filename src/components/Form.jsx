import useQuoter from "../hooks/useQuoter";
import { useState } from "react";
import { BRANDS, YEARS, PLANS } from "../constants/index.js";
import "./form.css";
import { Error } from "./Error";

export const Form = () => {
  const [activeInput, setActiveInput] = useState(1);

  const { handleChangeData, data, error, setError, quoteEnsurence } = useQuoter();

  const handleFocus = (id) => {
    setActiveInput(id);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.values(data).includes('')) {
        setError('PLEASE FILL ALL THE FIELDS');
        return
    }
    setError('');
    quoteEnsurence();
  }

  return (
    <>
    { error && <Error/> }
    <form onSubmit={handleSubmit}>
        <div className="my-5">
            <label className="block mb-3 font-bold text-gray-400 uppercase">
                Year
            </label>
            <select
                name="year"
                className="w-full p-3 bg-white border border-gray-200"
                onChange={handleChangeData}
                value={data.year}
            >
                <option value=""> -- Choose year --</option>
                {YEARS.map((year) => (
                <option value={year} key={year}>
                    {year}
                </option>
                ))}
            </select>
        </div>
        <div className="my-5">
            <label className="block mb-3 font-bold text-gray-400 uppercase">
                Brand
            </label>
            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                <select
                    name="brand"
                    className="w-full md:w-3/4 p-3 bg-white border border-gray-200"
                    onChange={handleChangeData}
                    value={data.brand}
                >
                <option value=""> -- Choose your brand --</option>
                {BRANDS.map((brand) => (
                <option value={brand.id} key={brand.id}>
                    {brand.name}
                </option>
                ))}
                </select>
                <div className="w-20 md:w-1/4">
                    {data.brand && <img src={BRANDS[data.brand - 1].icon}/>}
                </div>
            </div>
        </div>
        <div className="my-5">
            <label className="block mb-3 font-bold text-gray-400 uppercase">
                Plan
            </label>
            <div className="flex items-center justify-evenly">
                {PLANS.map((plan) => (
                <fieldset key={plan.id} className="flex flex-col items-center">
                    <label className={`${activeInput === plan.id ? 'visible' : 'invisible'}`}>{plan.name}</label>
                    <input
                    type="radio"
                    name="plan"
                    value={plan.id}
                    onChange={(e) => {
                        handleChangeData(e);
                        handleFocus(plan.id);
                    }}
                    className={`w-8 h-8 flex justify-center items-center plan-input ${plan.name.toLowerCase()} ${
                        activeInput === plan.id ? "active" : ""
                    }`}
                    />
                </fieldset>
                ))}
            </div>
        </div>
        <input
            type="submit"
            className="bg-indigo-600 hover:bg-indigo-400 w-full text-white py-2"
            value="QUOTE"
        />
      </form>
    </>
  );
};
