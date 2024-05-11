import React, { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../hook'
import { fetchCreatePost, selectPosts } from '../../store/postsSlice'
const Post: React.FC = () => {
    interface post {
        title: string,
        text: string,
        tags: string[]
    }
    const dispatch = useAppDispatch()
    const posts: post[] = useAppSelector(selectPosts)

    const [title, setTitle] = useState('hometable');
    const [text, setText] = useState('большая куча комбинаций');
    const [tags, setTags] = useState("домашнее");


    const post = async (values: post) => {
        const data = await dispatch(fetchCreatePost(values))
        if (!data.payload) {
            return alert("Не удалось отправить")
        }
    }


    useEffect(() => {

        console.log(posts)
    }, [posts])

    return (
        <>
            <input onChange={e => setTitle(e.target.value)} value={title} type="text" />
            <input onChange={e => setText(e.target.value)} value={text} type="text" />
            <input onChange={e => setTags(e.target.value)} value={tags} type="text" />
            <button onClick={() => post({
                text: text,
                title: title,
                tags: tags.split(' ')
            })}>Post</button>
            {posts.map((el, index) =>
                <div key={index} style={{ display: "flex" }}>
                    <div >{el.title}</div>
                    <button>x</button>
                </div>
            )}
        </>
    )
}

export default Post