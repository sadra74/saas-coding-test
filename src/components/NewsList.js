import React, {useCallback, useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {loadTopStories} from "../state/actions";
import {NewsListItem} from "./NewsListItem";
import {PaginationComponent} from "./PaginationComponent";

function NewsList({data}) {
    const dispatch = useDispatch()
    const topStoryIds = useSelector(state => {
        return state.topStoryIds;
    })
    const [page, setPage] = useState(1)
    useEffect(() => {
        if(!data){
            dispatch(loadTopStories())
        }
    }, [data, dispatch])

    const extractData = useCallback(() => {
        return data ?? topStoryIds;
    }, [data, topStoryIds])

    return <div>
        <ul className="container">
            {extractData().slice((page - 1) * 10, page * 10).map(id => (
                <li key={id}>
                    <NewsListItem id={id}></NewsListItem>
                </li>
            ))}
        </ul>
        <PaginationComponent currentPageNumber={page} numberOfPages={Math.floor(extractData()?.length / 10) + 1} setCurrentPageCallBack={setPage}></PaginationComponent>
    </div>;
}


export default NewsList;
