import { expect, test } from "@playwright/test";

test("updates a reservation and confirms it with customer details", async ({
  page,
}) => {
  await page.goto("/");

  await page.getByRole("button", { name: /Court Atlântica/ }).click();
  await page.getByRole("button", { name: /Amanhã 25 AGO/ }).click();
  await page.getByRole("button", { name: "17:30" }).click();

  await expect(page.locator(".summary")).toContainText(
    "Court Atlântica · Amanhã, 25 Ago · 17:30",
  );
  await expect(page.locator(".price")).toContainText("€26");

  await page.getByRole("button", { name: /Continuar/ }).click();
  await expect(page.getByRole("dialog")).toBeVisible();
  await page.getByLabel("Nome").fill("Ana Silva");
  await page.getByLabel("Email").fill("ana@example.com");
  await page.getByRole("button", { name: /Confirmar e pagar/ }).click();

  await expect(page.getByRole("status")).toContainText(
    "Reserva confirmada — Court Atlântica, Amanhã, 25 Ago às 17:30.",
  );
});

test("closes the confirmation modal without submitting the form", async ({
  page,
}) => {
  await page.goto("/");
  await page.getByRole("button", { name: /Continuar/ }).click();
  await page.getByRole("button", { name: "Fechar" }).click();

  await expect(page.getByRole("dialog")).toBeHidden();
  await expect(page.getByRole("status")).toBeHidden();
});
