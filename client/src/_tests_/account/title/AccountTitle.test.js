import { render } from "@testing-library/react";

import AccountTitle from "../../../components/sections/account/title/AccountTitle";

// Component Test
it("Renders Account Title Component Correctly", () => {
  // Find certain elements in that component
  const { queryByTitle } = render(<AccountTitle />);
  const div = queryByTitle("accountTitle");
  // Check if component was rendered
  expect(div).toBeTruthy();
});
