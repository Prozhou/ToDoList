import React from 'react'
import {
    Text
} from 'react-native'
import { blue } from 'ansi-colors';

const Todo = ({onClick, completed, text}) => (
    <Text
        onPress={onClick}
        style={{
            textDecorationLine: completed ? 'line-through' : 'none',
            color: 'blue',
            width: 200,
            height: 30,
        }}
    >
        {text}
    </Text>
)

export default Todo