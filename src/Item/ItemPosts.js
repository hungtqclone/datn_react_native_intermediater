import { View, Text, Image } from 'react-native'
import React from 'react'

const ItemPosts = (props) => {
    const { data } = props
    const urlApi = `https://datnapi-qelj.onrender.com/`
    // console.log("check data item: ", data)
    return (
        <View>
            <View style={{ flex: 1 }} >
                <View style={{ backgroundColor: "white", flexDirection: 'row', marginVertical: 1 }}>
                    <View style={{ width: 120, height: 120, padding: 15 }}>
                        <Image style={{ width: '100%', height: '100%' }} source={{ uri: urlApi + data.files[0] }} />
                    </View>
                    <View style={{ paddingVertical: 15, flex: 1, marginRight: 30, height: "100%" }}>
                        <Text style={{ color: "black", fontSize: 16 }} numberOfLines={2}>{data.title}</Text>
                        <Text style={{ color: "red", fontWeight: 600, fontSize: 15, position: 'absolute', bottom: 38 }}>{data.price} d</Text>
                        <Text style={{ position: "absolute", bottom: 15 }}>{data.location}</Text>
                    </View>
                </View>

            </View >
        </View>
    )
}

export default ItemPosts