import { render } from "@testing-library/react";

import ReturnsTitle from "../../../components/sections/returns/title/ReturnsTitle";

// Component Test
it("Renders Returns Title Component Correctly", () => {
  // Find certain elements in that component
  const { queryByTitle } = render(<ReturnsTitle />);
  const div = queryByTitle("returnsTitle");
  // Check if component was rendered
  expect(div).toBeTruthy();
});
