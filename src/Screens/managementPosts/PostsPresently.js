import { View, Text, ActivityIndicator, FlatList } from 'react-native'
import React, { useEffect, useState, useContext } from 'react'
import AxiosInstance from '../../components/helpers/Axiosintance'
import { UserContext } from '../../components/users/UserContext'
import ItemPosts from '../../Item/ItemPosts'
import { useFocusEffect } from '@react-navigation/native'

const PostsPresently = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [posts, setPosts] = useState([])
    const { user } = useContext(UserContext)
    const userId = user._id
    useFocusEffect(
        React.useCallback(() => {
            fetchData()
            return () => {
                console.log("unfocus presently")
            }
        }, [])
    )
    const fetchData = async () => {
        try {
            const postPresently = await AxiosInstance().get(`/api/postnews/user/${userId}`)
            console.log("check data posts hidden: ", postPresently)
            if (postPresently.result) {
                setPosts(postPresently.data)
                setIsLoading(false)
            }
        } catch (error) {
            console.log("fetch data postHidden error: ", error)
            return
        }
    }

    // useEffect(() => {
    //     fetchData()
    // }, []);

    return (
        <View>
            {isLoading ? (
                <ActivityIndicator
                    style={{ marginTop: 20 }}
                    size="large"
                    color="#3498db"
                />
            ) : (

                <FlatList
                    data={posts}
                    renderItem={({ item }) => <ItemPosts data={item} />}
                    horizontal={false}
                    keyExtractor={item => item._id}
                    showsHorizontalScrollIndicator={false}
                />
            )}

        </View>
    )
}

export default PostsPresently