import {
  DrawerContentScrollView,
  DrawerItem
} from "@react-navigation/drawer";

import { useNavigation } from "@react-navigation/native";
function ComponentDrawer(props) {
  const navigation = useNavigation();

  return <DrawerContentScrollView>
    <DrawerItem label={"Settings"} onPress={()=>{
      //@ts-ignore
      navigation.navigate("ScreenSettings");
    }}/>
  </DrawerContentScrollView>
}

export default ComponentDrawer;
