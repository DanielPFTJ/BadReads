import { useState, useEffect } from "react";

export function useFetch(searchTerm) {
  const URL = "https://openlibrary.org/search.json?q=";
  const [data, setData] = useState(null);
  const [loading,setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(URL + searchTerm)
      .then((response) => response.json())
      .then((data) => {setData(data);})
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  },[]);

  return {data, loading};
}

export default useFetch;
