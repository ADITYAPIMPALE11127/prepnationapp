import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Card, Text } from "react-native-paper";
import FontAwesome from "@expo/vector-icons/FontAwesome";

const CustomCard = ({
    icon,
    text,
    onPress,
    backgroundColor = "#fff",
    iconColor = "black"
}) => {
    return (
        <Card style={[styles.card, { backgroundColor }]}>
            <View style={styles.content}>

                <Text style={styles.text}>{text}</Text>


                <FontAwesome name={icon} size={64} color={iconColor} style={styles.icon} />
            </View>


            <TouchableOpacity onPress={onPress} style={styles.arrowButton}>
                <FontAwesome name="arrow-right" size={36} color="white" />
            </TouchableOpacity>
        </Card>
    );
};

const styles = StyleSheet.create({
    card: {
        width: 420,
        height: 220,
        padding: 10,
        marginVertical: 10,
        borderRadius: 20,
        marginLeft: 10,
    },
    content: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    text: {
        fontSize: 26,
        fontWeight: "bold",
    },
    icon: {
        marginRight: 40,
    },
    arrowButton: {
        position: "absolute",
        top: 120,
        right: 15,
        backgroundColor: "#007BFF",
        padding: 5,
        borderRadius: 50,
    },
});

export default CustomCard;
