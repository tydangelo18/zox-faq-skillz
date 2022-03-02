import "./App.css";
import ZoxFaqTitle from "./components/sections/faqtitle/ZoxFaqTitle";
import OrderingTitle from "./components/sections/ordering/title/OrderingTitle";
import ShippingTitle from "./components/sections/shipping/title/ShippingTitle";
import AccountTitle from "./components/sections/account/title/AccountTitle";
import LoyaltyTitle from "./components/sections/loyalty/title/LoyaltyTitle";

function App() {
  return (
    <div className="App">
      <ZoxFaqTitle />
      <OrderingTitle />
      <ShippingTitle />
      <AccountTitle />
      <LoyaltyTitle />
    </div>
  );
}

export default App;
