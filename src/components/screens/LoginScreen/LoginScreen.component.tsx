import { StackNavigationProp } from "@react-navigation/stack";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { LoginStackParamList } from '../../../navigation/stacks/LoginStack';
import { Screens } from "../../../navigation/Screens";
import { fetchInitialState, handleLogin } from "../../../redux/authReducer";
import Logo from "../../atoms/Logo/Logo.component";
import LoginController from '../../organisms/LoginController/LoginController.component';
import InvalidCredentialsModal from '../../organisms/InvalidCredentialsModal/InvalidCredentialsModal.component';
import { StyledView } from "./LoginScreen.styled";
import BackgroundVideo from "../../molecules/BackgroundVideo/BackgroundVideo.component";
import AwesomeButton from "../../atoms/AwesomeButton/Button.component";
import Spinner from "../../atoms/Spinner/Spinner.component";

// type LoginScreenProps = StackNavigationProp<LoginStackParamList, Screens.LOGIN>;

export type FormData={
    email:string;
    password:string;
}

const LoginScreen = () => {
    const {control, handleSubmit, formState:{errors}, reset} = useForm<FormData>();
    const dispatch = useDispatch();
    const data:any = useSelector<any>(store => store.auth);
    const [signIn, setSignIn] = useState(false);

    const handleSignIn = (data:FormData) => {
        dispatch(handleLogin(data));
    }
    console.log(data);
    const handleInitialState = () => {
        reset();
        dispatch(fetchInitialState());
        setSignIn(true)
    }
 
	return (
		<StyledView>
            {data.loading && <Spinner />}
            <BackgroundVideo />
            {/* <InvalidCredentialsModal isVisible={!!data.error} onPress={handleInitialState} /> */}
            <Logo />
            <AwesomeButton rounded progress title="Iniciar sesión" onPress={handleInitialState} />
            <LoginController isVisible={signIn} errors={errors} handleSubmit={handleSubmit(handleSignIn)} setIsVisible={setSignIn} control={control} />
        </StyledView>
	);
};

export default LoginScreen;
