import styled from "styled-components/native";

interface ButtonProps{
    size: 'full' | 'xl' | 'lg' | 'md' | 'sm';
}

const StyledButton = styled.TouchableOpacity<ButtonProps>`
    height:40px;
    width:${({size}) => {
    switch (size) {
        case 'full':return 100
        case 'xl': return 80
        case 'lg': return 60
        case 'md': return 50
        case 'sm': return 30
        default:return 100
    }}}%;
    border-radius:10px;
    align-items:center;
    justify-content:center;
    margin:10px auto;
`

const StyledText = styled.Text`
    font-size:20px;
`

export const StyledButtonPrimary = styled(StyledButton)`
    background-color: rgb(28,119,248);
`
export const StyledTextPrimary = styled(StyledText)`
    color:white;
`

export const StyledButtonSecondary = styled(StyledButton)`
    background-color:white;
    border-width:2px;
    border-color:rgb(28,119,248);
`

export const StyledTextSecondary = styled(StyledText)`
    color: rgb(28,119,248);
`