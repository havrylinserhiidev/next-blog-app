import React from 'react';
import Link from "next/link";

const navigation = [
    {
        name: 'Home', href: '/'
    }, {
        name: 'Blog', href: '/blog'
    }, {
        name: 'About', href: '/about'
    },
]

function TheHeader() {
    return (
        <header>
            {
                navigation.map(item => (
                    <Link key={item.name} href={item.href}>{item.name}</Link>
                ))
            }

        </header>
    );
}

export default TheHeader;