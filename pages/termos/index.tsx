import React from "react";
import { Text, Box, VStack } from "@chakra-ui/react";

import { Header } from "../../src/components/header/header";

const Termos = () => {
  return (
    <VStack w="100%" p={5} justifyContent="center" bg="gray.600" color="white">
      <Header />
      <Text p={2} fontSize="2rem">
        Termos
      </Text>
      <Box maxW={600} bg="gray.800" color="white" p={10}>
        <Text p={5} textAlign="justify">
          TERMOS DE RESPONSABILIDADE E CONDIÇÕES DE USO
        </Text>

        <Text p={5} textAlign="justify">
          Estes Termos de Responsabilidade e Condições de Uso ("Termos") regem o
          acesso e a utilização do aplicativo web oferecido por 1000freelas,
          doravante referido como "nós" ou "nosso". Ao acessar e usar nosso
          aplicativo, você concorda expressamente com estes Termos.
          Certifique-se de ler cuidadosamente todas as disposições antes de
          prosseguir.
        </Text>

        <Text p={5} textAlign="justify">
          1. Proteção de Dados
        </Text>

        <Text p={5} textAlign="justify">
          1.1. Ao utilizar nosso aplicativo, você consente e concorda com a
          coleta, processamento e armazenamento de seus dados pessoais, em
          conformidade com a legislação brasileira de proteção de dados (Lei
          Geral de Proteção de Dados - LGPD).
        </Text>

        <Text p={5} textAlign="justify">
          1.2. Garantimos que seus dados serão tratados de forma segura e
          confidencial, sendo utilizados apenas para os fins para os quais foram
          coletados, como descrito em nossa Política de Privacidade.
        </Text>

        <Text p={5} textAlign="justify">
          2. Comunicações por E-mail e Telefone
        </Text>

        <Text p={5} textAlign="justify">
          2.1. Ao se cadastrar em nosso aplicativo, você consente em receber
          comunicações por e-mail e telefone, incluindo ofertas, informações e
          atualizações sobre nossos produtos, serviços e novidades relacionadas.
        </Text>

        <Text p={5} textAlign="justify">
          2.2. Nosso compromisso é utilizar esses meios de comunicação de forma
          ética e responsável, respeitando sempre a sua privacidade. Você pode
          optar por não receber essas comunicações a qualquer momento, seguindo
          as instruções de cancelamento fornecidas em nossas mensagens ou
          entrando em contato conosco diretamente.
        </Text>

        <Text p={5} textAlign="justify">
          3. Responsabilidades do Usuário
        </Text>

        <Text p={5} textAlign="justify">
          3.1. Você é responsável por manter a confidencialidade de suas
          informações de login e por todas as atividades que ocorrerem em sua
          conta.
        </Text>

        <Text p={5} textAlign="justify">
          3.2. Concorda em utilizar nosso aplicativo apenas para fins legais e
          de acordo com estes Termos, abster-se de realizar atividades que
          possam comprometer a segurança ou a integridade do aplicativo.
        </Text>

        <Text p={5} textAlign="justify">
          4. Modificações nos Termos
        </Text>

        <Text p={5} textAlign="justify">
          4.1. Reservamo-nos o direito de modificar estes Termos a qualquer
          momento, notificando-o por meio do aplicativo ou outros meios
          adequados.
        </Text>

        <Text p={5} textAlign="justify">
          4.2. O uso contínuo do aplicativo após tais modificações constituirá
          aceitação dos Termos atualizados.
        </Text>

        <Text p={5} textAlign="justify">
          Ao concordar com estes Termos, você reconhece ter lido, compreendido e
          aceito todas as disposições aqui estabelecidas. Em caso de dúvidas,
          entre em contato conosco através dos canais fornecidos no aplicativo.
        </Text>
      </Box>
    </VStack>
  );
};

export default Termos;
