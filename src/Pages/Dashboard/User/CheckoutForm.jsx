import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import useCart from "../../../hooks/useCart";
import SheardTitle from "../../../Sheared/SheardTitle";

const CheckoutForm = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const stripe = useStripe();
  const elements = useElements();

  const [clientSecret, setClientSecret] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [processing, setProcessing] = useState(false);
  const [transactionId, setTransactionId] = useState("");
  const [cart, refetch] = useCart();
  const totalPrice = cart.reduce((total, item) => {
    if (item.price && item.price > 0) {
      return total + item.price;
    }
    return total;
  }, 0);
  useEffect(() => {
    axiosSecure
      .post(`/create-payment-intent`, { price: totalPrice })
      .then((res) => setClientSecret(res.data.clientSecret));
  }, [axiosSecure, totalPrice]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) return;

    const card = elements.getElement(CardElement);
    if (!card) return;

    setProcessing(true);

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card,
          billing_details: {
            name: user?.displayName || "anonymous",
            email: user?.email || "anonymous",
          },
        },
      });

    if (confirmError) {
      setError(confirmError.message);
      setSuccess("");
      setProcessing(false);
      return;
    }

    if (paymentIntent.status === "succeeded") {
      const paymentData = {
        email: user?.email,
        transactionId: paymentIntent.id,
        price: totalPrice,
        date: new Date(),
        cartId: cart.map((item) => item._id),
        menuItemId: cart.map((item) => item.menuId),
        status: "pending",
      };

      axiosSecure.post(`/payments`, paymentData).then(() => {
        setSuccess(" Payment successful!");
        setTransactionId(paymentIntent.id);
        refetch();
      });
    }

    setProcessing(false);
  };
  return (
    <>
      {cart.length > 0 ? (
        <div>
          <SheardTitle
            subHeading={"---please confirm you payment---"}
            heading={"Payment "}
          />
          <form
            onSubmit={handleSubmit}
            className="max-w-md mx-auto p-6 bg-white shadow rounded text-center "
          >
            <div className="flex items-center border rounded px-3 py-2 mb-4">
              <div className="w-full">
                <CardElement
                  options={{
                    style: {
                      base: {
                        fontSize: "16px",
                        color: "#32325d",
                        "::placeholder": {
                          color: "#aab7c4",
                        },
                      },
                      invalid: {
                        color: "#fa755a",
                      },
                    },
                  }}
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={!stripe || !clientSecret || processing}
              className="mt-4 w-full bg-violet-700 text-white py-2 rounded hover:bg-violet-800 transition-colors cursor-pointer"
            >
              {processing ? "Processing..." : "Pay"}
            </button>

            {error && <p className="text-red-500 mt-2">{error}</p>}
            {success && (
              <p className="text-green-600 mt-2">
                {success} <br />
                Transaction ID:{" "}
                <span className="font-bold">{transactionId}</span>
              </p>
            )}
          </form>
        </div>
      ) : (
        <p className="flex h-screen items-center justify-center">
          no data found
        </p>
      )}
    </>
  );
};

export default CheckoutForm;
