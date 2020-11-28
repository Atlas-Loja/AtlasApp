import styled from "styled-components/native";

export const DashboardMain = styled.View`
  position: absolute;
  background-color: #fbfbfb;
  width: 100%;
  height: 100%;
`;

export const FooterReportButton = styled.TouchableOpacity`
  position: absolute;
  left: 85%;
  right: 0;
  bottom: 20%;
`;

export const Footer = styled.View`
  position: relative;
  flex: 1;
`;

export const BodyText = styled.Text`
  position: absolute;
  top: 320px;
  left: 150px;
  font-weight: bold;
  font-size: 40px;
  color: #162a4c;
`;

export const AtlasButton = styled.TouchableOpacity`
  margin-top: 160%;
  margin-left: 15%;
  width: 70%;
`;

export const AtlasLogo = styled.Image`
  position: absolute;
  flex: 1;
  top: 50px;
  left: 135px;
  height: 150;
  width: 150;
`;
