
import { useState } from 'react'

function useFetchAdvice() {
    const [data, setLoading] = useState({ loading: false, advice: '' });

    const fetchAdvice = async () => {
        setLoading({ loading: true, advice: '' });
        try {
            const response = await fetch('https://api.adviceslip.com/advice');
            const data = await response.json();
            setLoading({ loading: false, advice: data.slip.advice });
        } catch (error) {
            setLoading({ loading: false, advice: 'Failed to fetch advice. Please try again.' });
        }
    }

    return { data, fetchAdvice }
}

export default useFetchAdvice