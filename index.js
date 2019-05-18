/**
 * @format
 */

import { AppRegistry } from "react-native";

import App from "./App";
// import App from "./Components/Login/login";

// import App from "./Components/Login/Signup";
import { name as appName } from "./app.json";

AppRegistry.registerComponent(appName, () => App);
