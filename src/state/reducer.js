const initialState = {
    topStoryIds: [],
    topStories: []
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case "topStoryIdsLoaded":
            return {
                ...state,
                topStoryIds: [
                    ...action.payload
                ]
            }
        case "storyByIdLoaded":
            return {
                ...state,
                topStories: [
                    ...state.topStories.filter(story => story.id !== action.payload.id),
                    action.payload
                ]
            }
        default:
            return state;
    }
}
