import React, {useCallback, useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {loadTopStories} from "../state/actions";
import {NewsListItem} from "./NewsListItem";
import {PaginationComponent} from "./PaginationComponent";

function NewsList({ids}) {
    const dispatch = useDispatch()
    const fetchedIds = useSelector(state => {
        return state.topStoryIds;
    })
    const [page, setPage] = useState(1)
    useEffect(() => {
        if(!ids){
            dispatch(loadTopStories())
        }
    }, [ids, dispatch])

    const getIds = useCallback(() => {
        return ids ?? fetchedIds;
    }, [ids, fetchedIds])

    return <div>
        <ul className="container">
            {getIds().slice((page - 1) * 10, page * 10).map(id => (
                <li key={id}>
                    <NewsListItem id={id}></NewsListItem>
                </li>
            ))}
        </ul>
        <PaginationComponent currentPageNumber={page} numberOfPages={Math.floor(getIds()?.length / 10) + 1} setCurrentPageCallBack={setPage}></PaginationComponent>
    </div>;
}


export default NewsList;
