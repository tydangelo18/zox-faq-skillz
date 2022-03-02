import "./App.css";
import ZoxFaqTitle from "./components/sections/faqtitle/ZoxFaqTitle";
import OrderingTitle from "./components/sections/ordering/title/OrderingTitle";
import ShippingTitle from "./components/sections/shipping/title/ShippingTitle";

function App() {
  return (
    <div className="App">
      <ZoxFaqTitle />
      <OrderingTitle />
      <ShippingTitle />
    </div>
  );
}

export default App;
