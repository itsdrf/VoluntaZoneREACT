      import React from "react";
      import { StyleSheet, Text, ScrollView, View, Image } from "react-native";
      import { NavigationContainer } from "@react-navigation/native";
      import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
      import { Ionicons } from "@expo/vector-icons";

     
      function TelaPerfil() {
        return (
          <ScrollView style={styles.scrollView}>
            <View style={styles.container}>
              <Image
                source={require("./assets/minha-foto.jpg")}
                style={styles.fotoPerfil}
              />
              <Text style={styles.titulo}>Informações de Perfil</Text>
              <Text style={styles.texto}>
                <Text style={styles.textoNegrito}>Nome:</Text> Débora Ramos figueirôa
              </Text>
              <Text style={styles.texto}>
                <Text style={styles.textoNegrito}>Telefone:</Text> (81) 98952-6742
              </Text>
              <Text style={styles.texto}>
                <Text style={styles.textoNegrito}>E-mail:</Text> itsdrf@gmail.com
              </Text>
              <Text style={styles.texto}>
                <Text style={styles.textoNegrito}>Cidade:</Text> Recife
              </Text>
              <Text style={styles.texto}>
                <Text style={styles.textoNegrito}>Estado:</Text> Pernambuco
              </Text>
              <Text style={styles.texto}>
                <Text style={styles.textoNegrito}>Idade:</Text> 21 Anos
              </Text>
            </View>
          </ScrollView>
        );
      }

    
      function TelaExperiencia() {
        return (
          <ScrollView style={styles.scrollView}>
            <View style={styles.container}>
              <Text style={styles.titulo}>Experiência Profissional</Text>
              <Text style={styles.texto}>
                <Text style={styles.textoNegrito}>Empresa:</Text> NTT DATA Brasil
              </Text>
              <Text style={styles.texto}>
                <Text style={styles.textoNegrito}>Cargo:</Text> Assistente de testes
              </Text>
              <Text style={styles.texto}>
                <Text style={styles.textoNegrito}>Período:</Text> Outubro 2023 - até o momento
              </Text>
            </View>
          </ScrollView>
        );
      }

      
      function TelaEscolaridade() {
        return (
          <ScrollView style={styles.scrollView}>
            <View style={styles.container}>
              <Text style={styles.titulo}>Escolaridade</Text>
              <Text style={styles.texto}>
                <Text style={styles.textoNegrito}>Ensino Superior (Cursando)</Text>
              </Text>
              <Text style={styles.texto}>Análise e Desenvolvimento de Sistemas</Text>
              <Text style={styles.texto}>Faculdade SENAC PE - 3º Período</Text>

              <Text style={styles.titulo}>Certificações</Text>
              <Text style={styles.texto}>
                - Programação FrontEnd{"\n"}
                Senai São Paulo - 2023{"\n"}
                - Curso Básico de agilidade para o gerenciamento de                 projetos{"\n"}
                Project Management Institute Pernambuco - 2023{"\n"}
                          - BDD e Java{"\n"}
                          Alura - 2024{"\n"}
                          - Selenium: Teste automatizados com Java{"\n"}
                          Alura - 2024{"\n"}
                          - Inglês avançado
                        </Text>
                      </View>
                    </ScrollView>
                  );
                }

                // Estilos
                const styles = StyleSheet.create({
                  scrollView: {
                    flex: 1,
                    backgroundColor: "#f8f8f8",
                  },
                  container: {
                    padding: 20,
                  },
                  titulo: {
                    fontSize: 20,
                    fontWeight: "bold",
                    marginBottom: 10,
                  },
                  texto: {
                    marginBottom: 5,
                  },
                  textoNegrito: {
                    fontWeight: "bold",
                  },
                  fotoPerfil: {
                    width: 150,
                    height: 150,
                    borderRadius: 75,
                    marginBottom: 20,
                    alignSelf: "center",
                  },
                });

                // Navegação por tabs
                const Tab = createBottomTabNavigator();

                export default function App() {
                  return (
                    <NavigationContainer>
                      <Tab.Navigator
                        screenOptions={({ route }) => ({
                          tabBarIcon: ({ focused, color, size }) => {
                            let iconName;
                            switch (route.name) {
                              case "Perfil":
                                iconName = focused ? "person" : "person-outline";
                                break;
                              case "Experiência":
                                iconName = focused ? "briefcase" : "briefcase-outline";
                                break;
                              case "Escolaridade":
                                iconName = focused ? "school" : "school-outline";
                                break;
                              default:
                                iconName = "ios-information-circle";
                            }
                            return <Ionicons name={iconName} size={size} color={color} />;
                          },
                        })}
                        tabBarOptions={{
                          activeTintColor: "#008080",
                          inactiveTintColor: "gray",
                          style: {
                            backgroundColor: "#f8f8f8",
                            borderTopWidth: 0,
                          },
                        }}
                      >
                        <Tab.Screen name="Perfil" component={TelaPerfil} />
                        <Tab.Screen name="Experiência" component={TelaExperiencia} />
                        <Tab.Screen name="Escolaridade" component={TelaEscolaridade} />
                      </Tab.Navigator>
                    </NavigationContainer>
                  );
                }