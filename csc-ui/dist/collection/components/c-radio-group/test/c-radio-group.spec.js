import { newSpecPage } from "@stencil/core/testing";
import { CRadioGroup } from "../c-radio-group";
import { items } from "./items";
import { h } from "@stencil/core";
describe('c-radio-group', () => {
  it('renders default html', async () => {
    const page = await newSpecPage({
      components: [CRadioGroup],
      template: () => h("c-radio-group", { items: items }),
    });
    expect(page.root).toMatchSnapshot();
  });
  it('renders custom color and items inlined', async () => {
    const page = await newSpecPage({
      components: [CRadioGroup],
      template: () => (h("c-radio-group", { color: "red", inline: true, items: items })),
    });
    expect(page.root).toMatchSnapshot();
  });
  it('renders hint and label', async () => {
    const page = await newSpecPage({
      components: [CRadioGroup],
      template: () => (h("c-radio-group", { hint: "This is hint message", label: "This is label", items: items })),
    });
    expect(page.root).toMatchSnapshot();
  });
});
//# sourceMappingURL=c-radio-group.spec.js.map
