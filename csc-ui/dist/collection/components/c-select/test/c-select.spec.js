import { newSpecPage } from "@stencil/core/testing";
import { CSelect } from "../c-select";
import { h } from "@stencil/core";
import { items } from "./items";
describe('c-select', () => {
  beforeAll(() => {
    global.IntersectionObserver = class IntersectionObserver {
      constructor() { }
      disconnect() {
        return null;
      }
      observe() {
        return null;
      }
      takeRecords() {
        return null;
      }
      unobserve() {
        return null;
      }
    };
  });
  it('renders shadow variant', async () => {
    const page = await newSpecPage({
      components: [CSelect],
      template: () => (h("c-select", { items: items, shadow: true, placeholder: "Select a fruit", label: "Your favorite fruit", hint: "This is a hint", valid: true, validation: "Required" })),
    });
    expect(page.root).toMatchSnapshot();
  });
  it('renders hidden details', async () => {
    const page = await newSpecPage({
      components: [CSelect],
      template: () => (h("c-select", { items: items, shadow: true, placeholder: "Select a fruit", label: "Your favorite fruit", hint: "This is a hint", valid: true, validation: "Required", hideDetails: true })),
    });
    expect(page.root).toMatchSnapshot();
  });
});
//# sourceMappingURL=c-select.spec.js.map
