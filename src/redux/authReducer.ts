import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { Alert } from "react-native";
import { FormData } from "../components/screens/LoginScreen/LoginScreen.component";
import { auth } from "../InitApp";

const initialState = {
    user:{},
    loading:false,
    success:false,
    error:''
}

const LOGIN_INIT = 'LOGIN_INIT';
const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const LOGIN_ERROR = 'LOGIN_ERROR';
const INITIAL_STATE = 'INITIAL_STATE';

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_INIT:
        return {...state, loading:true};
    case LOGIN_SUCCESS:
        return {...state, loading:false, success:true, user:action.payload};
    case LOGIN_ERROR:
        return {...state, loading:false, success:false, error:action.payload};
    case INITIAL_STATE:
        return {...initialState}
    default:
        return {...state};
  }
};

const fetchInit = () => (
    {type:LOGIN_INIT}
)

const fetchSuccess = payload => ({
    type:LOGIN_SUCCESS,
    payload
})

const fetchError = payload => ({
    type:LOGIN_ERROR,
    payload
})

export const fetchInitialState = () => ({
    type:INITIAL_STATE
})

export const handleLogin = (data:FormData) =>  async dispatch => {
    try {
        dispatch(fetchInit());
        // const res = await signInWithEmailAndPassword(auth,data.email,data.password);
        // dispatch(fetchSuccess(res.user));
    } catch (error:any) {
        Alert.alert('Credenciales inválidas', 'Usuario y/o contraseña incorrectos');
        dispatch(fetchError(error.message));
    }
}

export const handleLogout = () => async dispatch => {
    try {
        dispatch(fetchInit());
        await signOut(auth);
        dispatch(fetchInitialState());
    } catch (error:any) {
        dispatch(fetchError(error.message));
    }
}

export default authReducer