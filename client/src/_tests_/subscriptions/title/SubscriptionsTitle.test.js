import { render } from "@testing-library/react";

import SubscriptionsTitle from "../../../components/sections/subscriptions/title/SubscriptionsTitle";

// Component Test
it("Renders Subscriptions Title Component Correctly", () => {
  // Find certain elements in that component
  const { queryByTitle } = render(<SubscriptionsTitle />);
  const div = queryByTitle("subscriptionsTitle");
  // Check if component was rendered
  expect(div).toBeTruthy();
});
