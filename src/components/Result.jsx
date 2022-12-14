import { useCallback, useRef, useEffect, useState } from "react";
import Loader from "/img/car_loader.gif";
import { BRANDS, PLANS } from "../constants/index";
import useQuoter from "../hooks/useQuoter";

export const Result = () => {
  const { result, loading, data } = useQuoter();

  const [yearRef, setYearRef] = useState(data.year);

  useEffect(()=>{
    setYearRef(data.year);
  }, [result])

  const brand = useCallback(
    BRANDS.find((b) => b.id === Number(data.brand)),
    [result]
  );
  const plan = useCallback(
    PLANS.find((p) => p.id === Number(data.plan)),
    [result]
  );

  return (
    <>
      {loading ? (
        <img className="my-2 mx-auto" src={Loader} />
      ) : result !== 0 ? (
        <div className="bg-gray-100 text-center mt-5 p-5 shadow">
          <h2 className="text-gray-700 font-black text-3xl uppercase">
            Resume
          </h2>
          <p>
            <span className="mr-2 font-black">Brand:</span>
            {brand.name}
          </p>
          <p>
            <span className="mr-2 font-black">Plan:</span>
            {plan.name}
          </p>
          <p>
            <span className="mr-2 font-black">Year:</span>
            {yearRef}
          </p>
          <p className="mt-2">
            <span className="mr-2 text-2xl font-black">Price:</span>
            {result}
          </p>
        </div>
      ) : null}
    </>
  );
};
