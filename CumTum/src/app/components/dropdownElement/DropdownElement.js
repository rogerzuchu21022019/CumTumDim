import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {constants} from '../../shared/constants';
import styles from './StyleDropdown';

const DropdownElement = props => {
  const {
    data,
    value,
    setValue,
    placeholder,
    title,
    placeholderStyle,
    styleBorderWidth,
    style,
    selectedTextStyle,
    stylesLabel,
    itemContainerStyle,
    defaultColor,
    styleTextTitle,
  } = props;

  const [isFocus, setIsFocus] = useState(false);

  const renderLabel = () => {
    if (value || isFocus) {
      return (
        <View style={stylesLabel}>
          <Text
            style={[styleTextTitle && isFocus && {color: constants.COLOR.RED}]}>
            {title}
          </Text>
        </View>
      );
    }
    return null;
  };

  return (
    <View style={styleBorderWidth}>
      {renderLabel()}
      <Dropdown
        style={[style, isFocus && {borderColor: constants.COLOR.RED}]}
        placeholderStyle={placeholderStyle}
        // {styles.placeholderStyle}
        selectedTextStyle={selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        itemContainerStyle={itemContainerStyle}
        iconStyle={styles.iconStyle}
        data={data}
        search
        confirmSelectItem={true}
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={!isFocus ? placeholder : '...'}
        searchPlaceholder="Search..."
        value={value}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={item => {
          setValue(item.value);
          setIsFocus(false);
        }}
        renderLeftIcon={() => (
          <AntDesign
            style={styles.icon}
            color={isFocus ? constants.COLOR.BLUE : defaultColor}
            name="Safety"
            size={20}
          />
        )}
      />
    </View>
  );
};

export default DropdownElement;
