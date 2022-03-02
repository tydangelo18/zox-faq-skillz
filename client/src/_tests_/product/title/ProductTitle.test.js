import { render } from "@testing-library/react";

import ProductTitle from "../../../components/sections/product/title/ProductTitle";

// Component Test
it("Renders Product Title Component Correctly", () => {
  // Find certain elements in that component
  const { queryByTitle } = render(<ProductTitle />);
  const div = queryByTitle("productTitle");
  // Check if component was rendered
  expect(div).toBeTruthy();
});
