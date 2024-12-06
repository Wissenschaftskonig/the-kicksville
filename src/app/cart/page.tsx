"use client";

import { useCart } from "@/context/CartContextProvider";
import Image from "next/image";
import { Icon } from "@iconify/react/dist/iconify.js";
import CustomButton from "@/components/CustomButton";
import { useRouter } from "next/navigation";
import { showToast } from "@/utils";

export default function CartPage() {
  const {
    cartItems,
    removeFromCart,
    updateQuantity,
    clearCart,
    calculateTotal,
  } = useCart();
  const router = useRouter();

  const goToShop = () => {
    router.push("/");
  };

  const handleRemoveFromCart = (id: string, size: string) => {
    removeFromCart(id, size);
    showToast("success", "Item removed from cart");
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Your Cart</h1>

        <CustomButton
          buttonText={"Shop For More"}
          buttonTypeOne
          buttonSize="btn-sm"
          style="uppercase font-thin"
          onClick={goToShop}
        />
      </div>

      {cartItems.length === 0 ? (
        <div className="h-[80vh] w-full m-auto flex flex-col gap-8 justify-center items-center">
          <Icon icon="game-icons:shopping-cart" className="h-32 w-32" />
          <div className="text-center space-y-2">
            <h3 className="text-xl">Seems your cart is empty,</h3>
            <p className="text-lg">
              You are just a few clicks away from great discounts!
            </p>
          </div>
          <CustomButton
            buttonText={"Shop Here"}
            buttonTypeOne
            buttonSize="btn-wide"
            style="uppercase font-thin"
            onClick={goToShop}
          />
        </div>
      ) : (
        <>
          {cartItems.map((item) => (
            <div
              key={`${item.id}-${item.size}`}
              className="flex items-center justify-between border-b py-4"
            >
              <div className="flex items-center space-x-4">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={100}
                  height={100}
                  className="object-cover"
                />
                <div>
                  <h2 className="text-xl font-semibold">{item.name}</h2>
                  <p>Size: {item.size}</p>
                  <p>Price: ₦{item.price}</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="flex items-center">
                  <button
                    onClick={() =>
                      updateQuantity(
                        item.id,
                        item.size,
                        Math.max(1, item.quantity - 1)
                      )
                    }
                    className="px-2 py-1 bg-gray-200"
                  >
                    -
                  </button>
                  <span className="px-4">{item.quantity}</span>
                  <button
                    onClick={() =>
                      updateQuantity(item.id, item.size, item.quantity + 1)
                    }
                    className="px-2 py-1 bg-gray-200"
                  >
                    +
                  </button>
                </div>

                <button
                  onClick={() => handleRemoveFromCart(item.id, item.size)}
                  className="text-red-500 hover:text-red-700"
                >
                  <Icon icon="ep:delete" className="h-6 w-6" />
                </button>
              </div>
            </div>
          ))}

          <p className="text-xl font-bold text-right">
            Total: ₦{calculateTotal()}
          </p>

          <div className="mt-6 flex justify-between items-center">
            <CustomButton
              buttonText="Clear Cart"
              buttonTypeOne
              onClick={clearCart}
            />

            <CustomButton
              buttonText="Proceed to Checkout"
              buttonTypeOne
              onClick={() => router.push("/checkout")}
            />
          </div>
        </>
      )}
    </div>
  );
}
