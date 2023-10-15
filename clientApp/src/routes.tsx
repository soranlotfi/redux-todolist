import {RoutesInterface} from "./Types/App/routes.type.ts";
import TodoList from "./Pages/TodoList";
import HomePage from "./Pages/MainPage";
const AppRoutes:RoutesInterface[] = [
    {
        TabId:0,
        type: 'page',
        name: 'homepage ',
        key: 'home',
        route: '/homepage',
        component: <HomePage/>,
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

export default AppRoutes;