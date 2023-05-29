"use client"
import styled from 'styled-components'
import CardHeader from './components/CardHeader/page'
import CardBody from './components/CardBody/page'
import CardFooter from './components/CardFooter/page'


const Card = styled.section`
    display: flex;
    flex-direction: column;
    gap: 9.6rem;
    padding: 2.4rem 5.6rem;
    border-radius: 4rem;
    background-color: #fff;

    max-width: 79.5rem;
    max-height: 68.9em;

    .card-drag{
        width: 16.8rem;
        height: 1.8rem;
        background-color: #E5D8EA;
        margin-inline: auto;
        border-radius: 99.9rem; /*pill*/ 
    }


`


export default function Page() {
    return (
        <Card>
            <div className="card-drag"></div>
            <CardHeader />
            <CardBody/>
            <CardFooter/>
        </Card>

    )
}
