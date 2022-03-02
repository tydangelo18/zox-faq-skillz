import { render } from "@testing-library/react";

import ZoxFaqTitle from "../../../components/sections/faqtitle/ZoxFaqTitle";

// Component Test
it("Renders Zox FAQ Title Component Correctly", () => {
  // Find certain elements in that component
  const { queryByTitle } = render(<ZoxFaqTitle />);
  const div = queryByTitle("zoxFaqTitle");
  // Check if component was rendered
  expect(div).toBeTruthy();
});
