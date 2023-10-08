import About from '../pages/About'
import Posts from '../pages/Posts'
import PostIdPage from '../pages/PostIdPage'
import Login from '../pages/Login'

export const privatePoures = [
    { path: 'about', element: About },
    { path: 'posts', element: Posts },
    { path: 'posts/:id', element: PostIdPage }
]

export const publicPoures = [
    { path: 'login', element: Login }
]