import {
  DrawerContentScrollView,
  DrawerItem
} from "@react-navigation/drawer";

import { useNavigation } from "@react-navigation/native";
import { strings } from "../utils/strings";
function ComponentDrawer(props) {
  const navigation = useNavigation();

  return (<DrawerContentScrollView>
    <DrawerItem label={strings.settings_title} onPress={()=>{
      //@ts-ignore
      navigation.navigate("ScreenSettings");
    }}/>
  </DrawerContentScrollView>)
}

export default ComponentDrawer;
