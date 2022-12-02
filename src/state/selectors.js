export const selectStoryById = (state, id) => {
    return state.topStories.find(story => story.id === id);
}

export const selectTopStoryIds = state => {
    return state.topStoryIds;
}
