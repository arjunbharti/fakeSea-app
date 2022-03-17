import React from 'react'
import '../styles/buyer-guide.css'

const buyerGuide = [
    {
        id: 1,
        description: "Pick your favourite NFT and add to the cart or bookmark for later",
        icon: "fa fa-shopping-bag"
    },
    {
        id: 2,
        description: "Add your basic details including shipping address and pay via INR",
        icon: "fa fa-money-check-dollar"

    },
    {
        id: 3,
        description: "Get your NFT shipped at home or you can download it, LOL",
        icon: "fa fa-shipping-fast"
    },
]

const BuyerGuide = () => {
  return (
    <section className="how-to-buy">
        {buyerGuide.map((item) => {
            return (
                <div className="buy-step step-one">
                    <p className="text-center step-serial text-l">Step {item.id} <i className={item.icon}></i></p>
                    <p className="text-center text-m">{item.description}</p>
                </div>
            )
        })}
    </section>
  )
}

export default BuyerGuide