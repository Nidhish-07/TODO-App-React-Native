import React from 'react'
import { Button, StyleSheet, TextInput, View, Modal, Image } from 'react-native'

const GoalInput = (props) => {


    const [enteredGoal, setEnteredGoal] = React.useState("");

    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText);
    };

    const enteredGoalHandler = () => {
        props.addGoalHandler(enteredGoal)
        setEnteredGoal('')
    }
    return (
        <Modal visible={props.visible} animationType="slide">

            <View style={styles.inputContainer} >
                <Image source={require('../assets/images/goal.png')} style={styles.image}></Image>
                <TextInput placeholder="Course Goals" style={styles.textInput} onChangeText={goalInputHandler} value={enteredGoal} />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>

                        <Button title="Add goal" onPress={enteredGoalHandler} />
                    </View>
                    <View style={styles.button}>
                        <Button title="Cancel" onPress={props.onCancel} color="#f31282" />
                    </View>
                </View>
            </View>
        </Modal>
    )
}

export default GoalInput

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#FF9933'
    },
    textInput: {
        width: '90%',
        borderWidth: 2,
        borderColor: '#2d2d2d',
        padding: 16,
        marginRight: 12,
        borderRadius: 12,
        color: '#fff',
        backgroundColor: "#2d2d2d",
        
    },
    image: {
        width: 100,
        height: 100,
        margin: 20
    },
    buttonContainer: {
        flexDirection: 'row',
        marginTop: 16
    },
    button: {
        width: '25%',
        marginHorizontal: 8
    }
})