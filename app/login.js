import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, Platform, Dimensions } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Ionicons } from '@expo/vector-icons';
import { useAuth } from '../context/AuthContext';

const { width, height } = Dimensions.get('window');
const isMobile = Platform.OS === 'ios' || Platform.OS === 'android';

export default function LoginScreen() {
  const { login } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [selectedRole, setSelectedRole] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSignIn = () => {
    if (!selectedRole) {
      alert('Please select your role');
      return;
    }
    if (!username || !password) {
      alert('Please enter username and password');
      return;
    }

    console.log('Sign in pressed', { selectedRole, username, password });

    login(username);
  };

  const getPasswordIcon = () => {
    if (password.length === 0) {
      return "lock-closed-outline";
    } else {
      return showPassword ? "eye-outline" : "eye-off-outline";
    }
  };

  if (isMobile) {
    return (
      <View style={mobileStyles.container}>
        {/* Logo Section */}
        <View style={mobileStyles.logoSection}>
          <View style={mobileStyles.logoContainer}>
            <Image
              source={require('../assets/1.png')}
              style={mobileStyles.logo}
              resizeMode="contain"
            />
            <Image
              source={require('../assets/2.png')}
              style={mobileStyles.logo}
              resizeMode="contain"
            />
            <Image
              source={require('../assets/3.png')}
              style={mobileStyles.logo}
              resizeMode="contain"
            />
          </View>
          <Text style={mobileStyles.title}>EDUCARE HUB</Text>
        </View>

        <View style={mobileStyles.formSection}>
          <Text style={mobileStyles.formTitle}>Sign In</Text>
          
          <View style={mobileStyles.inputGroup}>
            <Text style={mobileStyles.label}>Please select your role</Text>
            <View style={mobileStyles.pickerContainer}>
              <Picker
                selectedValue={selectedRole}
                onValueChange={setSelectedRole}
                style={mobileStyles.picker}
              >
                <Picker.Item label="Select" value="" />
                <Picker.Item label="ECCD Office-in-charge" value="eccd_office" />
                <Picker.Item label="SEED Teacher" value="seed_teacher" />
                <Picker.Item label="Educare Teacher" value="educare_teacher" />
                <Picker.Item label="Parent" value="parent" />
              </Picker>
            </View>
          </View>

          <View style={mobileStyles.inputGroup}>
            <Text style={mobileStyles.label}>Username</Text>
            <View style={mobileStyles.inputContainer}>
              <TextInput
                placeholder="username"
                value={username}
                onChangeText={setUsername}
                style={mobileStyles.inputWithIcon}
                autoCapitalize="none"
                placeholderTextColor="#999"
              />
              <View style={mobileStyles.inputIcon}>
                <Ionicons name="person-outline" size={20} color="#666" />
              </View>
            </View>
          </View>

          <View style={mobileStyles.inputGroup}>
            <Text style={mobileStyles.label}>Password</Text>
            <View style={mobileStyles.inputContainer}>
              <TextInput
                placeholder="password"
                value={password}
                onChangeText={setPassword}
                style={mobileStyles.inputWithIcon}
                secureTextEntry={!showPassword}
                placeholderTextColor="#999"
              />
              <TouchableOpacity 
                style={mobileStyles.inputIcon}
                onPress={() => {
                  if (password.length > 0) {
                    setShowPassword(!showPassword);
                  }
                }}
                activeOpacity={password.length > 0 ? 0.7 : 1}
              >
                <Ionicons 
                  name={getPasswordIcon()}
                  size={20} 
                  color={password.length > 0 ? "#666" : "#999"}
                />
              </TouchableOpacity>
            </View>
          </View>

          <TouchableOpacity style={mobileStyles.forgotPassword} activeOpacity={0.7}>
            <Text style={mobileStyles.forgotPasswordText}>Forgot Password?</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={mobileStyles.signInButton} 
            onPress={handleSignIn}
            activeOpacity={0.8}
          >
            <Text style={mobileStyles.signInButtonText}>Sign in</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.leftSide}>
          <View style={styles.logoContainer}>
            <Image
              source={require('../assets/1.png')}
              style={styles.logo}
              resizeMode="contain"
            />
            <Image
              source={require('../assets/2.png')}
              style={styles.logo}
              resizeMode="contain"
            />
            <Image
              source={require('../assets/3.png')}
              style={styles.logo}
              resizeMode="contain"
            />
          </View>
          <Text style={styles.title}>EDUCARE HUB</Text>
        </View>

        <View style={styles.rightSide}>
          <Text style={styles.formTitle}>Sign In</Text>
          
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Please select your role</Text>
            <View style={styles.pickerContainer}>
              <Picker
                selectedValue={selectedRole}
                onValueChange={setSelectedRole}
                style={styles.picker}
              >
                <Picker.Item label="Select" value="" />
                <Picker.Item label="ECCD Office-in-charge" value="eccd_office" />
                <Picker.Item label="SEED Teacher" value="seed_teacher" />
                <Picker.Item label="Educare Teacher" value="educare_teacher" />
                <Picker.Item label="Parent" value="parent" />
              </Picker>
            </View>
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Username</Text>
            <View style={styles.inputContainer}>
              <TextInput
                placeholder="username"
                value={username}
                onChangeText={setUsername}
                style={styles.inputWithIcon}
                autoCapitalize="none"
                placeholderTextColor="#999"
              />
              <View style={styles.inputIcon}>
                <Ionicons name="person-outline" size={20} color="#666" />
              </View>
            </View>
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Password</Text>
            <View style={styles.inputContainer}>
              <TextInput
                placeholder="password"
                value={password}
                onChangeText={setPassword}
                style={styles.inputWithIcon}
                secureTextEntry={!showPassword}
                placeholderTextColor="#999"
              />
              <TouchableOpacity 
                style={styles.inputIcon}
                onPress={() => {
                  if (password.length > 0) {
                    setShowPassword(!showPassword);
                  }
                }}
                activeOpacity={password.length > 0 ? 0.7 : 1}
              >
                <Ionicons 
                  name={getPasswordIcon()}
                  size={20} 
                  color={password.length > 0 ? "#666" : "#999"}
                />
              </TouchableOpacity>
            </View>
          </View>

          <TouchableOpacity style={styles.forgotPassword} activeOpacity={0.7}>
            <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.signInButton} 
            onPress={handleSignIn}
            activeOpacity={0.8}
          >
            <Text style={styles.signInButtonText}>Sign in</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

// Mobile Styles
const mobileStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  logoSection: {
    alignItems: 'center',
    marginBottom: 40,
  },
  logoContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    gap: 5,
  },
  logo: {
    width: 60,
    height: 60,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1e40af',
    letterSpacing: 1,
    textAlign: 'center',
  },
  formSection: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  formTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 25,
    textAlign: 'center',
  },
  inputGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
    fontWeight: '500',
  },
  pickerContainer: {
    backgroundColor: '#f8f9fa',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#e9ecef',
  },
  picker: {
    height: 50,
    color: '#333',
  },
  inputContainer: {
    position: 'relative',
  },
  inputWithIcon: {
    backgroundColor: '#f8f9fa',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 14,
    paddingRight: 45,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#e9ecef',
  },
  inputIcon: {
    position: 'absolute',
    right: 15,
    top: 15,
  },
  forgotPassword: {
    alignSelf: 'flex-start',
    marginBottom: 25,
  },
  forgotPasswordText: {
    color: '#1e40af',
    fontSize: 14,
    textDecorationLine: 'underline',
  },
  signInButton: {
    backgroundColor: '#1e40af',
    borderRadius: 8,
    paddingVertical: 16,
    alignItems: 'center',
  },
  signInButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

