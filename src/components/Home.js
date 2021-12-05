import React from 'react';
import styled from 'styled-components';
import Section from './Section';

function Home() {
    return (
       <Container>
           <Section title="Model S"
            description="Order Onilne for Touchless Delivery" 
            backgroundImg="model-s.jpg"
            leftButton="Custom order"
            rightButton="Existing Inventory"
            />
            
           <Section title="Model-Y"
            description="Order Onilne for Touchless Delivery" 
            backgroundImg="model-y.jpg"
            leftButton="Custom order"
            rightButton="Existing Inventory"
           />
            <Section  title="Model-3"
            description="Order Onilne for Touchless Delivery" 
            backgroundImg="model-3.jpg"
            leftButton="Custom order"
            rightButton="Existing Inventory"
            />
           <Section title="Model-X"
            description="Order Onilne for Touchless Delivery" 
            backgroundImg="model-x.jpg"
            leftButton="Custom order"
            rightButton="Existing Inventory" 
            />
            <Section title="Lowest Cost Panels in America"
            description="Money-back guarentee" 
            backgroundImg="solar-panel.jpg"
            leftButton="order now"
            rightButton="Learn more" 
            />
             <Section title="Solar for New Roofs"
            description="Solar Roof Costs Less Than a New Roof Plus Panels" 
            backgroundImg="solar-roof.jpg"
            leftButton="order now"
            rightButton="Learn more" 
            />
            <Section title="Accessories"
            description="" 
            backgroundImg="accessories.jpg"
            leftButton="Shop now"
            
            /> 
       </Container>
    )
}

export default Home
const Container = styled.div`
height:100vh;
width:100%;

`