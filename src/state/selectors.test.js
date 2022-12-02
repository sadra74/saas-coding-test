import {selectStoryById, selectTopStoryIds} from "./selectors";

describe("selectors", () => {
    test('should select story by id', () => {
        expect(selectStoryById({topStories: [{id: 2, title: "title"}]}, 2)).toEqual({id: 2, title: "title"});
    })

    test('should not select story by incorrect id', () => {
        expect(selectStoryById({topStories: [{id: 2, title: "title"}]}, 3)).not.toEqual({id: 2, title: "title"});
    })

    test('should select story ids', () => {
        expect(selectTopStoryIds({topStoryIds: [1, 2, 3]})).toEqual([1,2,3]);
    })
});
