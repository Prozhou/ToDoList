import React from 'react'
import {TouchableOpacity} from 'react-native'

const Link = ({ active, children, onClick }) => (
    <TouchableOpacity
       onPress={onClick}
       disabled={active}
       style={{
           marginLeft: 4,
       }}
    >
      {children}
    </TouchableOpacity>
  )

export default Link