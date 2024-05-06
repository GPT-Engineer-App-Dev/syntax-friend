import { Container, Text, VStack, Box } from "@chakra-ui/react";
import { useState } from "react";
import { Controlled as CodeMirror } from "react-codemirror2";
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/javascript/javascript.js';
import 'codemirror/mode/xml/xml.js';
import 'codemirror/mode/css/css.js';

const Index = () => {
  const [code, setCode] = useState('// Start coding...');

  return (
    <Container maxW="container.xl" p={5}>
      <VStack spacing={4} align="stretch">
        <Text fontSize="2xl" mb={4}>Simple Code Editor</Text>
        <Box border="1px" borderColor="gray.200" p={2}>
          <CodeMirror
            value={code}
            options={{
              mode: 'javascript',
              theme: 'material',
              lineNumbers: true,
              lineWrapping: true,
              autoCloseTags: true,
              autoCloseBrackets: true,
              matchBrackets: true,
            }}
            onBeforeChange={(editor, data, value) => {
              setCode(value);
            }}
          />
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;