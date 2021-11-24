import React from "react";
import { Text, StyleSheet, View } from "react-native";
import fonts from "../styles/theme/font";

const Typography = ({ style, variant, children }) => {
  const variantStyles = styles[variant];
  return <Text style={{ ...variantStyles, ...style }}>{children}</Text>;
};

Typography.defaultProps = {
  variant: "body",
  style: {},
};

const styles = StyleSheet.create({
  h1: {
    color: "black",
    fontFamily: fonts.bold,
    fontSize: 32,
  },
  h2: {
    color: "rgba(0,0,0,.87)",
    fontFamily: fonts.bold,
    fontSize: 28,
  },
  h3: {
    color: "rgba(0,0,0,.87)",
    fontFamily: fonts.bold,
    fontSize: 24,
  },
  h4: {
    color: "rgba(0,0,0,.87)",
    fontFamily: fonts.bold,
    fontSize: 20,
  },
  h5: {
    color: "rgba(0,0,0,.87)",
    fontFamily: fonts.bold,
    fontSize: 16,
  },
  h6: {
    color: "rgba(0,0,0,.87)",
    fontFamily: fonts.bold,
    fontSize: 14,
  },
  body: {
    color: "rgba(0,0,0,.75)",
    fontFamily: fonts.regular,
    fontSize: 16,
  },
  body2: {
    color: "rgba(0,0,0,.95)",
    fontFamily: fonts.regular,
    fontSize: 14,
  },
});

export default Typography;
