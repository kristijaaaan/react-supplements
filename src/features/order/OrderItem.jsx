function OrderItem({ item }) {
  const { quantity, name, price } = item;

  return (
    <li className="item-center flex flex-col justify-between gap-2 py-4">
      <p>
        <span>{quantity}&times;</span> {name}
      </p>
      <p className="font-semibold">{price * quantity}.00 RSD</p>
    </li>
  );
}

export default OrderItem;
