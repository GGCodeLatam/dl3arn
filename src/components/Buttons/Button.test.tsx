import { fireEvent, render, screen } from "@testing-library/react";
import Button from "./Button";

const ClickEvent = new MouseEvent("click", { bubbles: true, cancelable: true });

describe("Button component", () => {
  describe("Text", () => {
    it("Should work with children", () => {
      render(<Button>text</Button>);
      expect(screen.getByRole("button").textContent).toBe("text");
    });
  });

  describe("Events", () => {
    test("Clicked", () => {
      const onClick = jest.fn();
      render(<Button onClick={onClick}>Hola</Button>);
      fireEvent(screen.getByRole("button"), ClickEvent);
      expect(onClick).toHaveBeenCalled();
    });
    test("Not Clicked", () => {
      const onClick = jest.fn();
      render(<Button onClick={onClick}>click working</Button>);
      expect(onClick).not.toHaveBeenCalled();
    });
  });
});
