import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, ScrollView, SafeAreaView, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.logo}>
          <Text style={styles.logoText}>Volunta Zone</Text>
        </View>
        <View style={styles.navList}>
          <Text style={styles.navItem}>Início</Text>
          <Text style={styles.navItem}>Projetos</Text>
          <Text style={styles.navItem}>Sobre</Text>
        </View>
        <View style={styles.loginButton}>
          <TouchableOpacity>
            <Text style={styles.loginButtonText}>Entrar</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.mobileMenuIcon}>
          <TouchableOpacity onPress={toggleMenu}>
            <Image
              source={menuOpen ? require('./assets/close_white_36dp.png') : require('./assets/menu_white_36dp.png')}
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>
      </View>

      {/* Mobile Menu */}
      {menuOpen && (
        <ScrollView style={styles.mobileMenu}>
          <Text style={styles.navItem}>Início</Text>
          <Text style={styles.navItem}>Projetos</Text>
          <Text style={styles.navItem}>Sobre</Text>
          <TouchableOpacity>
            <Text style={styles.loginButtonText}>Se voluntarie aqui!</Text>
          </TouchableOpacity>
        </ScrollView>
      )}

      {/* Main Content */}
      <ScrollView style={styles.content}>
        {/* Informes */}
        <View style={styles.informes}>
          <Image
            source={require('./assets/1.jpg')}
            style={styles.informesImage}
          />
          <Text style={styles.slogan}>
            Onde a solidariedade encontra seu lugar.
          </Text>
          <Text style={styles.need}>
            Veja o local mais próximo de você onde precisamos de voluntariados:
          </Text>
          <View style={styles.mapBox}>
            <Image
              source={require('./assets/map_placeholder.png')}
              style={styles.mapImage}
            />
          </View>
        </View>

        {/* Testimonials */}
        <View style={styles.testimonials}>
          <Text style={styles.sectionTitle}>
            Depoimentos
          </Text>
          <Text style={styles.sectionSubtitle}>
            O que os voluntários falam sobre nós?
          </Text>

          <View style={styles.feedbacks}>
            <View style={styles.feedback}>
              <Image
                source={require('./assets/avatar.png')}
                style={styles.feedbackAvatar}
              />
              <View style={styles.feedbackContent}>
                <Text style={styles.feedbackText}>
                  Juliana
                  <Text style={styles.starRating}>
                    {' '}
                    &#9733;&#9733;&#9733;&#9733;&#9733;
                  </Text>
                </Text>
                <Text>
                  "Participar do Volunta Zone foi uma jornada transformadora, onde pude conhecer pessoas incríveis e contribuir para causas importantes, impactando positivamente a vida dos outros."
                </Text>
              </View>
            </View>

            <View style={styles.feedback}>
              <Image
                source={require('./assets/avatar.png')}
                style={styles.feedbackAvatar}
              />
              <View style={styles.feedbackContent}>
                <Text style={styles.feedbackText}>
                  Jéssica
                  <Text style={styles.starRating}>
                    {' '}
                    &#9733;&#9733;&#9733;&#9733;&#9733;
                  </Text>
                </Text>
                <Text>
                  "O Volunta Zone proporcionou uma experiência incrível de voluntariado, conectando-me diretamente com projetos locais e permitindo-me fazer a diferença na minha comunidade."
                </Text>
              </View>
            </View>
          </View>

          <TouchableOpacity style={styles.btnDefault}>
            <Text style={styles.btnText}>Ver mais avaliações</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c93e8b',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#24252a',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  logo: {
    flex: 1,
    alignItems: 'center',
  },
  logoText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  navList: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  navItem: {
    color: '#fff',
    fontSize: 16,
  },
  loginButton: {
    flex: 1,
    alignItems: 'flex-end',
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
    backgroundColor: '#c93e8b',
  },
  mobileMenuIcon: {
    flex: 1,
    alignItems: 'flex-end',
  },
  icon: {
    width: 36,
    height: 36,
  },
  mobileMenu: {
    backgroundColor: '#c93e8b',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  content: {
    paddingHorizontal: 20,
  },
  informes: {
    marginTop: 20,
  },
  informesImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    marginBottom: 10,
  },
  slogan: {
    fontSize: 20,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 10,
  },
  need: {
    fontSize: 12,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 10,
  },
  mapBox: {
    width: width - 40,
    height: 200,
    backgroundColor: '#fff',
    marginTop: 15,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  mapImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  testimonials: {
    marginTop: 20,
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#c93e8b',
    marginBottom: 10,
    textAlign: 'center',
  },
  sectionSubtitle: {
    fontSize: 18,
    marginBottom: 10,
    textAlign: 'center',
  },
  feedbacks: {
    marginTop: 10,
    alignItems: 'center',
  },
  feedback: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    padding: 12,
    borderRadius: 12,
    marginBottom: 20,
    width: width - 40,
  },
  feedbackAvatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginRight: 20,
  },
  feedbackContent: {
    flex: 1,
  },
  feedbackText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  starRating: {
    color: '#ffc107',
  },
  btnDefault: {
    backgroundColor: '#c93e8b',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 20,
    alignItems: 'center',
  },
  btnText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default App;
