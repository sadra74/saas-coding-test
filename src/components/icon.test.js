import {Icon} from "./Icon";
import {render} from "@testing-library/react";

describe("Icon", () => {
    it('should show down arrow', () => {
        const component = render(
            <Icon kids={[1,2,3]} open={true}></Icon>,
        );
        expect(component.getByText("⮟")).toBeInTheDocument();
    })
    it('should show right arrow', () => {
        const component = render(
            <Icon kids={[1,2,3]} open={false}></Icon>,
        );
        expect(component.getByText("⮞")).toBeInTheDocument();
    })
})