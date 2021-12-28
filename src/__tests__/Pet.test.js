import { expect, test } from "@jest/globals";
import { render } from "@testing-library/react";
import { StaticRouter } from "react-router-dom";
import Pet from "../Pet";

// descriptive string so you know what test is failing
test("displays a default thumbnail", async () => {
  // async optional but useful for future compatibility
  const pet = render(
    <StaticRouter>
      <Pet />
    </StaticRouter>
  );

  const petThumbnail = await pet.findByTestId("thumbnail");
  expect(petThumbnail.src).toContain("none.jpg");
});
