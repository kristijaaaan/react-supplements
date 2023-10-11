import LinkButton from '../../ui/LinkButton';

function EmptyCart() {
  return (
    <div className="mt-6 px-6">
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <p className="mt-6 text-xl font-bold">
        Your cart is still empty. Start adding some items :)
      </p>
    </div>
  );
}

export default EmptyCart;
