import React, {useState} from 'react';
import {
  SafeAreaView,
  TextInput,
  Text,
  TouchableOpacity,
  FlatList,
} from 'react-native';

import * as S from './styled';

const Item = () => {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleAdd = () => {
    setTasks([...tasks, task]);
    setTask('');
  };

  const handleRenderTask = ({item}) => {
    <Text>{item}</Text>;
  };

  return (
    <SafeAreaView>
      <Text>ToDo List</Text>
      <TextInput
        autoCapitalize="none"
        autoComplete="off"
        autoCorrect={false}
        onChangeText={(text) => setTask(text)}
        value={task}
      />
      <TouchableOpacity onPress={handleAdd}>
        <Text>Add</Text>
      </TouchableOpacity>
      <FlatList
        data={tasks}
        keyExtractor={(item) => item}
        renderItem={handleRenderTask}
      />
    </SafeAreaView>
  );
};

export default Item;
