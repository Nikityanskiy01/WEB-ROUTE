import { Document, Page, Text, View, Image, StyleSheet } from "@react-pdf/renderer";
import { FC } from "react";
import { IPdfData } from "../../interfaces/Ipdfdata";

export const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "#E4E4E4",
    padding: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 20,
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
    fontSize: 12,  
  },
  label: {
    fontSize: 14,
    fontWeight: 'bold',
  }
});

const MyDocument: FC<IPdfData> = ({ name, email, age, address, picture }) => {
  return (
    <Document>
      <Page size="A4" style={styles.page} wrap>
        <View style={styles.header}>
          {picture && picture[0] && (
            <Image style={styles.image} src={URL.createObjectURL(picture[0])} />
          )}
          <View>
            <Text style={styles.label}>Name:</Text>
            <Text>{name}</Text>
          </View>
        </View>
        <View style={styles.section}>
          <Text style={styles.label}>Email:</Text>
          <Text>{email}</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.label}>Age:</Text>
          <Text>{age}</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.label}>Address:</Text>
          <Text>{address}</Text>
        </View>
      </Page>
    </Document>
  );
};

export default MyDocument;
