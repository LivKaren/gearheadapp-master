import { Button, Surface, Appbar, TextInput, Title } from "react-native-paper";
import { styles } from "../config/styles";
import { View, ScrollView, Image, Dimensions, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { useState, useRef, useEffect } from "react";

export default function MenuScreen({ navigation }) {
    const [location, setLocation] = useState("");
    const scrollViewRef = useRef();
    const categoriesScrollRef = useRef();
    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentCategoryIndex, setCurrentCategoryIndex] = useState(0);

    // Largura da tela para definir o tamanho do carrossel
    const screenWidth = Dimensions.get("window").width;

    // Imagens do carrossel
    const images = [
        "https://via.placeholder.com/300x150",
        "https://via.placeholder.com/300x150",
        "https://via.placeholder.com/300x150",
    ];

    // Categorias de imagens redondas
    const categories = [
        { image: "https://via.placeholder.com/80", title: "Motor" },
        { image: "https://via.placeholder.com/80", title: "Freios" },
        { image: "https://via.placeholder.com/80", title: "Pneus" },
        { image: "https://via.placeholder.com/80", title: "Óleo" },
        { image: "https://via.placeholder.com/80", title: "Acessórios" },
        { image: "https://via.placeholder.com/80", title: "Suspensão" },
        { image: "https://via.placeholder.com/80", title: "Faróis" },
        { image: "https://via.placeholder.com/80", title: "Vidros" },
        { image: "https://via.placeholder.com/80", title: "Rodas" },
        { image: "https://via.placeholder.com/80", title: "Bateria" },
    ];

    // Função para alternar automaticamente as imagens do carrossel
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => {
                const nextIndex = (prevIndex + 1) % images.length;
                scrollViewRef.current?.scrollTo({
                    x: nextIndex * screenWidth,
                    animated: true,
                });
                return nextIndex;
            });
        }, 3000); // Troca a cada 3 segundos

        return () => clearInterval(interval);
    }, [screenWidth, images.length]);

    // Função para alternar categorias
    const handleNextCategories = () => {
        const nextCategoryIndex = (currentCategoryIndex + 5) % categories.length;
        categoriesScrollRef.current?.scrollTo({
            x: nextCategoryIndex * 100, // Aproximadamente a largura de cada imagem
            animated: true,
        });
        setCurrentCategoryIndex(nextCategoryIndex);
    };

    return (
        <View style={{ flex: 1 }}>
            {/* Header */}
            <Appbar.Header style={{ backgroundColor: "rgb(139,0,0)" }}>
                <Appbar.Action
                    icon="menu"
                    onPress={() => {
                        // Ação ao pressionar o menu
                    }}
                    color="white" // Ícone de menu em branco
                />
                <Appbar.Content
                    title="GearHead"
                    style={{ alignItems: "center" }}
                    color="white" // Título em branco
                    titleStyle={{ fontSize: 28, fontWeight: "bold" }} // Aumenta o tamanho da fonte e deixa em negrito
                />
                <Appbar.Action
                    icon="bell"
                    onPress={() => {
                        // Ação ao pressionar as notificações
                    }}
                    color="white" // Ícone de sino em branco
                />
            </Appbar.Header>

            {/* Conteúdo rolável */}
            <ScrollView>
                {/* Campo de localização abaixo do título */}
                <View
                    style={{
                        padding: 16,
                        backgroundColor: "rgb(139,0,0)",
                    }}
                >
                    <TextInput
                        label="Escolha sua localização"
                        value={location}
                        onChangeText={(text) => setLocation(text)}
                        mode="outlined"
                        style={{ marginBottom: 20 }}
                    />
                </View>

                {/* Título "Especial para Você" */}
                <View style={{ padding: 16 }}>
                    <Title style={{ fontSize: 24, fontWeight: "bold" }}>
                        Especial para Você
                    </Title>
                </View>

                {/* Carrossel de Imagens */}
                <ScrollView
                    horizontal
                    pagingEnabled
                    showsHorizontalScrollIndicator={false}
                    ref={scrollViewRef}
                    style={{ marginBottom: 20 }}
                >
                    {images.map((image, index) => (
                        <Image
                            key={index}
                            source={{ uri: image }}
                            style={{
                                width: screenWidth, // Cada imagem ocupa a largura total da tela
                                height: 150,
                                borderRadius: 10,
                                marginRight: index === images.length - 1 ? 0 : 10,
                            }}
                        />
                    ))}
                </ScrollView>

                {/* Título "Categorias" */}
                <View style={{ padding: 16 }}>
                    <Title style={{ fontSize: 24, fontWeight: "bold" }}>
                        Categorias
                    </Title>
                </View>

                {/* Categorias com imagens redondas */}
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        ref={categoriesScrollRef}
                    >
                        {categories
                            .slice(currentCategoryIndex, currentCategoryIndex + 5)
                            .map((category, index) => (
                                <View
                                    key={index}
                                    style={{ alignItems: "center", marginHorizontal: 10 }}
                                >
                                    <Image
                                        source={{ uri: category.image }}
                                        style={{
                                            width: 100,
                                            height: 100,
                                            borderRadius: 40, // Para deixar a imagem redonda
                                            marginBottom: 5,
                                        }}
                                    />
                                    <Text>{category.title}</Text>
                                </View>
                            ))}
                    </ScrollView>

                    {/* Seta para rodar mais categorias */}
                    <TouchableOpacity onPress={handleNextCategories}>
                        <Icon name="arrow-forward" size={30} color="black" />
                    </TouchableOpacity>
                </View>

                {/* Título "Serviços ao Cliente" */}
                <View style={{ padding: 16 }}>
                    <Title style={{ fontSize: 24, fontWeight: "bold" }}>
                        Serviços ao Cliente
                    </Title>
                </View>

                {/* Botões de Serviços com mini imagens (3 em cima, 2 em baixo) */}
                <View style={{ flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between", paddingHorizontal: 16 }}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("LoginScreen")}
                        style={{
                            width: "30%",
                            aspectRatio: 1,
                            backgroundColor: "rgb(139,0,0)",
                            alignItems: "center",
                            justifyContent: "center",
                            marginBottom: 10,
                        }}
                    >
                        <Image
                            source={{ uri: "https://via.placeholder.com/50" }}
                            style={{ width: 50, height: 50, marginBottom: 5 }}
                        />
                        <Text style={{ color: "white" }}>Carros na Espera</Text>
                    </TouchableOpacity>


                    <TouchableOpacity
                        onPress={() => navigation.navigate("LoginScreen")}
                        style={{
                            width: "30%",
                            aspectRatio: 1,
                            backgroundColor: "rgb(139,0,0)",
                            alignItems: "center",
                            justifyContent: "center",
                            marginBottom: 10,
                        }}
                    > <Image
                            source={{ uri: "https://via.placeholder.com/50" }}
                            style={{ width: 50, height: 50, marginBottom: 5 }}
                        />
                        <Text style={{ color: "white" }}>Caixa do Dia</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => navigation.navigate("LoginScreen")}
                        style={{
                            width: "30%",
                            aspectRatio: 1,
                            backgroundColor: "rgb(139,0,0)",
                            alignItems: "center",
                            justifyContent: "center",
                            marginBottom: 10,
                        }}
                    > <Image
                            source={{ uri: "https://via.placeholder.com/50" }}
                            style={{ width: 50, height: 50, marginBottom: 5 }}
                        />
                        <Text style={{ color: "white" }}>Caixa do Dia</Text>
                    </TouchableOpacity>

                    {/* Adicione outros botões de serviço aqui */}
                </View>

                {/* Título "Recomendação para Você" com Ver tudo */}
                <View style={{ padding: 16, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Title style={{ fontSize: 24, fontWeight: 'bold' }}>Recomendação para Você</Title>
                    <TouchableOpacity onPress={() => {/* Ação de Ver tudo */}}>
                        <Text style={{ color: 'rgb(139,0,0)', fontSize: 16 }}>Ver tudo</Text>
                    </TouchableOpacity>
                </View>

                {/* Cards de Recomendação */}
                <View style={{ flexDirection: "row", justifyContent: "space-between", paddingHorizontal: 16 }}>
                    {/* Card 1 */}
                    <TouchableOpacity
                        style={{
                            width: "48%",
                            backgroundColor: "#fff",
                            borderRadius: 10,
                            padding: 16,
                            shadowColor: "#000",
                            shadowOffset: { width: 0, height: 2 },
                            shadowOpacity: 0.2,
                            shadowRadius: 2,
                            elevation: 3,
                        }}
                    >
                        <Text style={{ fontSize: 18, fontWeight: "bold" }}>Mecânica ABC</Text>
                        <Text>⭐ 4.5</Text>
                        <Text>Aberto: 08:00 - 18:00</Text>
                        <Text>3 km de distância</Text>
                    </TouchableOpacity>

                    {/* Card 2 */}
                    <TouchableOpacity
                        style={{
                            width: "48%",
                            backgroundColor: "#fff",
                            borderRadius: 10,
                            padding: 16,
                            shadowColor: "#000",
                            shadowOffset: { width: 0, height: 2 },
                            shadowOpacity: 0.2,
                            shadowRadius: 2,
                            elevation: 3,
                        }}
                    >
                        <Text style={{ fontSize: 18, fontWeight: "bold" }}>Mecânica XYZ</Text>
                        <Text>⭐ 4.0</Text>
                        <Text>Aberto: 09:00 - 19:00</Text>
                        <Text>5 km de distância</Text>
                    </TouchableOpacity>
                </View>

            </ScrollView>
        </View>
    );
}
