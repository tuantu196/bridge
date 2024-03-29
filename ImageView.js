import PropTypes from "prop-types";
import { requireNativeComponent, ViewPropTypes } from "react-native";

var iface = {
  name: "ImageView",
  propTypes: {
    src: PropTypes.string,
    borderRadius: PropTypes.number,
    resizeMode: PropTypes.oneOf(["cover", "contain", "stretch"]),
    ...ViewPropTypes, // include the default view properties
  },
};

export const ImageView = requireNativeComponent("RCTImageView1", iface);
