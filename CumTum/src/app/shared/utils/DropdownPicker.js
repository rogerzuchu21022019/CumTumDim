import {View, Text} from 'react-native';
import React from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {constants} from '../constants';

const DropdownPicker = props => {
  const {
    openSubMainDish,
    valueSubMainDish,
    listSubMainDish,
    setOpenSubMainDish,
    setValueSubMainDish,
    setListSubMainDish,
    placeholder,
    style,
    colorIconArrow,
    colorCloseIcon,
    colorPlaceholder
  } = props;

  return (
    <DropDownPicker
      style={style}
      open={openSubMainDish}
      value={valueSubMainDish}
      items={listSubMainDish}
      setOpen={setOpenSubMainDish}
      setValue={setValueSubMainDish}
      setItems={setListSubMainDish}
      
      // custom color text
      placeholder={placeholder}
      placeholderStyle={{
        marginLeft: 10,
        color: colorPlaceholder,
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
      closeAfterSelecting={true}
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
      CloseIconComponent={() => (
        <MaterialIcons name="done" color={colorCloseIcon} size={20} />
      )}
      ArrowDownIconComponent={() => (
        <MaterialIcons
          style={{
            marginRight: 10,
          }}
          name="keyboard-arrow-down"
          color={colorIconArrow}
          size={20}
        />
      )}
    />
  );
};

export default DropdownPicker;
