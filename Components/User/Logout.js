import {userLogout} from "../../service/user-service";
import { useNavigation } from '@react-navigation/native';
import Toast from "react-native-root-toast";

const Logout = () => {
    const navigation = useNavigation();
    userLogout().then((response) => {
        alert(response.responseMessage)
        navigation.navigate("Home")
    })
}

export default Logout;