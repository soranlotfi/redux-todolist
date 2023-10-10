import {RoutesInterface} from "./Types/App/Routes";
import MainPage from "./Pages/MainPage";
import TodoList from "./Pages/TodoList";
const Routes:RoutesInterface[] = [
    {
        TabId:0,
        type: 'page',
        name: 'AppIntroduce ',
        key: 'introduce',
        route: '/introduce',
        component: <MainPage/>,
    },
    {
        TabId:1,
        type: 'page',
        name: 'TodoListSection',
        key: 'TodoList',
        route: '/todolist',
        component: <TodoList/>,
    },
]

export default Routes;