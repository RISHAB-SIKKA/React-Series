import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(`https://api.exchangerate-api.com/v4/latest/${currency}`)
      .then((res) => res.json())
      .then((res) => {
        setData(res.rates); // Updated to access `rates`
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching currency data:", error);
        setLoading(false);
      });
  }, [currency]);

  return loading ? {} : data;
}

export default useCurrencyInfo;
