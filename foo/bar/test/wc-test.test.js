import { html, fixture, expect } from '@open-wc/testing';

import '../src/wc-test.js';

describe('<wc-test>', () => {
  it('has a default property heading', async () => {
    const el = await fixture('<wc-test></wc-test>');

    expect(el.heading).to.equal('Hello world!');
  });

  it('allows property heading to be overwritten', async () => {
    const el = await fixture(html`
      <wc-test heading="different heading"></wc-test>
    `);

    expect(el.heading).to.equal('different heading');
  });
});
