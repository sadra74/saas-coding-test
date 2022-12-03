import {screen, render, waitFor} from "@testing-library/react";
import NewsList from "./NewsList";
import {Provider} from "react-redux";
import store from "../state/store";

describe("NewsList", () => {
    it('should render', async () => {
        let { container } = render(<Provider store={store}><NewsList></NewsList></Provider>);
        await waitFor(() => {
           expect(container.getElementsByClassName('list-view')[0]).toBeInTheDocument()
        })
    })
})