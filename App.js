import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Button, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {


  const [courseGoals, setCourseGoals] = React.useState([])
  const [modalIsVisible, setModalIsVisible] = React.useState(false)



  const addGoalHandler = (enteredGoalText) => {
    setCourseGoals((prev) => ([...prev, { text: enteredGoalText, id: Math.random() }]))
    endAddGoalHandler()
  }
  const endAddGoalHandler = () => {
    setModalIsVisible(false)
  }

  const deleteItemHandler = (id) => {
    setCourseGoals(currentCourseGoal => (courseGoals.filter(goal => (goal.id !== id))))
  }
  return (
    <React.Fragment>
      <StatusBar style='light' />
      <View style={styles.appContainer}>
        <Button color="#04ba86" title='Add new goal' onPress={() => (setModalIsVisible(true))}></Button>
        {modalIsVisible && <GoalInput addGoalHandler={addGoalHandler} visible={modalIsVisible} onCancel={endAddGoalHandler}></GoalInput>}
        <View style={styles.goalsContainer}>
          <FlatList alwaysBounceVertical={false} data={courseGoals} renderItem={(itemData => (<GoalItem text={itemData.item.text} id={itemData.item.id} onDeleteItem={deleteItemHandler}></GoalItem>))} keyExtractor={(item, index) => (item.id)} />


        </View>

      </View>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    padding: 50,
    flex: 1
  },

  goalsContainer: {
    flex: 5
  },

});
