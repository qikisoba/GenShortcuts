import React, { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../hook'
import { fetchCreatePost, fetchRemovePost, selectPosts } from '../../store/postsSlice'
import { selectShort, disShort } from '../../store/shortSlice'
import { post } from '../../assets/inteface'


const Post: React.FC<{ disable: () => void }> = ({ disable }) => {

    const dispatch = useAppDispatch()
    const posts: post[] = useAppSelector(selectPosts)
    const short = useAppSelector(selectShort)
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');
    const [tags, setTags] = useState('');

    const pst = {
        _id: "",
        text: text,
        title: title,
        tags: tags.split(' ')
    }

    const isDouble = posts.some(item => item.text === text);

    const post = async () => {
        if (title != "" && text != "[]" && tags != "" && !isDouble) {
            const data = await dispatch(fetchCreatePost(pst));
            if (!data.payload) {
                return alert("Не удалось отправить");
            }
            disable()
            dispatch(disShort())
        }
    }

    useEffect(() => {
        setText(JSON.stringify(short))
    }, [posts, short, text])

    return (
        <>
            <input onChange={e => setTitle(e.target.value)} value={title} type="text" />
            <input onChange={e => setTags(e.target.value)} value={tags} type="text" />
            <button onClick={post}>Post</button>
            {posts.map((el, index) =>
                <div key={index} style={{ display: "flex" }}>
                    <div >{el.title}</div>
                    <button onClick={() => dispatch(fetchRemovePost(el._id))}>x</button>
                </div >
            )}
        </>
    )
}

export default Post

