import styled from "styled-components/native";
import Modal from 'react-native-modal';

export const StyledView = styled.View`
    width:100%;
    height:50%;
    padding-top:10%;
    padding-horizontal:10%
    background-color:white;
    border-top-end-radius:20px;
    border-top-start-radius:20px;
`

export const StyledModal = styled(Modal)`
    justify-content:flex-end;
    margin:0;
`