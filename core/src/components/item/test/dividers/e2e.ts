import { newE2EPage } from '@stencil/core/testing';

it('item: dividers', async () => {
  const page = await newE2EPage({
    url: '/src/components/item/test/dividers?ionic:_testing=true'
  });

  const compare = await page.compareScreenshot();
  expect(compare).toMatchScreenshot();
});
