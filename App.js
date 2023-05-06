/********************************************************************************************
 * UNIVERSIDADE ESTADUAL DE MONTES CLAROS
 * BACHARELADO EM SISTEMAS DE INFORMAÇÃO
 * 
 * DISCIPLINA: OPTATIVA I - DESENVOLVIMENTO MOBILE
 * 
 * DOCENTE: ME. EDUARDO DINIZ AMARAL
 * DISCENTE: GILENO JÚNIOR FAGUNDES RÊGO (100014889)
 * 
 * ATIVIDADE - ENTREGA DO APP DO MÊS DE ABRIL
********************************************************************************************/


/* Utilizando como base o Stack Navigation, disponível na documentação do React Navigation */
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

/* Importando as Telas criadas */
import TelaBoasVindas from './src/screens/TelaBoasVindas';
import TelaCriarConta from './src/screens/TelaCriarConta';
import TelaEntrarConta from './src/screens/TelaEntrarConta';

const Stack = createNativeStackNavigator();

/*Definindo configurações de tela no Stack Navigator: Não mostar o header, não mostrar a barra de status superior*/
function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false, statusBarHidden: true }}>
        <Stack.Screen name="TelaBoasVindas" component={TelaBoasVindas} />
        <Stack.Screen name="TelaCriarConta" component={TelaCriarConta} />
        <Stack.Screen name="TelaEntrarConta" component={TelaEntrarConta} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

/***********************************************************************************************************
 * REFERÊNCIAS:
 * 
 * ReactNavigation.org - "Hello React Navigation": https://reactnavigation.org/docs/hello-react-navigation
 * 
 * Create Responsive width and height in React Native: https://dev.to/charismaaji/create-responsive-width-and-height-in-react-native-20n5
 * 
***********************************************************************************************************/