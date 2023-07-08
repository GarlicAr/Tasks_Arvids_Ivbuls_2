import { Text, View } from "react-native";

interface ScreenUserPictureHooksProps {
  userData: {
    username: string;
    email: string;
    password: string;
  } | null;
}

export function ScreenUserPictureHooks({ userData }: ScreenUserPictureHooksProps) {
  if (!userData) {

    return <Text>Loading...</Text>;
  }

  const { username, email } = userData;

  return (
    <View style={{ flex: 1, alignItems: 'center' }}>
      <Text>{'UserPicture'}</Text>
      <Text>{`Name: ${username}`}</Text>
      <Text>{`Email: ${email}`}</Text>
      <Text>{'Hello!'}</Text>
    </View>
  );
}
