import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Platform, ScrollView } from 'react-native';
import { useRouter, usePathname } from 'expo-router';
import { useAuth } from '../context/AuthContext';
import { Ionicons } from '@expo/vector-icons';

const isMobile = Platform.OS === 'ios' || Platform.OS === 'android';

export default function Sidebar() {
  const router = useRouter();
  const pathname = usePathname();
  const { logout } = useAuth();

  const mainLinks = [
    { label: 'Dashboard', route: '/(dashboard)', icon: 'home-outline' },
    { label: 'Inbox', route: '/(dashboard)/inbox', icon: 'mail-outline' },
    { label: 'Employee', route: '/(dashboard)/employee', icon: 'person-outline' },
    { label: 'Reports', route: '/(dashboard)/reports', icon: 'document-text-outline' },
    { label: 'Calendar', route: '/(dashboard)/calendar', icon: 'calendar-outline' },
    { label: 'Observation', route: '/(dashboard)/classroom', icon: 'eye-outline' },
  ];

  const userLinks = [
    { label: 'Profile', route: '/(dashboard)/profile', icon: 'person-circle-outline' },
    { label: 'Settings', route: '/(dashboard)/settings', icon: 'settings-outline' },
  ];

  if (isMobile) {
    return (
      <View style={mobileStyles.bottomNav}>
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={mobileStyles.navContent}
        >
          {mainLinks.map(link => (
            <TouchableOpacity
              key={link.route}
              onPress={() => router.push(link.route)}
              style={[
                mobileStyles.navItem,
                pathname === link.route && mobileStyles.activeNavItem
              ]}
              activeOpacity={0.7}
            >
              <Ionicons 
                name={link.icon} 
                size={20} 
                color={pathname === link.route ? '#fff' : '#8B9DC3'} 
              />
              <Text style={[
                mobileStyles.navText,
                pathname === link.route && mobileStyles.activeNavText
              ]}>
                {link.label}
              </Text>
            </TouchableOpacity>
          ))}
          
          {userLinks.map(link => (
            <TouchableOpacity
              key={link.route}
              onPress={() => router.push(link.route)}
              style={[
                mobileStyles.navItem,
                pathname === link.route && mobileStyles.activeNavItem
              ]}
              activeOpacity={0.7}
            >
              <Ionicons 
                name={link.icon} 
                size={20} 
                color={pathname === link.route ? '#fff' : '#8B9DC3'} 
              />
              <Text style={[
                mobileStyles.navText,
                pathname === link.route && mobileStyles.activeNavText
              ]}>
                {link.label}
              </Text>
            </TouchableOpacity>
          ))}
          
          <TouchableOpacity
            onPress={logout}
            style={mobileStyles.logoutItem}
            activeOpacity={0.7}
          >
            <Ionicons name="log-out-outline" size={20} color="#fff" />
            <Text style={mobileStyles.logoutText}>Logout</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }

  return (
    <View style={webStyles.sidebar}>
      <View style={webStyles.logoSection}>
        <Image 
          source={require('../assets/4.png')} 
          style={webStyles.logo}
          resizeMode="contain"
        />
      </View>

      <View style={webStyles.section}>
        <Text style={webStyles.sectionTitle}>MAIN</Text>
        <View style={webStyles.divider} />
        {mainLinks.map(link => (
          <TouchableOpacity
            key={link.route}
            onPress={() => router.push(link.route)}
            style={[webStyles.link, pathname === link.route && webStyles.activeLink]}
          >
            <Ionicons 
              name={link.icon} 
              size={20} 
              color={pathname === link.route ? '#fff' : '#d1d5db'} 
              style={webStyles.icon}
            />
            <Text style={[webStyles.linkText, pathname === link.route && webStyles.activeText]}>
              {link.label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={webStyles.section}>
        <Text style={webStyles.sectionTitle}>USER</Text>
        <View style={webStyles.divider} />
        {userLinks.map(link => (
          <TouchableOpacity
            key={link.route}
            onPress={() => router.push(link.route)}
            style={[webStyles.link, pathname === link.route && webStyles.activeLink]}
          >
            <Ionicons 
              name={link.icon} 
              size={20} 
              color={pathname === link.route ? '#fff' : '#d1d5db'} 
              style={webStyles.icon}
            />
            <Text style={[webStyles.linkText, pathname === link.route && webStyles.activeText]}>
              {link.label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity onPress={logout} style={[webStyles.link, webStyles.logout]}>
        <Ionicons name="log-out-outline" size={20} color="#fff" style={webStyles.icon} />
        <Text style={[webStyles.linkText, { color: '#fff' }]}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}

// Mobile Styles 
const mobileStyles = StyleSheet.create({
  bottomNav: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#213594',
    paddingBottom: 20, 
    paddingTop: 10,
    borderTopWidth: 1,
    borderTopColor: '#2E4A9B',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: -2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 10,
  },
  navContent: {
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  navItem: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginHorizontal: 4,
    borderRadius: 8,
    minWidth: 70,
  },
  activeNavItem: {
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
  },
  navText: {
    color: '#8B9DC3',
    fontSize: 11,
    fontWeight: '500',
    marginTop: 4,
    textAlign: 'center',
  },
  activeNavText: {
    color: '#fff',
    fontWeight: '600',
  },
  logoutItem: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginHorizontal: 4,
    borderRadius: 8,
    backgroundColor: '#dc2626',
    minWidth: 70,
  },
  logoutText: {
    color: '#fff',
    fontSize: 11,
    fontWeight: '600',
    marginTop: 4,
    textAlign: 'center',
  },
});

// Web Styles
const webStyles = StyleSheet.create({
  sidebar: {
    width: 250,
    backgroundColor: '#213594',
    paddingTop: 20,
    paddingHorizontal: 0,
    height: '100%',
    flexDirection: 'column',
  },
  logoSection: {
    alignItems: 'center',
    paddingVertical: 30,
    paddingHorizontal: 20,
  },
  logo: {
    width: 180,
    height: 120,
  },
  section: {
    paddingHorizontal: 25,
    marginBottom: 40,
  },
  sectionTitle: {
    fontSize: 12,
    color: '#8B9DC3',
    fontWeight: '600',
    letterSpacing: 1,
    marginBottom: 15,
  },
  divider: {
    height: 1,
    backgroundColor: '#2E4A9B',
    marginBottom: 15,
  },
  link: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 15,
    marginBottom: 5,
    borderRadius: 8,
  },
  activeLink: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
  icon: {
    marginRight: 12,
    width: 20,
  },
  linkText: {
    color: '#d1d5db',
    fontSize: 16,
    fontWeight: '500',
  },
  activeText: {
    color: '#fff',
    fontWeight: '600',
  },
  logout: {
    marginTop: 'auto',
    marginBottom: 20,
    marginHorizontal: 25,
    backgroundColor: '#dc2626',
  },
});