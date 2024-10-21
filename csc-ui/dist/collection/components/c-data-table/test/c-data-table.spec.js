import { newSpecPage } from "@stencil/core/testing";
import { CDataTable } from "../c-data-table";
import { basicData, basicHeaders } from "./data";
import { h } from "@stencil/core";
describe('c-data-table', () => {
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
    global.ResizeObserver = class ResizeObserver {
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
  it.only('renders default html', async () => {
    const page = await newSpecPage({
      components: [CDataTable],
      template: () => (h("c-data-table", { headers: basicHeaders, data: basicData })),
    });
    expect(page.root).toMatchSnapshot();
  });
  it.only('renders specific columns as hidden and expands on click', async () => {
    const headers = JSON.parse(JSON.stringify(basicHeaders));
    headers[2].hidden = true;
    const page = await newSpecPage({
      components: [CDataTable],
      template: () => (h("c-data-table", { headers: headers, data: basicData })),
    });
    expect(page.root).toMatchSnapshot();
    const firstRow = page.root.shadowRoot.querySelector('.parent');
    firstRow.click();
    await page.waitForChanges();
    expect(page.root).toMatchSnapshot();
  });
  it('renders horizontal scroll', async () => {
    const page = await newSpecPage({
      components: [CDataTable],
      html: `<c-data-table ></c-data-table>`,
    });
    expect(page.root).toMatchSnapshot();
  });
  it('renders disabled sorting', async () => {
    const page = await newSpecPage({
      components: [CDataTable],
      html: `<c-data-table></c-data-table>`,
    });
    expect(page.root).toMatchSnapshot();
  });
  it('allows sorting by column', async () => {
    const page = await newSpecPage({
      components: [CDataTable],
      html: `<c-data-table></c-data-table>`,
    });
    expect(page.root).toMatchSnapshot();
  });
  it('renders custom header width', async () => {
    const page = await newSpecPage({
      components: [CDataTable],
      html: `<c-data-table></c-data-table>`,
    });
    expect(page.root).toMatchSnapshot();
  });
  it('renders pagination and adds custom pagination text', async () => {
    const page = await newSpecPage({
      components: [CDataTable],
      html: `<c-data-table></c-data-table>`,
    });
    expect(page.root).toMatchSnapshot();
  });
  it('renders sticky header', async () => {
    const page = await newSpecPage({
      components: [CDataTable],
      html: `<c-data-table></c-data-table>`,
    });
    expect(page.root).toMatchSnapshot();
  });
  it('allows to select rows', async () => {
    const page = await newSpecPage({
      components: [CDataTable],
      html: `<c-data-table></c-data-table>`,
    });
    expect(page.root).toMatchSnapshot();
  });
});
//# sourceMappingURL=c-data-table.spec.js.map
