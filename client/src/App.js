import "./App.css";
import ZoxFaqTitle from "./components/sections/faqtitle/ZoxFaqTitle";
import OrderingTitle from "./components/sections/ordering/title/OrderingTitle";
import ShippingTitle from "./components/sections/shipping/title/ShippingTitle";
import AccountTitle from "./components/sections/account/title/AccountTitle";
import LoyaltyTitle from "./components/sections/loyalty/title/LoyaltyTitle";
import ZoxPassTitle from "./components/sections/zoxpass/title/ZoxPassTitle";

function App() {
  return (
    <div className="App">
      <ZoxFaqTitle />
      <OrderingTitle />
      <ShippingTitle />
      <AccountTitle />
      <LoyaltyTitle />
      <ZoxPassTitle />
    </div>
  );
}

export default App;
