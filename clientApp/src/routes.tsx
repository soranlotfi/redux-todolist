import {RoutesInterface} from "./Types/App/routes.type.ts";
import MainPage from "./Pages/MainPage";
import TodoList from "./Pages/TodoList";
const AppRoutes:RoutesInterface[] = [
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

export default AppRoutes;