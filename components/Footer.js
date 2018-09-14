import React from 'react'
import {
  View,
  Text,
} from 'react-native'
import FilterLink from '../containers/FilterLink'

const Footer = () => (
 <View>
    <Text>
      Show:
      {' '}
    </Text>
    <FilterLink filter="SHOW_ALL">
    <Text>
      All
    </Text>
    </FilterLink>
    <Text>
    {', '}
    </Text>
    <FilterLink filter="SHOW_ACTIVE">
    <Text>
      Active
    </Text>
    </FilterLink>
    <Text>
    {', '}
    </Text>
    <FilterLink filter="SHOW_COMPLETED">
    <Text>
    Completed
    </Text>
    </FilterLink>
  </View>
)

export default Footer