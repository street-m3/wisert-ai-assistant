import { View, Text, StyleSheet } from "react-native"

const styles = StyleSheet.create({
    viewContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    viewText: {
        fontSize: 24,
        textAlign: 'center'
    }
})

const Homepage = (): JSX.Element => {
    return (
        <View style={styles.viewContainer}>
            <Text style={styles.viewText}>Homepage</Text>
        </View>
    )
}

export default Homepage
