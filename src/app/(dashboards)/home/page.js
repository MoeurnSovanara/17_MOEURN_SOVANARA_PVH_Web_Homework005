import BooKCard from "@/app/components/cards/BookCard";
import CartoonCard from "@/app/components/cards/CartoonCard";
export default function HomePage() {
  return (
    <div className="flex justify-evenly items-center mt-20">
      <div className="place-self-center">
        <BooKCard />
      </div>
      <div className="place-self-center">
        <CartoonCard />
      </div>
    </div>
  );
}
