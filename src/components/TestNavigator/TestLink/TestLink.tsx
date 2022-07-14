import Link from "next/link";
import React from "react";

interface TestLinkProps {
    page: string
    id: string
}

export const TestLink: React.FC<TestLinkProps> = ({ page, id }) => {
    return <Link key={`/${page}/${id}`} href={`/${page}/${id}`} passHref>
        <div style={{ padding: ".5rem", border: "2px solid grey", borderRadius: "1rem", textAlign: "center", cursor: "pointer" }}>
            <>{page} {id}</>
        </div>
    </Link>
}