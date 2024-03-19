import React from 'react';
import { ImageBackground, SafeAreaView, Text, View } from 'react-native';

interface BackgroundImageProps {
    imageUri: string;
    overlayColor?: string;
    children: React.ReactNode;
}

export default function BackgroundImage({ imageUri, children, overlayColor = 'rgba(0,0,0,0.4)' }: BackgroundImageProps) {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ImageBackground source={{ uri: imageUri }} resizeMode="cover" style={{ flex: 1 }}>
                <View
                    style={{
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: overlayColor,
                    }}
                >
                    {children}
                </View>
            </ImageBackground>
        </SafeAreaView>
    );
}
