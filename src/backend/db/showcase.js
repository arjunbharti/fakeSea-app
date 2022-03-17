
import { v4 as uuid } from "uuid";

export const trendingProducts = [
    {
      _id: uuid(),
      title: "Asics Metarise",
      author: "Asics",
      description: "some random long long long long long text for now",
      price: "900",
      categoryName: "sports",
      trending: true,
      chain: "ethereum",
      rating: "5",
      img: "/assets/metarise.jpg"
    },
    {
      _id: uuid(),
      title: "Bored Ape Yatch Club 2577",
      author: "Ape King",
      description: "some random long long long long long text for now",
      price: "450",
      categoryName: "ticket",
      trending: true,
      chain: "ethereum",
      rating: "4",
      img: "/assets/2577_bored.png"
    },
    {
      _id: uuid(),
      title: "Thug Elon #2195",
      author: "Space Party",
      description: "some random long long long long long text for now",
      price: "1499",
      categoryName: "celebrity",
      trending: true,
      chain: "ethereum",
      rating: "5",
      img: "/assets/2195_elon.jpg"
    },
  ]
  
  export const expensiveProducts = [
    {
      _id: uuid(),
      title: "Thug Elon #2195",
      author: "Space Party",
      description: "some random long long long long long text for now",
      price: "1499",
      categoryName: "celebrity",
      trending: true,
      chain: "ethereum",
      rating: "5",
      img: "/assets/2195_elon.jpg"
    },
    {
      _id: uuid(),
      title: "Thakur's Dream",
      author: "BollyDev",
      description: "some random long long long long long text for now",
      price: "1200",
      categoryName: "bollywood",
      trending: true,
      chain: "polygon",
      rating: "4",
      img: "/assets/thakur_dream.png"
    },
    {
      _id: uuid(),
      title: "Thug Elon #1189",
      author: "Space Party",
      description: "some random long long long long long text for now",
      price: "1100",
      categoryName: "celebrity",
      trending: false,
      chain: "ethereum",
      rating: "2",
      img: "/assets/1189_elon.jpg"
    },
  ]