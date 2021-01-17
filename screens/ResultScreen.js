import { View, Dimensions } from "react-native";
import { getStatusBarHeight } from "react-native-status-bar-height";
import React from "react";
import { PieChart } from "react-native-chart-kit";
import { Icon } from "react-native-elements";

const categoryColors = {
    Bani: "#00C9A7",
    Cariera: "#845EC2",
    Relatii: "#FF6F91",
    Sanatate: "#008E9B",
    Recreere: "#2C73D2",
    Dezvoltare: "#C34A36",
};

export default function ResultScreen({ route, navigation }) {
    const { questions } = route.params;

    const computeData = (questions) => {
        let data = {};
        let chartData = [];
        questions.map(function (q) {
            if (data[q.category]) {
                data[q.category] = Math.floor(
                    (data[q.category] + parseInt(q.note)) / 2
                );
            } else {
                data[q.category] = parseInt(q.note);
            }
        });

        Object.keys(data).map(function (k) {
            chartData.push({
                name: k,
                note: data[k],
                color: categoryColors[k],
                legendFontColor: "#7F7F7F",
                legendFontSize: 15,
            });
        });

        return chartData;
    };

    return (
        <View style={{ backgroundColor: "white", flex: 1 }}>
            <View
                style={{
                    height: getStatusBarHeight(),
                    backgroundColor: "white",
                }}
            />
            <PieChart
                data={computeData(questions)}
                width={Dimensions.get("window").width}
                height={Dimensions.get("window").height / 3}
                chartConfig={{
                    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                }}
                accessor={"note"}
                backgroundColor={"transparent"}
                paddingLeft={"15"}
                center={[10, 0]}
                absolute
            />
            <View style={{ position: "absolute", right: 5, bottom: 50 }}>
                <Icon
                    raised
                    reverse
                    name="plus"
                    type="font-awesome-5"
                    color="#f50"
                    onPress={() => navigation.replace("QuestionsScreen")}
                />
            </View>
        </View>
    );
}
