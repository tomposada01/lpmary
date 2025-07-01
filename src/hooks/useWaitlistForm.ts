import { useState } from 'react';

export function useWaitlistForm() {
  const [email, setEmail] = useState('');
  const [type, setType] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);
    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, type }),
      });
      if (res.ok) {
        setSuccess(true);
        setEmail('');
        setType('');
      } else {
        const data = await res.json();
        setError(data.error || 'Something went wrong');
      }
    } catch (err) {
      setError('Network error');
    } finally {
      setLoading(false);
    }
  };

  return {
    email,
    setEmail,
    type,
    setType,
    loading,
    success,
    error,
    handleSubmit,
  };
} 