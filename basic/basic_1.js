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

// Basic map display
// const mostSoldDesserts = data.map((dessert) => {
//   return {
//     content: `${dessert.title} - ${dessert.description}`,
//     price: dessert.price,
//   };
// });

function App() {
  const ListItems = data.map((dessert) => {
    const displayedItem = `${dessert.title} - ${dessert.price}`;
    return <li>{displayedItem}</li>;
  });
  // console.log(mostSoldDesserts);
  return (
    <div>
      <ul>{ListItems}</ul>
    </div>
  );
}
/*
const numbers = [1, 2, 3, 4, 5];

const doubledNumbers = numbers.map((num) => {
  return num * 2;
});

console.log(doubledNumbers); 

// Output: [2, 4, 6, 8, 10]


*/
