import React, {PureComponent} from 'react';
import DropDownPicker from 'react-native-dropdown-picker';

class App extends PureComponent {
  render() {
    return (
      <DropDownPicker
        items={[
          {label: 'Item 1', value: 'item1'},
          {label: 'Item 2', value: 'item2'},
        ]}
        defaultIndex={0}
        containerStyle={{height: 40}}
        onChangeItem={(item) => console.log(item.label, item.value)}
      />
    );
  }
}

export default App;
