import { useEffect, useState } from "react";

export default function useFetchData(url) {
  const [fetchedData, setFetcheddata] = useState([]);
  useEffect(() => {
    let data = fetch(url);
    data
      .then((elm) => {
        return elm.json();
      })
      .then((elm) => {
        setFetcheddata(elm.results);
      });
  }, [url]);

  return [fetchedData];
}
