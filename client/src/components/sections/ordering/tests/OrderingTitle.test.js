import { render } from "@testing-library/react";

import OrderingTitle from "../title/OrderingTitle";

// Component Test
it("Renders Zox FAQ Title Component Correctly", () => {
  // Find certain elements in that component
  const { queryByTitle } = render(<OrderingTitle />);
  const div = queryByTitle("orderingTitle");
  // Check if component was rendered
  expect(div).toBeTruthy();
});
