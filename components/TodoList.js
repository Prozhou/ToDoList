import React from 'react'
import{
    FlatList,
    Text
}from 'react-native'
import Todo from './Todo'


const TodoList = ({ todos, onTodoClick }) => (
    <FlatList
        data={todos}
        renderItem={({item}) => <Todo key ={index} {...todo} onClick={() => onTodoClick(index)} />   
        }
    />
)

export default TodoList