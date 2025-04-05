'use client';

import { useEffect } from 'react';

export default function Error({
    error,
    reset,
}: {
    error: Error;
    reset: () => void;
}) {
    useEffect(() => {
        console.error('Error in PostsList:', error);
    }, [error]);

    return (
        <div>
            <h2>Something went wrong loading the posts:</h2>
            <p>{error.message}</p>
            <button
                onClick={() => reset()}
                className="mt-4 rounded bg-red-500 px-4 py-2 text-white"
            >
                Try again
            </button>
        </div>
    );
}