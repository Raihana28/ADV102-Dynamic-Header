import { StyleSheet, View} from "react-native";
import { Link } from "expo-router";


export default function Header ({currPage} : any){
    return (
        <View style={styles.headerContainer}>
        <Link href='/' style={currPage === 'home' ? styles.activeState : styles.inActiveState}>
        Home
        </Link>
        <Link href='/about-me' style={currPage === 'about' ? styles.activeState : styles.inActiveState}>
        About me
        </Link>
        </View>
    )
}

const styles = StyleSheet.create({
    headerContainer: {
        backgroundColor: "black",
        padding:15,
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        gap:10,
        flexDirection: "row",
    },
    inActiveState:{
        color:"white",
    },
    activeState:{
        color: "yellow",
        textDecorationLine: "underline",
    }
})