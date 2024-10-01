import { Button, Surface, Appbar, TextInput, Title } from "react-native-paper";
import { Button, Surface, Appbar, TextInput, Title } from "react-native-paper";
import { styles } from "../config/styles";
import { View, ScrollView, Image, Dimensions, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { useState, useRef, useEffect } from "react";
import { View, ScrollView, Image, Dimensions, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { useState, useRef, useEffect } from "react";

export default function MenuScreen({ navigation }) {
    const [location, setLocation] = useState("");
    const scrollViewRef = useRef();
    const categoriesScrollRef = useRef();
    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentCategoryIndex, setCurrentCategoryIndex] = useState(0);

    const screenWidth = Dimensions.get("window").width;

    const images = [
        "https://via.placeholder.com/300x150",
        "https://via.placeholder.com/300x150",
        "https://via.placeholder.com/300x150",
    ];

    const categories = [
        { image: "https://png.pngtree.com/png-clipart/20231016/original/pngtree-engine-car-turbo-png-image_13325602.png", title: "Motor" },
        { image: "https://freiosbreque.com.br/wp-content/uploads/2021/01/troca-disco-freios-340x340.png", title: "Freios" },
        { image: "https://dellavia.vteximg.com.br/arquivos/ids/161931/DESTINATION-LE3.png?v=638455026151500000", title: "Pneus" },
        { image: "https://www.pngall.com/wp-content/uploads/2017/03/Oil-Free-PNG-Image.png", title: "Óleo" },
        { image: "https://connectparts.vtexassets.com/assets/vtex.file-manager-graphql/images/ab8b0d5b-3b2d-498f-b53a-2e0b2c843623___4da964effe060c81d1700da6528d10db.png", title: "Acessórios" },
        { image: "https://griffepneus.com.br/website2021/wp-content/uploads/2021/03/Barulho-na-suspens%C3%A3o-Saiba-como-identificar-e-o-que-fazer-300x229.png", title: "Suspensão" },
        { image: "https://static.vecteezy.com/system/resources/previews/021/217/685/non_2x/headlight-for-cars-trucks-and-buses-png.png", title: "Faróis" },
        { image: "https://glassback.pt/wp-content/uploads/2022/07/3.png", title: "Vidros" },
        { image: "https://www.tecfil.com.br/wp-content/uploads/2019/12/img-filtro-de-ar.png", title: "Filtros de ar" },
        { image: "https://lojaodasbaterias.com/wp-content/uploads/2021/09/Bateria-Moto-1024x834.png", title: "Bateria" },
    ];

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
        }, 3000);

        return () => clearInterval(interval);
    }, [screenWidth, images.length]);

    const handleNextCategories = () => {
        const nextCategoryIndex = (currentCategoryIndex + 5) % categories.length;
        categoriesScrollRef.current?.scrollTo({
            x: nextCategoryIndex * 100,
            animated: true,
        });
        setCurrentCategoryIndex(nextCategoryIndex);
    };

    return (
        <View style={{ flex: 1 }}>
            <Appbar.Header style={{ backgroundColor: "rgb(139,0,0)" }}>
                <Appbar.Action
                    icon="menu"
                    onPress={() => {
                        // Ação ao pressionar o menu
                    }}
                    color="white"
                />
                <Appbar.Content
                    title="GearHead"
                    style={{ alignItems: "center" }}
                    color="white"
                    titleStyle={{ fontSize: 28, fontWeight: "bold" }}
                />
                <Appbar.Action
                    icon="bell"
                    onPress={() => {
                        // Ação ao pressionar as notificações
                    }}
                    color="white"
                />
            </Appbar.Header>

            <ScrollView>
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

                <View style={{ padding: 16 }}>
                    <Title style={{ fontSize: 24, fontWeight: "bold" }}>
                        Especial para Você
                    </Title>
                </View>

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
                                width: screenWidth,
                                height: 150,
                                borderRadius: 10,
                                marginRight: index === images.length - 1 ? 0 : 10,
                            }}
                        />
                    ))}
                </ScrollView>

                <View style={{ padding: 16 }}>
                    <Title style={{ fontSize: 24, fontWeight: "bold" }}>
                        Categorias
                    </Title>
                </View>

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
                                            borderRadius: 40,
                                            marginBottom: 5,
                                        }}
                                    />
                                    <Text>{category.title}</Text>
                                </View>
                            ))}
                    </ScrollView>

                    <TouchableOpacity onPress={handleNextCategories}>
                        <Icon name="arrow-forward" size={30} color="black" />
                    </TouchableOpacity>
                </View>

                <View style={{ padding: 16 }}>
                    <Title style={{ fontSize: 24, fontWeight: "bold" }}>
                        Serviços ao Cliente
                    </Title>
                </View>

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
                    >
                        <Image
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
                    >
                        <Image
                            source={{ uri: "https://via.placeholder.com/50" }}
                            style={{ width: 50, height: 50, marginBottom: 5 }}
                        />
                        <Text style={{ color: "white" }}>Caixa do Dia</Text>
                    </TouchableOpacity>
                </View>

                <View style={{ padding: 16, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Title style={{ fontSize: 24, fontWeight: 'bold' }}>Recomendação para Você</Title>
                    <TouchableOpacity onPress={() => {/* Ação de Ver tudo */}}>
                        <Text style={{ color: 'rgb(139,0,0)', fontSize: 16 }}>Ver tudo</Text>
                    </TouchableOpacity>
                </View>

                {/* Cards de Recomendação */}
                <View style={{ flexDirection: "column", paddingHorizontal: 16 }}>
                    {/* Card 1 */}
                    <TouchableOpacity
                        style={{
                            width: "100%",
                            backgroundColor: "#fff",
                            borderRadius: 10,
                            padding: 16,
                            marginBottom: 16,
                            shadowColor: "#000",
                            shadowOffset: { width: 0, height: 2 },
                            shadowOpacity: 0.2,
                            shadowRadius: 2,
                            elevation: 3,
                        }}
                    >
                        <Image
                            source={{ uri: "https://via.placeholder.com/150" }}
                            style={{ width: "100%", height: 120, borderRadius: 10, marginBottom: 10 }}
                        />
                        <Text style={{ fontSize: 18, fontWeight: "bold" }}>Mecânica ABC</Text>
                        <Text>⭐ 4.5</Text>
                        <Text>Aberto: 08:00 - 18:00</Text>
                        <Text>3 km de distância</Text>
                        <Button
  mode="contained"
  onPress={() =>
    navigation.navigate("MecanicaDetalhe1Screen", {
      mechanic: {
        image: "https://via.placeholder.com/150", // Substitua pela URL real da imagem
        name: "Mecânica ABC",
        phone: "(11) 99999-9999",
        location: "Rua das Oficinas, 123",
        hours: "08:00 - 18:00",
        rating: 4.5,
        description: "Somos especialistas em serviços de manutenção automotiva...",
      },
    })
  }
  style={{ marginTop: 10, alignSelf: "flex-end" }}
>
  Agendar
</Button>
                    </TouchableOpacity>

                    {/* Card 2 */}
                    <TouchableOpacity
                        style={{
                            width: "100%",
                            backgroundColor: "#fff",
                            borderRadius: 10,
                            padding: 16,
                            marginBottom: 16,
                            shadowColor: "#000",
                            shadowOffset: { width: 0, height: 2 },
                            shadowOpacity: 0.2,
                            shadowRadius: 2,
                            elevation: 3,
                        }}
                    >
                        <Image
                            source={{ uri: "https://via.placeholder.com/150" }}
                            style={{ width: "100%", height: 120, borderRadius: 10, marginBottom: 10 }}
                        />
                        <Text style={{ fontSize: 18, fontWeight: "bold" }}>Mecânica XYZ</Text>
                        <Text>⭐ 4.0</Text>
                        <Text>Aberto: 09:00 - 19:00</Text>
                        <Text>5 km de distância</Text>
                        <Button mode="contained" onPress={() => {/* Ação de agendar */}} style={{ marginTop: 10, alignSelf: "flex-end" }}>
                            Agendar
                        </Button>
                    </TouchableOpacity>

                    {/* Card 3 */}
                    <TouchableOpacity
                        style={{
                            width: "100%",
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
                        <Image
                            source={{ uri: "https://via.placeholder.com/150" }}
                            style={{ width: "100%", height: 120, borderRadius: 10, marginBottom: 10 }}
                        />
                        <Text style={{ fontSize: 18, fontWeight: "bold" }}>Mecânica 123</Text>
                        <Text>⭐ 4.7</Text>
                        <Text>Aberto: 07:30 - 18:30</Text>
                        <Text>2 km de distância</Text>
                        <Button mode="contained" onPress={() => {/* Ação de agendar */}} style={{ marginTop: 10, alignSelf: "flex-end" }}>
                            Agendar
                        </Button>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );
}


