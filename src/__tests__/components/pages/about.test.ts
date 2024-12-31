import About from "$lib/components/pages/about.svelte";

import { siteConfig } from "$lib/config/site.js";
import { render, screen } from "@testing-library/svelte";
import { beforeEach, describe, expect, it } from "vitest";

describe("<About />", () => {
  beforeEach(() => {
    render(About);
  });

  it("should have an H1 in the document", () => {
    const pageHeading = screen.getByTestId("about-page-heading");
    expect(pageHeading).toBeInTheDocument();
  });

  it(`should have an H1 with text content '${siteConfig.name}'`, () => {
    const pageHeading = screen.getByTestId("about-page-heading");
    expect(pageHeading).toHaveTextContent(`About ${siteConfig.name}`);
  });
});
