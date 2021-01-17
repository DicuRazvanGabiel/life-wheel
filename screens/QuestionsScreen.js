import React from "react";
import { StyleSheet, View, Dimensions, TextInput } from "react-native";
import { getStatusBarHeight } from "react-native-status-bar-height";
import { Text, Button } from "react-native-elements";
import Carousel from "react-native-snap-carousel";

const questionsTemplate = [
    {
        question: "Cat de fericit esti acum cu job-ul pe care il ai?",
        note: 0,
        color: "#dcd6f7",
        category: "Cariera",
    },
    {
        question:
            "Cum apreciezi emotia si implinirea pe care le simti la locul actual de munca?",
        note: 0,
        color: "#54428e",
        category: "Cariera",
    },
    {
        question:
            "Ce nota ti-ai da in legatura cu prezenta ta si cu potentialul de implinirea pe care il are misiunea ta?",
        note: 0,
        color: "#d64933",
        category: "Cariera",
    },

    {
        question:
            "Cat de bine stai acum, cand este vorba de situatia ta financiara?",
        note: 0,
        color: "#4dccbd",
        category: "Bani",
    },
    {
        question:
            "Cum apreciezi veniturile tale curente fata de cat crezi tu ca esti capabil si cat meriti",
        note: 0,
        color: "#4cb944",
        category: "Bani",
    },
    {
        question: "Evalueaza nivelul tau de buna stare financiara?",
        note: 0,
        color: "#dcd6f7",
        category: "Bani",
    },
    {
        question:
            "Cum te vezi din punct de vedere al sanatatii financiare peste 3 ani?",
        note: 0,
        color: "#54428e",
        category: "Bani",
    },
    {
        question:
            "Cum ai descrie calitatea relatiilor tale sentimentale; anterioare si actuale?",
        note: 0,
        color: "#4dccbd",
        category: "Relatii",
    },
    {
        question:
            "Cum ai aprecia calitatea relatiilor cu prietenii, colegii, partenerii de afaceri de pana acum?",
        note: 0,
        color: "#d64933",
        category: "Relatii",
    },
    {
        question: "Unde te vezi din punct de vedere relational peste 1-3 ani?",
        note: 0,
        color: "#54428e",
        category: "Relatii",
    },
    {
        question:
            "Cat de fericit te simti cu starea generala de sanatate si de buna-dispozitie pe care le ai in acest moement?",
        note: 0,
        color: "#54428e",
        category: "Sanatate",
    },
    {
        question:
            "Cat de eficient si productiv esti in stabilirea si indeplinirea sarcinilor si obiectivelor zilnice?",
        note: 0,
        color: "#54428e",
        category: "Recreere",
    },
    {
        question:
            "Ce nota ti-ai da pentru sinceritatea cu care ai raspuns pana acum la intrebarile anterioare?",
        note: 0,
        color: "#54428e",
        category: "Dezvoltare",
    },
];

function QuestionsScreen({ navigation }) {
    const [note, onChangeNote] = React.useState(5);
    const [currentQ, setCurrentQ] = React.useState(0);
    const [questionsState, setQuestionsState] = React.useState(
        questionsTemplate
    );

    const handleOnNext = () => {
        let questions = [...questionsState];
        questions[currentQ].note = note;
        setQuestionsState(questions);
        if (currentQ + 1 <= questions.length - 1) {
            setCurrentQ(currentQ + 1);
        } else {
            navigation.navigate("ResultScreen", { questions });
        }
    };

    _renderItem = ({ item, index }) => {
        return (
            <View
                style={{
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <Text style={{ fontSize: 40 }}>{item}</Text>
            </View>
        );
    };

    return (
        <>
            <View
                style={{
                    height: getStatusBarHeight(),
                    backgroundColor: questionsState[currentQ].color,
                }}
            />
            <View
                style={{
                    ...styles.container,
                    backgroundColor: questionsState[currentQ].color,
                }}
            >
                <View
                    style={{
                        width: "100%",
                        alignItems: "flex-end",
                        margin: 10,
                        marginRight: 40,
                    }}
                >
                    <Text h4 h4Style={{ fontWeight: "bold", color: "white" }}>
                        {questionsState[currentQ].category}
                    </Text>
                </View>
                <View>
                    <Text
                        h2
                        h2Style={{
                            fontWeight: "bold",
                            marginHorizontal: 5,
                            color: "white",
                        }}
                    >
                        {questionsState[currentQ].question}
                    </Text>
                </View>

                <View
                    style={{
                        width: "100%",
                        position: "absolute",
                        top: Dimensions.get("window").height / 2,
                    }}
                >
                    <Carousel
                        data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
                        renderItem={_renderItem}
                        sliderWidth={Dimensions.get("window").width}
                        itemWidth={50}
                        firstItem={4}
                        onSnapToItem={(note) => onChangeNote(note + 1)}
                    />
                </View>

                <View style={{ position: "absolute", bottom: 100 }}>
                    <Button
                        title={
                            currentQ == questionsState.length - 1
                                ? "Rezultat"
                                : "Urmatoarea intrebare"
                        }
                        type="solid"
                        onPress={handleOnNext}
                    />
                </View>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
    },
});

export default QuestionsScreen;
