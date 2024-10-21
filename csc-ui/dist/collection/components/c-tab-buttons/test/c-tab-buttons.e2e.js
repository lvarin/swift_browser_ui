import { newE2EPage } from "@stencil/core/testing";
describe('c-tab-buttons', () => {
  it('basic  interaction test: clicking buttons active and non-active', async () => {
    const page = await newE2EPage({
      html: `
      <c-tab-buttons>
      <c-button>One</c-button>
      <c-button>Two</c-button>
      <c-button>Three</c-button>
      </c-tab-buttons>
      `,
    });
    const tab = await page.find('c-tab-buttons');
    tab.setProperty('value', 0);
    const buttons = await page.findAll('c-button');
    expect(buttons[0]).toHaveClass('c-button--active');
    buttons[0].click();
    await page.waitForChanges();
    expect(buttons[0]).not.toHaveClass('c-button--active');
  });
  it('one selection is mandatory', async () => {
    const page = await newE2EPage({
      html: `
      <c-tab-buttons>
      <c-button>One</c-button>
      <c-button>Two</c-button>
      <c-button>Three</c-button>
      </c-tab-buttons>
      `,
    });
    let tab = await page.find('c-tab-buttons');
    tab.setProperty('value', 0);
    await page.waitForChanges();
    let activeButtons = await page.findAll('.c-button--active');
    expect(activeButtons.length).toBe(1);
    let buttons = await page.findAll('c-button');
    expect(buttons.length).toBe(3);
    await buttons[0].click();
    await page.waitForChanges();
    activeButtons = await page.findAll('.c-button--active');
    expect(activeButtons.length).toBe(0);
    await buttons[0].click();
    activeButtons = await page.findAll('.c-button--active');
    expect(activeButtons.length).toBe(1);
    tab = await page.find('c-tab-buttons');
    tab.setProperty('mandatory', true);
    await page.waitForChanges();
    activeButtons = await page.findAll('.c-button--active');
    expect(activeButtons.length).toBe(1);
    buttons = await page.findAll('c-button');
    await buttons[0].click();
    await page.waitForChanges();
    activeButtons = await page.findAll('.c-button--active');
    expect(activeButtons.length).toBe(1);
    await buttons[2].click();
    activeButtons = await page.findAll('.c-button--active');
    expect(activeButtons.length).toBe(1);
    expect(buttons[2]).toHaveClass('c-button--active');
    await buttons[2].click();
    await page.waitForChanges();
    activeButtons = await page.findAll('.c-button--active');
    expect(activeButtons.length).toBe(1);
  });
  it('interaction disabled', async () => {
    const page = await newE2EPage({
      html: `
      <c-tab-buttons>
      <c-button>One</c-button>
      <c-button>Two</c-button>
      <c-button>Three</c-button>
      </c-tab-buttons>
      `,
    });
    const tab = await page.find('c-tab-buttons');
    tab.setAttribute('disabled', true);
    tab.setProperty('value', 0);
    await page.waitForChanges();
    const buttons = await page.findAll('c-button');
    expect(buttons[0]).toHaveClass('c-button--active');
    buttons[0].click();
    await page.waitForChanges();
    expect(buttons[0]).toHaveClass('c-button--active');
    buttons[1].click();
    await page.waitForChanges();
    expect(buttons[1]).not.toHaveClass('c-button--active');
    buttons[2].click();
    await page.waitForChanges();
    expect(buttons[2]).not.toHaveClass('c-button--active');
  });
});
//# sourceMappingURL=c-tab-buttons.e2e.js.map
