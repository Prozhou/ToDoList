import React from 'react'
import {
    Text
} from 'react-native'

const Todo = ({ onClick, completed, text }) => (
    <Text
        onPress={onclick}
        style={{
            textDecoration: completed ? 'line-through' : 'none'
        }}
    >
        {text}
    </Text>
)

export default Todo