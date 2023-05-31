'use client';

import {usePathname} from "next/navigation";
import Link from "next/link";

type NavLink = {
    label: string;
    href: string;
}

type Props = {
    navLinks: NavLink[];
};

const Navigation = ({navLinks}: Props) => {
    const pathname = usePathname();
    return (
        <>{
            navLinks.map(link => {
                const isActiveLink = pathname === link.href;
                return (
                    <Link
                        key={link.label}
                        href={link.href}
                        className={isActiveLink ? 'active' : ''}
                    >{link.label}</Link>
                )
            })
        }</>
    )
}

export {Navigation}