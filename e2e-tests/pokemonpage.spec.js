const { test, describe, expect, beforeEach } = require('@playwright/test')

describe('Pokedex', () => {
  beforeEach(async ({ page }) => {
    await page.goto('')
  })

  test('front page can be opened', async ({ page }) => {
    await expect(page.getByText('ivysaur')).toBeVisible()
    await expect(
      page.getByText(
        'Pokémon and Pokémon character names are trademarks of Nintendo.'
      )
    ).toBeVisible()
  })

  test('Particular Pokenmon (pikachu) page can be opened', async ({ page }) => {
    await page.getByRole('link', { name: 'pikachu' }).click()
    await expect(page.getByText('pikachu')).toBeVisible()
    await expect(page.getByText('static')).toBeVisible()
    await expect(page.getByText('lightning rod')).toBeVisible()
  })
})

