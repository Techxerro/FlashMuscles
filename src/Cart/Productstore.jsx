const prod = [
  {
    id: 1,
    name: "softside bathtub cushion",
    price: 149.99,
    color: "colour-off white",
    image: softside
  },
];
function getprodid(id) {
  console.log(`Searching for product with id: ${id}`);
  let data = prod.find((prod) => prod.id === id);
  if (!data) {
    console.log("prod doesnt exist" + id);
    return undefined;
  }
  return data;
}
export { prod, getprodid };