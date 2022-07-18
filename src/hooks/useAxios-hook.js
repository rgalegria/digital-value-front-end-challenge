import { useState, useEffect, useCallback, useRef } from "react";
import axios from "axios";

export const useAxios = () => {
    // http request states
    const [error, setError] = useState("");
    const [status, setStatus] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const controllerRef = useRef(new AbortController());

    const goAxios = useCallback(async (url, method = "GET", payload = null) => {
        // Initiate loading state
        setIsLoading(true);

        // Axios http request
        try {
            const response = await axios.request({
                data: payload,
                signal: controllerRef.current.signal,
                method,
                url
            });

            setStatus(response.status);
            return response.data;
        } catch (error) {
            setIsLoading(false);
            setError(error.message);
        } finally {
            setIsLoading(false);
        }
    }, []);

    return { goAxios, isLoading, error, status };
};
