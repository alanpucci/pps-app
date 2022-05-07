import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { LoginStackParamList } from '../../../navigation/stacks/LoginStack';
import { Screens } from "../../../navigation/Screens";
import { fetchInitialState, handleLogin, handleRegister } from "../../../redux/authReducer";
import Logo from "../../atoms/Logo/Logo.component";
import LoginController from '../../organisms/LoginController/LoginController.component';
import { StyledView } from "./LoginScreen.styled";
import BackgroundVideo from "../../molecules/BackgroundVideo/BackgroundVideo.component";
import AwesomeButton from "../../atoms/AwesomeButton/Button.component";
import Spinner from "../../atoms/Spinner/Spinner.component";
import { View } from "react-native";
import RegisterController from "../../organisms/RegisterController/RegisterController.component";
import { FC } from "react";
import { useNavigation } from "@react-navigation/native";
import { RouteProp } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { showMessage } from "react-native-flash-message";

type LoginScreenProps = NativeStackScreenProps<LoginStackParamList, Screens.LOGIN>;

export type FormData={
    email:string;
    password:string;
    passwordRepeat?:string;
}

const LoginScreen:FC<LoginScreenProps> = ({navigation}) => {
    const {control, handleSubmit, formState:{errors}, reset, setValue} = useForm<FormData>();
    const dispatch = useDispatch();
    const data:any = useSelector<any>(store => store.auth);
    const [modal, setModal] = useState({signIn:false, signUp:false});

    const handleSignIn = (data:FormData) => {
        dispatch(handleLogin(data));
    }

    const handleSignUp = (data:FormData) => {
        if(data.password!==data.passwordRepeat){
            showMessage({type:"danger", message:"Errpr", description:"Las contraseñas no coinciden"});
            return;
        }
        dispatch(handleRegister(data));
    }

    const handleModal = (name) => {
        reset();
        dispatch(fetchInitialState());
        setModal({...modal, [name]:!modal[name]});
    }

    const handleFastSignIn = (data:FormData) => {
        setValue("email", data.email);
        setValue("password", data.password);
    }

	return (
		<StyledView>
            {data.loading && <Spinner />}
            <BackgroundVideo />
            <Logo />
            <View>
                <AwesomeButton rounded height={60} width={250} progress onPress={()=>handleModal('signIn')}>Iniciar sesión</AwesomeButton>
                <AwesomeButton rounded height={50} width={250} progress onPress={()=>handleModal('signUp')} type="secondary">Registrarse</AwesomeButton>
            </View>
            <LoginController isVisible={modal.signIn} errors={errors} fastSignIn={handleFastSignIn} handleSubmit={handleSubmit(handleSignIn)} closeModal={()=>handleModal('signIn')} control={control} />
            <RegisterController isVisible={modal.signUp} errors={errors} handleSubmit={handleSubmit(handleSignUp)} closeModal={()=>handleModal('signUp')} control={control} />
        </StyledView>
	);
};

export default LoginScreen;
