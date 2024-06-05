import { useState, useEffect } from "react";
import axios from "axios";
import API_URL from "../data/data.js";

const useFetch = (endpoint, delay = 500) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${API_URL}${endpoint}`);
        setData(response.data);
        setIsLoading(false);
      } catch (err) {
        setError("Something went wrong");
        setIsLoading(false);
      }
    };

    const timer = setTimeout(fetchData, delay);
    return () => clearTimeout(timer); 
  }, [endpoint, delay]);

  return { data, isLoading, error };
};

export default useFetch;
