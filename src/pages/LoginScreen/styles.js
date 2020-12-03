import styled from "styled-components/native";

export const AtlasForm = styled.View`
  position: relative;
  width: 100%;
  height: 25%;
  align-items: center;
  justify-content: center;
`;

export const AtlasFormInput = styled.View`
  width: 80%;
  flex-direction: row;
  margin-top: 30px;
  align-items: center;
  justify-content: center;
  border-color: #707070;
  border-style: solid;
  border-bottom-width: 1.2px;
`;

export const AtlasInput = styled.TextInput`
  flex: 1;
  width: 50%;
  height: 100%;
  padding-left: 10px;
`;

export const DashboardMain = styled.KeyboardAvoidingView`
  flex: 1;
  position: relative;
  background-color: #fbfbfb;
  width: 100%;
  height: 100%;
`;

export const FooterReportButton = styled.TouchableOpacity`
  padding-left: 40%;
`;

export const ForgotPassword = styled.TouchableOpacity`
  position: relative;
  margin-top: 3%;
  margin-left: 47%;
`;

export const AtlasFormFooter = styled.View`
  position: relative;
  width: 100%;
  height: 20%;
  justify-content: center;
  align-items: center;
`;

export const Footer = styled.View`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

export const AtlasButton = styled.TouchableOpacity`
  width: 70%;
`;
