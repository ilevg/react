import React, { useEffect, useState} from 'react'
import PostService from '../API/PostService'
import {usePosts} from '../hooks/usePosts'
import { useFetching } from '../hooks/useFetching'
import { getPageCount } from '../utils/pages'
import MyModal from '../UI/myModal/MyModal'
import MyButton from '../UI/buttons/MyButton'
import PostForm from '../components/PostForm'
import PostFilter from '../components/PostFilter'
import PostList from '../components/PostList'
import Loader from '../UI/loader/Loader'
// import Pagination from '../UI/pagination/Pagination'



import { useRef } from 'react'
import { useObserver } from '../hooks/useObserver'
import MySelect from '../UI/select/MySelect'


function Posts() { 
    const [posts, setPosts] = useState([])
    const [filter, setFilter] = useState({sort:'', query: ''})
    const [modal, setModal] = useState(false)
    const [totalPages, setTotalPages] = useState(0)
    const [limit, setLimit] = useState(10)
    const [page, setPage] = useState(1)
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)
    const lastElement = useRef()

    const [fetchPosts, isPostsLoading, postError] = useFetching(async (limit, page) => {
        const response = await PostService.getAll(limit, page)
        setPosts([...posts, ...response.data])
        const totalCount = response.headers['x-total-count']
        setTotalPages( getPageCount(totalCount, limit) )
    })

    useObserver(lastElement, page < totalPages, isPostsLoading, () => {
        setPage(page + 1)
    })

    useEffect(() => {
        fetchPosts(limit, page)
    }, [page, limit])

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
        setModal(false)
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    // const changePages = (page) => {
    //     setPage(page)
    // }

    return (
        <div className="App">
            <h1 style={{textAlign: 'center', margin: 20}}>Posts about IT</h1>
            <p style={{textAlign: 'center'}}>Number of posts per page:</p>
            <MySelect
                value={limit}
                onChange={value => setLimit(value)}
                defaultValue='Number of posts per page'
                options={[
                    {value: 5, name: '5'},
                    {value: 10, name: '10'},
                    {value: 20, name: '20'},
                    {value: 50, name: '50'},
                ]}
            />
            <PostFilter 
                filter={filter} 
                setFilter={setFilter}
            />
            
            {postError &&
                <h1 style={{color:'red', fontSize:'30px', textAlign:'center', margin:'30px 0'}}>Error: ${postError}</h1>
            }
            <PostList remove={removePost} posts={sortedAndSearchedPosts} title=''/>
            <div ref={lastElement} style={{height:20, backgroundColor:'red'}}></div>
            {isPostsLoading &&
                <div style={{display: 'flex', justifyContent: 'center', marginTop: '50px'}}>
                    <Loader />
                </div>
            }

            {/* <Pagination
                page={page}
                changePages={changePages}
                totalPages={totalPages}
            /> */}

            <MyButton style={{marginTop: 15}} onClick={() => setModal(true)}>
                Create post
            </MyButton>
            
            <MyModal visible={modal} setVisible={setModal}>
                <PostForm create={createPost} />
            </MyModal> 
        </div>
    )
}
export default Posts
