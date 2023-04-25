// @ts-check
const { test, expect } = require('@playwright/test');

test.beforeEach(async ({ page }) => {
   await page.goto('https://demoqa.com/elements');
 });
test.describe('Validation of  demoqa',  () => {
   test('Validation of elements ',async ({page}) => { 
   //  await page.goto('https://demoqa.com/elements')

    await page.locator('span').filter({ hasText: 'Elements' }).locator('svg').nth(1).click()
    await expect(await page.getByRole('listitem').filter({ hasText: 'Text Box' })).toBeVisible();


    await page.getByRole('listitem').filter({ hasText: 'Text Box' }).click()
    await expect(await page.locator('span').filter({ hasText: 'Elements' }).locator('div').nth(2)).toBeVisible();

    const fullname  = "Nikunj Basnett"
    await page.getByPlaceholder('Full Name').type(fullname)
    await expect(await page.getByPlaceholder('Full Name')).toBeVisible();

    const email = "test123@test.comm"
    await page.getByPlaceholder('name@example.com').type(email)
    await expect(await page.getByPlaceholder('name@example.com')).toBeVisible();

    const address = "Gharipatan"
    await page.getByPlaceholder('Current Address').type(address)
    await expect(await page.getByPlaceholder('Current Address')).toBeVisible();

    const permanentaddress ="pokharaa"
    await page.locator('#permanentAddress').type(permanentaddress)
    await expect(await page.locator('#permanentAddress')).toBeVisible();

    await page.getByRole('button', { name: 'Submit' }).click()

    await page.getByText('Name:Nikunj BasnetEmail:test123@test.comCurrent Address :Gharipatan Permananet A')

    await expect(await page.getByText('Name:Nikunj BasnetEmail:test123@test.comCurrent Address :Gharipatan Permananet A')).toBeVisible();

   }) 

   
})
