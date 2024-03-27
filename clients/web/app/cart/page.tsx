import CartTotals from "@/components/sections/CartTotals";
import ListOrders from "@/components/sections/ListOrders";

const page = () => {
  return (
    <main className="space-y-24 p-4 md:px-16">
      <ListOrders />
      <CartTotals />
    </main>
  );
};

export default page;
