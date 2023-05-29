"use client"
import { Phone, ShieldPlus } from '@phosphor-icons/react'
import React from 'react'
import styled from 'styled-components'

const Foorter = styled.section`
    display: flex;
    gap: 3.2rem;
    align-items: center;


    .input-wrapper{
        display: flex;
        align-items: center;
        background: #F5EDF7;
        border-radius: 2.4rem;

        height: 6.4rem;
        flex: 3;

        padding: 0 3.2rem
    }

    label{
        position: absolute;
        width: .1rem;
        height: .1rem;
        padding: 0;
        margin: -0.1rem;
        overflow: hidden;

        clip: rect(0,0,0,0);
        border-width: 0;
        white-space: nowrap;
    }

    input{
        width: 100%;
        border: 0;
        background-color: transparent;

        font-weight: 500;
        font-size: 2.4rem;
        line-height: 2.9rem;
        color: #372D3B;
    }

    input:focus{
        outline: 0;
    }

    .input-wrapper:focus-within{
        outline: .3rem solid black;
    }
    
`

export default function CardFooter() {
    return (
        <Foorter>
            <div className="input-wrapper">
                <label htmlFor="message">Enviar mensagem para Monclai...</label>
                <input type="text" id="message" placeholder="Enviar mensagem para Monclai..." />
            </div>

            <div className="phone">
                <Phone size={56} color="#372d3b" weight="fill" />
            </div>
            <div className="shield">
                <ShieldPlus size={56} color="#372d3b" weight="fill" />
            </div>
        </Foorter>
    )
}
