import { render } from "@testing-library/react";

import ZoxPassTitle from "../../../components/sections/zoxpass/title/ZoxPassTitle";

// Component Test
it("Renders ZoxPass Title Component Correctly", () => {
  // Find certain elements in that component
  const { queryByTitle } = render(<ZoxPassTitle />);
  const div = queryByTitle("zoxPassTitle");
  // Check if component was rendered
  expect(div).toBeTruthy();
});
