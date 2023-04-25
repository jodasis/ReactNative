import React from "react";
import { Text } from "react-native";
import PropTypes from "prop-types"

export default function Saludar(props) {
    const {name, lastName} = props
    console.log(props);
    return (
        <Text>Bienvenido, {name} {lastName}</Text>
    );
}

Saludar.defaultProps = {
    name: "Josué",
    lastName: "Quispe"
}

Saludar.propTypes = {
    name: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired
}