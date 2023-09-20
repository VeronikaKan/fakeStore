import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Button from '../components/Button'
const Home = () => {

const [input,setInput] = useState('')
  const [list,setList] = useState([])
  const[postId,setPostId] = useState(1)
  const [post,setPost] = useState([])
  useEffect(() => {
    const getData = async() =>{
      const {data} = await axios("https://jsonplaceholder.typicode.com/posts?_limit=20 " )
    setList (data)
    }
    getData()
  
  },[])


//delete запрос через axios
const deteleList = async (id) =>{
  await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
  let newList = list.filter(item => item.id !== id)
  setList(newList)

}
useEffect(() => {
  const getPosts = async () => {
   const {data}= await axios(`https://jsonplaceholder.typicode.com/posts/${postId}`)
  setPost(data) 
  }
  getPosts()
},[postId])


 const handleInput = (e) => {
  setInput(e.target.value)
}

console.log(input);
 
const addList = async () => {
  const config = {
    method:"POST",
    url:"https://jsonplaceholder.typicode.com/posts" ,
    headers:{
      "Content-Type" : "application/json"
    },
    data:JSON.stringify({
      title: input
    })

}
const {data} = await axios (config)
setList([...list,data])
}
const getNextPost = () => {
  setPostId(prev => prev +1)
}
const getPrevPost = () => {
  setPostId(prev => prev - 1)
}
  return (
 <>
 <div className='home'>
<input className='home__input' onInput={handleInput} />
<button onClick={addList}> dsdsdsd</button>


{

  list.map((el) => (

    <div className='home__list'>

      <p>{el.title}</p>

      <p onClick={() => deteleList(el.id)} className='home__btn'>&times;</p>

    </div>

  ))

}

<div>
  <h2>{post?.title}</h2>
  <p>{post?.id}</p>
  <p>{post?.body}</p>
  { postId > 1 ?(
      <Button title = {"Prev"} changePost={getPrevPost}/>
    ):null
  }
   { postId < 10 ?(
      <Button title = {"Next"} changePost={getNextPost}/>
    ):null
  }
</div>
</div>
 </>
  )
}

export default Home