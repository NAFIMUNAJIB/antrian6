import test from "node:test";
import assert from "node:assert/strict";
import sum from "./index.js";

test("fungsi sum harus berjalan dengan benar", async (t) => {
  await t.test("mengembalikan hasil penjumlahan untuk input bilangan positif", () => {
    assert.equal(sum(2, 3), 5);
    assert.equal(sum(10, 5), 15);
    assert.equal(sum(1, 1), 2);
  });

  await t.test("mengembalikan 0 untuk input bilangan negatif", () => {
    assert.equal(sum(-1, 5), 0);
    assert.equal(sum(5, -2), 0);
    assert.equal(sum(-3, -7), 0);
  });

  await t.test("mengembalikan 0 untuk input bukan number", () => {
    assert.equal(sum("2", 3), 0);
    assert.equal(sum(4, "5"), 0);
    assert.equal(sum("a", "b"), 0);
    assert.equal(sum(null, 5), 0);
    assert.equal(sum(undefined, 2), 0);
    assert.equal(sum({}, []), 0);
  });

  await t.test("menangani input angka 0 dengan benar", () => {
    assert.equal(sum(0, 5), 5);
    assert.equal(sum(5, 0), 5);
    assert.equal(sum(0, 0), 0);
  });
});
