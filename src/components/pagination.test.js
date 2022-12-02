import {Pagination} from "./Pagination";
import {fireEvent, render, screen} from "@testing-library/react";
import React from "react";

describe("Pagination", () => {
    it('should render correctly', () => {
        const component = render(
            <Pagination currentPageNumber={2} numberOfPages={11}></Pagination>
        );
        expect(component.getByText("1")).toBeInTheDocument();
        expect(component.getByText("5")).toBeInTheDocument();
        expect(component.getByText("11")).toBeInTheDocument();
        expect(component.getByText("Next")).toBeInTheDocument();
    })

    it('should call setPage', () => {
        const myMock1 = jest.fn();

        const component = render(
            <Pagination currentPageNumber={2} numberOfPages={11} setCurrentPageCallBack={myMock1}></Pagination>
        );
        expect(myMock1.mock.calls.length).toBe(0);
        fireEvent.click(screen.getByText("Next"))
        expect(myMock1.mock.calls.length).toBe(1);
        fireEvent.click(screen.getByText("Previous"))
        expect(myMock1.mock.calls.length).toBe(2);

    })

})