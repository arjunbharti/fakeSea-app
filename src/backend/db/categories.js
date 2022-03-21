import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "art",
    description:
      "This category includes NFTs related to art",
  },
  {
    _id: uuid(),
    categoryName: "celebrity",
    description:
      "This category includes NFTs related to celebrities",
  },
  {
    _id: uuid(),
    categoryName: "bollywood",
    description:
      "This category includes NFTs related to bollywood",
  },
  {
    _id: uuid(),
    categoryName: "ticket",
    description: "rgr",
  },
  {
    _id: uuid(),
    categoryName: "sports",
    discription: "This category includes NFTs related to sports"
  }
];
