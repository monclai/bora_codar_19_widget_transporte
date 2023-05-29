"use client"
import React from 'react'
import styled from 'styled-components'

const Header = styled.section`

h1{
    font-weight: 700;
    font-size: 3.8rem;
    line-height: 4.8rem;
    color: #372D3B;
}

span{
    color: #864293;
}

p{
    font-weight: 500;
    font-size: 2.4rem;
    line-height: 3.2rem;

    color: #372D3B;
}

`

export default function CardHeader() {
    return (
        <Header>
            <h1>Encontre <span>Monclai</span> no local de partida</h1>
            <p>Chega em 3 minutos (800 metros)</p>
        </Header>
    )
}
