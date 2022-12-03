import {render, waitFor} from "@testing-library/react";
import {Provider} from "react-redux";
import store from "../state/store";
import {NewsListItem} from "./NewsListItem";

describe("NewsListItem", () => {
    it('should render', async () => {
        let { container } = render(<Provider store={store}><NewsListItem id={10}></NewsListItem></Provider>);
        await waitFor(() => {
            expect(container.getElementsByClassName('item-container')[0]).toBeInTheDocument()
        })
    })
})