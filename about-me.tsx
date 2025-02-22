import Header from "@/component/header";
import { SafeAreaView, Text } from "react-native";

export default function AboutMe(){
    return (
        <SafeAreaView>
            <Header currPage = "about"/>
            <Text>About Me Screen </Text>
            </SafeAreaView>
    );
}
