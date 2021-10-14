import React from "react";
import { render } from "@testing-library/react";

function soma(a: number, b: number): number {
    return a + b;
}

function MeuComponente() {
    return <div>Vazia</div>;
}

test("Deve somar", () => {
    const { getByText } = render(<MeuComponente />);

    expect(getByText("Vazia")).toBeVisible();
});
