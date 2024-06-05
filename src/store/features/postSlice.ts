import { PayloadAction, createSlice } from "@reduxjs/toolkit"

interface Post {
  id: string
  description: string
}

interface PostState {
  items: Post[]
}

const initialState: PostState = {
  items: []
}

const PostSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addPost: (state, action: PayloadAction<Post>) => {
      state.items.push(action.payload)
    }
  }
})

export default PostSlice.reducer
export const { addPost } = PostSlice.actions