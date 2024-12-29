import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import Images from '../../images/Images';
import {colors, fonts} from '../../utilities/constants';
import CustomModal from '../../components/CustomModal';
import Button from '../../components/Button';
import CustomRadioButton from '../../components/CustomRadioButton';

const Settings = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [selectedLanguage, setSelectedLanguage] = useState<
    string | undefined
  >();

  return (
    <View
      style={{
        flex: 1,
        marginTop: 8,
        backgroundColor: 'white',
      }}>
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          gap: 12,
          padding: 16,
          backgroundColor: colors.PRIMARY,
          alignItems: 'center',
        }}
        onPressIn={() => setOpenModal(true)}>
        <Image source={Images.body.languageIcon} width={100} height={100} />
        <Text style={{fontFamily: fonts.SECONDARY, fontSize: 18}}>
          Select Language
        </Text>
      </TouchableOpacity>
      {openModal && (
        <CustomModal
          isOpen={openModal}
          children={
            <View style={styles.modalStyle}>
              <Text style={{fontFamily: fonts.SECONDARY, fontSize: 20}}>
                Select Language
              </Text>
              <CustomRadioButton
                selectedId={selectedLanguage}
                setSelectedId={setSelectedLanguage}
                fontSize={18}
                textColor="black"
                options={[
                  {
                    id: 'English',
                    label: 'English',
                    value: 'English',
                    borderColor: colors.PRIMARY,
                    color: colors.SECONDARY,
                    size: 16,
                  },
                  {
                    id: 'Arabic',
                    label: 'Arabic',
                    value: 'Arabic',
                    borderColor: colors.PRIMARY,
                    color: colors.SECONDARY,
                    size: 16,
                  },
                ]}
              />
              <Button
                title="Select"
                textColor="white"
                borderColor="transparent"
                backgroundColor={colors.SECONDARY}
                buttonStyle={{width: '100%'}}
                onPressIn={() => setOpenModal(false)}
              />
            </View>
          }
        />
      )}
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({
  modalStyle: {
    backgroundColor: 'white',
    height: 180,
    width: '85%',
    borderRadius: 10,
    padding: 16,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
