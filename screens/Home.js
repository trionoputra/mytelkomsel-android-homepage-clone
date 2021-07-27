import React from 'react';
import { SafeAreaView ,ScrollView, ImageBackground,Text,View,Image,FlatList,TouchableNativeFeedback,Dimensions } from 'react-native';
import styles  from '../styles/Style';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ItemViewPackage from '../components/ItemViewPackage'
import ItemViewRecentTransaction from '../components/ItemViewRecentTransaction'
import ItemPagerViewLatest from '../components/ItemPagerViewLatest'
import { Button } from 'react-native-elements';
import { LogBox } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';

export const SLIDER_WIDTH = Dimensions.get("window").width ;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.9)


export default class Home extends React.Component {

  constructor () {
    super();
    this.state = {
      phoneNumber: "081282591210",
      imgDashboard: require('../assets/dashboard_hvc_base_new_red.png'),
      imgLogo: require('../assets/simpati-logo.jpg'),
      notification:100,
      point:100,
      initialName:"TP",
      userName :"Triono Putra",
      balance :"33,569",
      expDate :"28/04/2022",
      currentPackage : [ { id:1, title: 'Internet', amount: '14,46 MB', date: '22/06/2021', }, { id:2, title: 'Multimedia', amount: '949,74 MB', date: '22/06/2021', }, { id:3, title: 'Voice ', amount: '300 Min', date: '22/06/2021', }, { id:4, title: 'SMS ', amount: '100 SMS', date: '22/06/2021', }, { id:5, title: 'Monetery', amount: 'Rp. 0', date: '', }],
      recentTransaction : [ { id:1, title: 'Internet', date: '23 Apr 2021 03:24:06', }, { id:2, title: 'Combo', date: '06 Apr 2021 06:53:06', }],
      latestPromo : [{id:1,type:'Promo'}],
      activeSlide : 0
    };
  }

  componentDidMount(){
    LogBox.ignoreLogs([
      'VirtualizedLists should never be nested',
    ])
  }

  render() {     return ( 
      <SafeAreaView style={styles.container}>
          <ImageBackground  style={styles.dashboarHvc}  source={this.state.imgDashboard}>
            <View style={styles.homeHeaderContainer}>
                 <View style={ styles.homeHeaderInnerContainer }>
                    <Image resizeMode="cover"  style={styles.imgLogo} source={this.state.imgLogo} />
                    <Text style={styles.phoneNumber} >{this.state.phoneNumber}</Text>
                    <Ionicons name="add" size={24} style={styles.iconPlus} />
                 </View>
                 <View style={[styles.homeHeaderInnerContainer,styles.homeHeaderInnerRightContainer]}>
                    <View style={[styles.circleView,styles.boxShadow]}>
                      <Ionicons  name="mail-outline" size={24} style={styles.iconInnerCircle} />
                      <Text style={styles.badge}>{this.state.notification}</Text>
                    </View>
                    <View style={[styles.boxShadow,styles.circleView]}>
                      <Ionicons name="qr-code-outline" size={24} style={styles.iconInnerCircle}  />
                    </View>
                 </View>
            </View>
          </ImageBackground>
            <ScrollView style={styles.scrollViewContainer}>
              <View style={styles.screenContainer}>
                <View style={[styles.boxContainer,styles.boxContainerTopRadius,styles.boxContainerBottomRadius]}>
                    <View style={[styles.flexRow,styles.boxMargin]}>
                      <View style={styles.imgProfile}>
                        <Text style={styles.imgProfileText}>{this.state.initialName}</Text>
                      </View>
                      <View >
                        <Text style={styles.profileText}>{this.state.userName}</Text>
                        <Text style={styles.profileText2}>Rp {this.state.balance}</Text>
                        <Text style={styles.profileText3}>Active Until {this.state.expDate}</Text>
                      </View>
                      <View style={[styles.pointContainer,styles.flexRow]}>
                        <View style={[styles.circleView,styles.circleGray]}>
                          <Ionicons name="medal" size={18} style={styles.iconInnerCircle}  />
                        </View>
                        <View style={[styles.circleView,styles.circleGray,,styles.flexRow,styles.circlePoint]}>
                          <Ionicons name="heart" size={18} style={styles.iconInnerCircle}  />
                          <Text style={styles.profileText}> {this.state.point} POIN</Text>
                        </View>
                      </View>
                    </View>
                    <FlatList styles={styles.currentPackageList}
                      horizontal = {true}
                        data={this.state.currentPackage}
                        renderItem={({item}) => <ItemViewPackage item={item} />}
                        keyExtractor={item => item.id}
                      />
                      <View style={[styles.flexRow,{marginTop:16}]}>
                        <Button type="outline" containerStyle={{flex:1,marginRight:16,marginLeft:16,marginRight:16}} titleStyle={[styles.labelBoldLarge,{color :"black"}]} buttonStyle={[styles.btnHome,styles.btnWhite]} title="Add Credit" />
                        <Button containerStyle={{flex:1,marginRight:16}} buttonStyle={[styles.btnHome,styles.btnRed]} title="Buy Package" titleStyle={[styles.labelBoldLarge,{color :"white"}]}/>
                      </View>
                </View>
                <View style={[styles.boxContainer]}>
                  <View style={[styles.HeaderBoxContainer]}>
                     <View style={[styles.flexRow]}>
                        <Ionicons name="repeat-outline" size={18} style={[styles.iconInnerCircle]}  />
                        <Text style={[styles.textHeaderContainer]} >Recent Transaction</Text>
                        <View style={styles.textSeeAllWrapper}>
                          <TouchableNativeFeedback>
                            <View>
                              <Text style={[styles.textSeeAll]} >See All</Text>
                            </View>
                          </TouchableNativeFeedback>
                        </View>
                      </View>
                     <Text style={[styles.subTextHeaderContainer]} >Repurchase your previous package</Text>
                  </View>
                  <FlatList styles={styles.currentPackageList}
                        data={this.state.recentTransaction}
                        scrollEnabled={false}
                        renderItem={({item}) => <ItemViewRecentTransaction item={item} />}
                        keyExtractor={item => item.id}
                      />
                </View>

                <View style={[styles.boxContainer]}>
                  <View style={[styles.HeaderBoxContainer]}>
                     <View style={[styles.flexRow]}>
                        <Ionicons name="megaphone" size={18} style={[styles.iconInnerCircle]}  />
                        <Text style={[styles.textHeaderContainer]} >Latest from telkomsel</Text>
                     </View>
                  </View>
                  
                  <View style={styles.pagerWrapper}>

                    <Carousel  inactiveSlideOpacity={1}
                      inactiveSlideScale={1} sliderWidth={SLIDER_WIDTH}
                      onSnapToItem={(index) => this.setState({ activeSlide: index }) }
                      itemWidth={ITEM_WIDTH}  data={this.state.recentTransaction} renderItem={({item}) => <ItemPagerViewLatest item={item} />}  />

                  <Pagination
                    paddingVertical = {0}
                    containerStyle = {styles.dotContainerStyle}
                    dotsLength={this.state.recentTransaction.length}
                    activeDotIndex={this.state.activeSlide}
                    dotStyle={styles.dotStyle}
                    inactiveDotStyle={styles.inActiondotStyle}
                    inactiveDotScale={0.8} />
              
                  </View>
                 
                </View>
              </View>
            </ScrollView>
      </SafeAreaView>
    );
  }
}
