import "./App.css";
import ZoxFaqTitle from "./components/sections/faqtitle/ZoxFaqTitle";
// import OrderingTitle from "./components/sections/ordering/title/OrderingTitle";
import Ordering from "./components/sections/ordering/Ordering";
import Shipping from "./components/sections/shipping/Shipping";
import Account from "./components/sections/account/Account";
import Loyalty from "./components/sections/loyalty/Loyalty";
import ZoxPass from "./components/sections/zoxpass/ZoxPass";
import Product from "./components/sections/product/Product";
import Subscriptions from "./components/sections/subscriptions/Subscriptions";
import Returns from "./components/sections/returns/Returns";
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
      <Product />
      <Subscriptions />
      <Returns />
      <RewardsTitle />
    </div>
  );
}

export default App;
