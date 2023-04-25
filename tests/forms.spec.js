 
 const { test, expect } = require('@playwright/test');
 
 test.beforeEach(async ({ page }) => {
  await page.goto('https://demoqa.com/automation-practice-form');
 });
 
 
 test.describe('validation of form ', () => {
    test('Validation of student registration form ', async ({ page }) => {
        await page.getByRole('link')
        await expect(await page.getByRole('link')).toBeVisible();

        await page.getByPlaceholder('First Name').type('Nikunjjjj');
        await expect(await page.getByPlaceholder('First Name')).toBeVisible();

        await page.getByPlaceholder('Last Name').type('Basnetjjj');
        await expect(await page.getByPlaceholder('Last Name')).toBeVisible();
        
        await page.getByPlaceholder('name@example.com').type('abc@test.com')
        await expect(await page.getByPlaceholder('Last Name')).toBeVisible();

        await page.getByText('Male', { exact: true }).check()
        await expect(await page.getByText('Male', { exact: true })).toBeChecked();

        await page.getByPlaceholder('Mobile Number').type('981665545')
        await expect(await page.getByPlaceholder('Mobile Number')).toBeVisible();


        await page.locator('#dateOfBirthInput').click()
        await page.locator('div').filter({ hasText: /^JanuaryFebruaryMarchAprilMayJuneJulyAugustSeptemberOctoberNovemberDecember$/ }).getByRole('combobox').selectOption('May')
        
        await page.getByRole('option', { name: 'Choose Thursday, May 4th, 2023' }, { timeout: 5000, visible: true }).click();
         
        await page.getByPlaceholder('Current Address').type('Kaski')
        await page.locator('#state svg')
        await page.getByText('NCR', { exact: true })
        // await expect(await page.getByText('NCR', { exact: true })).toBeVisible();
        await page.locator('div').filter({ hasText: /^Select State$/ }).nth(3).selectOption('NCR')
        

        
    })

    


    
 });

 

 

 
