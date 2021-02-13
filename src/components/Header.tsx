import React from "react";

type Props = {
    title?: string,
    nome?: string,
    children?: JSX.Element
};

const Header: React.FC<Props> = ({title}) =>  {
    return (
        <header>
            <h1>{title}</h1>
        </header>
    );
}

export default Header;
