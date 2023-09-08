import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import { styles } from './style/Styles.js';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default function App() {
  return (
    <View style={styles.container}>
      
      <View style={[
        styles.prop,
        { width: 400,
          height: 150,}
      ]}>
        <View style={[styles.head1]}>
          <Image 
          source={require('./assets/images/facebook.png')} 
          style={{marginLeft: 10,marginRight: 110,marginTop: 25,resizeMode: 'contain',width: 150, height: 50}}
          />
          <Image 
          source={require('./assets/images/fbplus.png')} 
          style={{marginTop: 25,resizeMode: 'contain',width: 40, height: 50}}
          /> 
          <Image 
          source={require('./assets/images/fbsearch.png')} 
          style={{marginTop: 25,resizeMode: 'contain',width: 40, height: 50}}
          />
          <Image 
          source={require('./assets/images/fbchat.png')} 
          style={{marginTop: 25,resizeMode: 'contain',width: 40, height: 50}}
          />          
        </View>

        <View style={[styles.head2]}>
          <Image 
          source={require('./assets/images/prof1.jpg')} 
          style={{borderRadius: 50,marginLeft: 15,marginRight: 10,width: 50, height: 50}}
          />

          <Text style={{fontSize: 18, color: 'black'}}>What's on your mind?</Text>
         
          <Image 
          source={require('./assets/images/fbimage.png')} 
          style={{borderRadius: 50,marginLeft: 110,marginRight: 10,resizeMode:'contain',width: 40, height: 50}}
          />
        </View>
      </View>

      <View style={[
        styles.prop1, 
        {marginTop: 10,
          width: 400,
          height: 200,}
      ]}>

        <View style={[
          styles.storycontainer, 
          {flexDirection: 'column', alignItem: 'center'}
        ]}>
          <ImageBackground
          source={require('./assets/images/prof1.jpg')} 
          style={{borderRadius: 10,overflow: 'hidden',resizeMode:'cover',width: 120, height: 100}}
          > 
          </ImageBackground>

          <Image 
          source={require('./assets/images/fbadd.png')} 
          style={{position: 'absolute',marginLeft: 35,marginTop: 75,resizeMode: 'contain',width: 40, height: 50}}
          /> 
          <Text style={{marginTop: 25,fontSize: 20, fontWeight: 'bold', marginLeft: 25}}>Create a{'\n'}  Story</Text>
        </View>

        <View style={[
          styles.storycontainer, 
          {}
        ]}>
          <ImageBackground
          source={require('./assets/images/story1.jpg')} 
          style={{borderRadius: 10,overflow: 'hidden',resizeMode:'cover',width: 120, height: 180}}
          >
            <Image 
            source={require('./assets/images/prof2.png')} 
            style={{borderWidth: 3,borderColor: '#337CeF',marginTop: 10,borderRadius: 50,marginLeft: 10,marginRight: 10,width: 40, height: 40,resizeMode:'cover'}}
            />
            <Text style={{color: 'white', fontWeight: 'bold', marginLeft: 10, marginTop: 100}}>Arnold James</Text>
          </ImageBackground>
        </View>

        
        <View style={[
          styles.storycontainer, 
          {}
        ]}>
          <ImageBackground
          source={require('./assets/images/story2.jpg')} 
          style={{borderRadius: 10,overflow: 'hidden',resizeMode:'cover',width: 120, height: 180}}
          >
            <Image 
            source={require('./assets/images/prof3.png')} 
            style={{borderWidth: 3,borderColor: '#337CeF',marginTop: 10,borderRadius: 50,marginLeft: 10,marginRight: 10,width: 40, height: 40,resizeMode:'cover'}}
            />
            <Text style={{color: 'white', fontWeight: 'bold', marginLeft: 10, marginTop: 100}}>Joaney</Text>
          </ImageBackground>
        </View>
      </View>

      <View style={[
        styles.prop2, 
        {marginTop: 10,
          width: 400,
          flex: 1}
      ]}>
          <View style={[
            styles.prop1, 
            {marginTop: 10,
              width: 400,
              flex: 1}
          ]}>
            <Image 
            source={require('./assets/images/prof1.jpg')} 
            style={{borderWidth: 3,borderColor: '#337CeF',marginTop: 10,borderRadius: 50,width: 50, height: 50,resizeMode:'cover'}}
            />
            <Text style={{fontSize: 16, marginTop: 15}}><Text style={{fontWeight: 'bold'}}>Hershiel Jay</Text> updated his profile picture{'\n'}4m.</Text>
            <Text style={{fontSize: 17, marginTop: 15}}>...    X</Text>
          </View>
          <Image 
          source={require('./assets/images/prof1.jpg')} 
          style={{borderWidth: 3,borderColor: '#EEEEE0',marginTop: 10,marginBottom: 5,borderRadius: 175,width: 350, height: 350,resizeMode:'cover'}}
          />
      </View>

      <View style={[
        styles.prop3, 
        {marginTop: 2,
          width: 400,
          height: 60,
          flex: 0
          }
      ]}>
        <View style={{flexDirection: 'row'}}>
          <Image 
          source={require('./assets/images/fbhome.png')} 
          style={{borderRadius: 50,marginLeft: 15,marginRight: 10,width: 40, height: 40}}
          />
          <Image 
          source={require('./assets/images/fbwatch.png')} 
          style={{borderRadius: 50,marginLeft: 15,marginRight: 10,width: 40, height: 40}}
          />
          <Image 
          source={require('./assets/images/fbmarket.png')} 
          style={{borderRadius: 50,marginLeft: 15,marginRight: 10,width: 40, height: 40}}
          />
          <Image 
          source={require('./assets/images/fbhelp.png')} 
          style={{borderRadius: 50,marginLeft: 15,marginRight: 10,width: 40, height: 40}}
          />
          <Image 
          source={require('./assets/images/fbbell.png')} 
          style={{borderRadius: 50,marginLeft: 15,marginRight: 10,width: 40, height: 40}}
          />
          <Image 
          source={require('./assets/images/fbmenu.png')} 
          style={{borderRadius: 50,marginLeft: 15,marginRight: 10,width: 40, height: 40}}
          />
        </View>
        <View style={[styles.textfin]}>
          <Text>     Home      </Text>
          <Text>  Video     </Text>
          <Text>Marketplace     </Text>
          <Text>Dating     </Text>
          <Text>Notification     </Text>
          <Text>Menu     </Text>
        </View>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

