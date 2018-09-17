import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'
import { View, TextInput,TouchableOpacity, Text } from 'react-native'

const AddTodo = ({ dispatch }) => {
    let input
    let textValue
    return (
      <View>
        <TextInput 
          ref={(node) => input = node}
          onChangeText={(title)=>{textValue=title}}
        />
        <TouchableOpacity
          onPress={() => {
            console.log('111')
            if (!textValue) {
              return
            }
            dispatch(addTodo(textValue))
            input.value = ''
          }}
        >
          <Text>
            Add Todo
          </Text>
        </TouchableOpacity>
      </View>
    )
  }
  
  export default connect()(AddTodo)