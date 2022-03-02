import "./App.css";
import ZoxFaqTitle from "./components/sections/faqtitle/ZoxFaqTitle";
// import OrderingTitle from "./components/sections/ordering/title/OrderingTitle";
import Ordering from "./components/sections/ordering/Ordering";
import Shipping from "./components/sections/shipping/Shipping";
import AccountTitle from "./components/sections/account/title/AccountTitle";
import LoyaltyTitle from "./components/sections/loyalty/title/LoyaltyTitle";
import ZoxPassTitle from "./components/sections/zoxpass/title/ZoxPassTitle";
import ProductTitle from "./components/sections/product/title/ProductTitle";
import SubscriptionsTitle from "./components/sections/subscriptions/title/SubscriptionsTitle";
import ReturnsTitle from "./components/sections/returns/title/ReturnsTitle";
import RewardsTitle from "./components/sections/rewards/title/RewardsTitle";

function App() {
  return (
    <div className="App">
      <ZoxFaqTitle />
      <Ordering />
      <Shipping />
      <AccountTitle />
      <LoyaltyTitle />
      <ZoxPassTitle />
      <ProductTitle />
      <SubscriptionsTitle />
      <ReturnsTitle />
      <RewardsTitle />
    </div>
  );
}

export default App;
