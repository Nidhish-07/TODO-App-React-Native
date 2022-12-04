import React from 'react'
import { StyleSheet } from 'react-native'
import { View, Text, Pressable } from 'react-native'

const GoalItem = (props) => {

    const deleteGoalHandler = () => {
        props.onDeleteGoal(id)
    }
    return (
        <View style={styles.goalItem}>
            <Pressable onPress={props.onDeleteItem.bind(this, props.id)} android_ripple={{ color: "#00784c", borderRadius: 5 }} style={({ pressed }) => (pressed ?? styles.pressedItem)}>

                <Text style={styles.goalText}>{props.text}</Text>
            </Pressable>
        </View>
    )
}

export default GoalItem

const styles = StyleSheet.create({
    goalItem: {
        fontWeight: 'bold',
        fontSize: 16,
        border: 5,
        margin: 4,
        backgroundColor: '#04ba86',
        borderRadius: 12,
    },
    goalText: {
        padding: 8,
        color: '#fff',
    },
    pressedItem: {
        opacity: 0.5
    }
})