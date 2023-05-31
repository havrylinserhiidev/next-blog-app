import React from 'react';
import {Navigation} from "@/components/Navigation";

const navigation = [
    {label: 'Home', href: '/'},
    {label: 'Blog', href: '/blog'},
    {label: 'About', href: '/about'},
]

function TheHeader() {
    return (
        <header>
            <Navigation navLinks={navigation}></Navigation>
        </header>
    );
}

export default TheHeader;