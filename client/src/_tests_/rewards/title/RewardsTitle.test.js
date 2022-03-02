import { render } from "@testing-library/react";

import RewardsTitle from "../../../components/sections/rewards/title/RewardsTitle";

// Component Test
it("Renders Rewards Title Component Correctly", () => {
  // Find certain elements in that component
  const { queryByTitle } = render(<RewardsTitle />);
  const div = queryByTitle("rewardsTitle");
  // Check if component was rendered
  expect(div).toBeTruthy();
});
