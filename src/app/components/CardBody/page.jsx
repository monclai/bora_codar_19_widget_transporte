"use client"
import React from 'react'
import styled from 'styled-components'
import Car from "../../../public/assets/car.png"
import Image from 'next/image'
import { Star } from '@phosphor-icons/react'

const Body = styled.section`

    display: flex;
    justify-content: space-between;
    align-items: center;

    .left{
        display: flex;
        align-items: center;
    }

    .driver{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        z-index: 1;
    }


    .driver-avatar img{
        width: 13.8rem;
        height: 13.8rem;
        border-radius: 50%;
    }

    .driver-stars{
        display: flex;
        align-items: center;
        justify-content: center;

        color: #FBF8FC;
        background-color: #372D3B;
        border-radius: 99.9rem;
        height: 3.2rem;
        width: 10rem;
        gap: 1rem;

        font-weight: 600;
        font-size: 2rem;
        line-height: 2.4rem;
        margin-top: -3.2rem;
    }

    .driver-name{
        font-weight: 700;
        font-size: 18px;
        line-height: 22px;
        color: #372D3B;
        margin-top: 6px;
    }

    .car-img{
    margin-left: -5rem;
    }

    .car-plate{
        font-weight: 700;
        font-size: 4.2rem;
        line-height: 5rem;
        color: #372D3B;
    }

    .car-model{
        font-weight: 500;
        font-size: 2.4rem;
        line-height: 2.8rem;
        margin-top: 1.2rem;
        color: #372D3B;
    }

`

export default function CardBody() {
    return (
        <Body>

            <div className="left">
                <div className="driver">
                    <div className="driver-avatar">
                        <img src="https://github.com/monclai.png" alt="Image do Monclai" />
                    </div>
                    <div className="driver-stars">
                        <div className="star">
                            <Star color="#FBF8FC" weight="fill" />
                        </div>
                        <strong>5.0</strong>
                    </div>
                    <div className="driver-name">
                        Matheus M.
                    </div>
                </div>
                <div className="car-img">
                    <Image src={Car} alt="carro roxo" />
                </div>
            </div>


            <div className="right">
                <div className="car-plate">
                    BCD0D19
                </div>
                <div className="car-model">
                    Honda Civic Roxo
                </div>
            </div>
        </Body>
    )
}
