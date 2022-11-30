// Find Hacker News API here
// https://github.com/HackerNews/API

// TODO fetch ask stories (https://hacker-news.firebaseio.com/v0/askstories.json)
export function loadTopStories() {
    return (dispatch) => {
        return fetch("https://hacker-news.firebaseio.com/v0/askstories.json")
            .then(response => response.json())
            .then(response=>{
            dispatch({ type: 'topStoryIdsLoaded', payload: response })
            return response;
        })
    };
}

// TODO fetch item by id (https://hacker-news.firebaseio.com/v0/item/<itemId>.json)
export function fetchStoryById(id) {
    return (dispatch) => {
        return fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
            .then(response => response.json())
            .then(response => {
            dispatch({ type: 'storyByIdLoaded', payload: response })
            return response;
        })
    };
}

