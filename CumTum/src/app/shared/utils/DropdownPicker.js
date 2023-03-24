import {View, Text} from 'react-native';
import React from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {constants} from '../constants';

const DropdownPicker = props => {
  const {
    open,
    nameValue,
    listItem,
    setOpen,
    setNameValue,
    setListItem,
    placeholder,
    onChangeItem
  } = props;

  return (
    <DropDownPicker
      open={open}
      value={nameValue}
      items={listItem}
      setOpen={setOpen}
      setValue={setNameValue}
      setItems={setListItem}
      placeholder={placeholder}
      onChangeValue={onChangeItem}
      placeholderStyle={{
        marginLeft: 10,
        color: constants.COLOR.BLACK,
      }}
      textStyle={{
        color: constants.COLOR.WHITE,
      }}
      //multi
      multiple={true}
      min={1}
      max={1}
      // result after choose
      mode="BADGE"
      showBadgeDot={true}
      badgeProps={{
        activeOpacity: 0.5,
      }}
      badgeColors={['red', 'blue', 'orange']}
      badgeDotColors={['yellow', 'grey', 'aqua']}
      //search
      searchable={true}
      searchPlaceholder="Tìm kiếm hoặc chọn lựa tên "
      searchWithRegionalAccents={true}
      searchContainerStyle={{
        borderBottomColor: '#dfdfdf',
      }}
      searchTextInputStyle={{
        color: constants.COLOR.WHITE,
      }}
      searchPlaceholderTextColor={constants.COLOR.WHITE}
      customItemLabelStyle={{
        fontStyle: 'italic',
      }}
      // show type of list item
      listMode="MODAL"
      modalTitle="Select an item"
      bottomOffset={100}
      dropDownDirection="AUTO"
      modalContentContainerStyle={{
        backgroundColor: constants.COLOR.PRIMARY,
      }}
      modalAnimationType="slide"
      //icon
      TickIconComponent={() => (
        <MaterialIcons
          name="done"
          style={{
            marginRight: 4,
          }}
          color={constants.COLOR.WHITE}
          size={20}
        />
      )}
      arrowIconStyle={{
        width: 15,
        height: 15,
        marginRight: 12,
      }}
    />
  );
};

export default DropdownPicker;
