import axios from "axios";
import { useCallback, useEffect, useState } from "react";

interface CatApiResponse {
  url: string;
}

const CAT_API_URL = process.env.REACT_APP_CAT_API_URL;

if (!CAT_API_URL) {
  throw new Error("REACT_APP_CAT_API_URL is not defined in .env");
}

export const useGetCatImage = (enabled: boolean, autoRefresh: boolean) => {
  const [catUrl, setCatUrl] = useState<string | undefined>(undefined);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchCatImage = useCallback(async () => {
    if (!enabled) return;
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get<CatApiResponse[]>(CAT_API_URL);
      setCatUrl(response.data[0]?.url);
    } catch (err) {
      console.error(err);
      setError("Failed to load cat image");
    } finally {
      setLoading(false);
    }
  }, [enabled]);

  useEffect(() => {
    if (!enabled || !autoRefresh) return;

    const interval = setInterval(fetchCatImage, 5000);
    return () => clearInterval(interval);
  }, [enabled, autoRefresh, fetchCatImage]);

  return {
    catUrl,
    loading,
    error,
    fetchCatImage,
  };
};
