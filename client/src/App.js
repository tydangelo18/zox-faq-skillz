import "./App.css";
import ZoxFaqTitle from "./components/sections/faqtitle/ZoxFaqTitle";
import OrderingTitle from "./components/sections/ordering/title/OrderingTitle";
import ShippingTitle from "./components/sections/shipping/title/ShippingTitle";
import AccountTitle from "./components/sections/account/title/AccountTitle";
import LoyaltyTitle from "./components/sections/loyalty/title/LoyaltyTitle";
import ZoxPassTitle from "./components/sections/zoxpass/title/ZoxPassTitle";
import ProductTitle from "./components/sections/product/title/ProductTitle";
import SubscriptionsTitle from "./components/sections/subscriptions/title/SubscriptionsTitle";
import ReturnsTitle from "./components/sections/returns/title/ReturnsTitle";

function App() {
  return (
    <div className="App">
      <ZoxFaqTitle />
      <OrderingTitle />
      <ShippingTitle />
      <AccountTitle />
      <LoyaltyTitle />
      <ZoxPassTitle />
      <ProductTitle />
      <SubscriptionsTitle />
      <ReturnsTitle />
    </div>
  );
}

export default App;
