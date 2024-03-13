const data = [
  {
    id: "1",
    title: "Tiramisu",
    description: "Chocolate cake",
    image: "example.com",
    price: "$5",
  },
  {
    id: "2",
    title: "Lemon Ice Cream",
    description: "Unexpected flavor",
    image: "example.com",
    price: "$4.50",
  },
  {
    id: "3",
    title: "Chocolate Mousse",
    description: "Unexplored taste",
    image: "example.com",
    price: "6$",
  },
];

const mostSoldDesserts = data.map((dessert) => {
  return {
    content: `${dessert.title} - ${dessert.description}`,
    price: dessert.price,
  };
});

export default function App() {
  console.log(mostSoldDesserts);
  return <h1>Examine the console output</h1>;
}
