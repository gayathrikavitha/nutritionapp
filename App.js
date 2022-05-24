import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet, TouchableHighlight, TextInput,Image, ScrollView, Dimensions, Linking  } from 'react-native';
import Constants from 'expo-constants';
let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;
export default class App extends Component {
    state = {
        
        BoxProtein: 'Enter Protein Serving Amount',
        BoxVeg: 'Enter Vegetable Seraving Amount',
        BoxFruit: 'Enter Fruit Serving Amount',
        BoxGrain: 'Enter Grain Serving Amount',
        BoxDairy: 'Enter Dairy Serving Amount',
        BoxWater: 'Water Amount',
        feel: 'Enter how you feel, and make sure to include one of the key words "sad", "motivated", "disappointed" in your description.',
        message: 'Press submit for feedback and a workout for today!',
        messageP: '',
        messageV: '',
        messageF: '',
        messageG: '',
        messageD: '',
        messageW: '',
        countP: "",
        countV: "",
        image: 'https://lh3.googleusercontent.com/-mU07uGeF7gE/YKMJqUGVp_I/AAAAAAAAb5o/gvhn1IUmC-sM8u4qogjm9z4jI1PIeR3jACK8BGAsYHg/s0/2021-05-17.jpg?authuser=1',
        countF: "",
        countG: "",
        countD: "",
        countW: "",
        count: '',
        rate: '',
        type: '',
        exercise: "",
        enter: 'block',
        info: 'none',
        
    };
    back = () => this.setState(state => ({
        enter: 'block',
        info: 'none',
    }));
    next = () => this.setState(state => ({
        enter: 'none',
        info: 'block',
    }));
    output = () => {
        if (this.state.BoxProtein<=6.5 ) {
          if(this.state.BoxProtein >= 5 ){
            this.setState({ 
countP: 1,           messageP: 'sufficient protein',
                
            })

          }
          else{
            this.setState({ 
countP: 0,           messageP: 'increase protein intake!',
                
            })
          }
        }
        else{
            this.setState({ 
countP: 0,           messageP: 'decrease protein intake!',
                
            })
        }

        if (this.state.BoxVeg<=3) {
          if(this.state.BoxVeg >= 2 ){
            this.setState({ 
                messageV: 'sufficient veggie!',
                countV: 1,
            })
          }
          else{
            this.setState({ 
countV: 0,           messageV: 'increase veggie intake!',
                
            })
          }
        }
        else{
            this.setState({ 
countV: 0,           messageV: 'decrease veggie intake!',
                
            })
        }

        if (this.state.BoxFruit<=2) {
          if(this.state.BoxFruit>= 1.5 ){
            this.setState({ 
                messageF : 'sufficient fruit!',
                countF: 1,
            })
          }
          else{
            this.setState({ 
countF: 0,           messageF: 'increase fruit intake!',
                
            })
          }
        }
        else{
            this.setState({ 
countF: 0,           messageF: 'decrease fruit intake!',
                
            })
        }

        if (this.state.BoxGrain<=8) {
          if(this.state.BoxGrain >= 5 ){
            this.setState({ 
                messageG: 'sufficient grain!',
                countG: 1,
            })
          }
          else{
            this.setState({ 
countG: 0,           messageG: 'increase grain intake!',
                
            })
          }
        }
        else{
            this.setState({ 
countG: 0,           messageG: 'decrease grain intake!',
                
            })
        }

        if (this.state.BoxDairy==3) {
          
            this.setState({ 
                messageD: 'sufficient dairy!',
                countD: 1,
            })

          
        }
        if (this.state.BoxDairy<3) {
          
            this.setState({ 
                messageD: 'increase dairy intake ',
                countD: 0,
            })

          
        } 
        if (this.state.BoxDairy>3) {
          
            this.setState({ 
                messageD: 'decrease dairy intake ',
                countD: 0,
            })

          
        } 

        if (this.state.BoxWater>=8) {
          
            this.setState({ 
                messageW:'sufficient water!',
                countW: 1,
            })
          
        }
        if (this.state.BoxWater<8) {
          
            this.setState({ 
                messageW: 'increase water intake',
                countW: 0,
            })

        }
        if (this.state.feel.includes("disappointed")){
            this.setState({ 
              type: 'jogging/walking outside',
              exercise: "https://www.runnersworld.com/uk/training/beginners/a30279918/run-walk-plan-complete-beginners/",
                
            })
            
        }
        if (this.state.feel.includes("sad")){
            this.setState({ 
              type: 'yoga',
              exercise: "https://www.yogabasics.com/practice/yoga-for-beginners/",
                
            })
            
        }
        
        if (this.state.feel.includes("motivated")){
            this.setState({ 
              type: 'running',
              exercise: "https://www.healthline.com/health/sprinting-workouts",
                
            })
            
        }
          
     
        
    };

