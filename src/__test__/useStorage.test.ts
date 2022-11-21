import { renderHook } from "@testing-library/react";
import { useStorage } from "hooks/useStorage";

describe(useStorage, () => {
  it("Should add item", () => {
    renderHook(() => {
      const { add } = useStorage();
      add("JEST_TEST", "test-item");
    });
  });
  it("Should get item", () => {
    renderHook(() => {
      const { get } = useStorage();
      const item = get("JEST_TEST", "string");
      expect(item).toEqual("test-item");
    });
  });
  it("Should remove item", () => {
    renderHook(() => {
      const { get, remove } = useStorage();
      remove("JEST_TEST");
      const item = get("JEST_TEST", "string");
      expect(item).toBeNull();
    });
  });
});
