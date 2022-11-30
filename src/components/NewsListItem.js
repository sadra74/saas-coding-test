import {useDispatch, useSelector} from "react-redux";
import React, {useEffect, useState} from "react";
import {fetchStoryById} from "../state/actions";
import NewsList from "./NewsList";

export function NewsListItem({id}) {
    const dispatch = useDispatch()
    const item = useSelector(state => {
        return state.topStories.find(story => story.id === id);
    })
    const [open, setOpen] = useState(false)
    useEffect(() => {
        dispatch(fetchStoryById(id));
    }, [dispatch, id])
    return <div onClick={() => setOpen(!open)}>
        {item?.title ? item?.title : item?.id}
        {open && <NewsList data={item?.kids}></NewsList>}
    </div>
}