// Web Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 0,
    width: '95%',
    maxWidth: 1200,
    height: '70%',
    minHeight: 600,
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  leftSide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: 60,
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
  },
  logoContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: 40,
    gap: 8,
  },
  logo: {
    width: 120,
    height: 120,
  },
  title: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#1e40af',
    letterSpacing: 2,
    textAlign: 'left',
  },
  rightSide: {
    flex: 1,
    padding: 40,
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
  },
  formTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 30,
    textAlign: 'center',
  },
  inputGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
    fontWeight: '500',
  },
  pickerContainer: {
    backgroundColor: '#f8f9fa',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#e9ecef',
  },
  picker: {
    height: 50,
    color: '#333',
  },
  inputContainer: {
    position: 'relative',
  },
  inputWithIcon: {
    backgroundColor: '#f8f9fa',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 14,
    paddingRight: 45,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#e9ecef',
  },
  inputIcon: {
    position: 'absolute',
    right: 15,
    top: 15,
  },
  forgotPassword: {
    alignSelf: 'flex-start',
    marginBottom: 30,
  },
  forgotPasswordText: {
    color: '#1e40af',
    fontSize: 14,
    textDecorationLine: 'underline',
  },
  signInButton: {
    backgroundColor: '#1e40af',
    borderRadius: 8,
    paddingVertical: 16,
    alignItems: 'center',
  },
  signInButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});