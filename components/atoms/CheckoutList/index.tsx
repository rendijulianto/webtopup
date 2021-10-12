interface CheckoutListProps {
  type: "purchase-details" | "purchase-details-price" | "payment-details";
  title: string;
  value: string;
}
export default function CheckoutList(props: CheckoutListProps) {
  const { type, title, value } = props;
  if (type === "payment-details") {
    return (
      <p className="text-lg color-palette-1 mb-20">
        {title} <span className="payment-details">{value}</span>
      </p>
    );
  } else if (type === "purchase-details-price") {
    return (
      <p className="text-lg color-palette-1 mb-20">
        {title}
        <span className="purchase-details color-palette-4">{value}</span>
      </p>
    );
  }
  return (
    <p className="text-lg color-palette-1 mb-20">
      {title} <span className="purchase-details">{value}</span>
    </p>
  );
}
