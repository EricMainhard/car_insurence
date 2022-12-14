import { createContext, useState } from "react";
import {
  calculateDifYears,
  calculateBrandPrice,
  calculatePlan,
  formatCurrency,
} from "../helpers";

export const QuoterContext = createContext();

export const QuoterProvider = ({ children }) => {
  const [data, setData] = useState({
    brand: "",
    year: "",
    plan: "",
  });

  const [result, setResult] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChangeData = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const quoteEnsurence = () => {
    let result = 1000;
    //3% DISSCOUNT PER YEAR
    result -= (calculateDifYears(data.year) * 3 * result) / 100;
    //CORRESPONDING RAISE BASED ON BRAND
    result *= calculateBrandPrice(data.brand);
    //CORRESPONDING RAISE BASED ON PLAN
    result *= calculatePlan(data.plan);

    result = formatCurrency(result);

    setLoading(true);
    setTimeout(()=>{
      setResult(result);
      setLoading(false);
    }, 2000)
  };

  return (
    <QuoterContext.Provider
      value={{
        handleChangeData,
        error,
        setError,
        data,
        quoteEnsurence,
        result,
        loading
      }}
    >
      {children}
    </QuoterContext.Provider>
  );
};
