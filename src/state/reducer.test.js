import reducer  from './reducer'


describe("reducers", () => {
    test('should return the initial state', () => {
        expect(reducer({topStories: [], topStoryIds: []}, { type: undefined })).toEqual({"topStories": [], topStoryIds: []})
    })

    test('should update the state on topStoryIdsLoaded', () => {
        expect(reducer({topStories: [], topStoryIds: []}, {type: "topStoryIdsLoaded", payload: [1,2,3]})).toEqual(
            {topStories: [], topStoryIds: [1, 2, 3]}
        )
    })

    test('should update the state on storyByIdLoaded', () => {
        expect(reducer({topStories: [], topStoryIds: []}, {type: "storyByIdLoaded", payload: {id: 1, title: "title", text: "text"}})).toEqual(
            {topStoryIds: [], topStories: [{id: 1, text: "text", title: "title"}]}
        )
    })

})
