import { config } from "@gluestack-ui/config";
import {
  ArrowLeftIcon,
  Button,
  ButtonIcon,
  ButtonText,
  CloseIcon,
  CopyIcon,
  GluestackUIProvider,
  Image,
  Input,
  InputField,
  Text,
  VStack
} from "@gluestack-ui/themed";
import { BarCodeScanner } from "expo-barcode-scanner";
import * as Clipboard from "expo-clipboard";
import { useState } from "react";
import { Alert, useWindowDimensions } from "react-native";
import qrLogo from "./src/assets/logo.png";
import overlay from "./src/assets/overlay.png";

export default function App() {
  return (
    <GluestackUIProvider config={config}>
      <Home />
    </GluestackUIProvider>
  );
}

const Home = () => {
  const { width, height } = useWindowDimensions();
  const [isReading, setIsReading] = useState(false);

  const [scanned, setScanned] = useState("");

  const [showActionsheet, setShowActionsheet] = useState(false);
  const handleClose = () => {
    setShowActionsheet(!showActionsheet);
  };

  const handleBarCodeScanned = ({ type, data }) => {
    if (!showActionsheet) {
      handleClose();
      setScanned(data);
    }
  };

  const handleOpenCamera = async () => {
    try {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      if (status === "granted") {
        setIsReading(true);
      } else {
        Alert.alert(
          "Erro",
          "Permnissão de uso da camera negado, Será necessário liberar!"
        );
      }
    } catch (error) {
      console.log("error handleOpenCamera", error);
    }
  };

  const handleCopyToClipboard = async () => {
    try {
      await Clipboard.setStringAsync(scanned);
    } catch (error) {
      console.log("error handleCopyToClipboard", error);
    }
  };

  return (
    <VStack
      marginTop={24}
      flex={1}
      space={"xl"}
      alignItems="center"
      justifyContent="center"
      position="relative"
    >
      {!isReading ? (
        <>
          <Text fontWeight={"semibold"} fontSize={36} lineHeight={36}>
            Leia o QR Code
          </Text>
          <Text color={"$coolGray400"}>
            Coloque o QR Code no centro para ler o código
          </Text>
          <Image source={qrLogo} size={"2xl"} alt="logo" />
          <Button onPress={handleOpenCamera}>
            <ButtonText>Ler o código</ButtonText>
          </Button>
        </>
      ) : (
        <>
          <BarCodeScanner
            onBarCodeScanned={handleBarCodeScanned}
            style={{
              position: "absolute",
              zIndex: 2,
              width: width * 1.55,
              height,
            }}
          />
          <VStack
            flex={1}
            position="relative"
            style={{
              width,
              height,
              zIndex: 3,
              padding: 24,
            }}
          >
            <Image
              source={overlay}
              style={{
                width,
                height,
                position: "absolute",
                zIndex: 5,
              }}
              alt="overlay"
            />
            <Button
              width={46}
              height={46}
              borderRadius="$full"
              variant="solid"
              bgColor="$coolGray700"
              position="absolute"
              zIndex={10}
              top={24}
              left={24}
              onPress={() => {
                setIsReading(false);
                setScanned("");
                setShowActionsheet(false);
              }}
            >
              <ButtonIcon as={CloseIcon} />
            </Button>

            {showActionsheet && (
              <VStack
                width={width}
                height={height * 0.3}
                padding={24}
                borderTopEndRadius={24}
                borderTopStartRadius={24}
                bottom={-20}
                position="absolute"
                bgColor={"$white"}
                zIndex={20}
                space="md"
              >
                <Text>Resultado</Text>
                <Input
                  variant="outline"
                  size="md"
                  isDisabled={true}
                  isInvalid={false}
                  isReadOnly={true}
                >
                  <InputField
                    type="text"
                    placeholder="Valor lido"
                    value={scanned}
                  />
                </Input>
                <Button onPress={handleCopyToClipboard}>
                  <ButtonIcon as={CopyIcon} />
                  <ButtonText ml={16}>Copiar Link</ButtonText>
                </Button>
                <Button
                  onPress={() => {
                    setIsReading(false);
                    setScanned("");
                    setShowActionsheet(false);
                  }}
                  variant="outline"
                >
                  <ButtonIcon as={ArrowLeftIcon} />
                  <ButtonText ml={16}>Voltar</ButtonText>
                </Button>
              </VStack>
            )}
          </VStack>
        </>
      )}
    </VStack>
  );
};
