import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, {useState} from 'react'
import { Appbar, useTheme } from 'react-native-paper'
import { Chip , Button} from 'react-native-paper';
import { ComponentNavigationProps, NewsData } from '../utils/type';
import CardItem from '../components/CardItem';


const categories=["Technology", "Sports", "Politics", "Health", "Entertainment", "Business" ]

const API_KEY="pub_215798f6ad395d4270e0613f0f3b36d3b2373"


const Home = (props:ComponentNavigationProps) => {

  const [selectedCat, setSelectedCat] = useState([]);
  const [news, setNews]=useState<NewsData[]>([]);

  const [nextPage, setNextPage]= useState("")

  const handleSelect=(val: string)=>{
    setSelectedCat((prev:string[])=>prev.find(p=>p===val)? prev.filter((cat)=>cat!==val):
    [...prev, val])

  }

  const API_URL=`https://newsdata.io/api/1/news?apikey=${API_KEY}&country=in&language=en${selectedCat.length>0 ? `&category=${selectedCat.join()}`:""} ${nextPage?.length>0 ? `&page=${nextPage}` :""}`
//   const API_URL=`https://newsdata.io/api/1/archive?apikey=${API_KEY}&country=in&language=en${selectedCat.length>0 ?`&category=${selectedCat.join()}`
// :""}`

  const handlePress=async()=>{

    console.log("api", API_URL)

    try{

      await fetch(API_URL).then((res)=>res.json().then(
        (data)=>{
          setNews((prevs)=>[...prevs,...data.results]),
        setNextPage(data.nextPage)})
        
        )

      // console.log("newssssss",news)
    }
    catch(error){
      console.log('errrot',error)

    }


    

  }
  const theme=useTheme()

  // console.log("news",Object.keys(news[0]))
  
  return (
    <View style={styles.container}>
      <Appbar.Header>
        <Appbar.Content title="Home"></Appbar.Content>
      </Appbar.Header>
      <View style={styles.filterContainer}>

        {categories.map((item)=>
        <Chip key={item} mode='outlined' style={styles.chipItem} textStyle={{fontWeight:"400", color:"black", padding:1}}
        showSelectedOverlay
        
        selected={selectedCat.find((cat) => item === cat)? true : false}
        onPress={()=>handleSelect(item)}>
          {item}
        </Chip>)

        }
        <Button style={styles.button} mode='outlined' labelStyle={{fontSize:14, margin:'auto', color:"gray"}} icon={"sync"} onPress={handlePress}
        >Refresh</Button>
      </View>

      <FlatList 
      onEndReached={()=>handlePress()}
      style={styles.flatList}
      data={news} renderItem={({item})=>(<CardItem title={item.title} image_url={item.image_url} description={item.description} 
        navigation={props.navigation}
      />)}/>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
container:{
  flex:1,
},
filterContainer :{
  flexDirection:"row",
  flexWrap:"wrap",
  marginVertical : 10,
  
},
chipItem:{
  marginHorizontal:5,
  marginVertical:5,
  backgroundColor:"#ccc",
  color:"white"

},
button:{
  maxWidth:400,
  padding:0,
  maxHeight:40,
},
flatList:{
  flex:1,
  height:"auto",


}

})