import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import Images from '../../images/Images';
import {Image} from 'react-native';
import {colors, fonts, ratings, reviewList} from '../../utilities/constants';
import {ScrollView} from 'react-native-gesture-handler';
import Button from '../../components/Button';
import ReviewModal from '../../components/ReviewModal';
import CustomModal from '../../components/CustomModal';

const Reviews = () => {
  const [openReviewModal, setOpenReviewModal] = useState<boolean>(false);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
        marginTop: 8,
      }}>
      <ScrollView>
        <View style={styles.headerContainer}>
          <View style={{flexDirection: 'row', alignItems: 'center', gap: 6}}>
            <Image source={ratings.logo} style={styles.logo} />
            <View>
              <Text style={styles.logoTitle}>{ratings.title}</Text>
              <View
                style={{flexDirection: 'row', gap: 2, alignItems: 'flex-end'}}>
                <Text>{ratings.stars}</Text>
                <Text style={styles.review}>({ratings.reviews})</Text>
              </View>
            </View>
          </View>
          <Text style={styles.rating}>{ratings.rating}</Text>
        </View>

        <View style={styles.headerBar}>
          <Text style={styles.headerBarTitle}>Today</Text>
          <Text style={styles.headerBarReviewsQuantity}>3 reviews</Text>
        </View>
        <View>
          <FlatList
            data={reviewList}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
              <>
                <View
                  style={{
                    paddingVertical: 16,
                    paddingHorizontal: 16,
                  }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        gap: 8,
                      }}>
                      <Image source={Images.body.profilePic} />
                      <Text>{item.name}</Text>
                    </View>
                    <Text>{item.ratingStars}</Text>
                  </View>
                  <Text style={{marginTop: 8}}>{item.reviewDescription}</Text>
                </View>
                {!(parseInt(item.id) === reviewList.length) ? (
                  <View
                    style={{
                      height: 1,
                      backgroundColor: '#EBEBEB',
                      width: '100%',
                    }}></View>
                ) : null}
              </>
            )}
          />
        </View>
        <View style={styles.headerBar}>
          <Text style={styles.headerBarTitle}>Friday</Text>
          <Text style={styles.headerBarReviewsQuantity}>2 reviews</Text>
        </View>
        <View>
          <FlatList
            data={reviewList}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
              <>
                <View
                  style={{
                    paddingVertical: 16,
                    paddingHorizontal: 16,
                  }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        gap: 8,
                      }}>
                      <Image source={Images.body.profilePic} />
                      <Text>{item.name}</Text>
                    </View>
                    <Text>{item.ratingStars}</Text>
                  </View>
                  <Text style={{marginTop: 8}}>{item.reviewDescription}</Text>
                </View>
                {!(parseInt(item.id) === reviewList.length) ? (
                  <View
                    style={{
                      height: 1,
                      backgroundColor: '#EBEBEB',
                      width: '100%',
                    }}></View>
                ) : null}
              </>
            )}
          />
        </View>
      </ScrollView>
      <Button
        title="+"
        onPressIn={() => setOpenReviewModal(true)}
        borderColor="transparent"
        textColor={`${colors.SECONDARY}`}
        style={{
          position: 'absolute',
          bottom: 32,
          right: 20,
          paddingVertical: 3,
          paddingHorizontal: 12,
        }}
        textStyle={{fontWeight: '700', fontSize: 22}}
      />
      <CustomModal isOpen={openReviewModal}>
        <ReviewModal setOpenReviewModal={setOpenReviewModal} />
      </CustomModal>
    </View>
  );
};

export default Reviews;

const styles = StyleSheet.create({
  headerContainer: {
    paddingHorizontal: 16,
    paddingVertical: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logo: {
    width: 69,
    height: 61,
  },
  logoTitle: {
    fontSize: 20,
    fontFamily: fonts.SECONDARY,
    color: 'black',
  },
  review: {
    fontFamily: fonts.SECONDARY,
    fontSize: 12,
    color: 'black',
  },
  rating: {
    fontFamily: fonts.TERTIARY,
    fontSize: 34,
    color: colors.SECONDARY,
  },
  headerBar: {
    backgroundColor: colors.SECONDARY,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 6,
  },
  headerBarTitle: {
    fontFamily: fonts.SECONDARY,
    fontSize: 22,
    color: 'white',
  },
  headerBarReviewsQuantity: {
    fontFamily: fonts.PRIMARY,
    color: colors.PRIMARY,
    fontSize: 14,
  },
});
