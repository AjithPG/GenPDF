import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";

// Create Document Component
export const MyDocument = ({ data }) => {
  return (
    <Document>
      <Page size="A4">
        <View>
          <Text>{data}</Text>
        </View>
      </Page>
    </Document>
  );
};

export default MyDocument;
