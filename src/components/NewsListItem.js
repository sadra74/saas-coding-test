import {useDispatch, useSelector} from "react-redux";
import React, {useCallback, useEffect, useState} from "react";
import {fetchStoryById} from "../state/actions";
import NewsList from "./NewsList";
import * as PropTypes from "prop-types";
import {Icon} from "./Icon";

Icon.propTypes = {
    item: PropTypes.any,
    open: PropTypes.bool
};

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

    return <div>
        {!loading ? (!error ? (<div onClick={() => getKids() ? setOpen(!open) : null}
                                    className="item-container">
            <Icon kids={getKids()} open={open}/>
            <div className="item">{item?.title ?? item?.id}</div>
        </div>) : "An error occurred") : "..."}
        {open && <NewsList data={getKids() ?? []}></NewsList>}
    </div>
}