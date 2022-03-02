import "./App.css";
import ZoxFaqTitle from "./components/sections/faqtitle/ZoxFaqTitle";
// import OrderingTitle from "./components/sections/ordering/title/OrderingTitle";
import Ordering from "./components/sections/ordering/Ordering";
import Shipping from "./components/sections/shipping/Shipping";
import Account from "./components/sections/account/Account";
import Loyalty from "./components/sections/loyalty/Loyalty";
import ZoxPass from "./components/sections/zoxpass/ZoxPass";
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
      <Account />
      <Loyalty />
      <ZoxPass />
      <ProductTitle />
      <SubscriptionsTitle />
      <ReturnsTitle />
      <RewardsTitle />
    </div>
  );
}

export default App;
