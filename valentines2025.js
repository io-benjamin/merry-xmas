import React from 'react';
import { View, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { NavigationButtons } from './pages';
import ValentinesCard from './card';


const Valentines2025 = ({ navigation }) => {
    return (
        <>
            <LinearGradient
                colors={['#FFC0CB', '#FF69B4', '#F08080']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.container}
            >
                <View style={styles.confettiContainer}>
                    <ValentinesCard />
                </View>
            </LinearGradient>

            {/* Navigation buttons */}
            <NavigationButtons navigation={navigation} currentPage="Valentines2025" />
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 20,
        paddingBottom: 20,
    },
    imageContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        marginBottom: 20,
    },

    confettiContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
});

export default Valentines2025;