import {  Image, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import checkImg from "../../assets/check.png"
import { s } from './CardTodo.style'
export default function CardTodo({ todo, onPress }) {
  return (
    <TouchableOpacity onPress={() => onPress(todo)} style={s.card}>
      <Text
        style={[
          s.txt,
          todo.isCompleted && { textDecorationLine: "line-through" },
        ]}
      >
        {todo.title}
      </Text>
      {todo.isCompleted && <Image style={s.img} source={checkImg} />}
    </TouchableOpacity>
  )
}