    add = () => {
      this.setState({
            count: Number(this.state.countD) + Number(this.state.countW)+Number(this.state.countF) + Number(this.state.countG) + Number(this.state.countV) + Number(this.state.countP), 
              
        })
        
    };
    rating = () => {
        if (this.state.count==6) {
            
              this.setState({ 
                  message: 'keep up the amazing work!',
                  image: 'https://lh3.googleusercontent.com/-l9fhBGaIUkI/YKJv5TrsitI/AAAAAAAAb28/0Kp6VBRED7AukaQPZEXUawciqOz-CH_tgCK8BGAsYHg/s512/2021-05-17.jpg',
              })

            
          }
      
          if (this.state.count==5) {
            this.setState({ 
                message: 'you can do it, you are almost there',
                image: 'https://lh3.googleusercontent.com/-KVH2mrWnkbA/YKFsZvbDUgI/AAAAAAAAbu8/g6WE1VaNh54z0YjeosBAx0YN40Qt9r7HQCK8BGAsYHg/s512/2021-05-16.jpg',
            })
          }
          if (this.state.count==4) {
            this.setState({ 
                message: 'you can do it you are almost there',
                image: 'https://lh3.googleusercontent.com/-ylRi3mW8q_8/YKFsYIrYGyI/AAAAAAAAbu0/LKaLAPx256cBZ0Pvq3NXidsFyvKukcLtgCK8BGAsYHg/s512/2021-05-16.jpg',
            })
          }
          if (this.state.count==3) {
            this.setState({ 
                message: 'you can do it you are half way there',
                image: 'https://lh3.googleusercontent.com/-OL_QK3y6noo/YKFsWjJst-I/AAAAAAAAbus/twodKbctpwU5NrJwgdHpugSyn9UZdnhlwCK8BGAsYHg/s512/2021-05-16.jpg',
            })
          }
          if (this.state.count==2) {
            this.setState({ 
                message: 'you are getting there',
                image: 'https://lh3.googleusercontent.com/-Y1llv7TDx7A/YKFsVJPnZGI/AAAAAAAAbuk/CfzDdXHk-3sT-egtMJjJbbs5rrMIkattACK8BGAsYHg/s512/2021-05-16.jpg',
            })
          }
          if (this.state.count==1) {
            this.setState({ 
                message: 'you are getting there',
                image: 'https://lh3.googleusercontent.com/-G4pKmpyE5tc/YKFsTn7D8nI/AAAAAAAAbuc/ltpdLvFVsqkpXOpgALi8f4j6Ptwh_M-3QCK8BGAsYHg/s512/2021-05-16.jpg',
            })
          }
          

          
        
          
        
    };
    render() {
        return (
          <View style={styles.container}>
            <View style= {{display: this.state.enter}}>
              <View style={styles.contentContainer}>
                        <Text style={styles.beginTitle}>
                            Nutrition Health Tracker App
                        </Text>
                        <Text style={styles.under}>
                            "lets get healthy!"
                        </Text>
                        <Text style={styles.textFeed}>
                            Gayathri Kavitha
                        </Text>
              </View>
            </View>


            <View style= {{display: this.state.info}}>
              <ScrollView>
                <View style={styles.container}>
                    <View style = {styles.titleBox}>
                        <Text style = {styles.titleText}>
                          Nutrition Tracker
                        </Text>
                    </View>
                    
                    <View style = {styles.containerOne}>
                        <View style = {styles.box}>
                            <Text style = {styles.text}>
                                Protein:
                            </Text>
                        </View>
                        <TextInput style={styles.textBox}
                            multiline ={true}
                            onChangeText={(BoxProtein) => this.setState({BoxProtein})}
                            value={this.state.BoxProtein}
                        />
                        <View style = {styles.box}>
                            <Text style = {styles.textE}>
                                5 to 6.5 oz
                            </Text>
                                              
                        </View>
                        <View style = {styles.box}>
                          <Image
                              source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi03zdFhrCYl7tZTdM2jsgEq9xEuxtOKGMlv7y8JQ7yJSPGI-Np_LqPCeM4XgiOVs_zp9Xvskpwa3tST9HylV1fdg_FQ:https://post.healthline.com/wp-content/uploads/2020/09/fried-eggs-plate-breakfast-protein-1200x628-facebook-1200x628.jpg&usqp=CAU' }}
                              style={{ height: 40, width: 40 }}
                          />
                        </View>                  
                    </View>
                    
                    <View style = {styles.containerOne}>
                        <View style = {styles.box}>
                            <Text style = {styles.text}>
                                Fruit:
                            </Text>
                        </View>  
                        <TextInput style={styles.textBox}
                            multiline ={true}
                            onChangeText={(BoxFruit) => this.setState({BoxFruit})}
                            value={this.state.BoxFruit}
                        />
                        <View style = {styles.box}>
                            <Text style = {styles.textE}>
                                1.5 to 2 cups
                            </Text>
                        </View> 
                        <View style = {styles.box}>
                          <Image
                              source={{ uri: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pasta-salad-horizontal-jpg-1522265695.jpg' }}
                              style={{ height: 40, width: 40 }}
                          />
                        </View>                     
                        
                    </View>
                    <View style = {styles.containerOne}>
                        <View style = {styles.box}>
                            <Text style = {styles.text}>
                                Vegetable:
                            </Text>
                        </View>  
                        <TextInput style={styles.textBox}
                            multiline ={true}
                            onChangeText={(BoxVeg) => this.setState({BoxVeg})}
                            value={this.state.BoxVeg}
                        />
                        <View style = {styles.box}>
                            <Text style = {styles.textE}>
                                2 to 3 cups
                            </Text>

                        </View>  
                        <View style = {styles.box}>
                          <Image
                              source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIdBmM4F06JlTfRC7w-ZSow1NKhEoQ_7rmD7hHQI42_OlVzjI:https://www.healthylittlefoodies.com/wp-content/uploads/2019/02/vegetable-stock.jpg&usqp=CAU' }}
                              style={{ height: 40, width: 40 }}
                          />
                        </View>                     
                        
                    </View>
                    <View style = {styles.containerOne}>
                        <View style = {styles.box}>
                            <Text style = {styles.text}>
                                Grain:
                            </Text>
                        </View>  
                        <TextInput style={styles.textBox}
                            multiline ={true}
                            onChangeText={(BoxGrain) => this.setState({BoxGrain})}
                            value={this.state.BoxGrain}
                        />
                        
                        <View style = {styles.box}>
                            <Text style = {styles.textE}>
                                5 to 8 oz
                            </Text>
                        </View> 
                        <View style = {styles.box}>
                          <Image
                              source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcST8hf0kpWXJ1sIXmC2Nt9Ba63vPO-K64hBN7oWduG82MaMtHK3oE5JseDZGAR7CZpwMC1uUjjl28JMkj1gh9RTN6at:https://health.clevelandclinic.org/wp-content/uploads/sites/3/2013/07/wholeGrainProducts-842797430-770x533-1.jpg&usqp=CAU' }}
                              style={{ height: 40, width: 40 }}
                          />
                        </View>                
                    </View>  
                    <View style = {styles.containerOne}>
                        <View style = {styles.box}>
                            <Text style = {styles.text}>
                                Dairy:
                            </Text>
                        </View>  
                        <TextInput style={styles.textBox}
                            multiline ={true}
                            onChangeText={(BoxDairy) => this.setState({BoxDairy})}
                            value={this.state.BoxDairy}
                        />
                        <View style = {styles.box}>
                            <Text style = {styles.textE}>
                                3 cups
                            </Text>
                        </View>                                        
                        <View style = {styles.box}>
                          <Image
                              source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf8XpsZ0fOtW2K8XT_XicavmmB3Hr_uIoWajz69z6Fo78DG_JHhB8cgi0-UvzPz9W7tJiycQ3p-MOdSaQOBifwCony:https://www.health.harvard.edu/media/content/images/p4_Dairy_MLFeb19_gi911727186.jpg&usqp=CAU' }}
                              style={{ height: 40, width: 40 }}
                          />
                        </View>                
                    </View>

                    <View style = {styles.containerOne}>
                        <View style = {styles.box}>
                            <Text style = {styles.text}>
                                Water:
                            </Text>
                        </View>
                        <TextInput style={styles.textBox}
                            multiline ={true}
                            onChangeText={(BoxWater) => this.setState({BoxWater})}
                            value={this.state.BoxWater}
                        />
                        <View style = {styles.box}>
                            <Text style = {styles.textE}>
                                8 cups or more
                            </Text>
                                              
                        </View>
                        <View style = {styles.box}>
                          <Image
                              source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCKDqPVDf9NXuQxLn68kjiGdGocCTvfCHklLXDH5T3AQM_m0_yTBbt0TFq6RsVigD9pkP2BuDj6Whz0fQSefDOV6Uu2A:https://images.immediate.co.uk/production/volatile/sites/4/2015/09/GettyImages-535639761-ba2bcf0.jpg%3Fquality%3D45%26resize%3D768,574&usqp=CAU' }}
                              style={{ height: 40, width: 40 }}
                          />
                        </View>                  
                    </View>                
                    

                    <View style = {styles.containerb}>
                        <View style = {styles.fatBox}>
                            
                            <Text style = {styles.text}>
                                How do you feel?: 
                            </Text>
                        </View> 
                        <TextInput style={styles.fatTextBox}
                            multiline ={true}
                            onChangeText={(feel) => this.setState({feel})}
                            value={this.state.feel}
                        />
                        
                        <Text style = {styles.textE}>
                                Double click "Submit" then "Rating"
                        </Text>
                        <TouchableHighlight style ={styles.button}
                          onPress={this.output}
                          onPressIn={this.add}
                        
                        >
                          
                            <Text style = {styles.sub}>
                                Submit
                            </Text>
                        
                        </TouchableHighlight>
                        <TouchableHighlight style ={styles.button}
                          onPress={this.add }
                          onPressIn={this.rating}
                        >
                        
                            <Text style = {styles.sub}>
                                Rating
                            </Text>
                        
                        </TouchableHighlight>
                    </View>  
                    <View style = {styles.fatBox}>
                    </View>
                    <View style = {styles.containerThree}>
                      <Text style ={styles.textE}>                        
                        {this.state.messageP}                                              
                        {'\n'}                        
                        {this.state.messageF}                                                 
                        {'\n'}.                      
                        {this.state.messageV}                                                
                        {'\n'}                        
                        {this.state.messageG}                                                
                        {'\n'}                        
                        {this.state.messageD}                                                
                        {'\n'}                        
                        {this.state.messageW}
                        {'\n'}                        
                        {'\n'} 
                      </Text>  
                      <Text style = {styles.textFeed}>                        
                        <Text style ={{color: 'lightgreen', fontWeight: "underline"}}                           
                          onPress = {() => Linking.openURL(this.state.exercise)}>                    
                        {this.state.type}                        
                        </Text>                                          
                          
                      </Text>
                      <Text style = {styles.textFeed}>
                                               
                        
                      </Text>
                      <Text style = {styles.textFeed}>
                      Visit the link to find more information about the workout  
                      </Text>
                      <Image
                          source = {this.state.image}
                          style={{height: 80, width: 250}}
                      />
                      
                      <Text style ={styles.textFeed}>
                        {this.state.message}
                      </Text>
                      <Text style = {styles.titleMs}>
                        Results
                      </Text>





                    </View>
                  
                </View>
              </ScrollView>
            </View>
          
            <View style = {styles.nav}>
              <TouchableHighlight style={styles.click}
                      onPress={this.back}
              >
                <Text style = {styles.sub}>
                  Welcome Page
                </Text>
              </TouchableHighlight>
              <TouchableHighlight style={styles.click}
                      onPress={this.next}
              >
                <Text style = {styles.sub}>
                  Tracker
                </Text>
              </TouchableHighlight>
            </View>
          </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    titleBox: {
        height: 75,
        width: 250,
        justifyContent: 'center',
        textAlign: 'center',
        backgroundColor: "olivedrab",
        borderColor: "black",
        borderWidth: 2,  
        
        marginBottom: 15,
    },
    nav: {
        height: 75,
        width: deviceWidth,
        justifyContent: 'center',
        textAlign: 'center',
        backgroundColor: "olivedrab",
        borderColor: "black",
        borderWidth: 2,  
        flexDirection: 'row',
        marginBottom: 15,
    },
        title: {
        fontSize: deviceHeight/10,
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'darkblue',
    },
    titleText: {
        textAlign: 'center',
        fontSize: 20,
        color: 'black',  
        fontWeight: "bold",
    },
    containerOne: {
        height: 50,
        marginTop: 2,
        flexDirection: 'row',
        
    },
    containerTwo: {
        height: 200,
        marginTop: 10,
        alignItems: 'center',
        flexDirection: 'column',
        
    }, 
    container: {
        height: 400,
        marginTop: 30,
        alignItems: 'center',
        flexDirection: 'column',
        
    },
    containerb: {
        height: 250,
        marginTop: 30,
        alignItems: 'center',
        flexDirection: 'column',
        
    },

    box: {
        width: 70,
        marginLeft: 2,
        textAlign: 'center',
        alignContent: 'center',
        justifyContent: 'center',
    },
    textBox: {
        borderColor: 'black',
        backgroundColor: "beige",
        borderWidth: 1,
        marginLeft: 2,
        marginTop:3,
        marginRight:4,
        width: 100,
        height: 50,

    },
    fatBox: {
        height: 25,
        textAlign: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        flexDirection: 'row',        
    },
    fatTextBox: {
        borderColor: 'black',
        backgroundColor: "beige",
        borderWidth: 1,
        width: 305,
        height: 100, 
    },
    
    text: {
        color: 'forestgreen',
        textAlign: 'center',
        fontSize: 12,
        fontWeight: "bold",   
             
    },
    sub: {
        color: 'beige',
        textAlign: 'center',
        fontWeight: "bold",

        fontSize: 12,
    },     
    textE: {
        color: 'black',
        textAlign: 'left',
        fontSize: 12,
    },     

    containerThree: {
        height: 300,
        marginTop:30,
        marginLeft: 10,
        marginRight: 10,
        alignItems: 'center',
        textAlign: 'center',
        flexDirection: 'column-reverse',
        
    }, 
    textFeed: {
        color: 'green',
        fontSize: 12,
        textAlign: "center",
    },
    titleMs:
    {
        color: 'darkgreen',
        fontWeight: 'bold',
        fontSize: 15,
    },
    contentContainer: {
        height: 5*(deviceHeight/5.5),
        width: deviceWidth,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'beige',
    },
    button: {
        backgroundColor: 'olivedrab',
        width: 60,
        height: 32,
        marginTop:10,
        justifyContent: 'center',        

    },
    beginTitle:{
        color: 'darkgreen',
        fontWeight: 'bold',
        fontSize: 19, 
    },
    under:{
        color: 'green',
        fontWeight: 'bold',
        fontSize: 15, 
    },
    click: {
        backgroundColor: 'olivedrab',
        width: 100,
        height: 42,
        marginTop:10,

        justifyContent: 'center',        

    },

});