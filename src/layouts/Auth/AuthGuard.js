import { useRouter } from 'next/router';
import React, { useEffect } from 'react'

export default function AuthGuard({ children }) {
    const isAuth = false;

    if (!isAuth) {
        return <div>Page no found</div>;
    }

    return (
        <div>{children}</div>
    )
}
