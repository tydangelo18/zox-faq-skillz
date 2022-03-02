import { render } from "@testing-library/react";

import LoyaltyTitle from "../../../components/sections/loyalty/title/LoyaltyTitle";

// Component Test
it("Renders Loyalty Title Component Correctly", () => {
  // Find certain elements in that component
  const { queryByTitle } = render(<LoyaltyTitle />);
  const div = queryByTitle("loyaltyTitle");
  // Check if component was rendered
  expect(div).toBeTruthy();
});
