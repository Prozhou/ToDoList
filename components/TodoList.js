import React from 'react'
import{
    FlatList,
    Text
}from 'react-native'
import Todo from './Todo'


const TodoList = ({ todos, toggleTodo }) => (
    <FlatList
        style={{backgroundColor: 'red', width: 200, height: 300 }}
        data={todos}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => <Todo tag= 'haha' key = {item.id} {...item} onClick={() => toggleTodo(item.id)} />   
        }
    />
)

export default TodoList