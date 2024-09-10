import { View } from "react-native";
import {
  Button,
  Surface,
  Text,
  TextInput,
  Modal,
  Portal,
} from "react-native-paper";
import { useState } from "react";
import { styles } from "../config/styles";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../config/firebase";
import { collection, doc, setDoc } from "firebase/firestore";

export default function cadastrarCarro({ navigation }) {
  const [placa, setPlaca] = useState("");
  const [nome, setNome] = useState("");
  const [celular, setCelular] = useState("");
  const [CPFCNPJ, setCPFCNPJ] = useState("");
  const [categoria, setCategoria] = useState("");
  const [carro, setCarro] = useState("");
  const [cor, setCor] = useState("");

  const [erro, setErro] = useState({
    placa: false,
    nome: false,
    celular: false,
    CPFCNPJ: false,
    carro: false,
  });

  const [visible, setVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  function registroCarro() {
    console.log("Fazer Registro");

    if (placa === "") {
      setErro({ ...erro, placa: true });
      setErrorMessage("a placa é obrigatória.");
      showModal();
      return;
    }
    setErro({ ...erro, placa: false });

    if (nome === "") {
      setErro({ ...erro, nome: true });
      setErrorMessage("nome é obrigatório.");
      showModal();
      return;
    }
    setErro({ ...erro, nome: false });

    if (celular === "") {
      setErro({ ...erro, celular: true });
      setErrorMessage("celular é obrigatório.");
      showModal();
      return;
    }
    setErro({ ...erro, celular: false });

    if (CPFCNPJ === "") {
      setErro({ ...erro, repetirSenha: true });
      setErrorMessage("CPF/CNPJ senha é obrigatório.");
      showModal();
      return;
    }
    setErro({ ...erro, CPFCNPJ: false });

    if (carro === "") {
      setErro({ ...erro, cep: true });
      setErrorMessage("Carro é obrigatório.");
      showModal();
      return;
    }
    setErro({ ...erro, Carro: false });


    cadastrarNoFirebase();
  }

  /**
   * Cadastra o usuário no Firebase Authentication e salva os dados no Firestore
   *
   */
  async function cadastrarNoFirebase() {
    try {
      // Cria o usuário no Firebase Authentication
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        senha
      );
      // Assim que ele conseguiu criar o usuário, ele retorna o usuário
      const user = userCredential.user;

      console.log("Usuário cadastrado", user);

      // vou começar o processo de inserir os dados do usuário em uma coleção
      // no Firestore

      // pego a referência da coleção
      // como se fosse um SELECT usuarios
      // o primeiro parâmetro é a referência do banco de dados
      // quem é o DB
      const collectionRef = collection(db, "usuarios");

      // agora eu vou fazer a inserção dos dados
      // o primeiro parâmetro de setDoc é doc
      // dentro da função doc eu passo a referência da coleção
      // o terceiro é os dados que eu quero inserir
      await setDoc(
        doc(
          collectionRef, // referência da coleção "tabela"
          user.uid // id do documento "como se fosse uma chave primária"
        ),
        {
          nome: nome,
          email: email,
          logradouro: logradouro,
          cep: cep,
          cidade: cidade,
          estado: estado,
        }
      );

      // esperar setDoc terminar para redirecionar
      navigation.navigate("LoginScreen");
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        setErrorMessage("Email já está cadastrado.");
      } else {
        setErrorMessage("Erro ao cadastrar usuário: " + error.message);
      }
      showModal();
    }
  }


  return (
    <Surface style={styles.container}>
      <View style={styles.innerContainer}>
        {/* Modal */}
        <Portal>
          <Modal
            visible={visible}
            onDismiss={hideModal}
            contentContainerStyle={{ backgroundColor: "white", padding: 20 }}
          >
            <Text>{errorMessage}</Text>
            <Button onPress={hideModal}>Fechar</Button>
          </Modal>
        </Portal>
        {/* FIM Modal */}
        <Text variant="headlineSmall">Faça seu Registro</Text>
        <TextInput
          placeholder="Digite a placa do seu carro"
          value={placa}
          onChangeText={setPlaca}
          style={styles.input}
          error={erro.placa}
        />
        <TextInput
          placeholder="Digite seu nome"
          value={nome}
          onChangeText={setNome}
          style={styles.input}
          error={erro.nome}
        />
        <TextInput
          placeholder="Digite seu celular"
          value={celular}
          onChangeText={setCelular}
          secureTextEntry
          style={styles.input}
          error={erro.celular}
        />

<TextInput
          placeholder="Digite seu CNPJ ou CPF"
          value={CPFCNPJ}
          onChangeText={setCPFCNPJ}
          secureTextEntry
          style={styles.input}
          error={erro.CPFCNPJ}
        />

        <Button onPress={registroCarro} mode="outlined">
          Registrar
        </Button>
      </View>
    </Surface>
  );
}
