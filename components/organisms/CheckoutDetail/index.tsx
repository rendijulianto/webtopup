import CheckoutList from "../../atoms/CheckoutList";

export default function CheckoutDetail() {
  return (
    <>
      <div className="purchase pt-md-50 pt-30">
        <h2 className="fw-bold text-xl color-palette-1 mb-20">
          Purchase Details
        </h2>
        <CheckoutList
          type="purchase-details"
          title="Your Game ID"
          value="masayoshizero"
        />
        <CheckoutList type="purchase-details" title="Order ID" value="#GG001" />
        <CheckoutList
          type="purchase-details"
          title="Item"
          value="250 Diamonds"
        />

        <CheckoutList
          type="purchase-details"
          title="Price"
          value="Rp 42.280.500"
        />
        <CheckoutList
          type="purchase-details"
          title="Tax (10%)"
          value="Rp 4.228.000"
        />
        <CheckoutList
          type="purchase-details-price"
          title="Total"
          value="Rp 55.000.600"
        />
      </div>
      <div className="payment pt-md-50 pb-md-50 pt-10 pb-10">
        <h2 className="fw-bold text-xl color-palette-1 mb-20">
          Payment Informations
        </h2>
        <CheckoutList
          type="purchase-details"
          title="Your Account Name"
          value="Masayoshi Angga Zero"
        />
        <CheckoutList
          type="payment-details"
          title="Type"
          value="Worldwide Transfer"
        />
        <CheckoutList
          type="payment-details"
          title="Bank Name"
          value="Mandiri"
        />
        <CheckoutList
          type="payment-details"
          title="Bank Account Name"
          value="PT Store GG Indonesia"
        />
        <CheckoutList
          type="payment-details"
          title="Bank Number"
          value="1800 - 9090 - 2021"
        />
      </div>
    </>
  );
}
