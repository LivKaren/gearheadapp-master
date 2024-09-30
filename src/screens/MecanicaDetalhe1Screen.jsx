import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import { Title, Button, Checkbox } from "react-native-paper";
import { useState } from "react";

export default function MecanicaDetalhe1Screen({ route, navigation }) {
  const { mechanic } = route.params;

  // Lista de serviços da mecânica
  const services = [
    { id: 1, image: "https://via.placeholder.com/50", title: "Troca de óleo", price: "R$ 150,00" },
    { id: 2, image: "https://via.placeholder.com/50", title: "Alinhamento", price: "R$ 120,00" },
    { id: 3, image: "https://via.placeholder.com/50", title: "Balanceamento", price: "R$ 80,00" },
    { id: 4, image: "https://via.placeholder.com/50", title: "Revisão geral", price: "R$ 300,00" },
    { id: 5, image: "https://via.placeholder.com/50", title: "Freios", price: "R$ 250,00" },
    { id: 6, image: "https://via.placeholder.com/50", title: "Suspensão", price: "R$ 400,00" },
    { id: 7, image: "https://via.placeholder.com/50", title: "Pintura", price: "R$ 900,00" },
    { id: 8, image: "https://via.placeholder.com/50", title: "Troca de pneu", price: "R$ 200,00" },
    { id: 9, image: "https://via.placeholder.com/50", title: "Bateria", price: "R$ 350,00" },
    { id: 10, image: "https://via.placeholder.com/50", title: "Limpeza de motor", price: "R$ 180,00" },
  ];

  const [selectedServices, setSelectedServices] = useState([]);

  // Função para marcar/desmarcar serviços
  const toggleService = (serviceId) => {
    if (selectedServices.includes(serviceId)) {
      setSelectedServices(selectedServices.filter((id) => id !== serviceId));
    } else {
      setSelectedServices([...selectedServices, serviceId]);
    }
  };

  return (
    <ScrollView style={{ padding: 16 }}>
      <Image
        source={{ uri: mechanic.image }}
        style={{ width: "100%", height: 200, borderRadius: 10, marginBottom: 16 }}
      />
      <Title>{mechanic.name}</Title>
      <Text>Telefone: {mechanic.phone}</Text>
      <Text>Localização: {mechanic.location}</Text>
      <Text>Horário: {mechanic.hours}</Text>
      <Text>Avaliação: ⭐ {mechanic.rating}</Text>

      <View style={{ marginVertical: 20 }}>
        <Title>Sobre</Title>
        <Text>{mechanic.description}</Text>
      </View>

      <View>
        <Title>Serviços</Title>
        <View style={{ flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between" }}>
          {services.map((service) => (
            <TouchableOpacity
              key={service.id}
              onPress={() => toggleService(service.id)}
              style={{
                width: "48%",
                backgroundColor: "#fff",
                borderRadius: 10,
                padding: 10,
                marginBottom: 16,
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.2,
                shadowRadius: 2,
                elevation: 3,
                alignItems: "center",
              }}
            >
              <Image
                source={{ uri: service.image }}
                style={{ width: 50, height: 50, marginBottom: 5 }}
              />
              <Text>{service.title}</Text>
              <Text style={{ fontWeight: "bold" }}>{service.price}</Text>
              <Checkbox
                status={selectedServices.includes(service.id) ? "checked" : "unchecked"}
                onPress={() => toggleService(service.id)}
              />
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* Botão "Continuar" que aparece apenas se houver serviços selecionados */}
      {selectedServices.length > 0 && (
        <Button
          mode="contained"
          onPress={() =>
            navigation.navigate("SummaryScreen", {
              selectedServices: services.filter((service) =>
                selectedServices.includes(service.id)
              ),
            })
          }
          style={{ marginTop: 20 }}
        >
          Continuar
        </Button>
      )}
    </ScrollView>
  );
}
