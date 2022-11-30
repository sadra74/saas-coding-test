import {useDispatch, useSelector} from "react-redux";
import React, {useEffect, useState} from "react";
import {fetchStoryById} from "../state/actions";
import NewsList from "./NewsList";

export function NewsListItem({id}) {
    const dispatch = useDispatch()
    const [loading, setLoading]=useState(false);
    const [error, setError]=useState(false);
    const item = useSelector(state => {
        return state.topStories.find(story => story.id === id);
    })
    const [open, setOpen] = useState(false)
    useEffect(() => {
        setLoading(true)
        dispatch(fetchStoryById(id)).then(res => {
            setLoading(false)
        }).catch(res => {
            setLoading(false)
            setError(true)
        });
    }, [dispatch, id])
    return <div>
        {!loading ? (!error ? <div className="item" onClick={() => setOpen(!open)}>{item?.title ? item?.title : item?.id}</div> : "An error occurred") : "..."}
        {open && <NewsList data={item?.kids}></NewsList>}
    </div>
}