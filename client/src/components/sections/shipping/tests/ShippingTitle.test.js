import { render } from "@testing-library/react";

import ShippingTitle from "../title/ShippingTitle";

// Component Test
it("Renders Shipping Title Component Correctly", () => {
  // Find certain elements in that component
  const { queryByTitle } = render(<ShippingTitle />);
  const div = queryByTitle("shippingTitle");
  // Check if component was rendered
  expect(div).toBeTruthy();
});