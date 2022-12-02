import {useDispatch, useSelector} from "react-redux";
import React, {useCallback, useEffect, useState} from "react";
import {fetchStoryById} from "../state/actions";
import NewsList from "./NewsList";
import {Icon} from "./Icon";
import '../css/NewsListItem.css'

export function NewsListItem({id}) {
    const dispatch = useDispatch()
    const [loading, setLoading]=useState(true);
    const [error, setError]=useState(false);
    const item = useSelector(state => {
        return state.topStories.find(story => story.id === id);
    })
    const [open, setOpen] = useState(false)
    useEffect(() => {
        dispatch(fetchStoryById(id)).then(_ => {
            setLoading(false)
        }).catch(_ => {
            setLoading(false)
            setError(true)
        });
    }, [dispatch, id])

    const getKids = useCallback(() => {
        return item?.kids;
    }, [item?.kids])

    return <>
        {!loading ? (!error ? (<div onClick={() => getKids() ? setOpen(!open) : null}
                                    className="item-container">
            <Icon kids={getKids()} open={open}/>
            <div className="item">
                <p className="id">{item?.id}</p>
                <h4 className="title">{item?.title}</h4>
                <p className="text">{item?.text?.substring(0,50) + "..."}</p>
            </div>
        </div>) : "An error occurred") : "..."}
        {open && <NewsList ids={getKids() ?? []}></NewsList>}
    </>
}