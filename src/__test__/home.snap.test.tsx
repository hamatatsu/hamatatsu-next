import Home from "@/app/(home)/page";
import { render } from "@testing-library/react";

describe("Home", () => {
  it("renders unchanged", () => {
    const { container } = render(<Home />);
    expect(container).toMatchSnapshot();
  });
});
