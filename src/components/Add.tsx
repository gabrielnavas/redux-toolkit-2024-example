import { useRef } from "react"
import { useAppDispatch } from "../store/store"
import { addPost } from "../store/features/postSlice"

const Add = () => {
  const name = useRef<string>("")
  const dispatch = useAppDispatch()

  const handleOnClickAdd = () => {
    const newPost = {
      id: Math.floor(Math.random() * 1000).toString(),
      description: name.current
    }
    dispatch(addPost(newPost))
  }

  return (
    <div>
      <input onChange={e => name.current = e.target.value} />
      <button onClick={handleOnClickAdd}>Adicionar</button>
    </div>
  )
}

export default Add