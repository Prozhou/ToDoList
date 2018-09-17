import React from 'react'
import {
  View,
  Text,
} from 'react-native'
import FilterLink from '../containers/FilterLink'

const Footer = () => (
 <View style={{flexDirection:'row'}}>
    <FilterLink filter="SHOW_ALL">
      <Text>
        All
      </Text>
    </FilterLink>
    <FilterLink filter="SHOW_ACTIVE">
      <Text>
        Active
      </Text>
    </FilterLink>
    <FilterLink filter="SHOW_COMPLETED">
      <Text>
      Completed
      </Text>
    </FilterLink>
  </View>
)

export default Footer